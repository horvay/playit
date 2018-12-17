import { app, BrowserWindow } from "electron";

declare var __dirname: string;
let mainWindow: Electron.BrowserWindow;

function onReady() {
    mainWindow = new BrowserWindow({
        width: 1070,
        height: 780,
        darkTheme: true,
        frame: false,
    });

    const fileName = `file://${__dirname}/index.html`;
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadURL(fileName);
    mainWindow.on("close", () => app.quit());
}

app.on("ready", () => onReady());
app.on("window-all-closed", () => app.quit());

// tslint:disable-next-line:no-console
console.log(`Electron Version ${app.getVersion()}`);
