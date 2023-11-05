let data = [
    {
        name: 'Matero', 
        age: '30'
    },
    {
        name: 'Sarah', 
        age: '32'
    },
    {
        name: 'John', 
        age: '25'
    },
    {
        name: 'Tim', 
        age: '8'
    },
    {
        name: 'Sam', 
        age: '7'
    },
    {
        name: 'Joey', 
        age: '6'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + 
    ' years old' + '</div>';
})

info.innerHTML = details.join('\n')