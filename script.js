function printNumbers(from, to) {
    let number = from;

    let timerId = setInterval(() => {
        if (number > to) {
            clearInterval(timerId);
        } else {
            console.log(number);
        }

        number++;
    }, 1000);

}

printNumbers(5, 10);

function printNumbers(from, to) {
    let number = from;

    setTimeout(function run() {
        console.log(number);

        if (number < to) {
            setTimeout(run, 1000);
            number++;
        }
    }, 1000)
}

printNumbers(5, 10);

