const fs = require('fs');

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