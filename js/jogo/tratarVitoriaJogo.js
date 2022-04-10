function tratarVitoriaJogo () {
	if(fimDeJogo) return;

	gerenciarCriacaoMosquitos(false);
	removerTodosMosquitos();

	window.location.href='vitoria.html';
}