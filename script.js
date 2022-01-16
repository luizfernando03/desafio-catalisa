const botao = document.querySelector('button');

const imagem1 = document.querySelector('#img1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');

const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2= document.querySelector('#status2');

const imagem3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3= document.querySelector('#status3');


traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagens = () => {

    let numeroAleatorio = gerarValorAletorio();
    let numeroAleatorio2 = gerarValorAletorio();
    let numeroAleatorio3 = gerarValorAletorio();

    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio},${numeroAleatorio2},${numeroAleatorio3}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data[0].image;
        imagem1.alt = data[0].name;
        nomeDoPersonagem1.innerHTML = data[0].name;
        especie1.innerHTML = data[0].species;
        condicao1.innerHTML = traduzirCondicao(data[0]);

        imagem2.src = data[1].image;
        imagem2.alt = data[1].name;
        nomeDoPersonagem2.innerHTML = data[1].name;
        especie2.innerHTML = data[1].species;
        condicao2.innerHTML = traduzirCondicao(data[1]);

        imagem3.src = data[2].image;
        imagem3.alt = data[2].name;
        nomeDoPersonagem3.innerHTML = data[2].name;
        especie3.innerHTML = data[2].species;
        condicao3.innerHTML = traduzirCondicao(data[2]);
    });
}

botao.onclick = pegarPersonagens;