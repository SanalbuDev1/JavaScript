<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<form method="post">
		

		<input type="submit" value="registrar">

	</form>


	<?php 

		if($_POST){
			echo "estoy en post";
		}else{
			echo "No estoy en post";
		}

	 ?>
</body>
</html>