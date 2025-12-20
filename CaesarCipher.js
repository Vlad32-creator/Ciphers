
//Caesar Ciper
// Principle: shift letters of the alphabet by a fixed number of positions.

// Named after Julius Caesar, who used it for secret messages.

// Usually a shift of 3, but it can be any number.

// Example with English alphabet and a shift of 3:

// Alphabet:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
// Cipher:    DEFGHIJKLMNOPQRSTUVWXYZABC

// A → D, B → E, C → F…

// Decoding is done by shifting in the opposite direction.

// Features:

// Simple and clear, but easy to break by trying all possibilities (25 for English alphabet).

// Can be made more complex by using different shifts for different letters (this is closer to the Vigenère cipher).

const alphabets = {
    en: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,!?',
    ua: 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ .,!?',
    ru: 'абвгдеёжзийклмнопрстуфцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФЦЧШЩЬЫЪЭЮЯ .,!?',
}


function caesarEncoder(shift, text, language) {
    if (language !== 'en' && language !== 'ru' && language !== 'ua') return 'Chouse the language from\n-ru\n-ua\n-en';
    if (!shift) return 'Enter shift';
    if (!text) return 'Enter string';
    const lan = alphabets[language];
    let newText = '';
    const codedText = text.split('').map(it => {
        const index = lan.indexOf(it)
        if (index === -1) return lan.length - 1
        return index;
    });
    for (let i = 0; i < text.length; i++) {
        newText += codedText[i] + shift >= lan.length ? lan[(codedText[i] + shift) - lan.length] : lan[codedText[i] + shift];
    }
    return newText;
}
function caesarDecoder(shift, text, language) {
    if (language !== 'en' && language !== 'ru' && language !== 'ua') return 'Chouse the language from\n-ru\n-ua\n-en';
    if (!shift) return 'Enter shift';
    if (!text) return 'Enter string';
    const lan = alphabets[language];
    let newText = '';
    const codedText = text.split('').map(it => {
        const index = lan.indexOf(it)
        if (index === -1) return lan.length - 1
        return index;
    });
    for (let i = 0; i < text.length; i++) {
        newText += codedText[i] - shift < 0 ? lan[(codedText[i] - shift) + lan.length] : lan[codedText[i] - shift];
    }
    return newText;
}

//Brute Force Caesar;
//You can Brut Force this ease cipher;
function bruteForceCaesar(text, language) {
    if (language !== 'en' && language !== 'ru' && language !== 'ua') return 'Chouse the language from\n-ru\n-ua\n-en';
    if (!text || text.trim() === '') return 'Enter string';
    let shift = 1;
    const lan = alphabets[language];
    const codedText = text.split('').map(it => {
        return lan.indexOf(it);
    });
    for (let i = 0; i < lan.length; i++, shift++) {
        let phrase = '';
        for (let x = 0; x < text.length; x++) {
            phrase += codedText[x] - shift < 0? lan[codedText[x]-shift + lan.length]: lan[codedText[x] - shift];
        }
        console.log(phrase,`Shift: ${shift}`);
    }
}
