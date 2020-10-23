var readlineSync = require('readline-sync');

const generateWord = (szo, tarolo, kitalaltbetu, elet) => {
    let i = Math.floor(Math.random()*tarolo.length);
    szo = tarolo[i];
    for (let i = 0; i < szo.length; i++){
        kitalaltbetu.push('_');
    };
    elet = Math.floor(szo.length/2);

    
};

const printGame = (kitalaltbetu, elet) => {
    for (let i = 0; i < kitalaltbetu.length; i++){
        process.stdout.write(kitalaltbetu[i] + ' ');
    }
    console.log();
    console.log();
    console.log('Life: ',elet);
};
const isSolved = (kitalaltbetu) => {
    for (let i = 0; i < kitalaltbetu.length; i++){
        if (kitalaltbetu[i] === '_'){
            return false;
        }
        else return true;
    };

};

const makeGuess = (szo, kitalaltbetu, elet) => {
    let key = readlineSync.keyIn();
    for (let i = 0; i < szo.length; i++){
        if (szo[i] === key){
            kitalaltbetu[i] = key;           
            return true;
        }
    }

    elet--;
    return false;
};

module.exports = {
    generateWord,
    printGame,
    isSolved,
    makeGuess
};