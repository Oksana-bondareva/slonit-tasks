function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function startGame() {
    let min = 1;
    let max = 100;
    let guess;
    const secretNumber = getRandomNumber(min, max);

    console.log(`Компьютер 1 загадал число: ${secretNumber}.\n`);

    while (guess !== secretNumber) {
        guess = Math.floor((min + max) / 2);
        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess < secretNumber) {
            console.log('Компьютер 1: Больше.\n');
            min = guess + 1;
        } else if (guess > secretNumber) {
            console.log('Компьютер 1: Меньше.\n');
            max = guess - 1;
        } else {
            console.log('Компьютер 1: Угадал!');
        }
    }
}

startGame();