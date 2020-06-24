
const Client = require('ssh2').Client;
var conn = new Client();

document.querySelector('#enviar').addEventListener('click', ()=>{
    let ip = document.getElementById('ip').value;
    reboot(ip);
 })

function reboot (ip){

    console.log('oi ....')
    conn.on('ready', function() {
    console.log('Client :: ready');
    conn.exec('echo "temppwd" | sudo -S reboot', function(err, stream) {
        if (err) throw err;
        stream.on('close', function(code, signal) {
        console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
        conn.end();
        }).on('data', function(data) {
        console.log('STDOUT: ' + data);
        }).stderr.on('data', function(data) {
        console.log('STDERR: ' + data);
        });
    });
    }).connect({
    host: ip,
    port: 22,
    username: 'debian',
    password: 'temppwd'
    });
}
