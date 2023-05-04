let buffer = '0';
let runningTotal = 0;
let previousOperator;
const screen = document.querySelector(".Calc_Console");


function Button_Click(value) {

    if (isNaN(parseInt(value))) {
        handle_symbols(value);
    }
    else {
        handle_numbers(value);
    }
    rerender();

}

function handle_numbers(number) {

    if (buffer === '0') {
        buffer = number;
    }
    else {
        buffer += number;
    }
}

function handleMath(value) {
    if (buffer === '0') {/*do nothing*/ return; }

    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;

    }
    else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    buffer  = '0';
    
}

function flushOperation(intBuffer){
    if(previousOperator ==='+')
    {
        runningTotal += intBuffer;
    }
    else if (previousOperator === '−'){
        runningTotal -= intBuffer;
    }
    else if (previousOperator === '÷'){
        runningTotal /= intBuffer;
    }
    else if (previousOperator === '×'){
        runningTotal *= intBuffer;
    }
  
}


function handle_symbols(symbol) {
    console.log("Symbol");
    switch (symbol) {
        case 'C':
            buffer = '0';
            break;
        case '=':
            if(previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer ="" + runningTotal;
            runningTotal = 0;
            break;
        case '⬅':
            if (buffer.length === 1) {
                buffer = '0';
            }
            else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+':
        case '−':
        case '÷':
        case '×':
            handleMath(symbol);
            break;

    }
}


function init() {
    document
        .querySelector(".Calculator")
        .addEventListener("click", function (event) {
            Button_Click(event.target.innerText);
        });
}


function rerender() {
    screen.innerText = buffer;
}


init();





// //-----------------------------------------------------------------------------------------------------------



// function main(){
//     document.querySelector(".buttons");
//     addEventListener("click" ,(event)=>{
//         ButtonClicked(event.target.innerText);
//     })

// }

// function ButtonClicked(value){
//     console.log(value);
    
// }


// main();









