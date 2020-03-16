function reserva(){
 var nome = document.getElementById('nome').value;
 localStorage.setItem('nome', nome);
 var origem = document.getElementById('origem').value;
 localStorage.setItem('origem', origem);
 var destino = document.getElementById('destino').value;
 localStorage.setItem('destino', destino);
}

function poltrona(n){
    // mostrando o cupom fiscal
    var nota = document.getElementById('nota-fiscal');
    nota.style = 'display:block';

    // mostrando a poltrona obs n vem como paramentro
    var poltrona = document.querySelector('li#poltrona');
    poltrona.innerHTML = `${n}`;

    // recebedno a data 
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    
    // pritando a data
    var printData = document.querySelector('li#data');
    printData.innerHTML = `${dia} | ${mes} | ${ano}`;

   // recebendo a hr
    var hora = data.getHours();
    var min = data.getMinutes();

    //pritando a hr
    var printhr = document.querySelector('li#hora');
    printhr.innerHTML = `${hora}:${min}`;

    //recebendo os elementos do localStorage
    var nome = localStorage.getItem('nome');
    var origem = localStorage.getItem('origem');
    var destino = localStorage.getItem('destino');

    // printando os elementos do localStorage
    var printNone = document.querySelector('li#nome');
    var printOrigem = document.querySelector('li#origem');
    var printDestino = document.querySelector('li#destino');
    printNone.innerHTML = nome;
    printOrigem.innerHTML = origem;
    printDestino.innerHTML = destino;

    //tarifa
    var printTarifa =  document.querySelector('li#tarifa');
        printTarifa.innerHTML = '15 R$';      
}
/*
function reservados(n){
    window.alert('nnnnn')
    const reservados = [];
    const i = 0, z ;
    reservados[i] = n;
    i++;
    
    for(z = 0;z<=34;z++){
      const  j = 1;
    if(n == j){
       const p =  document.getElementById('p1');
       p.className = 'reservado';
    }else{
        j++;
    }
}
       
}*/