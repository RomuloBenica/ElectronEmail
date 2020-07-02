
function verificaChecboxbGateway(){
  if(document.getElementById('habilitarRede').checked){
        document.getElementById('gateway').disabled = false;
        setButton()
  } else{
        document.getElementById('gateway').disabled = true;
        document.getElementById('gateway').value = "";
        setButton()
  };
}

function verificaChecboxbEmail(){
        
        if(document.getElementById('habilitarEmail').checked){
                document.getElementById('email_1').disabled = false;
                document.getElementById('email_2').disabled = false;
                setButton()
        }else {
                document.getElementById('email_1').disabled = true;
                document.getElementById('email_2').disabled = true;
                document.getElementById('email_1').value = "";
                document.getElementById('email_2').value = "";
                setButton()
        }
}

function verificaCheckboxID(){
        if(document.getElementById('habilitarID').checked){
          document.getElementById('idCentral').disabled = false;
          setButton()
        }else {
          document.getElementById('idCentral').disabled = true;
          document.getElementById('idCentral').value = "";
          setButton()
        }
}

function setButton (){
        let status = document.getElementById("status");
        if(status != ""){
          status.innerHTML = "";
          document.getElementById('configurar').disabled = true;
          document.getElementById('enviar').value = "Configurar";
        }
}

function popupMensage(IdPopup){
  let popup = document.getElementById(IdPopup);
       
  popup.classList.toggle('show');
  setTimeout(function(){         
    popup.classList.remove("show");
  }, 2000);
  
}