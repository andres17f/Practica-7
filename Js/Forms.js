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
  contentP.setAttribute("class","d-block")

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
  }

  var nav = document.createElement("nav");

  var divul = document.createElement("div");
  divul.setAttribute("class","nav nav-tabs");
  divul.setAttribute("id","nav-tab");
  divul.setAttribute("role","tablist");
  
  //Formulario de insertar categoria y panel
  var a1 = document.createElement("a");
  a1.setAttribute("class","nav-link nav-item active");
  a1.setAttribute("id","nav-introduce");
  a1.setAttribute("data-toggle","tab");
  a1.setAttribute("href","#introduce");
  a1.setAttribute("role","tab");
  a1.setAttribute("aria-controls","introduce");
  a1.setAttribute("aria-selected","true");
	var text1 = document.createTextNode("Introducir");
  a1.appendChild(text1);
  
  var divG = document.createElement("div");
  divG.setAttribute("class","tab-content p-2");
  divG.setAttribute("id","tabs-content");

  var div1 = document.createElement("div");
  div1.setAttribute("class","tab-pane fade show active");
  div1.setAttribute("id","introduce");
  div1.setAttribute("role","tabpanel");
  
  contentP.appendChild(nav);
  nav.appendChild(divul);
  divul.appendChild(a1);
  contentP.appendChild(divG);
  divG.appendChild(div1);

  var formSetC = document.createElement("form");
	formSetC.setAttribute("class","mb-1 mt-2");
	formSetC.setAttribute("style","width:100%");
	formSetC.setAttribute("name","setCategory");
	formSetC.setAttribute("id","setCategory");
	
	var div1F1 = document.createElement("div");
	div1F1.setAttribute("class","form-group");
	var lab1F1 = document.createElement("label");
  lab1F1.setAttribute("for","inputName");
  var text1F1 = document.createTextNode("Nombre");
	lab1F1.appendChild(text1F1);
	var inp1F1 = document.createElement("input");
	inp1F1.setAttribute("type","text");
	inp1F1.setAttribute("id","inputNameS");
	inp1F1.setAttribute("name","inputNameS");
	inp1F1.setAttribute("class","form-control");
	inp1F1.setAttribute("placeholder","");
	
	var div2F1 = document.createElement("div");
	div2F1.setAttribute("class","form-group");
	var lab2F1 = document.createElement("label");
  lab2F1.setAttribute("for","inputDescription");
  var text2F1 = document.createTextNode("Descripcion");
	lab2F1.appendChild(text2F1);
	var inp2F1 = document.createElement("input");
	inp2F1.setAttribute("type","text");
	inp2F1.setAttribute("id","inputDescriptionS");
	inp2F1.setAttribute("name","inputDescriptionS");
	inp2F1.setAttribute("class","form-control");
	inp2F1.setAttribute("placeholder","");

	var brIse = document.createElement ("button");
	brIse.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brIse.setAttribute("id","buttonIse");
	brIse.setAttribute("type","button");
	brIse.setAttribute("value","");
	var textBIse = document.createTextNode("Introducir");
	brIse.appendChild(textBIse);
  
	div1.appendChild(formSetC);
	formSetC.appendChild(div1F1);
	div1F1.appendChild(lab1F1);
	div1F1.appendChild(inp1F1);
	formSetC.appendChild(div2F1);
	div2F1.appendChild(lab2F1);
	div2F1.appendChild(inp2F1);
  formSetC.appendChild(brIse);

  brIse.addEventListener("click", insertCategory);

  //Formulario de modificar categoria y panel
  var a2 = document.createElement("a");
  a2.setAttribute("class","nav-link nav-item");
  a2.setAttribute("id","nav-modify");
  a2.setAttribute("data-toggle","tab");
  a2.setAttribute("href","#modify");
  a2.setAttribute("role","tab");
  a2.setAttribute("aria-controls","modify");
  a2.setAttribute("aria-selected","false");
	var text2 = document.createTextNode("Modificar");
  a2.appendChild(text2);

  var div2 = document.createElement("div");
  div2.setAttribute("class","tab-pane fade");
  div2.setAttribute("id","modify");
  div1.setAttribute("role","tabpanel");

  divul.appendChild(a2);
  divG.appendChild(div2);

  var formModC = document.createElement("form");
	formModC.setAttribute("class","mb-1 mt-2");
	formModC.setAttribute("style","width:100%");
	formModC.setAttribute("name","modCategory");
	formModC.setAttribute("id","modCategory");
  
  var div0F2 = document.createElement("div");
	div0F2.setAttribute("class","form-group");
	var lab0F2 = document.createElement("label");
  lab0F2.setAttribute("for","selectNameM");
  var text0F2 = document.createTextNode("Categoria a modificar");
	lab0F2.appendChild(text0F2);
	var inp0F2 = document.createElement("select");
	inp0F2.setAttribute("id","selectNameM");
	inp0F2.setAttribute("name","selectNameM");
	inp0F2.setAttribute("class","form-control");
  inp0F2.setAttribute("placeholder","");
  
  var video = VideoSystem.getInstance();
	var categories = video.categories;
	var category = categories.next();
	while (category.done !== true){

    var option = document.createElement("option");
    option.setAttribute("value",category.value.name);
    var textop = document.createTextNode(category.value.name);
    option.appendChild(textop);
    
    inp0F2.appendChild(option);

    category = categories.next();
  }

	var div1F2 = document.createElement("div");
	div1F2.setAttribute("class","form-group");
	var lab1F2 = document.createElement("label");
  lab1F2.setAttribute("for","inputName");
  var text1F2 = document.createTextNode("Nombre");
	lab1F2.appendChild(text1F2);
	var inp1F2 = document.createElement("input");
	inp1F2.setAttribute("type","text");
	inp1F2.setAttribute("id","inputNameM");
	inp1F2.setAttribute("name","inputNameM");
	inp1F2.setAttribute("class","form-control");
	inp1F2.setAttribute("placeholder","");
	
	var div2F2 = document.createElement("div");
	div2F2.setAttribute("class","form-group");
	var lab2F2 = document.createElement("label");
  lab2F2.setAttribute("for","inputDescription");
  var text2F2 = document.createTextNode("Descripcion");
	lab2F2.appendChild(text2F2);
	var inp2F2 = document.createElement("input");
	inp2F2.setAttribute("type","text");
	inp2F2.setAttribute("id","inputDescriptionM");
	inp2F2.setAttribute("name","inputDescriptionM");
	inp2F2.setAttribute("class","form-control");
	inp2F2.setAttribute("placeholder","");

	var brMse = document.createElement ("button");
	brMse.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brMse.setAttribute("id","buttonIse");
	brMse.setAttribute("type","button");
	brMse.setAttribute("value","");
	var textMose = document.createTextNode("Modificar");
	brMse.appendChild(textMose);
  
  div2.appendChild(formModC);
  formModC.appendChild(div0F2);
	div0F2.appendChild(lab0F2);
	div0F2.appendChild(inp0F2);
	formModC.appendChild(div1F2);
	div1F2.appendChild(lab1F2);
	div1F2.appendChild(inp1F2);
	formModC.appendChild(div2F2);
	div2F2.appendChild(lab2F2);
	div2F2.appendChild(inp2F2);
  formModC.appendChild(brMse);

  brMse.addEventListener("click", modifyCategory);

  //Formulario que elimina una categoria
  var a3 = document.createElement("a");
  a3.setAttribute("class","nav-link nav-item");
  a3.setAttribute("id","nav-modify");
  a3.setAttribute("data-toggle","tab");
  a3.setAttribute("href","#delete");
  a3.setAttribute("role","tab");
  a3.setAttribute("aria-controls","delete");
  a3.setAttribute("aria-selected","false");
	var text3 = document.createTextNode("Eliminar");
  a3.appendChild(text3);

  var div3 = document.createElement("div");
  div3.setAttribute("class","tab-pane fade");
  div3.setAttribute("id","delete");
  div3.setAttribute("role","tabpanel");

  divul.appendChild(a3);
  divG.appendChild(div3);

  var formDelC = document.createElement("form");
	formDelC.setAttribute("class","mb-1 mt-2");
	formDelC.setAttribute("style","width:100%");
	formDelC.setAttribute("name","delCategory");
  formDelC.setAttribute("id","delCategory");
  
  var div0F3 = document.createElement("div");
	div0F3.setAttribute("class","form-group");
	var lab0F3 = document.createElement("label");
  lab0F3.setAttribute("for","selectNameD");
  var text0F3 = document.createTextNode("Categoria a eliminar");
	lab0F3.appendChild(text0F3);
	var inp0F3 = document.createElement("select");
	inp0F3.setAttribute("id","selectNameD");
	inp0F3.setAttribute("name","selectNameD");
	inp0F3.setAttribute("class","form-control");
  inp0F3.setAttribute("placeholder","");
  
  var video = VideoSystem.getInstance();
	var categories = video.categories;
	var category = categories.next();
	while (category.done !== true){

    var option = document.createElement("option");
    option.setAttribute("value",category.value.name);
    var textop = document.createTextNode(category.value.name);
    option.appendChild(textop);
    
    inp0F3.appendChild(option);

    category = categories.next();
  }

  var brDse = document.createElement ("button");
	brDse.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brDse.setAttribute("id","buttonIse");
	brDse.setAttribute("type","button");
	brDse.setAttribute("value","");
	var textDese = document.createTextNode("Borrar");
	brDse.appendChild(textDese);

  div3.appendChild(formDelC);
  formDelC.appendChild(div0F3);
	div0F3.appendChild(lab0F3);
  div0F3.appendChild(inp0F3);
  formDelC.appendChild(brDse);

  brDse.addEventListener("click", deleteCategory);
}

//Funcion que valida el formulario y lo introduce si es valido
function insertCategory() {
  var categoryIn = document.forms["setCategory"]["inputNameS"].value;
  var descriptionIn = document.forms["setCategory"]["inputDescriptionS"].value;

  if (categoryIn == "") {
    var inputName = document.getElementById("inputNameS");
    inputName.setAttribute("class","border border-danger form-control");
    inputName.setAttribute("placeholder","El campo no puede estar vacio");
  
  } 
  
  if (descriptionIn == "") {
    var inputDescription = document.getElementById("inputDescriptionS");
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

function modifyCategory() {
  var categoryModify = document.forms["modCategory"]["selectNameM"].value;
  var categoryIn = document.forms["modCategory"]["inputNameM"].value;
  var descriptionIn = document.forms["modCategory"]["inputDescriptionM"].value;

  if (categoryIn == "") {
    var inputName = document.getElementById("inputNameM");
    inputName.setAttribute("class","border border-danger form-control");
    inputName.setAttribute("placeholder","El campo no puede estar vacio");
  
  }

  if (descriptionIn == "") {
    var inputDescription = document.getElementById("inputDescriptionM");
    inputDescription.setAttribute("class","border border-danger form-control");
    inputDescription.setAttribute("placeholder","El campo no puede estar vacio");
  
  } 
  
  if ((categoryIn !== "") && (descriptionIn !== "")) {
    
    var video = VideoSystem.getInstance();
    var categories = video.categories;
    var category = categories.next();
    while (category.done !== true){

      if (category.value.name == categoryModify){
        
        video.removeCategory(category.value);
      
      }
      category = categories.next();
    
    }

    var categoryNew = new Category(categoryIn , descriptionIn);
    video.addCategory(categoryNew);

    var contentP = document.getElementById("principal");
    
    var advise = document.createElement("h5");
    advise.setAttribute("class","text-center text-primary");
    advise.setAttribute("style","width:100%");
    var textAd = document.createTextNode("Categoria " + categoryModify + " Modificada");
    advise.appendChild(textAd);
    
    contentP.appendChild(advise);
  }

}

function deleteCategory() {
  var categoryDelete = document.forms["delCategory"]["selectNameD"].value;

  var video = VideoSystem.getInstance();
  var categories = video.categories;
  var category = categories.next();
  while (category.done !== true){

    if (category.value.name == categoryDelete){
        
      video.removeCategory(category.value);
      
    }
      
    category = categories.next();
    
  }

  var contentP = document.getElementById("principal");
    
  var advise = document.createElement("h5");
  advise.setAttribute("class","text-center text-primary");
  advise.setAttribute("style","width:100%");
  var textAd = document.createTextNode("Categoria " + categoryDelete + " Borrada del sistema");
  advise.appendChild(textAd);
    
  contentP.appendChild(advise);

}

function formProduction() {

}

function formDirector() {

}

function formActor() {
  
}
