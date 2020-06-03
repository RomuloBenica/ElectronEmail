const electron = require('electron')

const { app, BrowserWindow } = require('electron')

function createWindow () {

  let win = new BrowserWindow({
    width: 320,
    height: 350,
    webPreferences: {
      nodeIntegration: true
    },
    
  })

 win.loadFile('index.html')
 
}

function configurar(){
  let getway = document.getElementById('getway').value;
  var primeiroEmail = document.getElementById("email_1").value;
  var segundoEmail = document.getElementById("email_2").value;
  let status = document.getElementById("status");

  if(getway != "" || primeiroEmail != "" || segundoEmail != "" ){
    status.innerHTML = "Configuração enviada:";
  }else {
    status.innerHTML = "Erro nas informacoes Digitadas";
  }

} 


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  