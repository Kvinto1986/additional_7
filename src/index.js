module.exports = function solveSudoku(matrix) {

    var sudoku = [];
    sudoku = matrix
    var tmp = []
    var big_arr = []
    var small_arr = []

    function numbers_uniq(array) {
        var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (var i = 0; i < num.length; i++) {
            var ind = num.indexOf(array[i])
            if (ind != -1) {
                num.splice(ind, 1)
            }
            return num
        }
    }

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (sudoku[i][j] == 0) {
                sudoku[i][j] = numbers_uniq(sudoku[i])
            }
        }
    }

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (sudoku[i][j].length < 1) {
                tmp.push(i)
            }
        }
    }

    for (var i = 0; i < tmp.length; i++) {
        for (var j = 0; j < 9; j++) {
            if (!matrix[j][tmp[i]]) {
                small_arr.push(matrix[j][tmp[i]])
            }

        }
        if (small_arr.length != 0) {
            big_arr.push(small_arr)
            small_arr = []
        }

        function numbers_uniq_final(array, array2) {
            var count = array2
            for (var i = 0; i < array.length; i++) {
                var ind = count.indexOf(array[i])
                if (ind != -1) {
                    count.slice(ind, 1)
                }
            }
            return count
        }

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < tmp.length; j++) {
                if (matrix[j][tmp[i]]) {
                    if (big_arr[j]) {
                        sudoku[i][tmp[j]] = numbers_uniq_final(big_arr[j], matrix[i][tmp[j]])
                    }
                    if (sudoku[i][tmp[j]]) {
                        if (sudoku[i][tmp[j]].length == 1) {
                            sudoku[i][tmp[j]] = sudoku[i][tmp[j]]
                        }
                    }
                }
            }
            if (small_arr != 0) {
                big_arr.push(small_arr)
                small_arr = []
            }
        }
    }
    return sudoku
}







