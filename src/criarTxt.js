const fs = require('fs');
const Client = require('ssh2-sftp-client','ssh2');
const { electron } = require('process');
const sftp = new Client();


  document.querySelector('#enviar').addEventListener('click', ()=>{
    configurar();
  })

  function configurar(){

    let gateway = document.getElementById('gateway').value;
    let primeiroEmail = document.getElementById("email_1").value;
    let segundoEmail = document.getElementById("email_2").value;
    let status = document.getElementById("status");
    let rede = document.getElementById('habilitarRede').checked;
    let email = document.getElementById('habilitarEmail').checked;
    let idCentral = document.getElementById('idCentral').value;
    let idCheck = document.getElementById('habilitarID').checked;

    if(email == true && rede == false ){

      let rede = 'CHIP';

      if(!primeiroEmail && !segundoEmail){
        status.innerHTML = "Erro : Email não preenchido";
      }else {
        createFiles(email, idCheck, rede, gateway, primeiroEmail, segundoEmail, idCentral)
      }
    }

    if( email == false && rede == true  ){

      let rede = "FIBRA";

      if( !gateway ){
        status.innerHTML = "Gateway não preenchido !";
      }else {
        createFiles(email, idCheck, rede, gateway, primeiroEmail, segundoEmail, idCentral)
      }
    }

    if(email == true && rede == true ){

      let rede = "FIBRA";
      if (!gateway || (!primeiroEmail && !segundoEmail)){
        status.innerHTML = "Preencha todos os campos disponiveis!";
      }else {
        createFiles(email, idCheck, rede, gateway, primeiroEmail, segundoEmail, idCentral)
      }
    }

    if( rede == false && email == false ){
      let rede = "CHIP";
      createFiles(email, idCheck, rede, gateway, primeiroEmail, segundoEmail, idCentral)
    }else {
      return 0;
    }
  };

function setButton(){

  let status = document.getElementById("status");
  status.innerHTML = "Informações validas Clique em enviar";
  document.getElementById('enviar').value = "Enviar";
}

function createFiles( email, arquivoID , rede , gateway , primeiroEmail , segundoEmail, idCentral){
  let ip = document.getElementById('ip').value;
  let status = document.getElementById("status");

  if( ip != ""){
    fs.writeFile('./arquivosTxt/Rede.txt', ''+rede,{enconding:'utf-8',flag: 'w'}, function (err) {
      if (err) throw err;
        console.log(err);
    });
    fs.writeFile('./arquivosTxt/Gateway.txt', ''+gateway,{enconding:'utf-8',flag: 'w'}, function (err) {
      if (err) throw err;
        console.log(err);
    });
    if(email == true){
      fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
      if (err) throw err;
        console.log(err);
      });
      fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
        if (err) throw err;
          console.log(err);
      });
    }
    if(arquivoID == true){
      fs.writeFile('./arquivosTxt/idCentral.txt', ''+idCentral,{enconding:'utf-8',flag: 'w'}, function (err) {
        if (err) throw err;
          console.log(err);
      });
    }
    setButton()
  }else {
    return status.innerHTML = "Erro : IP não digitado !";
  }
}