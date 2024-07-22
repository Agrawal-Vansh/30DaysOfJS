// Loops

// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(let i=1;i<=10;i++)
    console.log(i);
//output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

for(let i=1;i<=10;i++)
    console.log(`5*${i}=${5*i}`);
// Output:
// 5*1=5
// 5*2=10
// 5*3=15
// 5*4=20
// 5*5=25
// 5*6=30
// 5*7=35
// 5*8=40
// 5*9=45
// 5*10=50


// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum=0;
for(let i=1;i<=10;i++)
    sum+=i;
console.log(`Sum is ${sum}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let i=11;
while(--i)
    console.log(i);
//output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let num=5
do
{
    console.log(num);
    num--;
}while(num>=1);


// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let fac=1;
num=5;
do
{
    fac*=num--;
}while(num!=0)
console.log(`factorial of 5 is ${fac}`);

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops: 
/* Pattern
*
* *
* * *
* * * *
* * * * *
*/
let pattern="";
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
        pattern+="* ";
    pattern+="\n";
}
console.log(pattern);
// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i=1;i<=10;i++)
{
    if(i==5)
        continue;
    console.log(i);
}
// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let i=1;i<=10;i++)
    {
        if(i==7)
            break;
        console.log(i);
    }

// Feature Request:

// Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.