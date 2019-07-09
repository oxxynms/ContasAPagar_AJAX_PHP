<?php

	date_default_timezone_set('America/Sao_Paulo');
	$date = date('Y-m-d');


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
	$query = "SELECT * FROM contasapagar WHERE dataVencimento < '$date'";
	$exec = mysqli_query($con, $query);	
	$linha = mysqli_fetch_assoc($exec);


			if($linha['fornecedor'] == ""){
				echo '<div class = "semConta">não existem contas vencidas registradas</div>';
			}else{
					//envia a resposta da consulta em html, e adiciona uma checkbox em cada final de linha, com o id = aos idAP e ao clickar chama a funcao addexc enviando o idAP como parametro
				echo '<div class = "rs">';
				echo '<p>Fornecedor Emissão Vencimento Valor <input type = "button" value = "Excluir" onclick = "excluir()"></p>';
					do{
						?>
							<?=$linha['fornecedor']?>&nbsp;&nbsp;&nbsp;<?=$linha['emissao']?>&nbsp;&nbsp;&nbsp;<?=$linha['dataVencimento']?>&nbsp;&nbsp;&nbsp;<?=$linha['valor']?> <input type="checkbox" id="<?=$linha['idAP']?>" value = "on" onclick = "addExc(<?=$linha['idAP']?>)"><br>		
						<?php
					}while($linha = mysqli_fetch_assoc($exec));
				echo '</div>';
	}

?>