function scriptIMC() {
    const form = document.querySelector('.form');
    const peso = form.querySelector('#cPeso');
    const alt = form.querySelector('#cAlt');
    const resultado = document.querySelector('.result');
    const resultDiv = document.querySelector('.result');

    function eventoIMC(evento) {
        evento.preventDefault(); //não permite que o navegador seja atualizado quando clicar no botão enviar

        const pesoValue = Number(peso.value);
        const altValue = Number(alt.value);
                 
      
        if (altValue === '') {
            resultado.innerHTML += `Altura inválida. Digite sua altura.`;
          } else if (peso === '' || isNaN(pesoValue)) {
            resultado.innerHTML += `Peso inválido. Digite seu peso.`;
          } else {
            const imc = (pesoValue / ((altValue * altValue) / 10000)).toFixed(2);
            if (imc < 18.5) {
              resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
            } else if (imc >= 18.5 && imc <= 24.9) {
              resultado.innerHTML = `Seu IMC é ${imc} (Peso normal)`;
            } else if (imc >= 25 && imc <= 29.9) {
              resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
            } else if (imc >= 30 && imc <= 34.9) {
              resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`;
            } else if (imc >= 35 && imc <= 39.9) {
              resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`;
            } else {
              resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`;
            }
            peso.value = '';
            alt.value = '';
            resultDiv.style.display = 'block'  
          }}
          
        
        form.addEventListener('submit', eventoIMC);
      }
      
      scriptIMC();

