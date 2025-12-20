
const alphabets = {
    en: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .,!?',
    ua: 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ .,!?',
    ru: 'абвгдеёжзийклмнопрстуфцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФЦЧШЩЬЫЪЭЮЯ .,!?',
}


//Caesar Ciper
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


bruteForceCaesar('Wklv!lv!d!whvwb','en');
console.log(caesarEncoder(3,'This is a test!','en'));
console.log(caesarDecoder(3,'Wklv!lv!d!whvwb','en'));
console.log(caesarDecoder(7, caesarEncoder(7, 'Привіт мій друже чому ті ще тут', 'ua'), 'ua'));
console.log(caesarDecoder(7, caesarEncoder(7, 'Hi my test is ok? I wonna now it', 'en'), 'en'));
console.log(caesarDecoder(7, caesarEncoder(7, 'Хей халоп як тобі живется чому ті тут не сядеш и помреш', 'ua'), 'ua'));

