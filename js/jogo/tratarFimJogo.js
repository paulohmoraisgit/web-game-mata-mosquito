let fimDeJogo = false;

function tratarFimJogo() {
	fimDeJogo = true;

	gerenciarCriacaoMosquitos(false);
	removerTodosMosquitos();
	
	window.location.href='fim-de-jogo.html';
}