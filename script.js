let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

let byName = users.sort(byField('name'));
console.log(byName);

let byAge = users.sort(byField('age'));
console.log(byAge);