<!DOCTYPE html>
<html>
<head>
	<title>latihan</title>
	<style>
		div{
			width: 50px;
			height: 50px;
			background-color: salmon;
			text-align: center;
			line-height: 50px;
			margin: 3px; 
			float: left;
		}
	</style>
</head> 
<body>
<?php for( $i = 1; $i < 9; $i++ ) :?>
    
       <div>3<?php echo $i; ?></div>

<?php endfor  ?>  

</body>
</html>