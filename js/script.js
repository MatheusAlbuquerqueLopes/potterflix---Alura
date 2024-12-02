document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os itens de vídeo na categoria
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        // Efeito de animação ao passar o mouse sobre os itens
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            item.querySelector('img').style.transform = 'scale(1.1)';
            item.querySelector('img').style.boxShadow = '0 0 25px 5px rgba(255, 204, 0, 0.8)';  // Brilho dourado
            item.querySelector('p').style.color = '#fff'; // Altera a cor do texto para branco
            item.querySelector('p').style.transition = 'color 0.3s ease'; // Adiciona suavidade na transição do texto
        });

        // Reverte o efeito quando o mouse sai
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.querySelector('img').style.transform = 'scale(1)';
            item.querySelector('img').style.boxShadow = 'none';
            item.querySelector('p').style.color = '#ffcc00'; // Retorna à cor dourada do texto
        });
    });

    // Efeito de "glow" na imagem do título do filme
    const chamadaTexto = document.querySelector('.chamada-texto h1');
    chamadaTexto.addEventListener('mouseover', () => {
        chamadaTexto.style.textShadow = '0 0 20px rgba(255, 204, 0, 0.8), 0 0 30px rgba(255, 204, 0, 0.8)';
        chamadaTexto.style.transition = 'text-shadow 0.5s ease';
    });

    chamadaTexto.addEventListener('mouseout', () => {
        chamadaTexto.style.textShadow = 'none';
    });

    // Adiciona um efeito de faísca mágica ao clicar no header
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        header.appendChild(sparkle);
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
});
