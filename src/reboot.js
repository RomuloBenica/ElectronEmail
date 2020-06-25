
const Client = require('ssh2').Client;
var conn = new Client();

document.querySelector('#configurar').addEventListener('click', ()=>{

    let ip = document.getElementById('ip').value;
    let status = document.getElementById("status");
    let conn = document.getElementById('status').innerHTML;
    if(conn == 'Confirme a alteração'){
        reboot(ip);
        status.innerHTML = "Placa configurada com sucesso !!";
    }else {
        document.getElementById('enviar').value = "Configurar";
        return status.innerHTML = "Informações não foram enviadas !";
    }
 })

function reboot (ip){

    console.log('oi ....')
    conn.on('ready', function() {
    console.log('Client :: ready');
    conn.exec('mv /home/debian/numeroSerie.txt /home/debian/numeroSerie.conf', function(err, stream) {
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


