const fs = require('fs');

function configurar(){
  let getway = document.getElementById('getway').value;
  var primeiroEmail = document.getElementById("email_1").value;
  var segundoEmail = document.getElementById("email_2").value;
  let status = document.getElementById("status");
  var fibra = document.getElementById('fibra').checked;
  var chip = document.getElementById('chip').checked;
  var emailSim = document.getElementById('emailSim').checked;
  var emailNao =  document.getElementById('emailNao').checked;
  var ip = document.getElementById('ip').value;


  if((fibra == true || chip == true ) && ( emailSim == true || emailNao == true ) && ip != ""){
    if(chip == true && emailSim == true && fibra == false && emailNao == false){
      if(!primeiroEmail && !segundoEmail){
        status.innerHTML = "Digite pelo menos 1 email!";
      }else {
        fs.writeFile('./arquivosTxt/chip.txt', 'CHIP',{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro:"+err;
        });
        fs.writeFile('./arquivosTxt/getway.txt', ''+getway,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro :"+err;
        });
        fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro :"+err;
        });
        fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro :"+err;
        });
        status.innerHTML = "Configuração enviada!";
      }
    }
    if( chip == false && emailSim == false && fibra == true && emailNao == true ){
      if( !getway ){
        status.innerHTML = "Getway não preenchido !";
      }else {
        fs.writeFile('./arquivosTxt/getway.txt', ''+getway,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro :"+err;
        });
        status.innerHTML = "Configuração enviada!";
      }
    }
    if(chip == false && emailSim == true && fibra == true && emailNao == false){
      if (!getway || (!primeiroEmail && !segundoEmail)){
        status.innerHTML = "Preencha todos os campos disponiveis!";
      }else {
        fs.writeFile('./arquivosTxt/getway.txt', ''+getway,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro :"+err;
        });
        fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro :"+err;
        });
        fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro :"+err;
        });
        status.innerHTML = "Configuração enviada!";
      }
    }
    if( chip == true && emailSim == false && fibra == false && emailNao == true ){
      fs.writeFile('./arquivosTxt/chip.txt', 'CHIP',{enconding:'utf-8',flag: 'w'}, function (err) {
        if (err) throw err;
          status.innerHTML = "Erro :"+err;
      });
      status.innerHTML = "Configuração enviada!";
    }
  }else {
    return status.innerHTML = "Opcões Rede, IP ou Email não selecionado!";
  }
} 
