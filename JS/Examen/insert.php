<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<style>

		form{
			display: inline-block;
			margin:100px 600px;
			background-color: orange;
			width: 200px;
			padding: 20px;
			
			
		}
		input,select{
			display: block;
			padding: 10px;
			width: 100%;
			margin:auto;
			
		}
		h1,h2{
			text-align: center;
			font:30px Arial;

			
		}
		input{
			width: 88%;
		}
		input:invalid{

		border:2px solid red;
		}
		input:valid{

		border:2px solid green;
		}


			</style>
		
		
    <form method="post">
        <h2>insertar formularios</h2>
    	<input type="number" name="cdm" value="Codigo ciudad" placeholder="Codigo ciudad" required min="0" max="32" title="debe ser menor a 32">
    	<input type="text" name="name" placeholder="Nombre"  pattern=".([a-z]){2,}" required  >
    	<select name="opt" id="" required>
    				<option value="">Selecione pais</option>
    	    		<option value="Colombia">Colombia</option>
    	    		<option value="Venezuela">Venezuela</option>
    	    		<option value="Haiti">Haiti</option>
    	</select>    	
    	<input type="number" name="cp" placeholder="Codigo postal" required min="00000" max="99999">
    	<input type="text" name="address" placeholder="Direccion" required>
    	<input type="text" name="celephone" placeholder="Celular"  required  min="0" max="32">

    	<input type="submit" value="Insert">
    	<input type="reset" value="delete">


    </form>
	<?php 	

	   if($_POST){
	  	
	  	$cdm = $_POST["cdm"];
	  	$name = $_POST["name"];
	  	$opt = $_POST["opt"];
	  	$cp = $_POST["cp"];
	  	$address = $_POST["address"];
	  	$celephone = $_POST["celephone"];

	  	if($cdm >0  && $name <> "" && $opt <> "" && $cp > 0 && $address <> "" && $celephone <> ""){
	  		$conx = mysqli_connect("localhost","root","","examen");
	  		$query = mysqli_query($conx,"INSERT INTO creando VALUES('$cdm','$name','$opt','$cp','$address','$celephone')");
	  		if($query){
	  			echo "<h1>Usuario registrado con exito</h1>";
	  		}else{
	  			echo "Usuario no registrado con exito";
	  		}
	  	}

	  
	  }else{
	  	echo "No estoy conectado";
	  }




	  



	 ?>

</body>
</html>