var full_year = parseInt(new Date().getFullYear())
function greet() { 
    var name_input = prompt("What is your name?") 
    alert("Hello, " + name_input)
    var userAge = prompt("How old are you, " + name_input + "?") 
    userAge = parseInt(userAge)
    if(confirm("If you have already had your birthday this year, click OK. If not, click Cancel.")) 
    { 
        alert((new Date().getFullYear() - userAge).toString()) 
        } else {
            userAge += 1
            console.log(userAge)
            alert((new Date().getFullYear() - userAge).toString()) 
        }
    }