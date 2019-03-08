//Funcion que comprueba si el usuario esta en el sistema y su contraseña es correcta
function initSession() {

    var userIn = document.forms["iniSesion"]["inputUser"].value;
    var passwordIn = document.forms["iniSesion"]["inputPasswd"].value;

    var search = false;
    var video = VideoSystem.getInstance();
    var users = video.users;
    var user = users.next();
    while ((user.done != true) && !search){

        if((user.value.userName == userIn) && (user.value.password == passwordIn)){
            
          alert ("Login correcto " + user.value.userName);
          setCookie("userName",user.value.userName,1);
          
          location.reload();
          
          search = true;
		    }
        user = users.next();   
	  } 
    
    if (search == false) {

      alert ("El usuario o contraseña no es correcto"); 
        
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
  location.reload();
}

//funcion que muestra el formulario para introducir o modificar una categoria
function formCategory() {

  var show = document.getElementById("Nombre");
	show.innerHTML = "Formularios Categoria";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
  }

  var ul = document.createElement("ul");
  ul.setAttribute("class","nav nav-tabs");
  ul.setAttribute("id","tabs");

  var li1 = document.createElement("li");
	li1.setAttribute("class","nav-item");
  
  var a1 = document.createElement("a");
  a1.setAttribute("class","nav-link active");
  a1.setAttribute("id","tab-introduce");
  a1.setAttribute("aria-controls","introduce");
  a1.setAttribute("aria-selected","true");
	var text1 = document.createTextNode("Introducir");
  a1.appendChild(text1);

  var li2 = document.createElement("li");
	li2.setAttribute("class","nav-item");
  
  var a2 = document.createElement("a");
  a2.setAttribute("class","nav-link");
  a2.setAttribute("id","tab-modify");
  a2.setAttribute("aria-controls","modify");
  a2.setAttribute("aria-selected","true");
	var text2 = document.createTextNode("Modificar");
  a2.appendChild(text2);
  
  var divG = document.createElement("div");
  divG.setAttribute("class","tab-content");
  divG.setAttribute("id","tabs-content");

  var div1 = document.createElement("div");
  div1.setAttribute("class","tab-pane fade show active");
  div1.setAttribute("id","introduce");

  var div2 = document.createElement("div");
  div2.setAttribute("class","tab-pane fade");
  div2.setAttribute("id","modify");

  contentP.appendChild(ul);
  ul.appendChild(li1);
  li1.appendChild(a1);
  ul.appendChild(li2);
  li2.appendChild(a2);
  contentP.appendChild(divG);
  divG.appendChild(div1);
  divG.appendChild(div1);

  var formSetC = document.createElement("form");
	formSetC.setAttribute("class","mb-1 mt-2");
	formSetC.setAttribute("style","width:100%");
	formSetC.setAttribute("name","setCategory");
	formSetC.setAttribute("id","setCategory");
	
	var divF1 = document.createElement("div");
	divF1.setAttribute("class","form-group");
	var labF1 = document.createElement("label");
  labF1.setAttribute("for","inputName");
  var textL1 = document.createTextNode("Nombre");
	labF1.appendChild(textL1);
	var inpF1 = document.createElement("input");
	inpF1.setAttribute("type","text");
	inpF1.setAttribute("id","inputName");
	inpF1.setAttribute("name","inputName");
	inpF1.setAttribute("class","form-control");
	inpF1.setAttribute("placeholder","");
	
	var divF2 = document.createElement("div");
	divF2.setAttribute("class","form-group");
	var labF2 = document.createElement("label");
  labF2.setAttribute("for","inputDescription");
  var textL2 = document.createTextNode("Descripcion");
	labF2.appendChild(textL2);
	var inpF2 = document.createElement("input");
	inpF2.setAttribute("type","text");
	inpF2.setAttribute("id","inputDescription");
	inpF2.setAttribute("name","inputDescription");
	inpF2.setAttribute("class","form-control");
	inpF2.setAttribute("placeholder","");

	var brIse = document.createElement ("button");
	brIse.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brIse.setAttribute("id","buttonIse");
	brIse.setAttribute("type","button");
	brIse.setAttribute("value","");
	var textBIse = document.createTextNode("Introducir");
	brIse.appendChild(textBIse);

	div1.appendChild(formSetC);
	formSetC.appendChild(divF1);
	divF1.appendChild(labF1);
	divF1.appendChild(inpF1);
	formSetC.appendChild(divF2);
	divF2.appendChild(labF2);
	divF2.appendChild(inpF2);
  formSetC.appendChild(brIse);
  
  brIse.addEventListener("click", insertCategory);

}

//Funcion que valida el formulario y lo introduce si es valido
function insertCategory() {
  var categoryIn = document.forms["setCategory"]["inputName"].value;
  var descriptionIn = document.forms["setCategory"]["inputDescription"].value;

  if (categoryIn == "") {
    var inputName = document.getElementById("inputName");
    inputName.setAttribute("class","border border-danger form-control");
    inputName.setAttribute("placeholder","El campo no puede estar vacio");
  
  } 
  
  if (descriptionIn == "") {
    var inputDescription = document.getElementById("inputDescription");
    inputDescription.setAttribute("class","border border-danger form-control");
    inputDescription.setAttribute("placeholder","El campo no puede estar vacio");
  
  } 
  
  if ((categoryIn !== "") && (descriptionIn !== "")) {
    
    var video = VideoSystem.getInstance();
    var categoryNew = new Category(categoryIn , descriptionIn);
    video.addCategory(categoryNew);

    var contentP = document.getElementById("principal");
    
    var advise = document.createElement("h5");
    advise.setAttribute("class","text-center text-primary");
    advise.setAttribute("style","width:100%");
    var textAd = document.createTextNode("Categoria " + categoryIn + " Introducida");
    advise.appendChild(textAd);
    
    contentP.appendChild(advise);
  }

}


