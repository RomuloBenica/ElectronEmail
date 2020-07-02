const Client = require('ssh2-sftp-client');
const fs = require('fs');
const sftp = new Client();

document.querySelector('#receber').addEventListener('click', ()=>{
   let ip = document.getElementById('ip').value;
   receber(ip);
})

function receber(ip){

    if(ip != ""){
        let popup = document.getElementById('aguarde');
        popup.classList.toggle('show');
        
        sftp.connect({
            host: ip, 
            port: '22',
            username:'debian',
            password:'temppwd',
        }).then(() => {

            sftp.get('/home/debian/SendEmail_jar/Email_1.txt', './arquivosTxt/primeiroemail.txt');
            sftp.get('/home/debian/SendEmail_jar/Email_2.txt', './arquivosTxt/segundoemail.txt');
            sftp.get('/home/debian/NAME.txt', './arquivosTxt/idCentral.txt');
            
            setTimeout(function (){
                fs.readFile('./arquivosTxt/primeiroemail.txt', 'utf-8', function (err, data) {
                    if(err) throw err;
                    let valorLidoEmail_1 = data;
                    document.getElementById("email_1").value = ""+valorLidoEmail_1;
                    return console.log(""+valorLidoEmail_1+"salvei kk");
                });
                fs.readFile('./arquivosTxt/segundoemail.txt', 'utf-8', function (err, data) {
                    if(err) throw err;
                    let valorLidoEmail_2 = data;
                    document.getElementById("email_2").value = ""+valorLidoEmail_2;
                    return console.log(""+valorLidoEmail_2+"salvei kk");
                });
                fs.readFile('./arquivosTxt/idCentral.txt', 'utf-8', function (err, data) {
                    if(err) throw err;
                    let valorLidoIdCentral = data;
                    document.getElementById("idCentral").value = ""+valorLidoIdCentral;
                    return console.log(""+valorLidoIdCentral+"  salvei ID");
                });
            },1000);
            popup.classList.remove('show');
            return sftp.list('/home/debian/SendEmail_jar');
        }).then(data => {
            console.log(data, 'the data info');
        }).then(() => {
            return sftp.end();
        }).catch(err => {
            popupMensage('ErrDados');
            console.log(err, 'catch error');
        })
    }else{
        return popupMensage('IpErr');
    }

}
