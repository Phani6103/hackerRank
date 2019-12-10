let testS1 = 'aba';
let testS9 = 'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq';

let testN1 = 10;
let testN9 = 549382313570;
function repeatedCount(s, n) {
    const originalStingLength = s.length;
    let charPerBaseString = 0;
    let numberOfChar = 0;
    let count;
    s.split('').forEach((currentChar) => {
        currentChar === 'a' ? charPerBaseString++ : '';
        numberOfChar++
    });
    count = Math.floor((n / originalStingLength)) * charPerBaseString;
    const remainingCharLen = n % originalStingLength;
    s.slice(0, remainingCharLen).split('').forEach(currChar => {
        currChar === 'a' ? count++ : ''
    });
    document.getElementById('repeatedString').innerText = count.toString();
    return count;
}
