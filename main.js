const startBtn = document.querySelector(".main");
const output = document.querySelector(".time div");
const resetBtn = document.querySelector(".reset")
let counter = 0;
let flag = true;
let interval;
const stoper = () => {
    output.textContent = counter.toFixed(2);
    counter += 0.01;
}
startBtn.addEventListener("click", () => {
    if (flag) {
        interval = setInterval(stoper, 10);
        startBtn.textContent = "Stop";
    }
    if (!flag) {
        clearInterval(interval);
        startBtn.textContent = "Start";
    }
    flag = !flag;
})

resetBtn.addEventListener("click", () => {
    counter = 0;
    flag = true;
    clearInterval(interval);
    startBtn.textContent = "Start";
    output.textContent = `---`;
})