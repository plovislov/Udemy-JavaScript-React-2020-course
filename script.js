let someDay = new Date('2012-02-20T03:20:00');
console.log(someDay);

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

let now = new Date();

console.log(getWeekDay(now));

function getSecondsTillTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    console.log(Math.round(diff / 1000));
}

getSecondsTillTomorrow();