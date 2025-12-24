import { atbashDecoder, atbashEncoder } from "./AtbashCipher.js";
import { VigenerDecoder, VigenereEncoder } from "./VigenerCipher.js";
import { caesarDecoder, caesarEncoder, bruteForceCaesar } from "./CaesarCipher.js";

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
        const cip = e.target.value;

        if (cip === 'vigener') {
            vigenerCipher.style.display = 'flex';
        } if (cip === 'caesar') {
            caesarCipher.style.display = 'flex';
        } if (cip === 'atbash') {
            atbashCipher.style.display = 'flex';
        }
        cipher = cip;
    })
});

//Select Language;
function change(cipher,e){
    const lang = e.target.value;
    const ru = document.getElementById(`ruDescription${cipher}`);
    const ua = document.getElementById(`uaDescription${cipher}`);
    const en = document.getElementById(`enDescription${cipher}`);
    ru.style.display = 'none';
    ua.style.display = 'none';
    en.style.display = 'none';
    if (lang === 'en'){en.style.display = 'flex'};
    if (lang === 'ru'){ru.style.display = 'flex'};
    if (lang === 'ua') {ua.style.display = 'flex'};
}

document.getElementById('CaesarSelectLanguage').addEventListener('change',(e) => change('Caesar',e));
document.getElementById('VigenerSelectLanguage').addEventListener('change',(e) => change('Vigener',e));
document.getElementById('AtbashSelectLanguage').addEventListener('change',(e) => change('Atbash',e))


//Vigener;
document.getElementById('VigenerDescriptionBtn').addEventListener('click', () => {
    document.getElementById('EncodeDecodeVigener').style.display = 'none';
    document.getElementById("VigenerDescription").style.display = 'flex';
});
document.getElementById('EncodeDecodeBtnVigener').addEventListener('click', () => {
    document.getElementById('VigenerDescription').style.display = 'none';
    document.getElementById("EncodeDecodeVigener").style.display = 'flex';
});

//Caear;
document.getElementById('CaesarDescriptionBtn').addEventListener('click', () => {
    document.getElementById('brotForceCaesarWrapper').style.display = 'none';
    document.getElementById("EncodeDecodeCaesar").style.display = 'none';
    document.getElementById("CaesarDescription").style.display = 'flex';
});
document.getElementById('encodeDecodeCaesarBtn').addEventListener('click', () => {
    document.getElementById('brotForceCaesarWrapper').style.display = 'none';
    document.getElementById("CaesarDescription").style.display = 'none';
    document.getElementById("EncodeDecodeCaesar").style.display = 'flex';
});

//Atbash
document.getElementById('AtbashDescriptionBtn').addEventListener('click', () => {
    document.getElementById('EndocdeDecodeAtbash').style.display = 'none';
    document.getElementById("AtbashDescription").style.display = 'flex';
});

document.getElementById('EncodeDecodeAtbashBtn').addEventListener('click', () => {
    document.getElementById('AtbashDescription').style.display = 'none';
    document.getElementById('EndocdeDecodeAtbash').style.display = 'flex';
})

// Encode Decode Information functions;
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
function enter(cipher){
    navigator.clipboard.readText().
    then(text => document.getElementById(`input${cipher}`).value = text).
    catch(err => console.log(err));
}
document.getElementById('EnterAtbash').addEventListener('click',() => enter('Atbash'));
document.getElementById('EnterCaesar').addEventListener('click',() => enter('Caesar'));
document.getElementById('EnterVigener').addEventListener('click',() => enter('Vigener'));
//Copy text
function copy(cipher){
    const value = document.getElementById(`output${cipher}`).value;
    navigator.clipboard.writeText(value);
}
document.getElementById('copyVigenerText').addEventListener('click',() => copy('Vigener'));
document.getElementById('copyCaesarText').addEventListener('click',() => copy('Caesar'));
document.getElementById('copyAtbashText').addEventListener('click',() => copy('Atbash'));

//Brute Force Caesar;
document.getElementById('BruteForceBtn').addEventListener('click',() => {
    const text = document.getElementById('bruteForceText').value;
    const language = document.getElementById('BruteForceLanguage').value;
    const array = bruteForceCaesar(text,language);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('textarea');
        li.textContent = array[i];
        fragment.appendChild(li);
    }
    document.getElementById('itemBruteForce').innerHTML = '';
    document.getElementById('itemBruteForce').appendChild(fragment);
})