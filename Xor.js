
export function Xor(message,key){
    if (!message) return `Enter text`;
    if(!key) return `Enter key`;
    let result = '';
    for (let i = 0; i < message.length; i++) {
        const t = message.charCodeAt(i);
        const k = key.charCodeAt(i % key.length);
        result += String.fromCharCode(t^k);
    }
    return result;
}