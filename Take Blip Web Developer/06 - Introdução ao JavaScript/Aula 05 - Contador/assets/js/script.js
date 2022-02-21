var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var add = document.getElementById("add");
var sub = document.getElementById("sub");

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    manageCounterState();
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    manageCounterState();
}

function manageCounterState() {
    if (currentNumber < 10) {
        add.disabled = false;
    }
    if (currentNumber <= -10) {
        sub.disabled = true;
    }
    if (currentNumber >= 10) {
        add.disabled = true;
    }
    if (currentNumber > -10) {
        sub.disabled = false;
    }
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = "black";
    }else {
        currentNumberWrapper.style.color = "red";
    }
}

manageCounterState();
add.addEventListener("click", increment);
sub.addEventListener("click", decrement);
