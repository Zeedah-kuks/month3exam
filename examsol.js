// 1. Function to checkGrade(score)
function checkGrade(score) {
    if (score >= 70) {
        console.log("A");
    } 
    else if (score >= 60) {
        console.log("B");
    }
    else if (score >= 50) {
        console.log("C");
    }
    else {
        console.log("F");   
    }
}

// 2. Write a function login (username, password) that prints login successfully only if:  username is "admin" and password is "1234".
function login(username, password) {
    if (username === "admin" && password === "1234") {
        console.log("Login successful");
    }
    else {
        console.log("Login failed");
    }
}

// 3. Function to convertToFahrenheit(celsius)
function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
}

// 4. Function to check voting eligibility canVote(age)
function canVote(age) {
    if (age >= 18) {
        console.log("This person is eligible to vote");
    }
    else {
        console.log("This person is not eligible to vote");
    }
}

// 5. Function to print temperature status temperatureStatus(temp)
function temperatureStatus(temp) {
    if (temp < 0) {
        console.log("Freezing");
    }
    else if (temp >= 0 && temp <= 15) {
        console.log("Cold");
    }
    else if (temp >= 16 && temp <= 25) {
        console.log("Cool");
    }
    else if (temp >25 ) {
        console.log("Warm");
    }
}

//exampleto test code
checkGrade(85); 
checkGrade(36);
login("admin", "1234");
temperatureStatus(-2);
convertToFahrenheit(20);
canVote(20);
canVote(16);