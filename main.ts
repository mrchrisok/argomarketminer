
// const electron = require("electron");
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

// let mainWindow;

// function createWindow() {
//     mainWindow = new BrowserWindow({
//         frame: false,
//         height: 800,
//         icon: "src/client/img/favicon.ico",
//         width: 1450,
//         webPreferences: {
//             nodeIntegration: false
//         }
//     });

//     mainWindow.loadURL("http://localhost:8000");

//     mainWindow.on("closed", () => {
//         mainWindow = null;
//     });
// }

// start express server
require("./src/apps/server/app");

// start algorithms
require("./src/apps/algorithm/app");

// app.on("ready", createWindow);
