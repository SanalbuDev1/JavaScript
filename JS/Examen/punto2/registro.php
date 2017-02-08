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
		input#d1{
			line-height: 20px;
		}


</style>
	<form method="post">
		
		<input type="text" name="name" placeholder="nombre" pattern=".([a-z]){2,}" required>
		<input type="text" name="name2" placeholder="Segundo nombre" pattern=".([a-z]){2,}" >
		<input type="text" name="last_name" placeholder="apellidos" pattern=".([a-z]){2,}" requiered>
		<select name="born" id="" required>
			<option value="">Seleciona</option>
			<option value="manizales">manizales</option>
			<option value="Pereiea">Pereira</option>
			<option value="Cucuta">Cucuta</option>

		</select>
		
		<input type="date" name="born">
<!-- 		<input type="checkbox" id="d1" name="old" value="Si"> 
		<input type="checkbox" id="d1" name="old" value="No"> 

		<input type="checkbox" id="d1" name="sex" value="Femenino"> 
		<input type="checkbox" id="d1" name="sex" value="Masculino">  -->

		<textarea name="comen" id="" cols="30" rows="10"></textarea>
		<input type="submit" value="Ingresar">
		<input type="reset" value="Reset">
	</form>
	<form method="get">
		<input type="number" name="id" placeholder="id">
		<input type="submit" value="Consultar">
	</form>


	<?php 
		if($_POST){
	  	
		echo "estoy conectado";

	  	$name = $_POST["name"];
	  	$name2 = $_POST["name2"];
	  	$last_name = $_POST["last_name"];
	  	$born = $_POST["born"];
	  	$comen = $_POST["comen"];


	  	if($name <> ""  && $name2 <> "" && $last_name <> "" && $born <> "" && $comen <> ""){
	  		$conx = mysqli_connect("localhost","root","","trabajandoo");
	  		$query = mysqli_query($conx,"INSERT INTO `tarea2`(`name`, `name2`, `last_name`, `born`, `comen`, `id`) VALUES ('$name','$name2','$last_name','$born','$comen','')");
	  		if($query){
	  			echo "<h1>Usuario registrado con exito</h1>";
	  		}else{
	  			echo "Usuario no registrado con exito";
	  		}
	  	}else{
	  		echo "no entre en la condicion";
	  	}

	  
	  }else{
	  	echo "No estoy conectado";
	  }




	  if($_GET){
	  	$id = $_GET["id"];

	  	$conx = mysqli_connect("localhost","root","","trabajandoo");
	  	$query = mysqli_query($conx , "SELECT * FROM tarea2 WHERE id=$id");

	  	echo "<table border='2px'>";
	  	while ($row = mysqli_fetch_array($query)){ 
				echo "<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td><td>$row[3]</td><td>$row[4]</td><td>$row[5]</td></tr>";

		} 
		echo "</table>";
	  
	  }else{
	  	echo "No estoy conectado";
	 }
	 ?>

	 
 	

	

 





	 



		




	
</body>
</html>