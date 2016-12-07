var mar = document.getElementById('mar');
var ref = document.getElementById('ref');
var mod = document.getElementById('mod');
var ima = document.getElementById('ima');
var cil = document.getElementById('cil');

var ini = document.getElementById('ini');
var det = document.getElementById('det');
var ava = document.getElementById('ava');
var fre = document.getElementById('fre');
var giz = document.getElementById('giz');
var gde = document.getElementById('gde');

var vhcl = document.getElementById('vhcl');

var vini = false; // No esta prendido
var vdet = true; // Si esta detenido
var vgi  = true; // Si puede girar a la izquiera
var vgd  = false; // No puede girar a la derecha

var vehiculo = {
	// Atributos
	marca: 'Volkswagen',
	referencia: 'Beetle',
	modelo: 2017,
	imgen: 'imgs/Beetle.png',
	cilindraje: 2000,

	// Metodos
	info: function(){
		mar.innerHTML ='<span>Marca:</span>' 			+this.marca;
		ref.innerHTML ='<span>Referencia:</span>' 		+this.referencia;
		mod.innerHTML ='<span>Modelo:</span>' 			+this.modelo;
		ima.innerHTML = '<span>Imagen:</span><img src=' +this.imgen+'>';
		cil.innerHTML ='<span>Cilindraje:</span>' 		+this.cilindraje;

	},
	controles: function(){
		ini.onclick = function(){
			vini = true;
			vhcl.classList.add('arrancar');
		}
		det.onclick = function() {
			if(vdet == false) {
				vini = false;
				vhcl.classList.remove('arrancar');
			} else {
				alert("Cuidado no puede apagar el vehiculo.");
			}
		}
		
		ava.onclick = function(){
			if(vini == true){
				vdet = false;
				vhcl.classList.remove('frenar');
				vhcl.classList.add('avanzar');
		} else {
			alert("Debe iniciar el vehiculo para poder avanzar.");
		}
	}
		fre.onclick = function(){
			vdet == true;
			vhcl.classList.add('frenar');
	}
		giz.onclick = function(){
			if (vini == true && vdet == false) {
				vgi = false;
				vgd = true;
				vhcl.classList.remove('derecha');
				vhcl.classList.add('izquierda');
			} else{
				alert("No puede girar");
			}
			
		}
		gde.onclick = function(){
			if (vini == true && vdet == false) {
				vgi = true;
				vgd = false;
				vhcl.classList.remove('izquierda');
				vhcl.classList.add('derecha');
			} else{
				alert("No puede girar");
			}
		}

	}

}