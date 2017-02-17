"use strict";

import * as express from 'express';
import * as util from 'util';
import * as routes from './routes';
import * as plugin from './plugin';

const app: express.Express = express(),
   port: number = routes.config.port,
   staticFiles: any = express.static,
   apiUrl: string = routes.config.apiUrl;

process.on("uncaughtException", err => {
    util.log(err);
});

app.use(staticFiles(routes.config.staticFiles));
app.use("/node_modules", staticFiles(routes.config.vendorFiles));
app.use(apiUrl, routes.apis);

app.listen(port, () => {
    util.log(`ArgoMarketMiner listening on http://localhost:${port}`);
    util.log(`ArgoMarketMiner listening apis on http://localhost:${port}${apiUrl}`);
}).on("upgrade", (request, socket, body) => {
    routes.stream.run(request, socket, body);

    util.log("ArgoMarketMiner streaming prices and events on ws://localhost:" +
        `${port}${routes.config.streamUrl}`);
});

plugin.startBridge();
