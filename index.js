const fgv = require('./fgv');

let dictionary = ['egér', 'farkas', 'liba', 'bagoly', 'tigris', 'béka', 'viziló', 'anakonda', 'vipera', 'borz',];
let word = '';
let guessedWord = [];
let life;




const main = () => {
    fgv.generateWord(word, dictionary, guessedWord, life);
    console.log('Üdvözlöm az akasztófa játékban!');
    fgv.printGame(guessedWord, life);

    while (fgv.isSolved(guessedWord) == false && life > 0){
        fgv.makeGuess(word, guessedWord, life);
        fgv.printGame();
    };
};

//main();

fgv.generateWord(word, dictionary, guessedWord, life);
fgv.printGame(guessedWord, life);