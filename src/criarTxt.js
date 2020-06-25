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
    let fiber = document.getElementById('fiber').checked;
    let chip = document.getElementById('chip').checked;
    let emailSim = document.getElementById('emailSim').checked;
    let emailNao =  document.getElementById('emailNao').checked;
    let ip = document.getElementById('ip').value;
    let idCentral = document.getElementById('idCentral').value;
    let numeroSerie = document.getElementById('numeroSerie').value;

    if((fiber == true || chip == true ) && ( emailSim == true || emailNao == true ) && ip != ""){

      if(chip == true && emailSim == true && fiber == false && emailNao == false){

        if(!primeiroEmail && !segundoEmail){
          status.innerHTML = "Digite pelo menos 1 email!";
        }else {
          fs.writeFile('./arquivosTxt/Rede.txt', 'CHIP',{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/Gateway.txt', ''+gateway,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde... ";
          });
          fs.writeFile('./arquivosTxt/idCentral.txt', ''+idCentral,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/numeroSerie.txt', ''+numeroSerie,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          status.innerHTML = "Informações validas aguarde...";
        }
      }

      if( chip == false && emailSim == false && fiber == true && emailNao == true ){
        if( !gateway ){
          status.innerHTML = "Gateway não preenchido !";
        }else {
          fs.writeFile('./arquivosTxt/Rede.txt', 'FIBRA',{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/Gateway.txt', ''+gateway,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde... ";
          });
          fs.writeFile('./arquivosTxt/idCentral.txt', ''+idCentral,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/numeroSerie.txt', ''+numeroSerie,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          status.innerHTML = "Informações validas aguarde...";
        }
      }

      if(chip == false && emailSim == true && fiber == true && emailNao == false){
        if (!gateway || (!primeiroEmail && !segundoEmail)){
          status.innerHTML = "Preencha todos os campos disponiveis!";
        }else {
          fs.writeFile('./arquivosTxt/Rede.txt', 'FIBRA',{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/Gateway.txt', ''+gateway,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/idCentral.txt', ''+idCentral,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
          });
          fs.writeFile('./arquivosTxt/numeroSerie.txt', ''+numeroSerie,{enconding:'utf-8',flag: 'w'}, function (err) {
            if (err) throw err;
              status.innerHTML = "Informações validas aguarde...";
             
          });
          status.innerHTML = "Informações validas aguarde...";
        }
      }

      if( chip == true && emailSim == false && fiber == false && emailNao == true ){
        fs.writeFile('./arquivosTxt/Rede.txt', 'CHIP',{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Informações validas aguarde...";
        });
        fs.writeFile('./arquivosTxt/Gateway.txt', ''+gateway,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Informações validas aguarde...";
        });
        fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Informações validas aguarde...";
        });
        fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Informações validas aguarde...";
        });
        fs.writeFile('./arquivosTxt/idCentral.txt', ''+idCentral,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Informações validas aguarde...";
        });
        fs.writeFile('./arquivosTxt/numeroSerie.txt', ''+numeroSerie,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Informações validas aguarde...";
        });
        status.innerHTML = "Informações validas Clique em enviar";
      }
    }else {
      return status.innerHTML = "Opcões Rede, IP ou Email não selecionado!";
    }
    document.getElementById('enviar').value = "Enviar";
  };
