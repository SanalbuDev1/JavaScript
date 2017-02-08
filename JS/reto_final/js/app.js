var stage1 = document.getElementById('stage1');
var stage2 = document.getElementById('stage2');

var next = document.getElementById('next');
var prev = document.getElementById('prev');

var carac = document.getElementsByClassName('carac');
var numero2 = document.getElementById('numero2');

var option= document.getElementsByClassName('option');
var playeroption=null;


 stage2.style.display = 'none';
 stage1.classList.add('zoomInDown');

 next.onclick = function(){

	var ttp= new Array("papel","piedra","tijera");
	var optionpc = Math.floor(Math.random()*ttp.length);
	console.log(optionpc);
	if(playeroption==0 && optionpc==0){
		tiro1.innerHTML = imagenes[0];
		tiro2.innerHTML = imagenes[0];
		ganador.innerHTML = "empate";

	}else if(playeroption==0 && optionpc==1){
		tiro1.innerHTML = imagenes[0];
		tiro2.innerHTML = imagenes[1];
		ganador.innerHTML = "el ganador es papel";
	}else if(playeroption==0 && optionpc==2){
		tiro1.innerHTML = imagenes[0];
		tiro2.innerHTML = imagenes[2];
		ganador.innerHTML = "El ganador es tijeras";
	}

	if(playeroption==1 && optionpc==0){
		tiro1.innerHTML = imagenes[1];
		tiro2.innerHTML = imagenes[0];
		ganador.innerHTML = "el ganador es papel";

	}else if(playeroption==1 && optionpc==1){
		tiro1.innerHTML = imagenes[1];
		tiro2.innerHTML = imagenes[1];
		ganador.innerHTML = "empate";
	}else if(playeroption==1 && optionpc==2){
		tiro1.innerHTML = imagenes[1];
		tiro2.innerHTML = imagenes[2];
		ganador.innerHTML = "El ganador es piedra";
	}

	if(playeroption==2 && optionpc==0){
		tiro1.innerHTML = imagenes[2];
		tiro2.innerHTML = imagenes[0];
		ganador.innerHTML = "el ganador es tijera";

	}else if(playeroption==2 && optionpc==1){
		tiro1.innerHTML = imagenes[2];
		tiro2.innerHTML = imagenes[1];
		ganador.innerHTML = "el ganador es piedra";
	}else if(playeroption==2 && optionpc==2){
		tiro1.innerHTML = imagenes[2];
		tiro2.innerHTML = imagenes[2];
		ganador.innerHTML = "Empate";
	}



 	stage1.classList.remove('zoomInDown');
 	stage1.classList.add('zoomOutDown');

 	setTimeout(function(){
 		stage1.style.display = 'none';
 	},1000);


 	setTimeout(function(){

 		stage2.classList.remove('zoomOutDown');
 		stage2.classList.add('zoomInDown');
 		stage2.style.display = 'block';
 	},1200);




}

 prev.onclick = function(){
 	stage2.classList.remove('zoomInDown');
 	stage2.classList.add('zoomOutDown');

 	setTimeout(function(){
 		stage2.style.display = 'none';
 	},1000);


	setTimeout(function(){
 		stage1.classList.remove('zoomOutDown');
 		stage1.classList.add('zoomInDown');
 		stage1.style.display = 'block';
 	},1200);




 }



function activeCharacter(elem){
	elem.classList.add('active');

	
}
function inactiveCarac(){
	for (var i = 0 ; i < option.length ; i++) {
			option[i].classList.remove('active');
	}
}

for (var j = 0 ; j < option.length; j++) {
	option[j].onclick=function(){
		playeroption=this.getAttribute('data-option');
		inactiveCarac();
		activeCharacter(this);
	}
}


//nombre

var registro_p=document.getElementById('nombre_p');
var nombre2=document.getElementById('nombre2');

var ganador=document.getElementById('ganador');
var imagenes=new Array("<img src='imgs/papel.jpg' width='200px'>","<img src='imgs/piedra.jpg' width='200px'>","<img src='imgs/tijera.jpg' width='200px'>");
registro_p.onclick=function(){
	
	var nombre = document.getElementById('nombre').value;
	nombre2.innerHTML= "Bienvenido " + nombre;
}


