//Lo primero es crear una funcion initiPopulate para crear todos los datos que carga el videoSystem
function initPopulate(){
	
	//Se crean los Person
	try {
		var persona1 = new Person("Shinkai","Makoto",new Date(1973,02,09),"","Img/Shinkai_Makoto.jpg");
		var persona2 = new Person("Martin","Campbell",new Date(1943,10,24),"","Img/Martin_Campbell.jpg");
		var persona3 = new Person("James","Cameron",new Date(1954,08,16),"","Img/James_Cameron.jpg");
		var persona4 = new Person("Todd", "Phillips",new Date(1970,12,20),"","Img/Todd_Phillips.jpg");
		var persona5 = new Person("Pete", "Docter",new Date(1968,10,09),"","Img/Pete_Docter.jpg");
		var persona6 = new Person("Chris", "Columbus", new Date(1958,09,10),"","Img/Chris_Columbus.jpg");
		var persona7 = new Person("Andy", "Muschietti", new Date(1973,08,26),"","Img/Andy_Muschietti.jpg");
		var persona8 = new Person("Kenji","Nagasaki",new Date(1979,02,12),"","Img/Kenji_Nagasaki.jpg");
		var persona9 = new Person("Vanesa","Romero",new Date(1978,06,04),"Torres","Img/Vanesa_Romero.jpg");
		var persona10 = new Person("Eva Maria","Isanta",new Date(1971,06,19),"Foncuberta","Img/Eva_Maria_Isanta.jpg");
		var persona11 = new Person("Katheryn","Winnick",new Date(1977,12,17),"","Img/Katheryn_Winnick.jpg");
		var persona12 = new Person("Jessalyn","Gilsig",new Date(1971,11,30),"","Img/Jessalyn_Gilsig.jpg");
	} catch (error) {
		console.log("" + error);
	}
    //Se crean los Category
	try {
		var category1 = new Category("Anime" , "Genero que representa los dibujos animados de procedencia japonesa.");
		var category2 = new Category("Accion" , "Es un género cinematográfico en el que prima la espectacularidad de las imágenes por medio de efectos especiales de estilo clásico");
		var category3 = new Category("Ciencia ficcion" , "Es un género cuyos contenidos se encuentran basados en supuestos logros científicos o técnicos que podrían lograrse en el futuro.");
		var category4 = new Category("Comedia" , "La comedia es un genero que presenta una mayoría de escenas y situaciones humorísticas o festivas, que buscan entretener al público y generar risas, con finales que suelen ser felices.");
		var category5 = new Category("Infantil","Es un genero destinado a un público de corta edad, adaptado a sus intereses y a su nivel de comprensión");
		var category6 = new Category("Fantasia", "Es un genero que se caracteriza por contener algún elemento de fantasía, por tenue que sea.");
		var category7 = new Category("Terror" , "Es un genero que se caracteriza por su voluntad de provocar en el espectador sensaciones de pavor, terror, miedo, disgusto, repugnancia, horror, incomodidad o preocupación.");
		
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los Movie
    try {
		var movie1 = new Movie("Your name (Kimi no Na wa)",new Date(2016,08,26),"Japonesa","La “historia de milagros y amor” gira en torno a Mitsuha y Taki.","img/Your Name.jpg",null,null);
		var movie2 = new Movie("Casino Royale",new Date(2006,05,20),"Inglesa" ," La trama aborda los comienzos de James Bond como espía secreto, justo después de haber obtenido su licencia para matar. Tras prevenir un ataque terrorista en el Aeropuerto Internacional de Miami","img/Casino Royale.jpg",null,null);
		var movie3 = new Movie("Avatar",new Date(2009,02,15),"Americana","Ambientada en el año 2154 los acontecimientos que narra se desarrollan en Pandora","img/Avatar.jpg",null,coordenadas1);
		var movie4 = new Movie("Resacon en las Vegas",new Date(2009,06,05),"Americana","Doug Billings va a casarse con Tracy. Doug realizará una despedida de soltero en Las Vegas con sus amigos.","img/Resacon.jpg",null,null);
		var movie5 = new Movie("Up",new Date(2009,05,29),"Americana","La película comienza mostrando la vida de Carl Fredricksen, un niño que un día volviendo del cine conoce a una alocada niña, Ellie, que acabaría siendo su esposa.","img/Up.jpg",null,null);
		var movie6 = new Movie("Harry Potter y la piedra filosofal",new Date(2001,01,18),"Inglesa","Se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, en su primer año en Hogwarts. ","img/Harry Potter.jpg",null,coordenadas2);
		var movie7 = new Movie("It",new Date(2017,09,09),"Americana","La película cuenta la historia de siete niños en Derry, Maine, que son aterrorizados por un ser epónimo, solo para hacer frente a sus propios demonios personales en el proceso.","img/It.jpg",null,null);
    } catch (error) {
        console.log("" + error);
	}
	//Se crean los Serie
	try {
		var serie1 = new Serie("Boku No Hero Academia",new Date(2016,04,03),"Japonesa","La historia tiene lugar en un mundo donde el 80% de la población ha desarrollado superpoderes, surgiendo así héroes y villanos, tal como en los cómics","img/Boku No Hero.jpg",[season1]);
		var serie2 = new Serie("La que se avecina",new Date(2007,04,22),"Española","La serie narra las aventuras y problemas cotidianos de una peculiar comunidad de vecinos de «alto standing» de la urbanizaciónn Mirador de Montepinar, un edificio ubicado en Madrid.","img/LQSA.jpg",[season1,season2,season3]);
		var serie3 = new Serie("Vikings",new Date(2013,03,03),"Canadiense","Vikings es una serie que está basada en las leyendas sobre el vikingo Ragnar Lodbrok, uno de los héroes más famosos de la cultura nórdica que saqueó Northumbria, Francia y Bretaña.","img/Vikings.jpg",[season1,season2]);

	} catch (error) {
		console.log("" + error);
    }
    //Se crean los Resource
	try {
		var recurso1 = new Resource("120","https://recurso1.com",["Español","Ingles"],["Español","Ingles"]);
		var recurso2 = new Resource("90","https://recurso2.com",["Español"],);
		var recurso3 = new Resource("60","https://recurso3.com",["Español"],["Español","Ingles"]);
		var recurso4 = new Resource("30","https://recurso4.com",["Español","Japones"],["Español","Japones"]);
	} catch (error) {
		console.log("" + error);
	}
    
	//Se crean los User
	try {
		var user1 = new User("usuario1","usuario1@gmail.com","usuario1");
		var user2 = new User("usuario2","usuario2@gmail.com","usuario2");
		var user3 = new User("usuario3","usuario3@gmail.com","usuario3");
		var user4 = new User("usuario4","usuario4@gmail.com","usuario4");
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los Season
	try {
		var season1 = new Season("Temporada 1",["Episodio 1","Episodio 2","Episodio 3"]);
		var season2 = new Season("Temporada 2",["Episodio 1","Episodio 2",]);
		var season3 = new Season("Temporada 3",["Episodio 1",]);
        
	} catch (error) {
		console.log("" + error);
	}
    //Se crean los Coordinate
	try {
		var coordenadas1 = new Coordinate("29.326815","110.462510");
		var coordenadas2 = new Coordinate("51.691841","0.417538");
	} catch (error) {
		console.log("" + error);
	}

	//Se crean los Usuarios
	try {
		var user1 = new User("andres","andres@gmail.com","admin1");
		var user2 = new User("alba","alba@gmail.com","admin2");
		var userPrueba = new User("prueba","prueba@gmail.com","prueba");
	} catch (error) {
		console.log("" + error);
	}
	
	//Creamos VideoSystem
	try {
		var video = VideoSystem.getInstance();
	} catch (error) {
		console.log("" + error);
	}

	//Añadimos las categorias 
	try {
		video.addCategory(category1);
		video.addCategory(category2);
		video.addCategory(category3);
		video.addCategory(category4);
		video.addCategory(category5);
		video.addCategory(category6);
		video.addCategory(category7);

	} catch (error) {
		console.log("" + error);
	}

	//Añadimos las producciones
	try {
		video.addProduction(movie1);
		video.addProduction(movie2);
		video.addProduction(movie3);
		video.addProduction(movie4);
		video.addProduction(movie5);
		video.addProduction(movie6);
		video.addProduction(movie7);
		video.addProduction(serie1);
		video.addProduction(serie2);
		video.addProduction(serie3);

	} catch (error) {
		console.log("" + error);
	}

	//Añadimos los actores
	try {
		video.addActor(persona9);
		video.addActor(persona10);
		video.addActor(persona11);
		video.addActor(persona12);
	} catch (error) {
		console.log("" + error);
	}

	//Añadimos los directores
	try {
		video.addDirector(persona1);
		video.addDirector(persona2);
		video.addDirector(persona3);
		video.addDirector(persona4);
		video.addDirector(persona5);
		video.addDirector(persona6);
		video.addDirector(persona7);
		video.addDirector(persona8);
	} catch (error) {
		console.log("" + error);
	}

	//Añadimos los usuarios
	try {
		video.addUser(user1);
		video.addUser(user2);
		video.addUser(userPrueba);
	} catch (error) {
		console.log("" + error);
	}

	//Asociamos las categorias y las producciones
	try {
		video.assignCategory(category1,movie1);
		video.assignCategory(category1,serie1);
		video.assignCategory(category2,movie2);
		video.assignCategory(category2,serie3);
		video.assignCategory(category3,movie3);
		video.assignCategory(category4,movie4);
		video.assignCategory(category4,serie2);
		video.assignCategory(category5,movie5);
		video.assignCategory(category6,movie6);
		video.assignCategory(category7,movie7);
		//video.deassignCategory(category7,movie7);
	} catch (error) {
		console.log("" + error);
	}

	//Asociamos los actores y las producciones
	try {
		video.assignActor(persona9,serie2);
		video.assignActor(persona10,serie2);
		video.assignActor(persona11,serie3);
		video.assignActor(persona12,serie3);
		//video.deassignActor(persona12,serie3);
	} catch (error) {
		console.log("" + error);
	}

	//Asociamos los directores y las producciones
	try {
		video.assignDirector(persona1,movie1);
		video.assignDirector(persona2,movie2);
		video.assignDirector(persona3,movie3);
		video.assignDirector(persona4,movie4);
		video.assignDirector(persona5,movie5);
		video.assignDirector(persona6,movie6);
		video.assignDirector(persona7,movie7);
		video.assignDirector(persona8,serie1);
		//video.deassignDirector(persona8,serie1);
	} catch (error) {
		console.log("" + error);
	}
}

//Funcion que mostrara el menu navegable
function menuPopulate(){

	var menu = document.getElementById("menu");

	while (menu.firstChild) {
		menu.removeChild(menu.firstChild);
		}

	var array = ["Inicio","Categorias","Producciones","Actores","Directores"];
	var arrayHref = [showHomePage,showCategories,showProductions,showActors,ShowDirectors];

	var ul = document.createElement("ul");
	ul.setAttribute("class","nav nav-tabs");

	for (var cont=0 ; cont< 5; cont++) {
		
		var li = document.createElement("li");
		li.setAttribute("class","nav-item btn");
		var a = document.createElement("a");
		a.setAttribute("class","nav-link font-weight-bold text-white");
		li.addEventListener("click",arrayHref[cont]);
		var text = document.createTextNode(array[cont]);
		a.appendChild(text);

		menu.appendChild(ul);
		ul.appendChild(li);
		li.appendChild(a);
	}

}

//funcion que nos mostrara la pagina de incio 
function showHomePage() {
	
	var show = document.getElementById("Nombre");
	show.innerHTML = "Ustream Tv";

	var contentP = document.getElementById("principal");
	contentP.setAttribute("class","d-flex");

	while (contentP.firstChild) {
		contentP.removeChild(contentP.firstChild);
		}

	var divList = document.createElement("ul");
	divList.setAttribute("class","list-group mt-5 mr-5");
	divList.setAttribute("style","width:20%");

	contentP.appendChild(divList);

	var video = VideoSystem.getInstance();
	var categories = video.categories;
	var category = categories.next();
	while (category.done !== true){

		var butEle = document.createElement("button");
		butEle.setAttribute("class","list-group-item list-group-item-action text-center btn");
		butEle.setAttribute("value",category.value.name);
		var textB = document.createTextNode(category.value.name);
		butEle.appendChild(textB);
		
		divList.appendChild(butEle);
		
		butEle.addEventListener("click",showProductionsC);

		category = categories.next();
	}

	var divCatd = document.createElement("div");
	divCatd.setAttribute("style","width:80%;");
	divCatd.setAttribute("class","d-flex flex-column align-items-center border boder-secondary");

	var prodDes = document.createElement("h5");
	prodDes.setAttribute("class","text-center mb-3");
	var textP = document.createTextNode("Producciones destacadas");
	prodDes.appendChild(textP);

	var div1 = document.createElement("div");
	div1.setAttribute("class","carousel slide mb-5");
	div1.setAttribute("data-ride","carousel");
	div1.setAttribute("style","width:50%")

	var div2 = document.createElement("div");
	div2.setAttribute("class","carousel-inner");

	divCatd.appendChild(prodDes);
	divCatd.appendChild(div1);
	div1.appendChild(div2);

	var productions = video.productions;
	var production = productions.next();
	var count = 0;
	while (production.done !== true){

		if ( count <= 0 ) {

			var div3 = document.createElement("div");
			div3.setAttribute("class","carousel-item active");

			var imgC = document.createElement("img");
			imgC.setAttribute("class","d-block w-100");
			imgC.setAttribute("src",production.value.image);
			imgC.setAttribute("alt",production.value.title);

			
			div2.appendChild(div3);
			div3.appendChild(imgC);

			count = count+1;

		} else {

			var div3 = document.createElement("div");
			div3.setAttribute("class","carousel-item");

			var imgC = document.createElement("img");
			imgC.setAttribute("class","d-block w-100");
			imgC.setAttribute("src","img/"+production.value.title+".jpg");
			imgC.setAttribute("alt",production.value.title);

			div2.appendChild(div3);
			div3.appendChild(imgC);
		}
	
		production = productions.next();
	}

	var titleF = document.createElement("h5");
	titleF.setAttribute("class","text-center mb-1");
	var textF = document.createTextNode("Iniciar Sesion.");
	titleF.appendChild(textF);

	var formS = document.createElement("form");
	formS.setAttribute("class","mb-1 mt-2");
	formS.setAttribute("style","width:80%");
	formS.setAttribute("name","iniSesion");
	formS.setAttribute("id","formSesion");
	
	var divF1 = document.createElement("div");
	divF1.setAttribute("class","form-group");
	var labF1 = document.createElement("label");
	labF1.setAttribute("for","inputUser");
	var inpF1 = document.createElement("input");
	inpF1.setAttribute("type","text");
	inpF1.setAttribute("id","inputUser");
	inpF1.setAttribute("name","inputUser");
	inpF1.setAttribute("class","form-control");
	inpF1.setAttribute("placeholder","Usuario");
	
	var divF2 = document.createElement("div");
	divF2.setAttribute("class","form-group");
	var labF2 = document.createElement("label");
	labF2.setAttribute("for","inputPasswd");
	var inpF2 = document.createElement("input");
	inpF2.setAttribute("type","password");
	inpF2.setAttribute("id","inputPasswd");
	inpF2.setAttribute("name","inputPasswd");
	inpF2.setAttribute("class","form-control");
	inpF2.setAttribute("placeholder","Contraseña");

	var brIse = document.createElement ("button");
	brIse.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brIse.setAttribute("id","buttonIse");
	brIse.setAttribute("type","button");
	brIse.setAttribute("value","");
	var textBIse = document.createTextNode("Iniciar Sesion");
	brIse.appendChild(textBIse);

	divCatd.appendChild(titleF);
	divCatd.appendChild(formS);
	formS.appendChild(divF1);
	divF1.appendChild(labF1);
	divF1.appendChild(inpF1);
	formS.appendChild(divF2);
	divF2.appendChild(labF2);
	divF2.appendChild(inpF2);
	formS.appendChild(brIse);

	brIse.addEventListener("click", initSession);

	var divInS = document.createElement("div");
	divInS.setAttribute("id","divinfose");
	divInS.setAttribute("class","mb-3 text-primary text-center");

	divCatd.appendChild(divInS);

	var closeT = document.createElement("h5");
	closeT.setAttribute("class","text-center mb-3");
	var textC = document.createTextNode("Cerrar todas las ventanas abiertas.");
	closeT.appendChild(textC);

	var brCs = document.createElement ("button");
	brCs.setAttribute("class","btn btn-secondary btn-lg mb-3");
	brCs.setAttribute("id","buttonP");
	brCs.setAttribute("type","button");
	brCs.setAttribute("value","");
	var textBCs = document.createTextNode("Cerrar");
	brCs.appendChild(textBCs);

	brCs.addEventListener("click", closeWindows);

	divCatd.appendChild(closeT);
	divCatd.appendChild(brCs);

	contentP.appendChild(divCatd);

	window.onload = checkCookie();
}

//Ahora Crearemos una funcion que nos mostrara las categorias
function showCategories(){

	var cookieExist = getCookie("userName");

	var show = document.getElementById("Nombre");
	show.innerHTML = "Categorias";

	var contentP = document.getElementById("principal");
	contentP.setAttribute("class","row");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	if (cookieExist !== "") {
		
		var columN = document.createElement("div");
		columN.setAttribute("class","col-6 col-md-4 mb-4");
		var contentN = document.createElement("div");
		contentN.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src","img/categorias.jpg");
		image.setAttribute("alt","Gestionar categoria");

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("h5");
		paragraph.setAttribute("class","card-text font-weight-bold");
		paragraph.setAttribute("style","max-height:45px; overflow:hidden; min-height:45px");
		var text = document.createTextNode("Gestionar categorias");
		paragraph.appendChild(text);

		var divbuttons = document.createElement("div");
		divbuttons.setAttribute = ("class","d-flex justify-content-between");

		var button1 = document.createElement("button");
		button1.setAttribute("class","btn btn-primary");
		button1.setAttribute("id","buttonC");
		button1.setAttribute("type","button");
		button1.setAttribute("value","");
		var textB = document.createTextNode("Gestionar");
		button1.appendChild(textB);
		
		contentP.appendChild(columN);
		columN.appendChild(contentN);
		contentN.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(divbuttons);
		divbuttons.appendChild(button1);

		button1.addEventListener("click",formCategory);

	}

	var video = VideoSystem.getInstance();
	var categories = video.categories;
	var category = categories.next();
	while (category.done !== true){

		var colum = document.createElement("div");
		colum.setAttribute("class","col-6 col-md-4 mb-4");
		var content = document.createElement("div");
		content.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src","img/"+category.value.name+".jpg");
		image.setAttribute("alt",category.value.name);

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("h5");
		paragraph.setAttribute("class","card-text font-weight-bold");
		paragraph.setAttribute("style","max-height:45px; overflow:hidden; min-height:45px");
		var text = document.createTextNode(category.value.name);
		paragraph.appendChild(text);

		var divbuttons = document.createElement("div");
		divbuttons.setAttribute("class","d-flex justify-content-between");

		var button = document.createElement("button");
		button.setAttribute("class","btn btn-primary");
		button.setAttribute("id","buttonC");
		button.setAttribute("type","button");
		button.setAttribute("value",category.value.name);
		var textB = document.createTextNode("Ver Producciones");
		button.appendChild(textB);

		contentP.appendChild(colum);
		colum.appendChild(content);
		content.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(divbuttons);
		divbuttons.appendChild(button);
		
		button.addEventListener("click",showProductionsC);

		category = categories.next();
	}

	
}

//Funcion que mostrara las producciones a partir de una categoria.
function showProductionsC(){
	
	var cat = this.value;
	var show = document.getElementById("Nombre");
	show.innerHTML = "Producciones de "+cat;

	var contentP = document.getElementById("principal");
	contentP.setAttribute("class","row");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	//Se tienen que poner las producciones de una categoria en concreto.
	var search = false;
	video = VideoSystem.getInstance();
	var categories = video.categories;
	var category = categories.next();
	while ((category.done !== true) && (!search)){

		if (category.value.name == this.value) {
			
			//comienza el iterador de las categorias del boton seleccionado
			var productions = video.getProductionsCategory(category.value);
			var production = productions.next();
			while (production.done !== true){

				var colum = document.createElement("div");
				colum.setAttribute("class","col-6 col-md-4 mb-4");
				var content = document.createElement("div");
				content.setAttribute("class","card");
				var image = document.createElement("img");
				image.setAttribute("class","card-img-top");

				image.setAttribute("src",production.value.image);
				image.setAttribute("alt",production.value.title);

				var body = document.createElement("div");
				body.setAttribute("class","card-body");
				var paragraph = document.createElement("p");
				paragraph.setAttribute("class","card-text font-weight-bold");
				paragraph.setAttribute("style","min-height:45px ; max-height:45px ; overflow:hidden");
				var text = document.createTextNode(production.value.title);
				paragraph.appendChild(text);

				var button = document.createElement("button");
				button.setAttribute("class","btn btn-primary");
				button.setAttribute("id","buttonC");
				button.setAttribute("type","button");
				button.setAttribute("value",production.value.title);
				var textB = document.createTextNode("Ver Produccion");
				button.appendChild(textB);
				
				contentP.appendChild(colum);
				colum.appendChild(content);
				content.appendChild(body);
				body.appendChild(image);
				body.appendChild(paragraph);
				body.appendChild(button);

				button.addEventListener("click",showProductionAlone);
				
				production = productions.next();
			}

			search = true;
		}
		
		category = categories.next();
	}
}

//Funcion que mostrara las producciones desde el menu
function showProductions(){

	var cookieExist = getCookie("userName");

	var show = document.getElementById("Nombre");
	show.innerHTML = "Producciones";

	var contentP = document.getElementById("principal");
	contentP.setAttribute("class","row");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	if (cookieExist !== "") {
		
		var columN = document.createElement("div");
		columN.setAttribute("class","col-6 col-md-4 mb-4");
		var contentN = document.createElement("div");
		contentN.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src","img/producciones.jpg");
		image.setAttribute("alt","Gestionar Producciones");

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("h5");
		paragraph.setAttribute("class","card-text font-weight-bold");
		paragraph.setAttribute("style","max-height:45px; overflow:hidden; min-height:45px");
		var text = document.createTextNode("Gestionar producciones");
		paragraph.appendChild(text);

		var divbuttons = document.createElement("div");
		divbuttons.setAttribute = ("class","d-flex justify-content-between");

		var button1 = document.createElement("button");
		button1.setAttribute("class","btn btn-primary");
		button1.setAttribute("id","buttonC");
		button1.setAttribute("type","button");
		button1.setAttribute("value","");
		var textB = document.createTextNode("Gestionar");
		button1.appendChild(textB);
		
		contentP.appendChild(columN);
		columN.appendChild(contentN);
		contentN.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(divbuttons);
		divbuttons.appendChild(button1);

		button1.addEventListener("click",formProduction);

	}

	video = VideoSystem.getInstance();
	var productions = video.productions;
	var production = productions.next();
	while (production.done !== true){

		var colum = document.createElement("div");
		colum.setAttribute("class","col-6 col-md-4 mb-4");
		var content = document.createElement("div");
		content.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src",production.value.image);
		image.setAttribute("alt",production.value.title);

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("p");
		paragraph.setAttribute("class","card-text font-weight-bold");
		paragraph.setAttribute("style","min-height:45px ; max-height:45px ; overflow:hidden");
		var text = document.createTextNode(production.value.title);
		paragraph.appendChild(text);

		var button = document.createElement("button");
		button.setAttribute("class","btn btn-primary");
		button.setAttribute("id","buttonC");
		button.setAttribute("type","button");
		button.setAttribute("value",production.value.title);
		var textB = document.createTextNode("Ver Produccion");
		button.appendChild(textB);
				
		contentP.appendChild(colum);
		colum.appendChild(content);
		content.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(button);

		button.addEventListener("click",showProductionAlone);
				
		production = productions.next();
	}
}

//Funcion que mostrara los actores desde el menu
function showActors(){

	var cookieExist = getCookie("userName");
	
	var show = document.getElementById("Nombre");
	show.innerHTML = "Actores";

	var contentP = document.getElementById("principal");
	contentP.setAttribute("class","row");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	if (cookieExist !== "") {
		
		var columN = document.createElement("div");
		columN.setAttribute("class","col-6 col-md-4 mb-4");
		var contentN = document.createElement("div");
		contentN.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src","img/persona.png");
		image.setAttribute("alt","Gestionar Actores");

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("h5");
		paragraph.setAttribute("class","card-text font-weight-bold");
		paragraph.setAttribute("style","max-height:45px; overflow:hidden; min-height:45px");
		var text = document.createTextNode("Gestionar actores");
		paragraph.appendChild(text);

		var divbuttons = document.createElement("div");
		divbuttons.setAttribute = ("class","d-flex justify-content-between");

		var button1 = document.createElement("button");
		button1.setAttribute("class","btn btn-primary");
		button1.setAttribute("id","buttonC");
		button1.setAttribute("type","button");
		button1.setAttribute("value","");
		var textB = document.createTextNode("Gestionar");
		button1.appendChild(textB);
		
		contentP.appendChild(columN);
		columN.appendChild(contentN);
		contentN.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(divbuttons);
		divbuttons.appendChild(button1);

		button1.addEventListener("click",formPerson);

	}

	var video = VideoSystem.getInstance();
	var actors = video.actors;
	var actor = actors.next();
	while (actor.done !== true){

		var colum = document.createElement("div");
		colum.setAttribute("class","col-6 col-md-4 mb-4");
		var content = document.createElement("div");
		content.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");
		image.setAttribute("src",actor.value.picture);
		image.setAttribute("alt",actor.value.name);

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("p");
		paragraph.setAttribute("class","card-text font-weight-bold");
		paragraph.setAttribute("style","max-height:45px; overflow:hidden; min-height:45px");
		var text = document.createTextNode(actor.value.name+" "+actor.value.lastName1);
		paragraph.appendChild(text);

		var button = document.createElement("button");
		button.setAttribute("class","btn btn-primary");
		button.setAttribute("id","buttonC");
		button.setAttribute("type","button");
		button.setAttribute("value",actor.value.name);
		var textB = document.createTextNode("Biografia");
		button.appendChild(textB);
		
		contentP.appendChild(colum);
		colum.appendChild(content);
		content.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(button);

		button.addEventListener("click",showActorAlone);

		actor = actors.next();
	}
}

//Funcion que mostrara los directores
function ShowDirectors() {

	var cookieExist = getCookie("userName");
	
	var show = document.getElementById("Nombre");
	show.innerHTML = "Directores";

	var contentP = document.getElementById("principal");
	contentP.setAttribute("class","row");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	if (cookieExist !== "") {
		
		var columN = document.createElement("div");
		columN.setAttribute("class","col-6 col-md-4 mb-4");
		var contentN = document.createElement("div");
		contentN.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src","img/persona.png");
		image.setAttribute("alt","Gestionar Directores");

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("h5");
		paragraph.setAttribute("class","card-text font-weight-bold");
		paragraph.setAttribute("style","max-height:45px; overflow:hidden; min-height:45px");
		var text = document.createTextNode("Gestionar Directores");
		paragraph.appendChild(text);

		var divbuttons = document.createElement("div");
		divbuttons.setAttribute = ("class","d-flex justify-content-between");

		var button1 = document.createElement("button");
		button1.setAttribute("class","btn btn-primary");
		button1.setAttribute("id","buttonC");
		button1.setAttribute("type","button");
		button1.setAttribute("value","");
		var textB = document.createTextNode("Gestionar");
		button1.appendChild(textB);
		
		contentP.appendChild(columN);
		columN.appendChild(contentN);
		contentN.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(divbuttons);
		divbuttons.appendChild(button1);

		button1.addEventListener("click",formPerson);

	}

	var video = VideoSystem.getInstance();
	var directors = video.directors;
	var director = directors.next();
	while (director.done !== true){

		var colum = document.createElement("div");
		colum.setAttribute("class","col-6 col-md-4 mb-4");
		var content = document.createElement("div");
		content.setAttribute("class","card");
		var image = document.createElement("img");
		image.setAttribute("class","card-img-top");

		image.setAttribute("src",director.value.picture);
		image.setAttribute("alt",director.value.name);

		var body = document.createElement("div");
		body.setAttribute("class","card-body");
		var paragraph = document.createElement("p");
		paragraph.setAttribute("class","card-text font-weight-bold");
		var text = document.createTextNode(director.value.name+" "+director.value.lastName1);
		paragraph.appendChild(text);

		var button = document.createElement("button");
		button.setAttribute("class","btn btn-primary");
		button.setAttribute("id","buttonC");
		button.setAttribute("type","button");
		button.setAttribute("value",director.value.name);
		var textB = document.createTextNode("Biografia");
		button.appendChild(textB);
		
		contentP.appendChild(colum);
		colum.appendChild(content);
		content.appendChild(body);
		body.appendChild(image);
		body.appendChild(paragraph);
		body.appendChild(button);

		button.addEventListener("click",showDirectorAlone);

		director = directors.next();
	}
}

//Funcion que muestra a un solo actor con su informacion.
function showActorAlone(){

	var show = document.getElementById("Nombre");
	show.innerHTML = "Actores";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var search = false;
	var video = VideoSystem.getInstance();
	var actors = video.actors;
	var actor = actors.next();
	while ((actor.done !== true) && (!search)){

		if (actor.value.name == this.value) {
			
			var content = document.createElement("div");
			content.setAttribute("class", "d-flex")
			content.setAttribute("class","col-3");
			var image = document.createElement("img");

			image.setAttribute("src",actor.value.picture);
			image.setAttribute("alt",actor.value.name);
			image.setAttribute("style","max-heigth:150px;");
			image.setAttribute("class", "border border-info");

			var info = document.createElement("div");
			info.setAttribute("class", "ml-3");
			info.setAttribute("class","col-9");

			var title1 = document.createElement("h6");
			var text1 = document.createTextNode("Nombre:");
			title1.appendChild(text1);
			var name = document.createElement("p");
			var textN = document.createTextNode(actor.value.name);
			name.appendChild(textN);

			var title2 = document.createElement("h6");
			var text2 = document.createTextNode("Apellido:");
			title2.appendChild(text2);
			var surname = document.createElement("p");
			var textS = document.createTextNode(actor.value.lastName1);
			surname.appendChild(textS);

			var title3 = document.createElement("h6");
			var text3 = document.createTextNode("Fecha de nacimiento:");
			title3.appendChild(text3);
			var date = document.createElement("p");
			var textD = document.createTextNode(actor.value.born.toLocaleDateString());
			date.appendChild(textD);

			var title4 = document.createElement("h6");
			var text4 = document.createTextNode("Filmografia:");
			title4.appendChild(text4);
				
			contentP.appendChild(content);
			contentP.appendChild(info);
			content.appendChild(image);
			info.appendChild(title1);
			info.appendChild(name);
			info.appendChild(title2);
			info.appendChild(surname);
			info.appendChild(title3);
			info.appendChild(date);
			info.appendChild(title4);

			var prod =document.createElement("div");
			prod.setAttribute("class","d-flex");
			info.appendChild(prod);

			var productions = video.getProductionsActor(actor.value);
			var production = productions.next();
			while (production.done !== true){
				
				var divI = document.createElement("div");
				divI.setAttribute("class", "mr-2 text-center");

				var image2 = document.createElement("img");
				image2.setAttribute("src",production.value.image);
				image2.setAttribute("alt",production.value.image);
				image2.setAttribute("style", "height: 80px");
				image2.setAttribute("class","d-block mb-1");

				var b1 = document.createElement ("button");
				b1.setAttribute("class","btn btn-default btn-sm mb-1");
				b1.setAttribute("id","buttonP");
				b1.setAttribute("type","button");
				b1.setAttribute("value",production.value.title);
				var textBt = document.createTextNode(production.value.title);
				b1.appendChild(textBt);

				b1.addEventListener("click",showProductionAlone);

				prod.appendChild(divI);
				divI.appendChild(image2);
				divI.appendChild(b1);
				production = productions.next();
			}

			search = true;

		}

		actor = actors.next();
		

	}
}

//funcion que muestra a un solo director con su informacion
function showDirectorAlone(){

	var show = document.getElementById("Nombre");
	show.innerHTML = "Actores";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var search = false;
	var video = VideoSystem.getInstance();
	var directors = video.directors;
	var director = directors.next();
	while ((director.done !== true) && (!search)){

		if (director.value.name == this.value) {
			
			var content = document.createElement("div");
			content.setAttribute("class", "d-flex")
			content.setAttribute("class","col-3");
			var image = document.createElement("img");

			image.setAttribute("src",director.value.picture);
			image.setAttribute("alt",director.value.name);
			image.setAttribute("style","max-heigth:300px;");
			image.setAttribute("class", "border border-info");

			var info = document.createElement("div");
			info.setAttribute("class", "ml-3");
			info.setAttribute("class","col-9");

			var title1 = document.createElement("h6");
			var text1 = document.createTextNode("Nombre:");
			title1.appendChild(text1);
			var name = document.createElement("p");
			var textN = document.createTextNode(director.value.name);
			name.appendChild(textN);

			var title2 = document.createElement("h6");
			var text2 = document.createTextNode("Apellido:");
			title2.appendChild(text2);
			var surname = document.createElement("p");
			var textS = document.createTextNode(director.value.lastName1);
			surname.appendChild(textS);

			var title3 = document.createElement("h6");
			var text3 = document.createTextNode("Fecha de nacimiento:");
			title3.appendChild(text3);
			var date = document.createElement("p");
			var textD = document.createTextNode(director.value.born.toLocaleDateString());
			date.appendChild(textD);

			var title4 = document.createElement("h6");
			var text4 = document.createTextNode("Filmografia:");
			title4.appendChild(text4);
				
			contentP.appendChild(content);
			contentP.appendChild(info);
			content.appendChild(image);
			info.appendChild(title1);
			info.appendChild(name);
			info.appendChild(title2);
			info.appendChild(surname);
			info.appendChild(title3);
			info.appendChild(date);
			info.appendChild(title4);

			var prod =document.createElement("div");
			prod.setAttribute("class","d-flex");
			info.appendChild(prod);

			var productions = video.getProductionsDirector(director.value);
			var production = productions.next();
			while (production.done !== true){
				
				var divI = document.createElement("div");
				divI.setAttribute("class", "mr-2 text-center");

				var image2 = document.createElement("img");
				image2.setAttribute("src",production.value.image);
				image2.setAttribute("alt",production.value.image);
				image2.setAttribute("style", "height: 80px");
				image2.setAttribute("class","d-block mb-1");

				var b1 = document.createElement ("button");
				b1.setAttribute("class","btn btn-default btn-sm mb-1");
				b1.setAttribute("id","buttonP");
				b1.setAttribute("type","button");
				b1.setAttribute("value",production.value.tile);
				var textBt = document.createTextNode(production.value.title);
				b1.appendChild(textBt);

				b1.addEventListener("click",showProductionAlone);

				prod.appendChild(divI);
				divI.appendChild(image2);
				divI.appendChild(b1);
				production = productions.next();
			}

			search = true;

		}

		director = directors.next();

	}
}

//funcion que muestra los datos de una produccion.
function showProductionAlone(){

	var show = document.getElementById("Nombre");
	show.innerHTML = "Produccion";

	var contentP = document.getElementById("principal");

	while (contentP.firstChild) {
	contentP.removeChild(contentP.firstChild);
	}

	var search = false;
	var video = VideoSystem.getInstance();
	var productions = video.productions;
	var production = productions.next();
	while ((production.done !== true) && (!search)){

		if (production.value.title == this.value) {
			
			var content = document.createElement("div");
			content.setAttribute("class", "d-flex");
			content.setAttribute("class","col-3");
			var image = document.createElement("img");

			image.setAttribute("src",production.value.image);
			image.setAttribute("alt",production.value.title);
			image.setAttribute("style","max-heigth:300px;");
			image.setAttribute("class", "border border-info");

			var info = document.createElement("div");
			info.setAttribute("class", "ml-3");
			info.setAttribute("class","col-9");

			var title1 = document.createElement("h6");
			var text1 = document.createTextNode("Titulo:");
			title1.appendChild(text1);
			var name = document.createElement("p");
			name.setAttribute("id","prodN");
			var textN = document.createTextNode(production.value.title);
			name.appendChild(textN);

			var title2 = document.createElement("h6");
			var text2 = document.createTextNode("Nacionalidad:");
			title2.appendChild(text2);
			var nationality = document.createElement("p");
			var textNa = document.createTextNode(production.value.nationality);
			nationality.appendChild(textNa);

			
			var title3 = document.createElement("h6");
			title3.setAttribute("class", "mt-2")
			var text3 = document.createTextNode("Publicacion:");
			title3.appendChild(text3);
			var publication = document.createElement("p");
			var textP = document.createTextNode(production.value.publication.toLocaleDateString());
			publication.appendChild(textP);

			var title4 = document.createElement("h6");
			title4.setAttribute("class", "mt-2")
			var text4 = document.createTextNode("Sinopsis:");
			title4.appendChild(text4);
			var synopsis = document.createElement("p");
			var textS = document.createTextNode(production.value.synopsis);
			synopsis.appendChild(textS);

			contentP.appendChild(content);
			contentP.appendChild(info);
			content.appendChild(image);
			info.appendChild(title1);
			info.appendChild(name);
			info.appendChild(title2);
			info.appendChild(textNa);
			info.appendChild(title3);
			info.appendChild(publication);
			info.appendChild(title4);
			info.appendChild(synopsis);

			if(production.value instanceof Movie){

				var titleR = document.createElement("h6");
				titleR.setAttribute("class", "mt-2")
				var textR = document.createTextNode("Recurso:");
				titleR.appendChild(textR);

				var br = document.createElement ("button");
				br.setAttribute("class","btn btn-default btn-sm mb-1");
				br.setAttribute("id","buttonP");
				br.setAttribute("type","button");
				br.setAttribute("value",production.value.title);
				var textBr = document.createTextNode("Ver");
				br.appendChild(textBr);

				info.appendChild(titleR);
				info.appendChild(br);

				br.addEventListener("click", openWindows);

			}else{

				var titleR = document.createElement("h6");
				titleR.setAttribute("class", "mt-2")
				var textR = document.createTextNode("Temporadas:");
				titleR.appendChild(textR);

				var br = document.createElement ("button");
				br.setAttribute("class","btn btn-default btn-sm mb-1");
				br.setAttribute("id","buttonP");
				br.setAttribute("type","button");
				br.setAttribute("value",production.value.title);
				var textBr = document.createTextNode("Ver");
				br.appendChild(textBr);

				info.appendChild(titleR);
				info.appendChild(br);

				br.addEventListener("click", openWindows);

			}

			var title5 = document.createElement("h6");
			title5.setAttribute("class", "mt-2")
			var text5 = document.createTextNode("Director:");
			title5.appendChild(text5);

			info.appendChild(title5);

			var prod =document.createElement("div");
			prod.setAttribute("class","d-flex");
			info.appendChild(prod);

			var directors = video.directors;
			var director = directors.next();
			while (director.done !== true){

				var productions = video.getProductionsDirector(director.value);
				var production = productions.next();
				while (production.done !== true){
					
					if(production.value.title == this.value){

						var divI = document.createElement("div");
						divI.setAttribute("class", "mr-2 text-center");

						var image2 = document.createElement("img");
						image2.setAttribute("src",director.value.picture);
						image2.setAttribute("alt",director.value.name);
						image2.setAttribute("style", "height: 80px");
						image2.setAttribute("class","d-block mb-1");

						var b1 = document.createElement ("button");
						b1.setAttribute("class","btn btn-default btn-sm mb-1");
						b1.setAttribute("id","buttonP");
						b1.setAttribute("type","button");
						b1.setAttribute("value",director.value.name);
						var textBt = document.createTextNode(director.value.name+" "+director.value.lastName1);
						b1.appendChild(textBt);

						b1.addEventListener("click",showDirectorAlone);

						prod.appendChild(divI);
						divI.appendChild(image2);
						divI.appendChild(b1);
	
					}

					production = productions.next();
				}
				
				director = directors.next();
			}

			var title6 = document.createElement("h6");
			title6.setAttribute("class", "mt-2")
			var text6 = document.createTextNode("Reparto:");
			title6.appendChild(text6);

			info.appendChild(title6);

			var prod2 =document.createElement("div");
			prod2.setAttribute("class","d-flex");
			info.appendChild(prod2);

			var actors = video.actors;
			var actor = actors.next();
			
			while (actor.done !== true) {
				
				var productions = video.getProductionsActor(actor.value);
				var production = productions.next();
				while (production.done !== true) {
					
					if(production.value.title == this.value){

						var divI = document.createElement("div");
						divI.setAttribute("class", "mr-2 text-center");

						var image2 = document.createElement("img");
						image2.setAttribute("src",actor.value.picture);
						image2.setAttribute("alt",actor.value.name);
						image2.setAttribute("style", "height: 80px");
						image2.setAttribute("class","d-block mb-1");

						var b1 = document.createElement ("button");
						b1.setAttribute("class","btn btn-default btn-sm mb-1");
						b1.setAttribute("id","buttonP");
						b1.setAttribute("type","button");
						b1.setAttribute("value",actor.value.name);
						var textBt = document.createTextNode(actor.value.name+" "+actor.value.lastName1);
						b1.appendChild(textBt);

						b1.addEventListener("click",showActorAlone);

						prod2.appendChild(divI);
						divI.appendChild(image2);
						divI.appendChild(b1);
	
					}

					production = productions.next();
				}
				
				actor = actors.next();
			}

			search = true;

		}

		production = productions.next();

	}
	
}

var arrayWindows = new Array();

function openWindows() {
	if (window.name.open){

		window.name.focus();

	} else {

	var newWindow = window.open("Window.html",this.value,"toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=250,width=500,height=500");
	arrayWindows.push(newWindow);

	}
}

function closeWindows() {
	
	var index = 0;

	if (!arrayWindows.length !== 0) {
		
		while ( index < arrayWindows.length) {
			console.log("entra al while");
			arrayWindows[index].close();
			arrayWindows.splice(index, 1);
		}
	}
}

function showResource() {

	var prod = document.getElementById("prodN").innerHTML;

	for ( let index = 0 ; index < arrayWindows.length ; index++){
		if (arrayWindows[index].name === prod) {
			var windowS = arrayWindows[index];
		}
	}

	var contentP = windowS.document.getElementById("data");

	var search = false;
	var video = VideoSystem.getInstance();
	var productions = video.productions;
	var production = productions.next();
	while ((production.done !== true) && (!search)){

		if (production.value.title == prod) {

			var content = document.createElement("div");
			content.setAttribute("class", "d-flex");
			content.setAttribute("class","col-3");
			var image = document.createElement("img");

			image.setAttribute("src",production.value.image);
			image.setAttribute("alt",production.value.title);
			image.setAttribute("style","max-heigth:300px;");
			image.setAttribute("class", "border border-info");

			var info = document.createElement("div");
			info.setAttribute("class", "ml-3");
			info.setAttribute("class","col-9");

			var title1 = document.createElement("h6");
			var text1 = document.createTextNode("Titulo:");
			title1.appendChild(text1);
			var name = document.createElement("p");
			var textN = document.createTextNode(production.value.title);
			name.appendChild(textN);

			var title2 = document.createElement("h6");
			var text2 = document.createTextNode("Nacionalidad:");
			title2.appendChild(text2);
			var nationality = document.createElement("p");
			var textNa = document.createTextNode(production.value.nationality);
			nationality.appendChild(textNa);

			
			var title3 = document.createElement("h6");
			title3.setAttribute("class", "mt-2")
			var text3 = document.createTextNode("Publicacion:");
			title3.appendChild(text3);
			var publication = document.createElement("p");
			var textP = document.createTextNode(production.value.publication.toLocaleDateString());
			publication.appendChild(textP);

			var title4 = document.createElement("h6");
			title4.setAttribute("class", "mt-2")
			var text4 = document.createTextNode("Sinopsis:");
			title4.appendChild(text4);
			var synopsis = document.createElement("p");
			var textS = document.createTextNode(production.value.synopsis);
			synopsis.appendChild(textS);

			contentP.appendChild(content);
			contentP.appendChild(info);
			content.appendChild(image);
			info.appendChild(title1);
			info.appendChild(name);
			info.appendChild(title2);
			info.appendChild(textNa);
			info.appendChild(title3);
			info.appendChild(publication);
			info.appendChild(title4);
			info.appendChild(synopsis);

			if(production.value instanceof Movie){

				var titleR = document.createElement("h6");
				titleR.setAttribute("class", "mt-2")
				var textR = document.createTextNode("Recurso:");
				titleR.appendChild(textR);
				var resource = document.createElement("p");
				var textR2 = document.createTextNode(production.value.resource);
				resource.appendChild(textR2);

				var titleL = document.createElement("h6");
				titleL.setAttribute("class", "mt-2")
				var textL = document.createTextNode("Localizaciones:");
				titleL.appendChild(textL);
				var locations = document.createElement("p");
				var textL2 = document.createTextNode(production.value.locations);
				locations.appendChild(textL2);

				info.appendChild(titleR);
				info.appendChild(resource);
				info.appendChild(titleL);
				info.appendChild(locations);

			}

			if(production.value instanceof Serie) {

				var titleS = document.createElement("h6");
				titleS.setAttribute("class", "mt-2")
				var textS = document.createTextNode("Temporadas:");
				titleS.appendChild(textS);
				var seasons = document.createElement("p");
				var textS = document.createTextNode(production.value.seasons);
				seasons.appendChild(textS);

				info.appendChild(titleS);
				info.appendChild(seasons);

			}

			search = true;

		}
		production = productions.next();
	}

}

//Funcion que invoca todas las funciones necesarias.
function init(){
	initPopulate();
	menuPopulate();
	showHomePage();
}

window.onload = init;