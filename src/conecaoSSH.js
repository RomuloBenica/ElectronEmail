const Client = require('ssh2-sftp-client','ssh2');
const { electron } = require('process');
const sftp = new Client();


 document.querySelector('#enviar').addEventListener('click', ()=>{
    let ip = document.getElementById('ip').value;
    conectarSSH(ip);
 })

function conectarSSH (ip) {
    let status = document.getElementById("status");
    let conn = document.getElementById('status').innerHTML;

    if(conn == "Informaçoes validas!"){
        sftp.connect({
            host: ip, 
            port: '22',
            username:'debian',
            password:'temppwd',
        }).then(() => {
            
            sftp.put('./arquivosTxt/Rede.txt', '/home/debian/SendEmail_jar/RedeTeste.txt'); 
            sftp.put('./arquivosTxt/gateway.txt', '/home/debian/SendEmail_jar/Gateway.txt'); 
            sftp.put('./arquivosTxt/primeiroemail.txt', '/home/debian/Desktop/Email_1.txt');
            sftp.put('./arquivosTxt/segundoemail.txt', '/home/debian/SendEmail_jar/Email_2.txt');
            status.innerHTML = "Configuração enviada";
            return sftp.list('/home/debian');
            
        }).then(data => {
            console.log(data, 'the data info');
        }).then(() => {
            return sftp.end()
        }).catch(err => {
            status.innerHTML = "IP nao encontrado !";
            console.log(err, 'catch error');
        });
    }else{
        return 0
    }
}