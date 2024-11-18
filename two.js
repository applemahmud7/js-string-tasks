let task = 'I want to be a A web developer';
let count = 0;

for (let i=0; i<task.length; i++) {
    if(task[i] === 'a' || task[i] === 'A'){
        count++;
    }
}

console.log(count);