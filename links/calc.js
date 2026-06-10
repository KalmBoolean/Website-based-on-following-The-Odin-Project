let a = null;
let op = null;
let currentInput = "";


//generting the numpad cuz im lazy
const numbers = document.querySelector(".numbers");
const operations = document.querySelectorAll(".operations .button");
const display = document.querySelector(".display");

for(let i = 1; i <10; i++){
    const numbutton = document.createElement("button");
    numbutton.classList.add("button");
    numbutton.id = "numberbutton";
    numbutton.textContent = i;
    numbutton.addEventListener("click", () => {
        currentInput += i;
        display.textContent = currentInput;
    });
    numbers.appendChild(numbutton);

}

function evaluate() {
    const b = Number(currentInput);

    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        
    }
}

for(const opButton of operations){
    opButton.addEventListener("click", () => {

        const symbol = opButton.textContent;

        if(symbol == "="){
            a = evaluate()
            op = null;
            display.textContent = a;
            currentInput = a;
            return;
        }

        if (op === null) {

            a = Number(currentInput);
            op = symbol;
            currentInput = "";
            display.textContent = "";

        } else {

            a = evaluate();
            display.textContent = a;

            op = symbol;
            currentInput = "";
        }
    });
}
