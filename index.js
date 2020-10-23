const fgv = require('./fgv');

let dictionary = ['eger', 'farkas', 'liba', 'bagoly', 'tigris', 'beka', 'vizilo', 'anakonda', 'vipera', 'borz',];
let word = '';
let guessedWord = [];
let player = {};




const main = () => {
    word = fgv.generateWord(dictionary, guessedWord, player);
    console.log('Üdvözlöm az akasztófa játékban!');
    fgv.printGame(guessedWord, player);

    while (fgv.isSolved(guessedWord) == false && player.life > 0){
        fgv.makeGuess(word, guessedWord, player);
        fgv.printGame(guessedWord, player);
    };
};

main();



