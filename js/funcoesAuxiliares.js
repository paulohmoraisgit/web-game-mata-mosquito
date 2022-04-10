function limparIndicesVazios (array) {
	array = array.filter(function(elemento) {
		return elemento != null;
	});

	return array;
}