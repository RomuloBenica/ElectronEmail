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
 
    if(conn == "Informações validas Clique em enviar"){
      let popup = document.getElementById('enviando');
      popup.classList.toggle('show');
     sftp.connect({
         host: ip, 
         port: '22',
         username:'debian',
         password:'temppwd',
     }).then(() => {

        sftp.put('./arquivosTxt/Rede.txt', '/home/debian/SendEmail_jar/Rede.txt'); 
        sftp.put('./arquivosTxt/gateway.txt', '/home/debian/SendEmail_jar/Gateway.txt'); 
        sftp.put('./arquivosTxt/primeiroemail.txt', '/home/debian/SendEmail_jar/Email_1.txt');
        sftp.put('./arquivosTxt/segundoemail.txt', '/home/debian/SendEmail_jar/Email_2.txt');
        sftp.put('./arquivosTxt/name.txt', '/home/debian/NAME.txt');
        status.innerHTML = "Confirme a alteração";
        popup.classList.remove("show");
        popupMensage('confirmar');
        
        return sftp.put('./arquivosTxt/idCentral.txt', '/home/debian/numeroSerie.txt');
        
     }).then(data => {
         console.log(data, 'the data info');
        
     }).then(() => {
       //status.innerHTML = "fechou";
        document.getElementById('configurar').disabled = false;
        document.getElementById('enviar').value = "Configurar";
        return sftp.end();
         
     }).catch(err => {
         status.innerHTML = "IP nao encontrado !";
         popup.classList.remove("show");
         popupMensage('IpNaoEncontrado');
         console.log(err, 'catch error');
     })
   }else {
     return 0
   }
 }
 

