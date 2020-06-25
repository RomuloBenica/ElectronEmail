const Client = require('ssh2-sftp-client','ssh2');
const { electron } = require('process');
const sftp = new Client();

document.querySelector('#enviar').addEventListener('click', ()=>{
    let ip = document.getElementById('ip').value;
    
    conectarSSH(ip);
  })

 function conectarSSH(ip) {
    let status = document.getElementById("status");
    let conn = document.getElementById('status').innerHTML;

    if(conn == "Opcões Rede, IP ou Email não selecionado!"){
        return 0;
    }
 
    if(conn == "Informações validas aguarde..."){
     status.innerHTML = "entrou para conectar";
     sftp.connect({
         host: ip, 
         port: '22',
         username:'debian',
         password:'temppwd',
     }).then(() => {
         
         sftp.put('../arquivosTxt/Rede.txt', '/home/debian/Desktop/RedeTeste.txt'); 
         sftp.put('../arquivosTxt/gateway.txt', '/home/debian/Desktop/Gateway.txt'); 
         sftp.put('../arquivosTxt/primeiroemail.txt', '/home/debian/Desktop/Email_1.txt');
         sftp.put('../arquivosTxt/segundoemail.txt', '/home/debian/Desktop/Email_2.txt');
         sftp.put('../arquivosTxt/idCentral.txt', '/home/debian/numeroSerie.conf');
         sftp.put('../arquivosTxt/numeroSerie.txt', '/home/debian/name.txt');
         status.innerHTML = "Confirme a alteração";
         return sftp.list('/home/debian');
     }).then(data => {
         console.log(data, 'the data info');
         //status.innerHTML = "data";
     }).then(() => {
       //status.innerHTML = "fechou";
         return sftp.end();
         
     }).catch(err => {
         status.innerHTML = "IP nao encontrado !";
         console.log(err, 'catch error');
     });
   }else{
     status.innerHTML = "erro if conectar!";
     return 0
   }
 }
 