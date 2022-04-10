const dificuldade = window.location.search.replace('?', '');

switch(dificuldade) {
	case 'muito-facil':
		intervaloCriarMosquito = 2500;
		intervaloRemoverMosquito = 2510;

		numeroMaxMosquitos = 3;
		vidasJogadorMax = 6;
		break;

	case 'facil':
		intervaloCriarMosquito = 2000;
		intervaloRemoverMosquito = 2010;

		numeroMaxMosquitos = 2;
		vidasJogadorMax = 6;
		break;

	case 'dificil':
		intervaloCriarMosquito = 1500;
		intervaloRemoverMosquito = 1510;

		numeroMosquitosPorCriacao = 2;
		numeroMaxMosquitos = 2;

		vidasJogadorMax = 4;
		break;

	case 'muito-dificil':
		intervaloCriarMosquito = 1000;
		intervaloRemoverMosquito = 1010;

		numeroMosquitosPorCriacao = 2;
		numeroMaxMosquitos = 2;

		vidasJogadorMax = 3;
		break;

	case 'nightmare':
		intervaloCriarMosquito = 750;
		intervaloRemoverMosquito = 760;

		numeroMosquitosPorCriacao = 3;
		numeroMaxMosquitos = 15;

		vidasJogadorMax = 2;
		break;

	case 'deathwish':
		intervaloCriarMosquito = 500;
		intervaloRemoverMosquito = 510;

		numeroMosquitosPorCriacao = 5;
		numeroMaxMosquitos = 50;

		vidasJogadorMax = 1;
		break;

	case 'inferno':
		intervaloCriarMosquito = 150;
		intervaloRemoverMosquito = 160;

		numeroMosquitosPorCriacao = 50;
		numeroMaxMosquitos = 500;

		vidasJogadorMax = 1;
		break;
}

