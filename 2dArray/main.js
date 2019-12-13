const testAr1 = Array(
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]);

const testAr2 = Array([1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 9, 2, -4, -4, 0],
[0, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0]);

const testAr4 = Array([-1, -1, 0, -9, -2, -2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1, -9, -2, -4, -4, -5],
[-7, -3, -3, -2, -9, -9],
[-1, -3, -1, -2, -4, -5]);

const testAr5 = Array(
[-1, 1, -1, 0, 0, 0],
[0, -1, 0, 0, 0, 0],
[-1, -1, -1, 0, 0, 0],
[0, -9, 2, -4, -4, 0],
[-7, 0, 0, -2, 0, 0],
[0, 0, -1, -2, -4, 0]
);

function countHighestSumHoverglass(arr) {
    let highestSum;
    let currentSum;
    arr.forEach((eachRow, rI) => {
        eachRow.forEach( (eachCol, cI) => {
            if ((cI <= eachRow.length - 3) && (rI <= arr.length -3)) {
                currentSum = arr[rI][cI] + arr[rI][cI+1] + arr[rI][cI+2] + arr[rI+1][cI+1] + arr[rI+2][cI] + arr[rI+2][cI+1] + arr[rI+2][cI+2];
            }
            highestSum = ((!highestSum && highestSum !== 0)|| (currentSum > highestSum)) ? currentSum : highestSum;
        });
    });
    document.getElementById('highestHoverCount').innerText = highestSum.toString();
    return highestSum;
}
