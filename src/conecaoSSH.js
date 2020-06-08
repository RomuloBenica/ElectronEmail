let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
  host: '192.168.0.139',
  port: '22',
  username: 'debian',
  password: 'temppwd'
}).then(() => {
  sftp.put('../arquivosTxt/Gateway.txt', '/home/debian/SendEmail_jar/Gateway.txt');
  return sftp.list('/home/olimex/Desktop');
}).then(data => {
  console.log(data, 'the data info');
}).catch(err => {
  console.log(err, 'catch error');
});