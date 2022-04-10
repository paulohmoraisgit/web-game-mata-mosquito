let mosquitoTamanho = 0;

function dimensionarMosquito(mosquito) {
	const mosquitoTamanhoMin = 50;
	const mosquitoTamanhoMax = 90;

	const mosquitoTamanhoRange = mosquitoTamanhoMax - mosquitoTamanhoMin;
	mosquitoTamanho = mosquitoTamanhoMin + (Math.random() * mosquitoTamanhoRange);
	
	mosquito.style.width = mosquitoTamanho + 'px';
	mosquito.style.height = mosquitoTamanho + 'px';
}