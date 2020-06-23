var gateway = document.getElementById('gateway');
var primeiroEmail = document.getElementById("email_1");
var segundoEmail = document.getElementById("email_2");


function verificaChecboxbGateway(){
	if(document.getElementById('chip').checked){
          document.getElementById('gateway').disabled = true;
          document.getElementById('gateway').value = "";
	} else{
	  document.getElementById('gateway').disabled = false;
  };
  if(document.getElementById('fibra').checked){
          document.getElementById('gateway').disabled = false;
	} else{
          document.getElementById('gateway').disabled = true;
  };
}

function verificaChecboxbEmail(){
	if(document.getElementById('emailNao').checked){
          document.getElementById('email_1').disabled = true;
          document.getElementById('email_2').disabled = true;
          document.getElementById('email_1').value = "";
          document.getElementById('email_2').value = "";
	} else{
          document.getElementById('email_1').disabled = false;
          document.getElementById('email_2').disabled = false;
  };
  if(document.getElementById('emailSim').checked){
          document.getElementById('email_1').disabled = false;
          document.getElementById('email_2').disabled = false;
	} else{
          document.getElementById('email_1').disabled = true;
          document.getElementById('email_2').disabled = true;
  };
}
