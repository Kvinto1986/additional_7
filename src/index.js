module.exports = function solveSudoku(matrix) {
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if(matrix[i][j]===0){
            let num=[1,2,3,4,5,6,7,8,9];
           matrix[i][j]=num
        }
    }
}

return matrix
    }








