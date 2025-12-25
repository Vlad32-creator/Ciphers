
export function XorEncrypt(message,key){
    if (!message) return `Enter text`;
    if(!key) return `Enter key`;
    let result = '';
    for (let i = 0; i < message.length; i++) {
        const t = message.charCodeAt(i);
        const k = key.charCodeAt(i % key.length);
        let x = t^k;
        result += x.toString(16).padStart(4,'0');
    }
    return result;
}
export function XorDecrypt(hex, key) {
    if (!hex) return 'Enter text';
    if (!key) return 'Enter key';
    let result = '';
    for (let i = 0, j = 0; i < hex.length; i += 4, j++) {
        const x = parseInt(hex.slice(i, i + 4), 16);
        const k = key.charCodeAt(j % key.length);
        result += String.fromCharCode(x ^ k);
    }
    return result;
}