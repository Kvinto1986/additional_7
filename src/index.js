module.exports = function solveSudoku(matrix) {

    let row = []
    let col = []
    for (let i = 0; i < 9; i++) {
        row[i] = matrix[i]
    }
    let arrayColumn = (arr, n) => arr.map(x => x[n]);
    for (let i = 0; i < 9; i++) {
        col[i] = arrayColumn(matrix, i)
    }


    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] === 0) {
                let box = []
                let count = 3 * Math.floor(i / 3)
                for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                    for (let l = 3 * Math.floor(j / 3); l < 3 * Math.floor(j / 3) + 3; l++) {
                        box.push(matrix[m][l])
                    }
                }
                let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                let possible = []
                for (let k = 0; k < num.length; k++) {
                    let count = num[k]
                    if (row[i].includes(count) || col[j].includes(count) || box.includes(count)) {
                        continue
                    }
                    else possible.push(count)
                }
                matrix[i][j] = possible
            }
        }
    }
    ///////////////////////////////////////
    ///////////////////////////////////////
    //////////////////////////////////////


    let bool = 0;
    while (bool < 20) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (Array.isArray(matrix[i][j])) {
                    if (matrix[i][j].length === 1) {
                        let mat = matrix[i][j][0]
                        matrix[i][j] = matrix[i][j][0]
                        let box = []
                        let count = 3 * Math.floor(i / 3)
                        let count2 = 3 * Math.floor(j / 3)
                        for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                            for (let l = 3 * Math.floor(j / 3); l < count2 + 3; l++) {
                                box.push(matrix[m][l])
                            }
                        }
                        for (let f = 0; f < box.length; f++) {
                            if (Array.isArray(box[f])) {
                                if (box[f].includes(mat)) {
                                    let del = box[f].indexOf(mat)
                                    box[f].splice(del, 1)
                                }
                            }
                        }
                    }

                }
            }
        }

        for (let i = 0; i < 9; i++) {
            row[i] = matrix[i]
        }
        for (let i = 0; i < 9; i++) {
            col[i] = arrayColumn(matrix, i)
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (Array.isArray(matrix[i][j])) {
                    let box = []
                    let count = 3 * Math.floor(i / 3)
                    let count2 = 3 * Math.floor(j / 3)
                    for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                        for (let l = 3 * Math.floor(j / 3); l < count2 + 3; l++) {
                            box.push(matrix[m][l])
                        }
                    }
                    for (let k = 0; k < matrix[i][j].length; k++) {
                        if (row[i].includes(matrix[i][j][k]) || col[j].includes(matrix[i][j][k] || box.includes(matrix[i][j][k]))) {
                            matrix[i][j].splice(k, 1)
                        }

                    }
                }
            }
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (Array.isArray(matrix[i][j])) {
                    let box = []
                    let count = 3 * Math.floor(i / 3)
                    let count2 = 3 * Math.floor(j / 3)
                    for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                        for (let l = 3 * Math.floor(j / 3); l < count2 + 3; l++) {
                            if (Array.isArray(matrix[m][l]))
                                box.push(matrix[m][l])
                        }
                    }
                    let tmp_arr = []
                    for (let r = 0; r < box.length; r++) {
                        for (let s = 0; s < box[r].length; s++) {
                            tmp_arr.push(box[r][s])
                        }
                    }
                    let yes = 0;
                    for (let g = 0; g < matrix[i][j].length; g++) {
                        for (let f = 0; f < tmp_arr.length; f++) {
                            if (matrix[i][j][g] === tmp_arr[f]) {
                                yes++
                            }
                        }
                        if (yes === 1) {
                            matrix[i][j] = matrix[i][j][g]
                        }
                    }
                    for (let p = 0; p < row[i].length; p++) {
                        if (Array.isArray(row[i][p])) {
                            if (row[i][p].includes(matrix[i][j])) {
                                let step = row[i][p].indexOf(matrix[i][j])
                                row[i][p].splice(step, 1)
                            }
                        }
                    }
                    for (let p = 0; p < col[j].length; p++) {
                        if (Array.isArray(col[j][p])) {
                            if (col[j][p].includes(matrix[i][j])) {
                                let step = col[j][p].indexOf(matrix[i][j])
                                col[j][p].splice(step, 1)
                            }
                        }
                    }
                }


            }

        }


        for (let i = 0; i < 9; i++) {
            row[i] = matrix[i]
        }
        for (let i = 0; i < 9; i++) {
            col[i] = arrayColumn(matrix, i)
        }



        ///////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////


        let bool1 = false;
        top6: for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j].length === 1) {
                    bool1 = true
                    break top6
                }
            }
        }
        if (bool1 === false) {
            top: for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (Array.isArray(matrix[i][j]) && matrix[i][j].length > 1) {
                        let mega;
                        top2:   for (let k = 0; k < matrix[i][j].length; k++) {
                            var bool2 = true;
                            for (let p = 0; p < row[i].length; p++) {
                                if (Array.isArray(row[i][p]) && p !== j) {
                                    if (row[i][p].includes(matrix[i][j][k])) {
                                        bool2 = false

                                    }
                                }
                            }
                            if (bool2 === true) {
                                mega = matrix[i][j][k];
                                break
                            }
                        }
                        if (bool2 === true) {
                            matrix[i][j] = mega;
                            let mat = mega
                            let box = []
                            let count = 3 * Math.floor(i / 3)
                            for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                                for (let l = 3 * Math.floor(j / 3); l < 3 * Math.floor(j / 3) + 3; l++) {
                                    box.push(matrix[m][l])
                                }
                            }
                            for (let f = 0; f < box.length; f++) {
                                if (Array.isArray(box[f])) {
                                    if (box[f].includes(mat)) {
                                        let del = box[f].indexOf(mat)
                                        box[f].splice(del, 1)
                                    }
                                }
                            }
                            for (let p = 0; p < row[i].length; p++) {
                                if (Array.isArray(row[i][p])) {
                                    if (row[i][p].includes(matrix[i][j])) {
                                        let step = row[i][p].indexOf(matrix[i][j])
                                        row[i][p].splice(step, 1)
                                    }
                                }
                            }
                            for (let p = 0; p < col[j].length; p++) {
                                if (Array.isArray(col[j][p])) {
                                    if (col[j][p].includes(matrix[i][j])) {
                                        let step = col[j][p].indexOf(matrix[i][j])
                                        col[j][p].splice(step, 1)
                                    }
                                }
                            }


                        }

                    }
                }
            }
            if (bool2 === false) {
                top: for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                        if (Array.isArray(matrix[i][j]) && matrix[i][j].length > 1) {
                            let mega;
                            top2:   for (let k = 0; k < matrix[i][j].length; k++) {
                                var bool3 = true;
                                for (let p = 0; p < col[j].length; p++) {
                                    if (Array.isArray(col[j][p]) && p !== i) {
                                        if (col[j][p].includes(matrix[i][j][k])) {
                                            bool3 = false

                                        }
                                    }
                                }
                                if (bool3 === true) {
                                    mega = matrix[i][j][k];
                                    break
                                }
                            }
                            if (bool3 === true) {
                                matrix[i][j] = mega;
                                let mat = mega
                                let box = []
                                let count = 3 * Math.floor(i / 3)
                                for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                                    for (let l = 3 * Math.floor(j / 3); l < 3 * Math.floor(j / 3) + 3; l++) {
                                        box.push(matrix[m][l])
                                    }
                                }
                                for (let f = 0; f < box.length; f++) {
                                    if (Array.isArray(box[f])) {
                                        if (box[f].includes(mat)) {
                                            let del = box[f].indexOf(mat)
                                            box[f].splice(del, 1)
                                        }
                                    }
                                }
                                for (let p = 0; p < row[i].length; p++) {
                                    if (Array.isArray(row[i][p])) {
                                        if (row[i][p].includes(matrix[i][j])) {
                                            let step = row[i][p].indexOf(matrix[i][j])
                                            row[i][p].splice(step, 1)
                                        }
                                    }
                                }
                                for (let p = 0; p < col[j].length; p++) {
                                    if (Array.isArray(col[j][p])) {
                                        if (col[j][p].includes(matrix[i][j])) {
                                            let step = col[j][p].indexOf(matrix[i][j])
                                            col[j][p].splice(step, 1)
                                        }
                                    }
                                }


                            }

                        }
                    }
                }
            }
        }
        bool++

    }

    bool = 0;
    while (bool < 20) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (Array.isArray(matrix[i][j])) {
                    if (matrix[i][j].length === 1) {
                        let mat = matrix[i][j][0]
                        matrix[i][j] = matrix[i][j][0]
                        let box = []
                        let count = 3 * Math.floor(i / 3)
                        let count2 = 3 * Math.floor(j / 3)
                        for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                            for (let l = 3 * Math.floor(j / 3); l < count2 + 3; l++) {
                                box.push(matrix[m][l])
                            }
                        }
                        for (let f = 0; f < box.length; f++) {
                            if (Array.isArray(box[f])) {
                                if (box[f].includes(mat)) {
                                    let del = box[f].indexOf(mat)
                                    box[f].splice(del, 1)
                                }
                            }
                        }
                    }

                }
            }
        }

        for (let i = 0; i < 9; i++) {
            row[i] = matrix[i]
        }
        for (let i = 0; i < 9; i++) {
            col[i] = arrayColumn(matrix, i)
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (Array.isArray(matrix[i][j])) {
                    let box = []
                    let count = 3 * Math.floor(i / 3)
                    let count2 = 3 * Math.floor(j / 3)
                    for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                        for (let l = 3 * Math.floor(j / 3); l < count2 + 3; l++) {
                            box.push(matrix[m][l])
                        }
                    }
                    for (let k = 0; k < matrix[i][j].length; k++) {
                        if (row[i].includes(matrix[i][j][k]) || col[j].includes(matrix[i][j][k] || box.includes(matrix[i][j][k]))) {
                            matrix[i][j].splice(k, 1)
                        }

                    }
                }
            }
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (Array.isArray(matrix[i][j])) {
                    let box = []
                    let count = 3 * Math.floor(i / 3)
                    let count2 = 3 * Math.floor(j / 3)
                    for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                        for (let l = 3 * Math.floor(j / 3); l < count2 + 3; l++) {
                            if (Array.isArray(matrix[m][l]))
                                box.push(matrix[m][l])
                        }
                    }
                    let tmp_arr = []
                    for (let r = 0; r < box.length; r++) {
                        for (let s = 0; s < box[r].length; s++) {
                            tmp_arr.push(box[r][s])
                        }
                    }
                    let yes = 0;
                    for (let g = 0; g < matrix[i][j].length; g++) {
                        for (let f = 0; f < tmp_arr.length; f++) {
                            if (matrix[i][j][g] === tmp_arr[f]) {
                                yes++
                            }
                        }
                        if (yes === 1) {
                            matrix[i][j] = matrix[i][j][g]
                        }
                    }
                    for (let p = 0; p < row[i].length; p++) {
                        if (Array.isArray(row[i][p])) {
                            if (row[i][p].includes(matrix[i][j])) {
                                let step = row[i][p].indexOf(matrix[i][j])
                                row[i][p].splice(step, 1)
                            }
                        }
                    }
                    for (let p = 0; p < col[j].length; p++) {
                        if (Array.isArray(col[j][p])) {
                            if (col[j][p].includes(matrix[i][j])) {
                                let step = col[j][p].indexOf(matrix[i][j])
                                col[j][p].splice(step, 1)
                            }
                        }
                    }
                }


            }

        }


        for (let i = 0; i < 9; i++) {
            row[i] = matrix[i]
        }
        for (let i = 0; i < 9; i++) {
            col[i] = arrayColumn(matrix, i)
        }
        ///////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////



        let bool1 = false;
        top6: for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j].length === 1) {
                    bool1 = true;
                    break top6
                }
            }
        }
        if (bool1 === false) {
            top7: for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (Array.isArray(matrix[i][j]) && matrix[i][j].length === 2) {

                        top2:   for (let k = 0; k < matrix[i][j].length; k++) {
                            bool2 = true;
                            for (let p = 0; p < row[i].length; p++) {
                                if (Array.isArray(row[i][p]) && p !== 3 * Math.floor(j / 3) && p !== 3 * Math.floor(j / 3) + 1 && p !== 3 * Math.floor(j / 3) + 2) {
                                    if (row[i][p].includes(matrix[i][j][k])) {
                                        bool2 = false

                                    }
                                }
                            }
                            if (bool2 === true) {
                                var mega = matrix[i][j][k];
                                break
                            }
                        }
                        if (bool2 === true) {
                            matrix[i][j] = mega;
                            let mat = mega
                            let box = []
                            let count = 3 * Math.floor(i / 3)
                            for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                                for (let l = 3 * Math.floor(j / 3); l < 3 * Math.floor(j / 3) + 3; l++) {
                                    box.push(matrix[m][l])
                                }
                            }
                            for (let f = 0; f < box.length; f++) {
                                if (Array.isArray(box[f])) {
                                    if (box[f].includes(mat)) {
                                        let del = box[f].indexOf(mat)
                                        box[f].splice(del, 1)
                                    }
                                }
                            }
                            for (let p = 0; p < row[i].length; p++) {
                                if (Array.isArray(row[i][p])) {
                                    if (row[i][p].includes(matrix[i][j])) {
                                        let step = row[i][p].indexOf(matrix[i][j])
                                        row[i][p].splice(step, 1)
                                    }
                                }
                            }
                            for (let p = 0; p < col[j].length; p++) {
                                if (Array.isArray(col[j][p])) {
                                    if (col[j][p].includes(matrix[i][j])) {
                                        let step = col[j][p].indexOf(matrix[i][j])
                                        col[j][p].splice(step, 1)
                                    }
                                }
                            }

                            break top7
                        }


                    }
                }
            }
            if (bool2 === false) {
                top9: for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                        if (Array.isArray(matrix[i][j]) && matrix[i][j].length === 2) {

                            top2:   for (let k = 0; k < matrix[i][j].length; k++) {
                                bool2 = true;
                                for (let p = 0; p < col[j].length; p++) {
                                    if (Array.isArray(col[j][p]) && p !== 3 * Math.floor(i / 3) && p !== 3 * Math.floor(i / 3) + 1 && p !== 3 * Math.floor(i / 3) + 2) {
                                        if (col[j][p].includes(matrix[i][j][k])) {
                                            bool2 = false

                                        }
                                    }
                                }
                                if (bool2 === true) {
                                    mega = matrix[i][j][k];
                                    break
                                }
                            }
                            if (bool2 === true) {
                                matrix[i][j] = mega;
                                let mat = mega
                                let box = []
                                let count = 3 * Math.floor(i / 3)
                                for (let m = 3 * Math.floor(i / 3); m < count + 3; m++) {
                                    for (let l = 3 * Math.floor(j / 3); l < 3 * Math.floor(j / 3) + 3; l++) {
                                        box.push(matrix[m][l])
                                    }
                                }
                                for (let f = 0; f < box.length; f++) {
                                    if (Array.isArray(box[f])) {
                                        if (box[f].includes(mat)) {
                                            let del = box[f].indexOf(mat)
                                            box[f].splice(del, 1)
                                        }
                                    }
                                }
                                for (let p = 0; p < row[i].length; p++) {
                                    if (Array.isArray(row[i][p])) {
                                        if (row[i][p].includes(matrix[i][j])) {
                                            let step = row[i][p].indexOf(matrix[i][j])
                                            row[i][p].splice(step, 1)
                                        }
                                    }
                                }
                                for (let p = 0; p < col[j].length; p++) {
                                    if (Array.isArray(col[j][p])) {
                                        if (col[j][p].includes(matrix[i][j])) {
                                            let step = col[j][p].indexOf(matrix[i][j])
                                            col[j][p].splice(step, 1)
                                        }
                                    }
                                }

                                break top9
                            }


                        }
                    }
                }

            }
        }
        bool++
    }

    return matrix
}











