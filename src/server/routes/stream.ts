import * as request from "request";
import * as config from "./config";
import * as plugin from "../plugin/plugin";

const WebSocket = require("faye-websocket");

// declarations
const _initialSnapshots: string[] = [];

let _pricesStreaming: request.Request,
    _eventsStreaming: request.Request,
    _ws: WebSocket;

// public
export function start(options, callback): void {
    const environment = options && options.environment || config.environment,
        accessToken = options && options.accessToken || config.accessToken,
        accountId = options && options.accountId || config.accountId,
        instruments = options && options.instruments || config.instruments,
        stream = config.getUrl(environment, "stream"),
        pricesUrl = `${stream}/v3/accounts/${accountId}/pricing/stream`,
        eventsUrl = `${stream}/v3/accounts/${accountId}/transactions/stream`,
        authHeader = {
            Authorization: `Bearer ${accessToken}`
        };

    if (_pricesStreaming && _eventsStreaming) {
        _pricesStreaming.abort();
        _eventsStreaming.abort();
    }

    _pricesStreaming = request({
        url: pricesUrl,
        qs: {
            instruments: instruments.join(",")
        },
        headers: authHeader
    }).on("response", () => {
        _eventsStreaming = request({
            url: eventsUrl,
            headers: authHeader
        }).on("response", () => {
            callback();
        }).on("data", processChunk);
    }).on("data", processChunk);
}

export function run(req, socket, body): void {
    const url: string = req.url,
        streamUrl = config.streamUrl;

    if (url === streamUrl && WebSocket.isWebSocket(req)) {
        _ws = new WebSocket(req, socket, body);
    }
}

export function sendMessage(message): void {
    if (_ws && message) {
        _ws.send(message);
    }
}

// private
function processChunk(chunk): void {
    // oco
    // need to filter out heartbeats
    // write transactions to the db
    // how do i revive an interrupted stream?

    const data: string = chunk.toString();

    if (_ws) {
        if (_initialSnapshots.length > 0) {
            _initialSnapshots.forEach(() => {
                _ws.send(_initialSnapshots.pop());
            });
        }
        _ws.send(data);
        plugin.shoutStreaming(data);
    } else {
        _initialSnapshots.push(data);
    }
}
