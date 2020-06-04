const electron = require('electron');
const fs = require('fs');

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

  fs.writeFile('./getway.txt', ''+getway,{enconding:'utf-8',flag: 'a'}, function (err) {
    if (err) throw err;
    status.innerHTML = "Configuração enviada com sucesso!!";
  });
  fs.writeFile('./primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'a'}, function (err) {
    if (err) throw err;
    status.innerHTML = "Configuração enviada com sucesso!!";
  });
  fs.writeFile('./segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'a'}, function (err) {
    if (err) throw err;
    status.innerHTML = "Configuração enviada com sucesso!!";
  });
  
  if(getway != "" && primeiroEmail != "" && segundoEmail != "" ){
    status.innerHTML = "Configuração enviada:";
  }else {
    status.innerHTML = "Erro nas informacoes Digitadas";
  };

} 

function haverificaChecboxb(){
	if(document.getElementById('chip').checked){
    document.getElementById('getway').disabled = true;
    
	} else{
		document.getElementById('getway').disabled = false;
	};
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
  