<?php
foreach ($_POST as $post_var) {
	$con = mysqli_connect("localhost", "root", "", "financeiro");
	if($con){
}else{
	die("não connecta: ". mysqli_connect_error());
	mysqli_close($con);	
}
$use = mysqli_select_db($con, "financeiro");
if($use){
}else{
	echo("<br>não foi possivel selecionar db");
}
$query = "DELETE FROM contasapagar WHERE idAP = $post_var";
$exec = mysqli_query($con, $query);	

}

?>