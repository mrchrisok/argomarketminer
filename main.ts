import * as cluster from "cluster";
import * as os from "os";
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

let workerIds: string[] = [];
if (cluster.isMaster) {
   const cpuCount = os.cpus().length;
   for (let i: number = 0; i < cpuCount; i++) {
      workerIds.push(cluster.fork().id); 
   }
   cluster.on("exit", worker => {
      console.log(`Worker ${worker.id} died.`);
      cluster.fork();
   })
}
else if (cluster.worker.id === workerIds[0]) {
   require("./src/apps/server/app");
} else if (cluster.worker.id === workerIds[1]) {
   require("./src/apps/algorithm/app");
}


// app.on("ready", createWindow);
