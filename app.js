const users = [
    {name: 'Alice', age: 26, isActive: true},
    {name: 'Bob', age: 30, isActive: false},
    {name: 'Charlie', age: 20, isActive: true},
    {name: 'David', age: 35, isActive: true},
    {name: 'Eve', age: 28, isActive: false}
];

// {'Charlie', 'Alice', 'David'}

let usersActive = users.filter(function(item) {
    // console.log(item.isActive);
    return (item.isActive === true)
});
// console.log(usersActive);

let usersAge = usersActive.sort((a, b) => {
    return a.age - b.age;
});
// console.log(usersAge);

let usersName = usersAge.map(function(elem) {
    return elem.name;
});

console.log(usersName);
// console.log(usersName.join());

let result = document.querySelector('#result');

result.innerHTML = usersName.join('  ')