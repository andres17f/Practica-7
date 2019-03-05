//Funcion que comprueba si el usuario esta en el sistema y su contraseña es correcta
function initSession() {

    var userIn = document.forms["iniSesion"]["inputUser"].value;
    var passwordIn = document.forms["iniSesion"]["inputPasswd"].value;

    var search = false;
    var video = VideoSystem.getInstance();
    var users = video.users;
    var user = users.next();
    while ((user.done != true) && !search){
        
        console.log("entra al while");
        console.log(user.value.userName);
        console.log(user.value.password);

        if((user.value.userName == userIn) && (user.value.password == passwordIn)){
            
            alert ("Login correcto " + user.value.userName);
            setCookie("userName",user.value.userName,1);
			    search = true;
		    }
        user = users.next();   
	  } 
    
    if (search == false) {

      console.log("El usuario o contraseña no es correcto"); 
        
    }
}

//funcion que crea una cookie con duracion de un dia
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";" + ";path=/";
}
	
//funcion que devuelve el valor de una cookie
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}

//funcion que comprueba si existe la cookie y muestra el formulario de inicio de sesion o el login
function checkCookie() {
  var user = getCookie("userName");
  if (user != "") {

    var form = document.getElementById("formSesion");
    form.style.display = "none";

    var div = document.getElementById("divinfose");

    var p = document.createElement("p");
    var text = document.createTextNode("!Bienvenido de nuevo! " + user);
    p.appendChild(text);

    var brCse = document.createElement ("button");
    brCse.setAttribute("class","btn btn-secondary btn-lg mb-3");
    brCse.setAttribute("id","buttonIse");
    brCse.setAttribute("type","button");
    brCse.setAttribute("value","");
    var textCse = document.createTextNode("Cerrar Sesion");
    brCse.appendChild(textCse);
      
    div.appendChild(p);
    div.appendChild(brCse);

    brCse.addEventListener("click", removeCookie);
  
  }
}

//funcion que borra una cookie
function removeCookie() {
  document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//funcion que muestra el formulario para introducir una categoria
function formCategory() {

  var show = document.getElementById("Nombre");
	show.innerHTML = "Introducir Categoria";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
  }
  
}


