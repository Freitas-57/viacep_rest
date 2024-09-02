btnBuscar.onclick = async () => {
    let value = cep.value;

    const result =  await( await fetch(`https://viacep.com.br/ws/${value}/json/`)).json(); 
    
    logradouro.value=result.logradouro;
    bairro.value=result.bairro;
    localidade.value=result.localidade;
    uf.value=result.uf;


}