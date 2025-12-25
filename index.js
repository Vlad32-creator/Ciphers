import { atbashEncoder } from "./AtbashCipher.js";
import { VigenerDecoder, VigenereEncoder } from "./VigenerCipher.js";
import { caesarDecoder, caesarEncoder, bruteForceCaesar } from "./CaesarCipher.js";
import { XorDecrypt,XorEncrypt } from "./Xor.js";

const vigenerCipher = document.getElementById('vigener');
const caesarCipher = document.getElementById('caesar');
const atbashCipher = document.getElementById('atbash');
const welcome = document.getElementById('welcome');

const inputAtbash = document.getElementById('inputAtbash');
const outputAtbash = document.getElementById("outputAtbash");
const inputVigener = document.getElementById('inputVigener');
const outputVigener = document.getElementById('outputVigener');
const vigenerKey = document.getElementById('vigenerKey');
const inputCaesar = document.getElementById('inputCaesar');
const outputCaesar = document.getElementById('outputCaesar');

const atbashBtn = document.getElementById('atbashEncodeBtn');
const caesarEncodeBtn = document.getElementById("caesarEncodeBtn");
const caesarDecodeBtn = document.getElementById('caesarDecodeBtn');
const vigenerEncodeBtn = document.getElementById('vigenerEncodeBtn');
const vigenerDecodeBtn = document.getElementById('vigenerDecodeBtn');
let cipher = 'none';

document.getElementById('brutForceCaesarBtn').addEventListener('click', () => {
    document.getElementById('EncodeDecodeCaesar').style.display = 'none';
    document.getElementById('CaesarDescription').style.display = 'none';
    document.getElementById('brotForceCaesarWrapper').style.display = 'flex';
});

//Navigation;
const ch = document.querySelectorAll('.cipher');
ch.forEach(el => {
    el.addEventListener('click', (e) => {
        vigenerCipher.style.display = 'none';
        caesarCipher.style.display = 'none';
        atbashCipher.style.display = 'none';
        welcome.style.display = 'none';
        const xor = document.getElementById('xor');
        xor.style.display = 'none';
        const cip = e.target.value;

        if (cip === 'vigener') {
            vigenerCipher.style.display = 'flex';
        } if (cip === 'caesar') {
            caesarCipher.style.display = 'flex';
        } if (cip === 'atbash') {
            atbashCipher.style.display = 'flex';
        } if (cip === 'xor') {
            xor.style.display = 'flex';
        }
        cipher = cip;
    })
});

//Select Language;
function change(cipher) {
    document.getElementById(`${cipher}SelectLanguage`).addEventListener('change', (e) => {
        const lang = e.target.value;
        const ru = document.getElementById(`ruDescription${cipher}`);
        const ua = document.getElementById(`uaDescription${cipher}`);
        const en = document.getElementById(`enDescription${cipher}`);
        ru.style.display = 'none';
        ua.style.display = 'none';
        en.style.display = 'none';
        if (lang === 'en') { en.style.display = 'flex' };
        if (lang === 'ru') { ru.style.display = 'flex' };
        if (lang === 'ua') { ua.style.display = 'flex' };
    });
}
// change('Xor');
// change('Vigener');
// change('Caesar');
// change('Atbash');
//Navigation;
function nav(cipher) {
    document.getElementById(`${cipher}DescriptionBtn`).addEventListener('click', () => {
        if (cipher === 'Caesar') document.getElementById('brotForceCaesarWrapper').style.display = 'none';
        document.getElementById(`EncodeDecode${cipher}`).style.display = 'none';
        document.getElementById(`${cipher}Description`).style.display = 'flex';
    });
    document.getElementById(`EncodeDecodeBtn${cipher}`).addEventListener('click', () => {
        document.getElementById(`${cipher}Description`).style.display = 'none';
        document.getElementById(`EncodeDecode${cipher}`).style.display = 'flex';
        if (cipher === 'Caesar') document.getElementById('brotForceCaesarWrapper').style.display = 'none';
    });
}
// nav('Xor');
// nav('Vigener');
// nav('Caesar');
// nav('Atbash');

// Encode Decode Information functions;
document.getElementById('xorEncodeBtn').addEventListener('click', () => {
    const value = document.getElementById('inputXor').value;
    const key = document.getElementById('XorKey').value;
    const result = XorEncrypt(value, key);
    document.getElementById('outputXor').value = result;
})
document.getElementById('xorDecodeBtn').addEventListener('click', () => {
    const value = document.getElementById('inputXor').value;
    const key = document.getElementById('XorKey').value;
    const result = XorDecrypt(value, key);
    document.getElementById('outputXor').value = result;
})

atbashBtn.addEventListener('click', () => {
    const value = inputAtbash.value;
    const language = document.getElementById('AtbashLanguage').value;
    const result = atbashEncoder(value, language);
    outputAtbash.value = result;
});
document.getElementById('AtbashDecodeBtn').addEventListener('click', () => {
    const value = inputAtbash.value;
    const language = document.getElementById('AtbashLanguage').value;
    const result = atbashEncoder(value, language);
    outputAtbash.value = result;
});

vigenerEncodeBtn.addEventListener('click', () => {
    const text = inputVigener.value;
    const password = vigenerKey.value;
    const language = document.getElementById('VigenerLanguage').value;
    const result = VigenereEncoder(password, text, language);
    outputVigener.value = result;
});

vigenerDecodeBtn.addEventListener('click', () => {
    const text = inputVigener.value;
    const password = vigenerKey.value;
    const language = document.getElementById('VigenerLanguage').value;
    const result = VigenerDecoder(password, text, language);
    outputVigener.value = result;
})

caesarEncodeBtn.addEventListener('click', () => {
    const text = inputCaesar.value;
    const shift = Number(document.getElementById('caesarKey').value);
    const language = document.getElementById('CaesarLanguage').value;
    const result = caesarEncoder(shift, text, language);
    outputCaesar.value = result;
});

caesarDecodeBtn.addEventListener('click', () => {
    const text = inputCaesar.value;
    const shift = Number(document.getElementById('caesarKey').value);
    const language = document.getElementById('CaesarLanguage').value;
    const result = caesarDecoder(shift, text, language);
    outputCaesar.value = result;
});

//Enter
function enter(cipher) {
    document.getElementById(`Enter${cipher}`).addEventListener('click', () => {
        navigator.clipboard.readText().
            then(text => document.getElementById(`input${cipher}`).value = text).
            catch(err => console.log(err));
    });
}
// enter('Xor');
// enter('Vigener');
// enter('Caesar');
// enter('Atbash');
//Copy text
function copy(cipher) {
    document.getElementById(`copy${cipher}Text`).addEventListener('click', () => {
        const value = document.getElementById(`output${cipher}`).value;
        navigator.clipboard.writeText(value);
    });
}
// copy('Xor');
// copy('Vigener');
// copy('Caesar');
// copy('Atbash');

//Brute Force Caesar;
document.getElementById('BruteForceBtn').addEventListener('click', () => {
    const text = document.getElementById('bruteForceText').value;
    const language = document.getElementById('BruteForceLanguage').value;
    const array = bruteForceCaesar(text, language);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('textarea');
        li.textContent = array[i];
        fragment.appendChild(li);
    }
    document.getElementById('itemBruteForce').innerHTML = '';
    document.getElementById('itemBruteForce').appendChild(fragment);
})

function main(cipher){
    copy(cipher);
    enter(cipher);
    nav(cipher);
    change(cipher);
}

main('Xor');
main('Vigener');
main('Caesar');
main('Atbash');
