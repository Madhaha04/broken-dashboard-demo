// ISSUE: Global variable pollution
var user_data = {}; 

function handleUser() {
    // ISSUE: Using 'var' instead of 'let/const'
    var name = document.getElementById('userInput').value;

    // SECURITY: Cross-Site Scripting (XSS) vulnerability via innerHTML
    document.getElementById('output').innerHTML = "Welcome, " + name + "!";

    // BUG: Typo in method name (getElemntById) - will throw runtime error
    // BUG: Accessing 'score' ID which doesn't exist in HTML
    document.getElemntById('score').innerText = "100";

    calculatePoints(10);
}

// DUPLICATION: Function A and Function B do exactly the same thing
function calculatePoints(p) {
    var base = 10;
    var total = p + base;
    console.log("Total is: " + total);
    return total;
}

function processScore(s) {
    // DUPLICATION: Identical logic to calculatePoints
    var base = 10;
    var total = s + base;
    console.log("Total is: " + total);
    return total;
}

function checkAge(age) {
    // COVERAGE ISSUE: Unreachable code/Dead code
    if (age < 0) {
        if (age > 10) {
            // This block can NEVER be reached because age can't be < 0 AND > 10
            console.log("This is dead code");
            return false;
        }
    }

    // BUG: Assignment instead of comparison (age = 18 is always truthy)
    if (age = 18) {
        console.log("You just became an adult!");
    }

    return true;
}

// ISSUE: Unused function (Low coverage)
function unusedUtility() {
    var secret = "I am never called";
    return secret;
}
