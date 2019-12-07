const n = 10;
const ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
function sockMerchant(n, ar) {
    let givenArray = ar;
    let numberOfPairedSocks = 0;
    let i = 0;
    document.write('originalArray: ',givenArray, '<br/>');
    for (i = 0; i + 1 <= givenArray.length; i = 0) {
        let j = 0;
        const curentComparableSock = givenArray[0];
        document.write('PoppedOutValue: ', curentComparableSock, "<br/>");
        givenArray.splice(0, 1);
        document.write("givenArray: ", givenArray, "<br/>");
        document.write("numberOfPairs: ", numberOfPairedSocks.toString(), "<br/>");
        for (j = 0; j <= givenArray.length; j++) {
            if (curentComparableSock === givenArray[j]) {
                numberOfPairedSocks++;
                givenArray.splice(j, 1);
                document.write("givenNewArray: ", givenArray, "<br/>");
                document.write("numberOfNewPairs: ", numberOfPairedSocks.toString(), "<br/><br/>");
                break;
            }
        }
    }
    document.write("FinalNumberOfPairs: ", numberOfPairedSocks.toString(), "<br/>");
    // document.getElementById('totalPairs').innerHTML = numberOfPairedSocks.toString();
}

