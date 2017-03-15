import * as _express from "express";
import * as _bodyParser from "body-parser";
import * as _config from "./config";
import * as _stream from "./stream";
import * as _api from "./api";

// public
export const config = _config;
export const stream = _stream;
export const apis = router();

// private
function router(): _express.Router {

   const expressRouter: _express.Router = _express.Router(), // eslint-disable-line new-cap
      jsonParser: _express.RequestHandler = _bodyParser.json();

   expressRouter.post("/startstream", jsonParser, _api.startStream);
   expressRouter.post("/accounts", jsonParser, _api.getAccounts);
   expressRouter.post("/account", jsonParser, _api.getAccount);
   expressRouter.post("/instruments", jsonParser, _api.getInstruments);
   expressRouter.post("/candles", jsonParser, _api.getCandles);
   expressRouter.post("/trades", jsonParser, _api.getTrades);
   expressRouter.post("/orders", jsonParser, _api.getOrders);
   expressRouter.post("/positions", jsonParser, _api.getPositions);
   expressRouter.post("/transactions", jsonParser, _api.getTransactions);
   expressRouter.post("/calendar", jsonParser, _api.getCalendar);
   expressRouter.post("/orderbook", jsonParser, _api.getOrderbook);
   expressRouter.post("/order", jsonParser, _api.putOrder);
   expressRouter.post("/closeorder", jsonParser, _api.closeOrder);
   expressRouter.post("/closetrade", jsonParser, _api.closeTrade);
   expressRouter.post("/plugins", jsonParser, _api.getPlugins);
   expressRouter.post("/engageplugins", jsonParser, _api.engagePlugins);

   return expressRouter;
}

