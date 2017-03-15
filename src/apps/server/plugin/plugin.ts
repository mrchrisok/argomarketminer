import * as _util from "util";
import * as _async from "async";
import * as _routes from "../routes";
// import * as _flic from "flic";
const _flic = require("flic");

// declarations
const nodeName = "master",
    plugins = {};

const masterNode = _flic.createNode({
    id: nodeName,
    connect_callback: err => {
        if (!err) {
            _util.log("Argo streaming node online");
        } else {
            _util.log(err);
        }
    }
});

// const masterNode = _flic.createNode(
//     nodeName,
//     null,
//     (err) => {
//         if (!err) {
//             _util.log("Argo streaming node online");
//         } else {
//             _util.log(err);
//         }
//     }
// );

// init
masterNode.on("argo.register", (pluginName, done) => {
    plugins[pluginName] = true;
    _util.log(_util.format("Argo plugin registered", pluginName));
    done(null, `http://localhost:${_routes.config.port}`);
    refreshPlugins();
});

masterNode.on("argo.unregister", (pluginName, done) => {
    delete plugins[pluginName];
    _util.log(_util.format("Argo plugin unregistered", pluginName));
    done();
    refreshPlugins();
});

masterNode.on("error", err => {
    _util.log(err);
});

// public
export function shoutStreaming(data): void {
    masterNode.shout("argo.streaming", data);
}

export function getPlugins(callback): void {
    const pluginNames = Object.keys(plugins),
        tellSeries = {};

    pluginNames.forEach(name => {
        tellSeries[name] = done => {
            const event = `${name}:argo.status`;

            masterNode.tell(event, name, (err, status) => {
                if (!err) {
                    done(null, status);
                }
            });
        };
    });

    _async.series(tellSeries, (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(err, res);
    });
}

export function engagePlugins(plugs, config): void {
    const pluginNames = Object.keys(plugs),
        tellSeries = {};

    pluginNames.forEach(name => {
        tellSeries[name] = done => {
            if (plugs[name]) {
                enable(name, config, done);
            } else {
                disable(name, done);
            }
        };
    });

    _async.series(tellSeries);
}

// private
function enable(name, config, callback): void {
    const event = `${name}:argo.enable`;

    masterNode.tell(event, name, config, err => {
        if (err) {
            return callback(err);
        }
        return callback();
    });
}

function disable(name: string, callback): void {
    const event = `${name}:argo.disable`;

    masterNode.tell(event, name, err => {
        if (err) {
            return callback(err);
        }
        return callback();
    });
}

function refreshPlugins(): void {
    _routes.stream.sendMessage(JSON.stringify({ refreshPlugins: true }));
}
