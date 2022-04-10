let numeroMosquitosPorCriacao = 1;
let mosquitosCriados = Array();

function criarMosquitos () {
  for(let i = 0; i < numeroMosquitosPorCriacao; i++) {
  	const mosquito = document.createElement('img');
		document.body.appendChild(mosquito);
		
		mosquito.src = './img/mosquito.png';
		mosquito.className = 'mosquito desativar-select-drag';
		
		mosquito.onclick = function() {
			removerMosquito(this);
		};
	  
	  dimensionarMosquito(mosquito);
		posicionarMosquito(mosquito);
		
  	mosquitosCriados.push(mosquito);
	}
}