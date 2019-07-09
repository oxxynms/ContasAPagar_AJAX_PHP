
//variaveis
let varial = 0;
let out = [];

//voltar pagina
function voltar(){
			location.href = "index.html";
		}
//
// Movimentação
function addcount(){
		location.href = "addcount.html";
	}
//	function delcount(){
//		location.href = "delcount.html";
//	}
function pesquisa(){
		location.href = "concount.html"
	}		
///
//alterar variavel para o php e faz itens sumerem e aparecerem
function altVariavel(input){
	var hdiv = document.getElementById("hforn");
	let fdiv = document.getElementById("forn");
	varial = input;
	//selecionou fornecedor
	if(fdiv.checked == true){
		hdiv.style.display = 'block';
	}else{
		hdiv.style.display = 'none';
}
	var ddiv = document.getElementById("date");
	var hdatat = document.getElementById("hdatat");
	var hdata1 = document.getElementById("hdata1");
	var hdata2 = document.getElementById("hdata2");
	//selecionou intervalo de contas
	if(ddiv.checked == true){


		hdatat.style.display = 'block';
		hdata1.style.display = 'block';
		hdata2.style.display = 'block';
		
	}else{
		hdatat.style.display = 'none';
		hdata1.style.display = 'none';
		hdata2.style.display = 'none';


}

}
/////

function ajax(){

	if (varial == "interData"){
	//pega valor do campo das datas
	let emissao = document.getElementById("hdata1").value;
	let emissao2 = document.getElementById("hdata2").value;
		//zera array que contem os ids das contas
	out = [];
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(){


		if(xhttp.readyState === 4 && xhttp.status === 200){

			document.getElementById('dados').innerHTML = xhttp.responseText;

		}

	}



	xhttp.open('POST', 'interData.php', true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send("emissao="+emissao+"&emissao2="+emissao2);

}

if (varial == "total"){
	//zera array que contem os ids das contas
	out = [];
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(){


		if(xhttp.readyState === 4 && xhttp.status === 200){

			document.getElementById('dados').innerHTML = xhttp.responseText;

		}

	}



	xhttp.open('GET', 'total.php', true);
	xhttp.send();

}
//envia dados e consulta dados do php
if (varial == "fornecedor"){
	//pega valor do campo fornecedor
	let fornecedor = document.getElementById("hforn").value;
		//zera array que contem os ids das contas
	out = [];
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(){


		if(xhttp.readyState === 4 && xhttp.status === 200){

			document.getElementById('dados').innerHTML = xhttp.responseText;

		}

	}



	xhttp.open('POST', 'fornecedor.php', true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send("fornecedor="+fornecedor);

}

if (varial == "interData"){
	//pega valor do campo das datas
	let emissao = document.getElementById("hdata1").value;
	let emissao2 = document.getElementById("hdata2").value;
		//zera array que contem os ids das contas
	out = [];
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(){


		if(xhttp.readyState === 4 && xhttp.status === 200){

			document.getElementById('dados').innerHTML = xhttp.responseText;

		}

	}



	xhttp.open('POST', 'interData.php', true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send("emissao="+emissao+"&emissao2="+emissao2);

}

if (varial == "vencimento"){
	//zera array que contem os ids das contas
	out = [];
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(){


		if(xhttp.readyState === 4 && xhttp.status === 200){

			document.getElementById('dados').innerHTML = xhttp.responseText;

		}

	}



	xhttp.open('GET', 'vencimento.php', true);
	xhttp.send();

}



}
//Execluir conta
//adiciona os itens das contas ao array
function addExc(input){

	out.push(input);
}

function excluir(){

	for(var i = 0; i < out.length; i++){
		let box = document.getElementById(out[i]); 
		if (box.checked == true){
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
				//chama a função ajax para zerar o array de ids de contas e re fazer a pesquisa
				 ajax();

		}

	}

	xhr.open('POST', 'excluir.php', true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	var n1 = out[i];

	xhr.send("idap="+n1);


	}


}

}