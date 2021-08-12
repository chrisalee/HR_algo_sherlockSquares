/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a  //start interger
 *  2. INTEGER b  //end interger
 */

const squares = (startInteger, endInteger) => {
  const firstRoot = Math.ceil(Math.sqrt(startInteger));
  const lastRoot = Math.floor(Math.sqrt(endInteger));

  let rootIntegersCount = 0;
  for (let root = firstRoot; root <= lastRoot; root++) {
    const isInteger = Number.isInteger(root);
    if (isInteger) rootIntegersCount++;
  }
  return rootIntegersCount;
};


//  too slow for some cases
const squares = (a, b) => {
    let numberSquareRoots = 0;
    
    for(let i = a; i <= b; i++) {
        const squareRoot = Math.sqrt(i);
        if(i % squareRoot === 0) {
            numberSquareRoots++;
            console.log(i, '->', squareRoot);
        } else {
            continue;
        }
    }
    // console.log(numberSquareRoots);
    return numberSquareRoots;
}
