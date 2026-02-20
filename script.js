// Contador de cliques no botão "Não" (se você quiser usar depois)
let noButtonClickCount = 0; 

// Estado atual do botão "Não" (qual frase/etapa está mostrando)
let noButtonState = 0; 

// Mostra o gif inicial ao carregar
document.getElementById('gifContainer').style.display = 'block';

// Clique no botão "Sim"
document.getElementById('siBtn').addEventListener('click', function() {
    // Esconde todos os gifs tristes e o gif inicial
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';

    // Mostra o primeiro gif feliz
    document.getElementById('happyGifContainer').style.display = 'block';

    // Esconde a pergunta e os botões "Sim" e "Não"
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostra a mensagem de resposta positiva
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Aeeee! 😍';

    // Troca os gifs felizes em sequência (tipo animação)
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);

    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
});

// Clique no botão "Não"
document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primeira vez clicando em "Não"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Muda o texto e aparência do botão "Não"
            document.getElementById('noBtn').innerHTML = 'Ah não! Tem certeza?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            // Faz o botão "Sim" crescer
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';

            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez clicando em "Não"
            document.getElementById('noBtn').innerHTML = 'Você tem certeza mesmo?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Botão "Sim" cresce mais
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
            // Terceira vez clicando em "Não"
            document.getElementById('noBtn').innerHTML = 'Sério que é não? 😭';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Botão "Sim" cresce mais
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
            // Continua insistindo
            document.getElementById('noBtn').innerHTML = 'Tem certeza absoluta?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;

        case 4:
            document.getElementById('noBtn').innerHTML = 'Diz que sim, por favor?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;

        case 5:
            document.getElementById('noBtn').innerHTML = 'Só pensa com carinho…';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;

        case 6:
            document.getElementById('noBtn').innerHTML = 'Se você disser não eu vou ficar muito triste 😢';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;

        case 7:
            document.getElementById('noBtn').innerHTML = 'Vou ficar muito triste…';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
  
            noButtonState++;
            break;

        case 8:
            document.getElementById('noBtn').innerHTML = 'Muito, muito, muito triste…';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
       
            noButtonState++;
            break;

        case 9:
            document.getElementById('noBtn').innerHTML = 'Muito, muito, muito, MUITO triste.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';
          
            noButtonState++;
            break;

        case 10:
            document.getElementById('noBtn').innerHTML = 'Ok, vou parar de pedir… (talvez 😏)';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
    
            noButtonState++;
            break;

        case 11:
            document.getElementById('noBtn').innerHTML = 'Brincadeira, POR FAVOR DIZ QUE SIM 🥺';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            
            noButtonState++;
            break;
        
        case 12:
            document.getElementById('noBtn').innerHTML = 'Vou ficar muito, muito, muito, muito triste mesmo.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';
    
            noButtonState++;
            break;
        
        case 13:
            document.getElementById('noBtn').innerHTML = 'Você está partindo meu coração 💔';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
         
            noButtonState++;
            break;
        
        case 14:
            document.getElementById('noBtn').innerHTML = 'Não… agora fala que sim 😤';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';
            
            noButtonState++;
            break;
        
        case 15:
            document.getElementById('noBtn').innerHTML = 'Vaaai, diiiiiz que SIIIIIIIIII 😆';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';
          
            noButtonState++;
            break;
        
        case 16:
            // Último estado: reseta pro início
            document.getElementById('noBtn').innerHTML = 'Por favooooooor 🥺';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
              
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'block';
            document.getElementById('happyGifContainer').style.display = 'none';

            // Volta para o estado 0 para repetir o ciclo
            noButtonState = 0;
            break;

        default:
            // Caso algum valor inesperado apareça, não faz nada
            break;
    }
});
