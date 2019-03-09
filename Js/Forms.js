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
  var show = document.getElementById("Nombre");
	show.innerHTML = "Formularios Produccion";

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
  
  //Formulario de insertar produccion y panel
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

  var formSetP = document.createElement("form");
	formSetP.setAttribute("class","mb-1 mt-2");
	formSetP.setAttribute("style","width:100%");
	formSetP.setAttribute("name","setProduction");
  formSetP.setAttribute("id","setProduction");
  
  var div0F1 = document.createElement("div");
	div0F1.setAttribute("class","form-check");
	var lab0F1 = document.createElement("label");
  lab0F1.setAttribute("for","selectTypeS");
  var text0F1 = document.createTextNode("Serie");
	lab0F1.appendChild(text0F1);
	var inp0F1 = document.createElement("input");
	inp0F1.setAttribute("id","selectType1S");
	inp0F1.setAttribute("name","selectTypeS");
	inp0F1.setAttribute("class","form-check-input");
  inp0F1.setAttribute("type","radio");
  inp0F1.setAttribute("value","Serie");
  inp0F1.setAttribute("checked","true");
  
  var div01F1 = document.createElement("div");
	div01F1.setAttribute("class","form-check");
	var lab01F1 = document.createElement("label");
  lab01F1.setAttribute("for","selectTypeS");
  var text01F1 = document.createTextNode("Pelicula");
	lab01F1.appendChild(text01F1);
	var inp01F1 = document.createElement("input");
	inp01F1.setAttribute("id","selectType2S");
	inp01F1.setAttribute("name","selectTypeS");
	inp01F1.setAttribute("class","form-check-input");
  inp01F1.setAttribute("type","radio");
  inp01F1.setAttribute("value","Pelicula");

	var div1F1 = document.createElement("div");
	div1F1.setAttribute("class","form-group");
	var lab1F1 = document.createElement("label");
  lab1F1.setAttribute("for","inputTitleS");
  var text1F1 = document.createTextNode("Titulo:");
	lab1F1.appendChild(text1F1);
	var inp1F1 = document.createElement("input");
	inp1F1.setAttribute("type","text");
	inp1F1.setAttribute("id","inputTitleS");
	inp1F1.setAttribute("name","inputTitleS");
	inp1F1.setAttribute("class","form-control");
	inp1F1.setAttribute("placeholder","");
	
	var div2F1 = document.createElement("div");
	div2F1.setAttribute("class","form-group");
	var lab2F1 = document.createElement("label");
  lab2F1.setAttribute("for","inputNationality");
  var text2F1 = document.createTextNode("Nacionalidad:");
	lab2F1.appendChild(text2F1);
	var inp2F1 = document.createElement("input");
	inp2F1.setAttribute("type","text");
	inp2F1.setAttribute("id","inputNationalityS");
	inp2F1.setAttribute("name","inputNationalityS");
	inp2F1.setAttribute("class","form-control");
  inp2F1.setAttribute("placeholder","");
  
  var div3F1 = document.createElement("div");
	div3F1.setAttribute("class","form-group");
	var lab3F1 = document.createElement("label");
  lab3F1.setAttribute("for","inputPublication");
  var text3F1 = document.createTextNode("Fecha publicacion:");
	lab3F1.appendChild(text3F1);
	var inp3F1 = document.createElement("input");
	inp3F1.setAttribute("type","date");
	inp3F1.setAttribute("id","inputDateS");
	inp3F1.setAttribute("name","inputDateS");
	inp3F1.setAttribute("class","form-control");
  inp3F1.setAttribute("placeholder","");
  
  var div4F1 = document.createElement("div");
	div4F1.setAttribute("class","form-group");
	var lab4F1 = document.createElement("label");
  lab4F1.setAttribute("for","inputSynopsis");
  var text4F1 = document.createTextNode("Synopsis:");
	lab4F1.appendChild(text4F1);
	var inp4F1 = document.createElement("input");
	inp4F1.setAttribute("type","text");
	inp4F1.setAttribute("id","inputSynopsisS");
	inp4F1.setAttribute("name","inputSynopsisS");
	inp4F1.setAttribute("class","form-control");
  inp4F1.setAttribute("placeholder","");
  
  var div5F1 = document.createElement("div");
	div5F1.setAttribute("class","form-group");
	var lab5F1 = document.createElement("label");
  lab5F1.setAttribute("for","inputImage");
  var text5F1 = document.createTextNode("Url Imagen:");
	lab5F1.appendChild(text5F1);
	var inp5F1 = document.createElement("input");
	inp5F1.setAttribute("type","text");
	inp5F1.setAttribute("id","inputImageS");
	inp5F1.setAttribute("name","inputImageS");
	inp5F1.setAttribute("class","form-control");
  inp5F1.setAttribute("placeholder","");
  
  var div6F1 = document.createElement("div");
  div6F1.setAttribute("class","form-group d-hidden");
  div6F1.setAttribute("id","divResource");
	var lab6F1 = document.createElement("label");
  lab6F1.setAttribute("for","inputResourceS");
  var text6F1 = document.createTextNode("Recurso:");
	lab6F1.appendChild(text6F1);
	var inp6F1 = document.createElement("input");
	inp6F1.setAttribute("type","text");
	inp6F1.setAttribute("id","inputResourceS");
	inp6F1.setAttribute("name","inputResourceS");
	inp6F1.setAttribute("class","form-control");
  inp6F1.setAttribute("placeholder","Solo introducir si es una pelicula");
  
  var div7F1 = document.createElement("div");
  div7F1.setAttribute("class","form-group d-hidden");
  div7F1.setAttribute("id","divLocation");
	var lab7F1 = document.createElement("label");
  lab7F1.setAttribute("for","inputLocationS");
  var text7F1 = document.createTextNode("Localizaciones:");
	lab7F1.appendChild(text7F1);
	var inp7F1 = document.createElement("input");
	inp7F1.setAttribute("type","text");
	inp7F1.setAttribute("id","inputLocationS");
	inp7F1.setAttribute("name","inputLocationS");
	inp7F1.setAttribute("class","form-control");
  inp7F1.setAttribute("placeholder","Solo introducir si es una pelicula");
  
  var div8F1 = document.createElement("div");
  div8F1.setAttribute("class","form-group");
  div8F1.setAttribute("id","divSeason");
	var lab8F1 = document.createElement("label");
  lab8F1.setAttribute("for","inputSeasonS");
  var text8F1 = document.createTextNode("Temporadas:");
  lab8F1.appendChild(text8F1);
  var inp8F1 = document.createElement("input");
  inp8F1.setAttribute("type","text");
  inp8F1.setAttribute("id","inputSeasonS");
  inp8F1.setAttribute("name","inputSeasonS");
  inp8F1.setAttribute("class","form-control");
  inp8F1.setAttribute("placeholder","Solo introducir si es una serie");

	var brIse = document.createElement ("button");
	brIse.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brIse.setAttribute("id","buttonIse");
	brIse.setAttribute("type","button");
	brIse.setAttribute("value","");
	var textBIse = document.createTextNode("Introducir");
	brIse.appendChild(textBIse);
  
  div1.appendChild(formSetP);
  formSetP.appendChild(div0F1);
  div0F1.appendChild(inp0F1);
  div0F1.appendChild(lab0F1);
  formSetP.appendChild(div01F1);
  div01F1.appendChild(inp01F1);
  div01F1.appendChild(lab01F1);
	formSetP.appendChild(div1F1);
	div1F1.appendChild(lab1F1);
	div1F1.appendChild(inp1F1);
	formSetP.appendChild(div2F1);
	div2F1.appendChild(lab2F1);
  div2F1.appendChild(inp2F1);
  formSetP.appendChild(div3F1);
	div3F1.appendChild(lab3F1);
  div3F1.appendChild(inp3F1);
  formSetP.appendChild(div4F1);
	div4F1.appendChild(lab4F1);
  div4F1.appendChild(inp4F1);
  formSetP.appendChild(div5F1);
	div5F1.appendChild(lab5F1);
  div5F1.appendChild(inp5F1);
  formSetP.appendChild(div6F1);
	div6F1.appendChild(lab6F1);
  div6F1.appendChild(inp6F1);
  formSetP.appendChild(div7F1);
	div7F1.appendChild(lab7F1);
  div7F1.appendChild(inp7F1);
  formSetP.appendChild(div8F1);
  div8F1.appendChild(lab8F1);
  div8F1.appendChild(inp8F1);
  formSetP.appendChild(brIse);

  brIse.addEventListener("click", insertProduction);
  
  //Formulario de modificar produccion y panel
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

  var formModP = document.createElement("form");
	formModP.setAttribute("class","mb-1 mt-2");
	formModP.setAttribute("style","width:100%");
	formModP.setAttribute("name","modProduction");
	formModP.setAttribute("id","modProduction");
  
  var div0F2 = document.createElement("div");
	div0F2.setAttribute("class","form-group");
	var lab0F2 = document.createElement("label");
  lab0F2.setAttribute("for","selectTitleM");
  var text0F2 = document.createTextNode("Produccion a modificar");
	lab0F2.appendChild(text0F2);
	var inp0F2 = document.createElement("select");
	inp0F2.setAttribute("id","selectTitleM");
	inp0F2.setAttribute("name","selectTitleM");
	inp0F2.setAttribute("class","form-control");
  inp0F2.setAttribute("placeholder","");
  
  var video = VideoSystem.getInstance();
	var productions = video.productions;
	var production = productions.next();
	while (production.done !== true){

    var option = document.createElement("option");
    option.setAttribute("value",production.value.title);
    var textop = document.createTextNode(production.value.title);
    option.appendChild(textop);
    
    inp0F2.appendChild(option);

    var production = productions.next();
  }

  var div1F2 = document.createElement("div");
	div1F2.setAttribute("class","form-group");
	var lab1F2 = document.createElement("label");
  lab1F2.setAttribute("for","inputTitleM");
  var text1F2 = document.createTextNode("Titulo:");
	lab1F2.appendChild(text1F2);
	var inp1F2 = document.createElement("input");
	inp1F2.setAttribute("type","text");
	inp1F2.setAttribute("id","inputTitleM");
	inp1F2.setAttribute("name","inputTitleM");
	inp1F2.setAttribute("class","form-control");
	inp1F2.setAttribute("placeholder","");
	
	var div2F2 = document.createElement("div");
	div2F2.setAttribute("class","form-group");
	var lab2F2 = document.createElement("label");
  lab2F2.setAttribute("for","inputNationalityM");
  var text2F2 = document.createTextNode("Nacionalidad:");
	lab2F2.appendChild(text2F2);
	var inp2F2 = document.createElement("input");
	inp2F2.setAttribute("type","text");
	inp2F2.setAttribute("id","inputNationalityM");
	inp2F2.setAttribute("name","inputNationalityM");
	inp2F2.setAttribute("class","form-control");
  inp2F2.setAttribute("placeholder","");
  
  var div3F2 = document.createElement("div");
	div3F2.setAttribute("class","form-group");
	var lab3F2 = document.createElement("label");
  lab3F2.setAttribute("for","inputPublicationM");
  var text3F2 = document.createTextNode("Fecha publicacion:");
	lab3F2.appendChild(text3F2);
	var inp3F2 = document.createElement("input");
	inp3F2.setAttribute("type","date");
	inp3F2.setAttribute("id","inputDateM");
	inp3F2.setAttribute("name","inputDateM");
	inp3F2.setAttribute("class","form-control");
  inp3F2.setAttribute("placeholder","");
  
  var div4F2 = document.createElement("div");
	div4F2.setAttribute("class","form-group");
	var lab4F2 = document.createElement("label");
  lab4F2.setAttribute("for","inputSynopsisM");
  var text4F2 = document.createTextNode("Synopsis:");
	lab4F2.appendChild(text4F2);
	var inp4F2 = document.createElement("input");
	inp4F2.setAttribute("type","text");
	inp4F2.setAttribute("id","inputSynopsisM");
	inp4F2.setAttribute("name","inputSynopsisM");
	inp4F2.setAttribute("class","form-control");
  inp4F2.setAttribute("placeholder","");
  
  var div5F2 = document.createElement("div");
	div5F2.setAttribute("class","form-group");
	var lab5F2 = document.createElement("label");
  lab5F2.setAttribute("for","inputImageM");
  var text5F2 = document.createTextNode("Url Imagen:");
	lab5F2.appendChild(text5F2);
	var inp5F2 = document.createElement("input");
	inp5F2.setAttribute("type","text");
	inp5F2.setAttribute("id","inputImageM");
	inp5F2.setAttribute("name","inputImageM");
	inp5F2.setAttribute("class","form-control");
  inp5F2.setAttribute("placeholder","");
  
  var div6F2 = document.createElement("div");
  div6F2.setAttribute("class","form-group d-hidden");
  div6F2.setAttribute("id","divResource");
	var lab6F2 = document.createElement("label");
  lab6F2.setAttribute("for","inputResourceM");
  var text6F2 = document.createTextNode("Recurso:");
	lab6F2.appendChild(text6F2);
	var inp6F2 = document.createElement("input");
	inp6F2.setAttribute("type","text");
	inp6F2.setAttribute("id","inputResourceM");
	inp6F2.setAttribute("name","inputResourceM");
	inp6F2.setAttribute("class","form-control");
  inp6F2.setAttribute("placeholder","Solo introducir si es una pelicula");
  
  var div7F2 = document.createElement("div");
  div7F2.setAttribute("class","form-group d-hidden");
  div7F2.setAttribute("id","divLocation");
	var lab7F2 = document.createElement("label");
  lab7F2.setAttribute("for","inputLocationM");
  var text7F2 = document.createTextNode("Localizaciones:");
	lab7F2.appendChild(text7F2);
	var inp7F2 = document.createElement("input");
	inp7F2.setAttribute("type","text");
	inp7F2.setAttribute("id","inputLocationM");
	inp7F2.setAttribute("name","inputLocationM");
	inp7F2.setAttribute("class","form-control");
  inp7F2.setAttribute("placeholder","Solo introducir si es una pelicula");
  
  var div8F2 = document.createElement("div");
  div8F2.setAttribute("class","form-group");
  div8F2.setAttribute("id","divSeason");
	var lab8F2 = document.createElement("label");
  lab8F2.setAttribute("for","inputSeasonM");
  var text8F2 = document.createTextNode("Temporadas:");
  lab8F2.appendChild(text8F2);
  var inp8F2 = document.createElement("input");
  inp8F2.setAttribute("type","text");
  inp8F2.setAttribute("id","inputSeasonM");
  inp8F2.setAttribute("name","inputSeasonM");
  inp8F2.setAttribute("class","form-control");
  inp8F2.setAttribute("placeholder","Solo introducir si es una serie");

	var brMse = document.createElement ("button");
	brMse.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brMse.setAttribute("id","buttonIse");
	brMse.setAttribute("type","button");
	brMse.setAttribute("value","");
	var textMose = document.createTextNode("Modificar");
	brMse.appendChild(textMose);
  
  div2.appendChild(formModP);
  formModP.appendChild(div0F2);
	div0F2.appendChild(lab0F2);
	div0F2.appendChild(inp0F2);
	formModP.appendChild(div1F2);
	div1F2.appendChild(lab1F2);
	div1F2.appendChild(inp1F2);
	formModP.appendChild(div2F2);
	div2F2.appendChild(lab2F2);
  div2F2.appendChild(inp2F2);
  formModP.appendChild(div3F2);
	div3F2.appendChild(lab3F2);
  div3F2.appendChild(inp3F2);
  formModP.appendChild(div4F2);
	div4F2.appendChild(lab4F2);
  div4F2.appendChild(inp4F2);
  formModP.appendChild(div5F2);
	div5F2.appendChild(lab5F2);
  div5F2.appendChild(inp5F2);
  formModP.appendChild(div6F2);
	div6F2.appendChild(lab6F2);
  div6F2.appendChild(inp6F2);
  formModP.appendChild(div7F2);
	div7F2.appendChild(lab7F2);
  div7F2.appendChild(inp7F2);
  formModP.appendChild(div8F2);
	div8F2.appendChild(lab8F2);
  div8F2.appendChild(inp8F2);
  formModP.appendChild(brMse);

  brMse.addEventListener("click", modifyProduction);

  //Formulario que elimina una produccion
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

  var formDelP = document.createElement("form");
	formDelP.setAttribute("class","mb-1 mt-2");
	formDelP.setAttribute("style","width:100%");
	formDelP.setAttribute("name","delProduction");
  formDelP.setAttribute("id","delProduction");
  
  var div0F3 = document.createElement("div");
	div0F3.setAttribute("class","form-group");
	var lab0F3 = document.createElement("label");
  lab0F3.setAttribute("for","selectNameD");
  var text0F3 = document.createTextNode("Produccion a eliminar");
	lab0F3.appendChild(text0F3);
	var inp0F3 = document.createElement("select");
	inp0F3.setAttribute("id","selectNameD");
	inp0F3.setAttribute("name","selectNameD");
	inp0F3.setAttribute("class","form-control");
  inp0F3.setAttribute("placeholder","");
  
  var video = VideoSystem.getInstance();
	var productions = video.productions;
	var production = productions.next();
	while (production.done !== true){

    var option = document.createElement("option");
    option.setAttribute("value",production.value.title);
    var textop = document.createTextNode(production.value.title);
    option.appendChild(textop);
    
    inp0F3.appendChild(option);

    var production = productions.next();
  }

  var brDse = document.createElement ("button");
	brDse.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brDse.setAttribute("id","buttonIse");
	brDse.setAttribute("type","button");
	brDse.setAttribute("value","");
	var textDese = document.createTextNode("Borrar");
	brDse.appendChild(textDese);

  div3.appendChild(formDelP);
  formDelP.appendChild(div0F3);
	div0F3.appendChild(lab0F3);
  div0F3.appendChild(inp0F3);
  formDelP.appendChild(brDse);

  brDse.addEventListener("click", deleteProduction);
}


//Funcion que valida el formulario e introduce la produccion
function insertProduction() {
  var typeIn = document.forms["setProduction"]["selectTypeS"].value;
  var titleIn = document.forms["setProduction"]["inputTitleS"].value;
  var nationalityIn = document.forms["setProduction"]["inputNationalityS"].value;
  var publicationIn = document.forms["setProduction"]["inputDateS"].value;
  var synopsisIn = document.forms["setProduction"]["inputSynopsisS"].value;
  var imageIn = document.forms["setProduction"]["inputImageS"].value;
  var resourceIn = document.forms["setProduction"]["inputResourceS"].value;
  var locationsIn = document.forms["setProduction"]["inputLocationS"].value;
  var seasonsIn = document.forms["setProduction"]["inputSeasonS"].value;

  if (titleIn == "") {
    var inputTitle = document.getElementById("inputTitleS");
    inputTitle.setAttribute("class","border border-danger form-control");
    inputTitle.setAttribute("placeholder","El campo no puede estar vacio");
  
  } 
  
  if (publicationIn == "") {
    var inputPublication = document.getElementById("inputDateS");
    inputPublication.setAttribute("class","border border-danger form-control");
    inputPublication.setAttribute("placeholder","El campo no puede estar vacio");
  
  } 
  
  if ((titleIn !== "") && (publicationIn !== "")) {
    
    var video = VideoSystem.getInstance();

    if  (typeIn == "Serie") {
    
      if ((resourceIn == "") && (locationsIn == "")) {

        var serieNew = new Serie(titleIn, publicationIn, nationalityIn, synopsisIn, imageIn, seasonsIn);
        video.addProduction(serieNew);

        var contentP = document.getElementById("principal");

        var advise = document.createElement("h5");
        advise.setAttribute("class","text-center text-primary");
        advise.setAttribute("style","width:100%");
        var textAd = document.createTextNode("Serie " + titleIn + " introducida");
        advise.appendChild(textAd);
        
        contentP.appendChild(advise);
        
      } else  {

        var inputResource = document.getElementById("inputResourceS");
        inputResource.setAttribute("class","border border-danger form-control");
        inputResource.setAttribute("placeholder","El campo no se puede introducir en una serie");

        var inputLocations = document.getElementById("inputLocationS");
        inputLocations.setAttribute("class","border border-danger form-control");
        inputLocations.setAttribute("placeholder","El campo no se puede introducir en una serie");

      }
    
    } else {
      
      if (seasonsIn == "") {

        var movieNew = new Movie(titleIn, publicationIn, nationalityIn, synopsisIn, imageIn, resourceIn, locationsIn);
        video.addProduction(movieNew);

        var contentP = document.getElementById("principal");

        var advise = document.createElement("h5");
        advise.setAttribute("class","text-center text-primary");
        advise.setAttribute("style","width:100%");
        var textAd = document.createTextNode("Pelicula " + titleIn + " introducida");
        advise.appendChild(textAd);
        
        contentP.appendChild(advise);

      } else {

        var inputSeason = document.getElementById("inputSeasonS");
        inputSeason.setAttribute("class","border border-danger form-control");
        inputSeason.setAttribute("placeholder","El campo no se puede introducir en una pelicula");

      }

    }

  }

}

//Funcion que valida y modifica una produccion
function modifyProduction() {
  var productionModify = document.forms["modProduction"]["selectTitleM"].value;
  var titleIn = document.forms["modProduction"]["inputTitleM"].value;
  var nationalityIn = document.forms["modProduction"]["inputNationalityM"].value;
  var publicationIn = document.forms["modProduction"]["inputDateM"].value;
  var synopsisIn = document.forms["modProduction"]["inputSynopsisM"].value;
  var imageIn = document.forms["modProduction"]["inputImageM"].value;
  var resourceIn = document.forms["modProduction"]["inputResourceM"].value;
  var locationsIn = document.forms["modProduction"]["inputLocationM"].value;
  var seasonsIn = document.forms["modProduction"]["inputSeasonM"].value;
  var search = false;

  var date = new Date (publicationIn);
  
  if (titleIn == "") {
    var inputTitle = document.getElementById("inputTitleS");
    inputTitle.setAttribute("class","border border-danger form-control");
    inputTitle.setAttribute("placeholder","El campo no puede estar vacio");
  
  } 
  
  if (publicationIn == "") {
    var inputPublication = document.getElementById("inputDateS");
    inputPublication.setAttribute("class","border border-danger form-control");
    inputPublication.setAttribute("placeholder","El campo no puede estar vacio");
  
  } 
  
  if ((titleIn !== "") && (publicationIn !== "")) {
    
    console.log("entra al primer if");
    var video = VideoSystem.getInstance();
    var productions = video.productions;
    var production = productions.next();
    while ((production.done !== true) && (!search)) {

      if ((production.value.title === productionModify) && (production.value instanceof Serie)) {

        console.log("entra al if gordo");
        if ((resourceIn == "") && (locationsIn == "")) {

          video.removeProduction(production.value);
  
          var serieNew = new Serie(titleIn, date, nationalityIn, synopsisIn, imageIn, seasonsIn);
          video.addProduction(serieNew);
  
          var contentP = document.getElementById("principal");
  
          var advise = document.createElement("h5");
          advise.setAttribute("class","text-center text-primary");
          advise.setAttribute("style","width:100%");
          var textAd = document.createTextNode("Serie " + titleIn + " modificada");
          advise.appendChild(textAd);
          
          contentP.appendChild(advise);
          
        } else  {

          var inputResource = document.getElementById("inputResourceM");
          inputResource.setAttribute("class","border border-danger form-control");
          inputResource.setAttribute("placeholder","El campo no se puede introducir en una serie");
  
          var inputLocations = document.getElementById("inputLocationM");
          inputLocations.setAttribute("class","border border-danger form-control");
          inputLocations.setAttribute("placeholder","El campo no se puede introducir en una serie");
          
        }

        search = true;
        
      }

      if ((production.value.title === productionModify) && (production.value instanceof Movie)) {

        if (seasonsIn == "") {
   
          video.removeProduction(production.value);
          
          var movieNew = new Movie(titleIn, date, nationalityIn, synopsisIn, imageIn, resourceIn, locationsIn);
          video.addProduction(movieNew);
  
          var contentP = document.getElementById("principal");
  
          var advise = document.createElement("h5");
          advise.setAttribute("class","text-center text-primary");
          advise.setAttribute("style","width:100%");
          var textAd = document.createTextNode("Pelicula " + titleIn + " modificada");
          advise.appendChild(textAd);
          
          contentP.appendChild(advise);
  
        } else {
  
          var inputSeason = document.getElementById("inputSeasonM");
          inputSeason.setAttribute("class","border border-danger form-control");
          inputSeason.setAttribute("placeholder","El campo no se puede introducir en una pelicula");
  
        }

        search = true;

      }

      var production = productions.next();
    }
  }
}

function deleteProduction() {
  var productionDelete = document.forms["delProduction"]["selectNameD"].value;

  var video = VideoSystem.getInstance();
  var productions = video.productions;
  var production = productions.next();
  while (production.done !== true){
  
    if (production.value.title == productionDelete){
      console.log("Entra a borrar");
      video.removeProduction(production.value);
      
    }
      
    var production = productions.next();
    
  }

  var contentP = document.getElementById("principal");
    
  var advise = document.createElement("h5");
  advise.setAttribute("class","text-center text-primary");
  advise.setAttribute("style","width:100%");
  var textAd = document.createTextNode("Produccion " + productionDelete + " Borrada del sistema");
  advise.appendChild(textAd);
    
  contentP.appendChild(advise);

}

function formPerson() {

}


