// Activity 1: If-Else Statements

// - Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let numpos=2;
if(numpos>0)
        console.log("Number is positive"); // Output: "Number is positive"
else if(numpos<0)
        console.log("Number is negative"); //not excecuted
else
        console.log("Number is zero"); //not excecuted

// - Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age=18;
if(age>=18)
        console.log("I can Vote"); //output: I can vote
else    
        console.log("I can not vote"); // not exceuted

// Activity 2: Nested If-Else Statements

// - Task 3 Write a program to find the largest of three numbers using nested if-else statements.
 let num1=4,num2=3,num3=5;
 let largest=null;
 if (num1 >= num2)
 {
     if (num1 >= num3) 
         largest = num1;
     else 
         largest = num3;
 } 
 else 
 {
     if (num2 >= num3) 
         largest = num2;
     else 
         largest = num3;
 }
     
 console.log(`The largest number is ${largest}`); //output: largest number is 5

// Activity 3: Switch Case

// - Task 4 Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day=6;
switch(day) //output: Saturday
{
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Satday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("Invalid Number Entered");
}

// - **Task 5:** Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score=80;
switch(true) //output: B
{
    case (score>=90):
        console.log('A');
        break;
    case (score>=80):
        console.log('B');
        break;
    case score>=70:
        console.log('C');
        break;
    case score>=60:
        console.log('D');
        break;
    case score>=50:
        console.log('E');
        break;
    default:
        console.log('F');
        break;
}

// **Activity 4: Conditional (Ternary) Operator**

// - **Task 6:** Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num4=123;
(num4%2==0)?console.log("even"):console.log("Odd"); //output odd


// **Activity 5: Combining Conditions**

// - **Task 7:** Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year=2024;

if(year%400==0 ||(year%4==0 && year%100!=0))
    console.log(`${year} is a leap year`);
else
    console.log(`${year} is not a leap year`);
// **Feature Request:**

// 1. **Number Check Script:** Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. **Voting Eligibility Script:** Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. **Day of the Week Script:** Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. **Grade Assignment Script:** Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. **Leap Year Check Script:** Write a script that checks if a year is a leap year using multiple conditions and logs the result.

