<?php

////////////// Adiciona Fornecedor no Banco de Dados /////////////////////////////////
$fornecedor = $_POST["fornecedor"];
$emissao = $_POST["emissao"];
$vencimento = $_POST["vencimento"];
$valor = $_POST["valor"];

//conector do mysql
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
$query = "INSERT INTO contasapagar (fornecedor, dataVencimento, emissao, valor) VALUES ('$fornecedor', '$vencimento', '$emissao', '$valor')";
$exec = mysqli_query($con, $query);
if ($exec){
	echo "<br>Fornecedor Adicionado com Sucesso!";
}else{
	echo "<br>Não foi possivel adicionar fornecedor";
}
mysqli_close($con);

echo  "<html>";
echo 	"<body>";
echo "<br>";
echo		'<input type= "button" name = "conta" value = "Adicionar Nova Conta" onclick = "addcount()">';
echo "&nbsp";
echo		'<input type= "button" name = "menu" value = "Voltar ao Menu Principal" onclick = "voltar()">';
echo		'<script type= "text/javascript" src="js/script.js"></script>';
echo	"</body>";
echo  "</html>";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////