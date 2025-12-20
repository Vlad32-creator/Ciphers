//Vigener Cipher

const alphabets = {
    en: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,!?',
    ua: 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ .,!?',
    ru: 'абвгдеёжзийклмнопрстуфцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФЦЧШЩЬЫЪЭЮЯ .,!?',
}

function genPass(language, length) {
    if (language !== 'en' && language !== 'ru' && language !== 'ua') return 'Chouse the language from\n-ru\n-ua\n-en';
    const lan = alphabets[language];
    let res = '';
    for (let i = 0; i < length; i++) {
        res += lan[Math.floor(Math.random() * lan.length)];
    }
    return res;
}


function VigenereEncoder(pass, text, language) {
    if (language !== 'en' && language !== 'ru' && language !== 'ua') return 'Chouse the language from\n-ru\n-ua\n-en';
    if (!pass) return 'Enter password or Enter: generate';
    if (!text) return 'Enter string';
    if (pass === 'generate') pass = genPass(language, 15);
    const lan = alphabets[language];

    let newText = '';
    let j = 0;
    const pas = pass.split('').map(it => {
        const index = lan.indexOf(it)
        if (index === -1) throw new Error(`Unknown simbol: ${it} in alphabet:\n${lan}`);
        return index;
    });
    const codedText = text.split('').map(it => {
        const index = lan.indexOf(it)
        if (index === -1) throw new Error(`Unknown simbol: ${it} in alphabet:\n${lan}`);
        return index;
    });
    for (let i = 0; i < codedText.length; i++, j++) {
        j >= pas.length ? j = 0 : j;
        let letter = '';
        codedText[i] + pas[j] >= lan.length ? letter = (codedText[i] + pas[j]) - lan.length : letter = codedText[i] + pas[j];
        newText += lan[letter];
    }
    return newText;
}

function VigenerDecoder(pass, text, language) {
    if (language !== 'en' && language !== 'ru' && language !== 'ua') return 'Chouse the language from\n-ru\n-ua\n-en';
    if (!pass) return 'Enter key';
    if (!text) return 'Enter string';
    const lan = alphabets[language];
    let newText = '';
    let j = 0;
    const pas = pass.split('').map(it => {
        const later = lan.indexOf(it);
        if(later === -1)  throw new Error(`Unknown simbol: ${it} in alphabet:\n${lan}`);
        return later;
    });
    const codedText = text.split('').map(it => {
        let index = lan.indexOf(it);
        if (index === -1) throw new Error(`Unknown simbol: ${it} in alphabet:\n${lan}`);
        return index;
    });

    for (let i = 0; i < codedText.length; i++, j++) {
        j >= pas.length ? j = 0 : j;
        newText += codedText[i] - pas[j] < 0 ? lan[(codedText[i] - pas[j]) + lan.length]: lan[codedText[i] - pas[j]];
    }
    return newText;
}
