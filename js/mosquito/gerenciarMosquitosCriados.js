let intervaloCriarMosquito = 1750;
let intervaloRemoverMosquito = 1760;

let criadorMosquitos = null;
let removedorMosquitos = null;

function gerenciarCriacaoMosquitos(permitirCriarMosquitos) {
  if(permitirCriarMosquitos) {
    criadorMosquitos = setInterval(criarMosquitos, intervaloCriarMosquito);
    removedorMosquitos = setInterval(removerMosquitosExcedentes, intervaloRemoverMosquito);
  } else {
    clearInterval(criadorMosquitos);
    clearInterval(removedorMosquitos);
    return;
  } 
}