var getway = document.getElementById('getway');
var primeiroEmail = document.getElementById("email_1");
var segundoEmail = document.getElementById("email_2");

function verificaChecboxbGetway(){
	if(document.getElementById('chip').checked){
        document.getElementById('getway').disabled = true;
        document.getElementById('getway').value = "";
        document.getElementById('fibra').disabled = true;
	} else{
        document.getElementById('fibra').disabled = false;
		document.getElementById('getway').disabled = false;
  };
  if(document.getElementById('fibra').checked){
        document.getElementById('getway').disabled = false;
        document.getElementById('chip').disabled = true;
	} else{
        document.getElementById('chip').disabled = false;
		document.getElementById('getway').disabled = true;
  };
}

function verificaChecboxbEmail(){
	if(document.getElementById('emailNao').checked){
    document.getElementById('email_1').disabled = true;
    document.getElementById('email_2').disabled = true;
    document.getElementById('email_1').value = "";
    document.getElementById('email_2').value = "";
    document.getElementById('emailSim').disabled = true;
	} else{
    document.getElementById('emailSim').disabled = false;
    document.getElementById('email_1').disabled = false;
    document.getElementById('email_2').disabled = false;
  };
  if(document.getElementById('emailSim').checked){
    document.getElementById('email_1').disabled = false;
    document.getElementById('email_2').disabled = false;
    document.getElementById('emailNao').disabled = true;
	} else{
    document.getElementById('emailNao').disabled = false;
    document.getElementById('email_1').disabled = true;
    document.getElementById('email_2').disabled = true;
  };
}
