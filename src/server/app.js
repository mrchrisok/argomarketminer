"use strict";
var express = require("express");
var util = require("util");
var routes = require("./routes");
var plugin = require("./plugin");
var app = express(), port = routes.config.port, staticFiles = express.static, apiUrl = routes.config.apiUrl;
process.on("uncaughtException", function (err) {
    util.log(err);
});
app.use(staticFiles(routes.config.staticFiles));
app.use("/node_modules", staticFiles(routes.config.vendorFiles));
app.use(apiUrl, routes.apis);
app.listen(port, function () {
    util.log("ArgoMarketMiner listening on http://localhost:" + port);
    util.log("ArgoMarketMiner listening apis on http://localhost:" + port + apiUrl);
}).on("upgrade", function (request, socket, body) {
    routes.stream.run(request, socket, body);
    util.log("ArgoMarketMiner streaming prices and events on ws://localhost:" +
        ("" + port + routes.config.streamUrl));
});
plugin.startBridge();
//# sourceMappingURL=app.js.map