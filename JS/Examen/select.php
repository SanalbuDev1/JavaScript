<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>	</title>
</head>
<body>
	<form method="get" action="select.php">
		<input type="text" name="id" value="id">
		<input type="submit" value="submit">
	</form>
<?php 	

	if($_GET){
	  	$id = $_GET["id"];

	  	$conx = mysqli_connect("localhost","root","","examen");
	  	$query = mysqli_query($conx , "SELECT cdm,name FROM creando WHERE id=$id");

	  	echo "<table border='2px'>";
	  	while ($row = mysqli_fetch_array($query)){ 
				echo "<tr><td>$row[0]</td><td>$row[1]</td></tr>";

		} 
		echo "</table>";
	  
	  }else{
	  	echo "No estoy conectado";
	 }

 ?>
	
</body>
</html>