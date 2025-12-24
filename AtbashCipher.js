
// Atbash cipher

// Principle: mirror reflection of the alphabet.

// The first letter becomes the last, the second becomes the second-to-last, and so on.

// Example for the English alphabet:

// Alphabet:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
// Atbash:    ZYXWVUTSRQPONMLKJIHGFEDCBA


// So A → Z, B → Y, C → X…

// Features:

// Very simple, almost never used in serious cryptography.

// Easily broken by brute force since it’s just a simple letter substitution.

// Example:

// Hello → Svool

export function atbashEncoder(text, language) {
    if (language !== 'en' && language !== 'ru' && language !== 'ua') return 'Chouse the language from\n-ru\n-ua\n-en';
    if (!text) return 'Enter string';
    const alphabets = {
        en: 'abcdefghijklmnopqrstuvwxyz',
        ua: 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя',
        ru: 'абвгдеёжзийклмнопрстуфцчшщьыъэюя',
    }
    const lan = alphabets[language];
    let newText = '';
    const codedText = text.toLowerCase().split('').map(it => {
        const index = lan.indexOf(it)
        if (index === -1) return 100
        return index + 1;
    });
    for (let i = 0; i < codedText.length; i++) {
        if (codedText[i] === 100) {
            newText += " ";
            continue;
        };
        if (typeof lan[lan.length - codedText[i]] === "undefined") {
            console.log('its undefined');
            console.log(lan[lan.length - codedText[i]]);
        }
        newText += lan[lan.length - codedText[i]];
    }
    return newText;
}
export function atbashDecoder(text, language) {
    if (language !== 'en' && language !== 'ru' && language !== 'ua') return 'Chouse the language from\n-ru\n-ua\n-en';
    if (!text) return 'Enter string';
    const alphabets = {
        en: 'abcdefghijklmnopqrstuvwxyz',
        ua: 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя',
        ru: 'абвгдеёжзийклмнопрстуфцчшщьыъэюя',
    }
    const lan = alphabets[language];
    let newText = '';
    const codedText = text.toLowerCase().split('').map(it => {
        const index = lan.indexOf(it)
        if (index === -1) return 100;
        return index + 1;
    });
    for (let i = 0; i < codedText.length; i++) {
        if (codedText[i] === 100) {
            newText += ' ';
            continue;
        }
        newText += lan[lan.length - codedText[i]];
    }
    return newText;
}