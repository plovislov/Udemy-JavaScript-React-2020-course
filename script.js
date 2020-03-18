function makeCounter() {

    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    counter.set = n => counter.count = n;

    counter.decrease = () => counter.count--;

    return counter;
}

let counter = makeCounter();

counter.set(11);
counter();
counter.decrease();
console.log(counter()); // 10

