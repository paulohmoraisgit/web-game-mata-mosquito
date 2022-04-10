function posicionarMosquito (mosquito) {
	let mosquitoPosicaoX = Math.floor(Math.random() * larguraAreaJogo) - mosquitoTamanho;
	let mosquitoPosicaoY = Math.floor(Math.random() * alturaAreaJogo) - mosquitoTamanho;
	
	if(mosquitoPosicaoX < 0) mosquitoPosicaoX = 0;
	if(mosquitoPosicaoY < 0) mosquitoPosicaoY = 0;

	mosquito.style.left = mosquitoPosicaoX + 'px';
	mosquito.style.top = mosquitoPosicaoY + 'px';

	posicionarLado(mosquito);
}

function posicionarLado(mosquito) {
	let ladoAleatorio = Math.floor(Math.random() * 2);
	ladoAleatorio = ladoAleatorio < 1 ? -1 : 1;

	mosquito.style.transform = 'scaleX('+ ladoAleatorio +')';
}