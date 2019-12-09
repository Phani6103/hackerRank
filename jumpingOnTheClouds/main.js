const test1 = [0, 0, 0, 1, 0, 0];
const test2 = [0, 0, 1, 0, 0, 1, 0];
const test3 = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
const test4 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
const test10 = [0, 0, 0, 0, 0];
function canIJump(c) {
    let jump = 0;
    let i = 0;
    while (i < (+c.length-1) ) {
        // console.log('i: ', i, 'value: ', c[i], c[i+1], c[i+2]);
        if (c[i] === 1) {
            // console.log('jumped at case 1');
            i++;
        }
        else if (c[i+1] === 1 && c[i] === 0) {
            // console.log('jumped at case 2');
            jump++;
            i++;
            i++;
        }
        else if (c[i+1] === 0 && (c[i+2] === 1 || c[i+2] === undefined)&& c[i] === 0) {
            // console.log('jumped at case 3');
            jump++;
            i++;
        }
        else if (c[i+1] === 0 && c[i+2] === 0 && c[i] === 0) {
            // console.log('jumped at case 4');
            jump++;
            i++;
            i++;
        }
        else {
            // console.log('jumped at default');
            i++;
        }
        // console.log('nextStop: ', i, 'movedTo: ', c[i], 'jumps: ', jump);
        // console.log('nextStop:', i);
        // console.log('');
    }
    document.getElementById('numberOfJumps').innerText = jump.toString();
    // return jump;
}
