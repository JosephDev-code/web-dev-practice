//Defining the list using an array
let List = []
//Defining the user input
let Input = prompt('Welcme to the To Do list project');
Input = Input.toLowerCase();
//Using while loop 
while (Input !== 'quit') {
    if (Input === 'new') {
        let Add = prompt('What do you want to add to the list?')
        List.push(Add);
        console.log('added:', Add, 'to the list');
    }
    else if (Input === 'list') {
        console.log('***TO DO LIST***');
        for (let i = 0; i < List.length; i++) {
            console.log(i + 1, List[i]);
        }
        console.log('*******');
    }
    else if (Input === 'delete') {
        let Index = prompt('What number item do you wish to delete?');
        List.splice(Index - 1, 1);
        console.log('Deleted number', Index);
    }
    Input = prompt('Enter a command');
    Input = Input.toLowerCase();
}
console.log('you quit the app');