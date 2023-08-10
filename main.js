const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 400,
        resizable: false, maximizable: false,
        //frame: false, 
        autoHideMenuBar: true,
        icon: './muscle.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
