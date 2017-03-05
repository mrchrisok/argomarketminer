/// <reference path="../../typings/index.d.ts" />

import * as express from "express";
import * as util from "util";
import * as routes from "./routes";
import * as plugin from "./plugin";

const server: express.Express = express(),
   port: number = routes.config.port,
   staticFiles: any = express.static,
   apiUrl: string = routes.config.apiUrl;

process.on("uncaughtException", err => {
   util.log(err);
});

server.use(staticFiles(routes.config.staticFiles));
server.use("/node_modules", staticFiles(routes.config.vendorFiles));
server.use(apiUrl, routes.apis);

server.listen(port, () => {
   util.log(`Argo listening on http://localhost:${port}`);
   util.log(`Argo listening apis on http://localhost:${port}${apiUrl}`);
}).on("upgrade", (request, socket, body) => {
   routes.stream.run(request, socket, body);

   util.log("Argo streaming prices and events on ws://localhost:" +
      `${port}${routes.config.streamUrl}`);
});

// start algos
plugin.startBridge();

