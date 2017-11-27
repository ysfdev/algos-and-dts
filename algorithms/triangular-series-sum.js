//Find the triangular series sum of given highest n number
//Ex: n = 8  1,2,3,4,5,6,7,8 . Series = 36

function findTriangularSeriesSum(n) {
    //The triangular series sum of any num is: (n^2+n)/2
    return (n && typeof n === 'number') 
           ? (Math.pow(n,2)+n) / 2
           : null;
}

module.exports.findTriangularSeriesSum = findTriangularSeriesSum;