var MatrixCells = null
var MatrixNeighbors = null

export function init(matrix){
    MatrixCells = matrix;

    MatrixNeighbors = matrixArray(MatrixCells.length, MatrixCells[0].length)
}

export function setNeighbors(){  
    for(var i = 0; i < MatrixCells.length; i++){
        for(var j = 0; j < MatrixCells[0].length; j++){
            MatrixNeighbors[i][j] = getNeighbors(i, j);
        }
    }
}

function getNeighbors(i, j){
    var a = 0;
    
    if (j > 0)
    {
        if (MatrixCells[i][j - 1].life == 1)
            a++;
        if (i > 0)
            if (MatrixCells[i - 1][j - 1].life == 1)
                a++;
        if (i < MatrixCells.length - 1)
            if (MatrixCells[i + 1][j - 1].life == 1)
                a++;
    }
    if (j < MatrixCells[0].length - 1)
    {
        if (MatrixCells[i][j + 1].life == 1)
            a++;
        if (i < MatrixCells.length - 1)
            if (MatrixCells[i + 1][j + 1].life == 1)
                a++;
        if (i > 0)
            if (MatrixCells[i - 1][j + 1].life == 1)
                a++;
    }
    if (i < MatrixCells.length - 1)
        if (MatrixCells[i + 1][j].life == 1)
            a++;
    if (i > 0)
        if (MatrixCells[i - 1][j].life == 1)
            a++;

    return a;
}

export function iter(){
    setNeighbors();
    
    for(var i = 0; i < MatrixCells.length; i++){
        for(var j = 0; j < MatrixCells[0].length; j++){
            if ((MatrixCells[i][j].life == 0) && (MatrixNeighbors[i][j] == 3))
                MatrixCells[i][j].life = 1;
            else if ((MatrixCells[i][j].life == 1) && ((MatrixNeighbors[i][j] != 3) && (MatrixNeighbors[i][j] != 2)))
                MatrixCells[i][j].life = 0;
        }
    }
}

export function test(){
    //setNeighbors();
    //console.log(MatrixCells[1])
    console.log(MatrixCells);
    console.log(MatrixNeighbors);
}

function matrixArray(rows, columns){
    var arr = new Array();
    for(var i = 0; i < rows; i++){
        arr[i] = new Array();
        for(var j = 0; j < columns; j++){
            arr[i][j] = 0;
        }
    }
    return arr;
}

//export { init, getNeighbors, test }