const fs = require('fs');

function configurar(){
  let gateway = document.getElementById('gateway').value;
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
        fs.writeFile('./arquivosTxt/Rede.txt', 'CHIP',{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro 1:"+err;
        });
        fs.writeFile('./arquivosTxt/Gateway.txt', ''+gateway,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro 2:"+err;
        });
        fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Atenção email 1: Vazio"+err;
        });
        fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Atenção email 2: Vazio "+err;
        });
        status.innerHTML = "Configuração enviada!";
      }
    }
    if( chip == false && emailSim == false && fibra == true && emailNao == true ){
      if( !gateway ){
        status.innerHTML = "Gateway não preenchido !";
      }else {
        fs.writeFile('./arquivosTxt/Gateway.txt', ''+gateway,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro 5:"+err;
        });
        status.innerHTML = "Configuração enviada!"+err;
      }
    }
    if(chip == false && emailSim == true && fibra == true && emailNao == false){
      if (!gateway || (!primeiroEmail && !segundoEmail)){
        status.innerHTML = "Preencha todos os campos disponiveis!";
      }else {
        fs.writeFile('./arquivosTxt/Gateway.txt', ''+gateway,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro 6:"+err;
        });
        fs.writeFile('./arquivosTxt/primeiroemail.txt', ''+primeiroEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro 7:"+err;
        });
        fs.writeFile('./arquivosTxt/segundoemail.txt', ''+segundoEmail,{enconding:'utf-8',flag: 'w'}, function (err) {
          if (err) throw err;
            status.innerHTML = "Erro 8:"+err;
        });
        status.innerHTML = "Configuração enviada!";
      }
    }
    if( chip == true && emailSim == false && fibra == false && emailNao == true ){
      fs.writeFile('./arquivosTxt/chip.txt', 'CHIP',{enconding:'utf-8',flag: 'w'}, function (err) {
        if (err) throw err;
          status.innerHTML = "Erro 9:"+err;
      });
      status.innerHTML = "Configurado";
    }
  }else {
    return status.innerHTML = "Opcões Rede, IP ou Email não selecionado!";
  }

} 
