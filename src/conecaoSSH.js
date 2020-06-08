let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
    host: '192.168.0.178',
    port: '22',
    username: 'debian',
    password: 'temppwd'
}).then(() => {
    sftp.put('../arquivosTxt/Rede.txt', '/home/debian/SendEmail_jar/Rede.txt');  
    sftp.put('../arquivosTxt/Gateway.txt', '/home/debian/SendEmail_jar/Gateway.txt');
    sftp.put('../arquivosTxt/primeiroemail.txt', '/home/debian/SendEmail_jar/Email_1.txt');
    sftp.put('../arquivosTxt/segundoemail.txt', '/home/debian/SendEmail_jar/Email_2.txt');
    sftp.put('../arquivosTxt/segundoemail.txt', '/home/debian/SendEmail_jar/Email_2.txt');
    
    return sftp.list('/home/debian');
    
}).then(data => {
    console.log(data, 'the data info');
}).catch(err => {
    console.log(err, 'catch error');
});
