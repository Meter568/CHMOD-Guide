let input = prompt('Enter the privilege level in the Linux OS from 0 to 7');

let access;

if(input === null) {
    console.log('Okay.');
} else {
    access = Number(input);
    if(Number.isNaN(access)){
        console.log('Please enter a number, not a string!');
    } else {
        switch (access) {
            case 0:
                console.log(`The number entered is ${access}, in binary it will be 000, you do not have access rights.`);
                break;
            case 1:
                console.log(`The number entered is ${access}, in binary it will be 001, you only have execute permission.`);
                break;
            case 2:
                console.log(`The number entered is ${access}, in binary it will be 010, you only have write permission.`);
                break;
            case 3:
                console.log(`The number entered is ${access}, in binary it will be 011, you are allowed to write and execute.`);
                break;
            case 4:
                console.log(`The number entered is ${access}, in binary it will be 100, you only have read permission.`);
                break;
            case 5:
                console.log(`The number entered is ${access}, in binary it will be 101, you are allowed to read and execute.`);
                break;
            case 6:
                console.log(`The number entered is ${access}, in binary it will be 110, you are allowed to read and write.`);
                break;
            case 7:
                console.log(`The number entered is ${access}, in binary it will be 111, you have full access.`);
                break;
            default:
                console.log(`There is no such access number ${access} in Linux.`);
        }
    }
}