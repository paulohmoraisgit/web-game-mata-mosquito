let numeroMaxMosquitos = 1;

function removerMosquitosExcedentes() {
	if(mosquitosCriados.length <= numeroMaxMosquitos) return;

	const mosquitosParaRemover = mosquitosCriados.length - numeroMaxMosquitos;

	jogadorRecebeDano(mosquitosParaRemover);
	
	let i = 0;
	while(i < mosquitosParaRemover) {
		removerMosquitoAleatorioExcetoUltimo();
		i++
	}
}

function removerMosquitoAleatorioExcetoUltimo() {
	let i = Math.floor(Math.random() * (mosquitosCriados.length - numeroMosquitosPorCriacao));
	removerMosquito(mosquitosCriados[i]);
}

function removerMosquito(mosquito) {
	for(let i = 0; i < mosquitosCriados.length; i++) {
		if(mosquitosCriados[i] === mosquito) {
			mosquitosCriados[i].remove();
			mosquitosCriados[i] = null;
			break;
		}
	}
	
	mosquitosCriados = limparIndicesVazios(mosquitosCriados);
}

function removerTodosMosquitos() {
	for(let i = 0; i < mosquitosCriados.length; i++) {
		mosquitosCriados[i].remove();
		mosquitosCriados[i] = null;
	}

	mosquitosCriados = limparIndicesVazios(mosquitosCriados);
}