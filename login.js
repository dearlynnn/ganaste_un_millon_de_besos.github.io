const noBtn = document.querySelector('#noBtn');

    let attemptCounter = 0;

    noBtn.addEventListener('mouseover', function () {
        // Incrementar el contador de intentos
        attemptCounter++;

        // Generar posiciones aleatorias entre 0% y 100%
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;

        // Cambiar la posición del botón
        noBtn.style.setProperty('top', randomY + '%');
        noBtn.style.setProperty('left', randomX + '%');
        noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
       
        switch (attemptCounter) {
            case 1:
                alert('Nope, ni el mouse está de acuerdo :).');
                break;
            case 2:
                alert('No puedes ignorar el destino, princesa.');
                break;
            case 3:
                alert('Shu, porang, porang, no puedes estar sin mí (me estoy desesperando).');
                break;
            case 4:
                noBtn.style.display = 'none';
                alert('Estás amarrada a mí.');
                break;
        }
    });