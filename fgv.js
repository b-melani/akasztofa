var readlineSync = require('readline-sync');

const generateWord = (tarolo, kitalaltbetu, elet) => {
    let i = Math.floor(Math.random()*tarolo.length);
    let szo = tarolo[i];
    for (let i = 0; i < szo.length; i++){
        kitalaltbetu.push('_');
    };
    elet.life = Math.floor(szo.length/2); 
    return szo;

};

const printGame = (kitalaltbetu, elet) => {
    for (let i = 0; i < kitalaltbetu.length; i++){
        process.stdout.write(kitalaltbetu[i] + ' ');
    }
    console.log();
    console.log();
    console.log('Life: ',elet.life);
};


const isSolved = (kitalaltbetu) => {
    let megoldas = true;
    for (let i = 0; i < kitalaltbetu.length; i++){
        if (kitalaltbetu[i] === '_'){
            megoldas = false;
        }
    };
    return megoldas;
};


const makeGuess = (szo, kitalaltbetu, elet) => {
    let key = readlineSync.keyIn();
    for (let i = 0; i < szo.length; i++){
        if (szo[i] === key){
            kitalaltbetu[i] = key;
            console.log('A keresett betű szerepel a szóban');
            console.log();           
            return true;
        }
    }
    elet.life--;
    console.log('A keresett betű nem szerepel a szóban');
    console.log();       

    //return false;
};


module.exports = {
    generateWord,
    printGame,
    isSolved,
    makeGuess
};