import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Mutiplication","Division"],
  },
]);

//conditional statement
if(answer.operator ==="Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator ==="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operator ==="Multiplication")
{console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operator ==="Multiplication"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("please select valid operator")
}