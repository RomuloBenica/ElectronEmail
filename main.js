const electron = require('electron');
const fs = require('fs');

const { app, BrowserWindow } = require('electron')

function createWindow () {

  let win = new BrowserWindow({
    width: 320,
    height: 400,
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
  
  if(!getway || !primeiroEmail || !segundoEmail ){
    
    status.innerHTML = "Preencha todos os campos disponiveis !";
  }else {
    status.innerHTML = "Configuração enviada:";
  };

} 

function verificaChecboxbGetway(){
	if(document.getElementById('chip').checked){
    document.getElementById('getway').disabled = true;
    document.getElementById('fibra').disabled = true;
	} else{
    document.getElementById('fibra').disabled = false;
		document.getElementById('getway').disabled = false;
  };
  if(document.getElementById('fibra').checked){
    document.getElementById('getway').disabled = false;
    document.getElementById('chip').disabled = true;
	} else{
    document.getElementById('chip').disabled = false;
		document.getElementById('getway').disabled = true;
  };
}

function verificaChecboxbEmail(){
	if(document.getElementById('emailNao').checked){
    document.getElementById('email_1').disabled = true;
    document.getElementById('email_2').disabled = true;
    document.getElementById('emailSim').disabled = true;
	} else{
    document.getElementById('emailSim').disabled = false;
    document.getElementById('email_1').disabled = false;
    document.getElementById('email_2').disabled = false;
  };
  if(document.getElementById('emailSim').checked){
    document.getElementById('email_1').disabled = false;
    document.getElementById('email_2').disabled = false;
    document.getElementById('emailNao').disabled = true;
	} else{
    document.getElementById('emailNao').disabled = false;
    document.getElementById('email_1').disabled = true;
    document.getElementById('email_2').disabled = true;
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
  