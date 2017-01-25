
	
	var emarca=document.getElementById('emarca');
	var ereferencia=document.getElementById('ereferencia');
	var emodelo=document.getElementById('emodelo');
	var eimagen=document.getElementById('eimagen');
	var ecilindraje=document.getElementById('ecilindraje');

	var iniciar=document.getElementById('ini');
	var pausar=document.getElementById('pau');
	var detener=document.getElementById('det');
	var avanzar=document.getElementById('ava');
	var izquierda=document.getElementById('izq');
	var derecha=document.getElementById('der');
	var apagar=document.getElementById('apa');
	
	var vhcl=document.getElementById('vhcl');

	//validaciones

	var valorIni= false;
	var vdet=true;
	var vgi=false;
	var vgd=false;


	var Vehiculo = {
		//atributos
		marca:'Volkswagen',
		referncia:'Beatle',
		modelo: 2017,
		imagen: 'imgs/vw.png',
		cilindrajre:2000,
		//metodos

		info:function(){
			emarca.innerHTML = '<span>Marca</span>'+this.marca;
			ereferencia.innerHTML = '<span>Referencia</span>'+this.referncia;
			emodelo.innerHTML = '<span>Modelo</span>'+this.modelo;
			eimagen.innerHTML = '<span>Imagen</span>'+'<img src='+this.imagen+'>';
			ecilindraje.innerHTML = '<span>Cilindraje</span>'+this.cilindrajre;

		},
		
		controles:function(){
			iniciar.onclick=function(){
					vhcl.classList.add('arrancar');
					valorIni=true;
					vdet=true;
			}
			pausar.onclick=function(){
					if(valorIni == true && vdet==false){
						vhcl.classList.add('detener');
						
						vdet=true;
					}else{
						alert('el carro no esta en movimiento');
					}
					
					
					
			}
			detener.onclick=function(){

					if(valorIni && vdet==true){
						vhcl.classList.add('retroceso');
					}else{
						alert('Prenda el vehiculo')
					}
					

			}
			avanzar.onclick=function(){
					if(valorIni){
						 vdet=false;
						 vhcl.classList.remove('detener');
						 vhcl.classList.add('avanzar');
					}else{
						alert('prenda el vehiculo');
					}

					
			}
			izquierda.onclick=function(){
				if(valorIni && vdet==false && vgi==false){
					vhcl.classList.add('izquierda');
					vhcl.classList.remove('avanzar');
					vgi=true;
					vgd=false;
				}else{
					alert('El vehiculo esta lokis');
				}

				/*if(valorIni){
						vhcl.classList.remove('detener');
						
					}else{
						alert('prenda el vehiculo');
				}*/
							
			}
			derecha.onclick=function(){
					if(valorIni && vdet==false && vgd==false){
					vhcl.classList.add('derecha');
					vhcl.classList.remove('avanzar');
					vgi=false;
					vgi=true;
				}else{
					alert('El vehiculo esta lokis');
				}
					
			}
			apagar.onclick=function(){
					if(vdet){
						valorIni=false;
						vhcl.classList.remove('arrancar');
					}
					else{
						alert('el vehiculo esta en movimiento');
					}
			}
		}



	}