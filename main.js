const electron = require('electron');
const ipc = require('electron').ipcMain;
const nativeImage = require('electron').nativeImage;

const image = nativeImage.createEmpty();

const { app, BrowserWindow } = require('electron')

function createWindow () {
  
  let win = new BrowserWindow({
    autoHideMenuBar: false,
    width: 350,
    height: 470,
    webPreferences: {
      nodeIntegration: true
    },
  
  });

win.loadURL(`file://${__dirname}/index.html`);

 win.on("close", () => {
   win.webContents.send("stop-server");
 })

 win.on("closed", () => {
   win = null;
 })
}

app.on("ready", createWindow);

app.on("browser-window-created", function(e, window){
  window.setMenu(null);
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}) 

app.on("activate", function(){
  if(win === null){
    createWindow();
  }
})

ipc.on('update-notify-value' , function (event, arg){
  win.webContents.send('targetPriceVal', arg)
});
  