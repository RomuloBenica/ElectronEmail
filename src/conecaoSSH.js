const Client = require('ssh2-sftp-client');
const { electron } = require('process');
const sftp = new Client();
const {remote} = require('electron');

document.querySelector('#enviar').addEventListener('click', ()=>{
    let ip = document.getElementById('ip').value;
    conectarSSH(ip);
})



function conectarSSH (ip) {
    let status = document.getElementById("status");

    sftp.connect({
        host: ip, //'192.168.0.164'
        port: '22',
        username:'debian',
        password:'temppwd',
    }).then(() => {
        
        sftp.put('./arquivosTxt/Rede.txt', '/home/debian/SendEmail_jar/RedeTeste.txt'); 
        sftp.put('./arquivosTxt/gateway.txt', '/home/debian/SendEmail_jar/Gateway.txt'); 
        sftp.put('./arquivosTxt/primeiroemail.txt', '/home/debian/Desktop/Email_1.txt');
        sftp.put('./arquivosTxt/segundoemail.txt', '/home/debian/SendEmail_jar/Email_2.txt');
        status.innerHTML = "Configuracao enviada";
        return sftp.list('/home/debian');
        
    }).then(data => {
        console.log(data, 'the data info');
    }).then(() => {
        return sftp.end()
    }).catch(err => {
        status.innerHTML = "IP nao encontrado !";
        console.log(err, 'catch error');
    }); 
    
};




