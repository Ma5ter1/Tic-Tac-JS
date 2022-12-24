//empty global var on initialization
const playerWon = "false";
const scoreVar = 0; //TODO IMPLEMENT A SCORE SYSTEM WITH AN UPDATE LOOOP
//create an event to call onPlayerWin
function onPlayerWin() {
    //add score by 1
}

function myfunc() {

    // Setting DOM to all boxes or input field
    var grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9;
    grid1 = document.getElementById("grid1").value;
    grid2 = document.getElementById("grid2").value;
    grid3 = document.getElementById("grid3").value;
    grid4 = document.getElementById("grid4").value;
    grid5 = document.getElementById("grid5").value;
    grid6 = document.getElementById("grid6").value;
    grid7 = document.getElementById("grid7").value;
    grid8 = document.getElementById("grid8").value;
    grid9 = document.getElementById("grid9").value;

// Checking if Player X won or not and after
// that disable alL other fields
    if ((grid1 == 'X' || grid1 == 'X') && (grid2 == 'X' || grid2 == 'X') && (grid3 == 'X' || grid3 == 'X')) {
            document.getElementById('print').innerHTML = "Player X won";
            document.getElementById("grid4").disabled = true;
            document.getElementById("grid5").disabled = true;
            document.getElementById("grid6").disabled = true;
            document.getElementById("grid7").disabled = true;
            document.getElementById("grid8").disabled = true;
            document.getElementById("grid9").disabled = true;
            scoreVar = scoreVar++;
            document.getElementById('scoreX').innerHTML = String(scoreVar); //where value is set
            window.alert('Player X won');
    }
    else if ((grid1 == 'X' || grid1 == 'X') && (grid4 == 'X' || grid4 == 'X') && (grid7 == 'X' || grid7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid5").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid8").disabled = true;
        document.getElementById("grid9").disabled = true;

        window.alert('Player X won');
    }
    else if ((grid7 == 'X' || grid7 == 'X') && (grid8 == 'X' || grid8 == 'X') && (grid9 == 'X' || grid9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid5").disabled = true;
        document.getElementById("grid6").disabled = true;
        window.alert('Player X won');
    }
    else if ((grid3 == 'X' || grid3 == 'X') && (grid6 == 'X' || grid6 == 'X') && (grid9 == 'X' || grid9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid5").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid8").disabled = true;
        window.alert('Player X won');
    }
    else if ((grid1 == 'X' || grid1 == 'X') && (grid5 == 'X' || grid5 == 'X') && (grid9 == 'X' || grid9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid8").disabled = true;
        window.alert('Player X won');
    }
    else if ((grid3 == 'X' || grid3 == 'X') && (grid5 == 'X' || grid5 == 'X') && (grid7 == 'X' || grid7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid8").disabled = true;
        document.getElementById("grid9").disabled = true;
        window.alert('Player X won');
    }
    else if ((grid2 == 'X' || grid2 == 'X') && (grid5 == 'X' || grid5 == 'X') && (grid8 == 'X' || grid8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid9").disabled = true;
        window.alert('Player X won');
    }
    else if ((grid4 == 'X' || grid4 == 'X') && (grid5 == 'X' || grid5 == 'X') && (grid6 == 'X' || grid6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid8").disabled = true;
        document.getElementById("grid9").disabled = true;
        window.alert('Player X won');
    }

    // Checking of Player X finish
    // Checking for Player O starts, Is player O won or
    // not and after that disabled all the other fields
    else if ((grid1 == 'O' || grid1 == 'O') && (grid2 == 'O' || grid2 == 'O') && (grid3 == 'O' || grid3 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid5").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid8").disabled = true;
        document.getElementById("grid9").disabled = true;
        window.alert('Player O won');
    }
    else if ((grid1 == 'O' || grid1 == 'O') && (grid4 == 'O' || grid4 == 'O') && (grid7 == 'O' || grid7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid5").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid8").disabled = true;
        document.getElementById("grid9").disabled = true;
        window.alert('Player O won');
    }
    else if ((grid7 == 'O' || grid7 == 'O') && (grid8 == 'O' || grid8 == 'O') && (grid9 == 'O' || grid9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid5").disabled = true;
        document.getElementById("grid6").disabled = true;
        window.alert('Player O won');
    }
    else if ((grid3 == 'O' || grid3 == 'O') && (grid6 == 'O' || grid6 == 'O') && (grid9 == 'O' || grid9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid5").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid8").disabled = true;
        window.alert('Player O won');
    }
    else if ((grid1 == 'O' || grid1 == 'O') && (grid5 == 'O' || grid5 == 'O') && (grid9 == 'O' || grid9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid8").disabled = true;
        window.alert('Player O won');
    }
    else if ((grid3 == 'O' || grid3 == 'O') && (grid5 == 'O' || grid5 == 'O') && (grid7 == 'O' || grid7 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid8").disabled = true;
        document.getElementById("grid9").disabled = true;
        window.alert('Player O won');
    }
    else if ((grid2 == 'O' || grid2 == 'O') && (grid5 == 'O' || grid5 == 'O') && (grid8 == 'O' || grid8 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid4").disabled = true;
        document.getElementById("grid6").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid9").disabled = true;
        window.alert('Player O won');
    }
    else if ((grid4 == 'O' || grid4 == 'O') && (grid5 == 'O' || grid5 == 'O') && (grid6 == 'O' || grid6 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("grid1").disabled = true;
        document.getElementById("grid2").disabled = true;
        document.getElementById("grid3").disabled = true;
        document.getElementById("grid7").disabled = true;
        document.getElementById("grid8").disabled = true;
        document.getElementById("grid9").disabled = true;
        window.alert('Player O won');
    }

    // Checking of Player O finish
    // Here, Checking about Tie
    else if ((grid1 == 'X' || grid1 == 'O') && (grid2 == 'X' || grid2 == 'O') && (grid3 == 'X' || grid3 == 'O') &&
        (grid4 == 'X' || grid4 == 'O') && (grid5 == 'X' ||
            grid5 == 'O') && (grid6 == 'X' || grid6 == 'O') &&
        (grid7 == 'X' || grid7 == 'O') && (grid8 == 'X' ||
            grid8 == 'O') && (grid9 == 'X' || grid9 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tied');
    }
    else {

        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player Xs Turn";
        } else if(flag == 0) {
            document.getElementById('print')
                .innerHTML = "Player Os Turn";
        } else if (flag != 1 || 0) {
            document.getElementById('print')
                .innerHTML = "ERROR NO PLAYER FOUND"
        }
    }
}

//reset game and null values
function myfunc_2() {
    location.reload();
    document.getElementById('grid1').value = '';
    document.getElementById("grid2").value = '';
    document.getElementById("grid3").value = '';
    document.getElementById("grid4").value = '';
    document.getElementById("grid5").value = '';
    document.getElementById("grid6").value = '';
    document.getElementById("grid7").value = '';
    document.getElementById("grid8").value = '';
    document.getElementById("grid9").value = '';
    
    //clear score
    document.getElementById("scoreX").value = '0';
    document.getElementById("scoreO").value = '0';
}

// Here onwards, functions check turn of the player
// and put accordingly value X or O
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("grid1").value = "X";
        document.getElementById("grid1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid1").value = "O";
        document.getElementById("grid1").disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById("grid2").value = "X";
        document.getElementById("grid2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid2").value = "O";
        document.getElementById("grid2").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("grid3").value = "X";
        document.getElementById("grid3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid3").value = "O";
        document.getElementById("grid3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("grid4").value = "X";
        document.getElementById("grid4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid4").value = "O";
        document.getElementById("grid4").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById("grid5").value = "X";
        document.getElementById("grid5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid5").value = "O";
        document.getElementById("grid5").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("grid6").value = "X";
        document.getElementById("grid6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid6").value = "O";
        document.getElementById("grid6").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("grid7").value = "X";
        document.getElementById("grid7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid7").value = "O";
        document.getElementById("grid7").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById("grid8").value = "X";
        document.getElementById("grid8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid8").value = "O";
        document.getElementById("grid8").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById("grid9").value = "X";
        document.getElementById("grid9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("grid9").value = "O";
        document.getElementById("grid9").disabled = true;
        flag = 1;
    }
}