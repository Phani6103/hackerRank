let testS1 = 'UDDDUDUU';
let testN1 = 8;
function countingValleys(n, s) {
    let mapObj = {
        U: '1',
        D: '-1'
    };
    let counter = 0;
    let loopTotal = 0;
    let valleyCount = 0;
    s.split('').forEach(currentValue => {
        currentValue = +currentValue.replace(/U|D/gi, (matched) => {return mapObj[matched]});
        counter += currentValue;
        if (counter === 0) {
            if (loopTotal < 0) {
                valleyCount++;
            }
                loopTotal = 0;
        } else {
            loopTotal += currentValue
        }
    });
    document.getElementById('valleyCount').innerText = valleyCount.toString();
    return valleyCount;
}
