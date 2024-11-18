let task = 'I want to be a web developer';
let count = 0;

for (let i=0; i<task.length; i++) {
    if(task[i] === 'a'){
        count++;
    }
}

console.log(count);