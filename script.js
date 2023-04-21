async function buscarEndereco(cep){
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();
    if(consultaCEPConvertida.erro){
      throw new Error(`CEP não existente!`);
    }

    return consultaCEPConvertida;
  } catch(erro) {
    console.log(erro);
  }
}

let ceps = ['01001000', '01001001'];
let conjuntoCEPS = ceps.map(valores => buscarEndereco(valores));
//buscarEndereco();

Promise.all(conjuntoCEPS).then(respostas => console.log(respostas));

