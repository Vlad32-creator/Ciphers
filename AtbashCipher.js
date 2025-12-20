
// Atbash cipher



function atbashEncoder(text, language) {
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
function atbashDecoder(text, language) {
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

