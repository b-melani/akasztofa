const fgv = require('./fgv');

let dictionary = ['egér', 'farkas', 'liba', 'bagoly', 'tigris', 'béka', 'viziló', 'anakonda', 'vipera', 'borz',];
let word = '';
let guessedWord = [];
let life = {};




const main = () => {
    fgv.generateWord(word, dictionary, guessedWord, life);
    console.log('Üdvözlöm az akasztófa játékban!');
    fgv.printGame(guessedWord, lif.life);

    while (fgv.isSolved(guessedWord) == false && life.life > 0){
        fgv.makeGuess(word, guessedWord, life.life);
        fgv.printGame();
    };
};

main();