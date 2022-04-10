function iniciarJogo() {
	const dificuldade = document.getElementById('seletor-dificuldade').value;

	if(dificuldade == '') {
		alert('Selecione uma dificuldade.');
		return;
	}

	window.location.href = './app.html?' + dificuldade;
}