window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;
    var percentage = Math.floor(Math.random() * 101);


    if (yourName != "" && crushName != "") {
        
        document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love is: "
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }   

    if (percentage > 70) {

        console.log(document.getElementById("result-message2"));
        document.getElementById("result-message2").innerText = "Congrats! Your love rocks!! ;)";

    }

    if (percentage > 40 && percentage <= 70) {

        console.log(document.getElementById("result-message2"));
        document.getElementById("result-message2").innerText = "Your love is on the right way... :)";

    }

    if (percentage <= 40) {

        console.log(document.getElementById("result-message2"));
        document.getElementById("result-message2").innerText = "Sorry, your love sucks :(";

    }
}

function clearText()  
{
    document.getElementById('your-name').value = "";
    document.getElementById('crush-name').value = "";
    document.getElementById("result-message").innerText = "";
    document.getElementById("result-percentage").innerText = "";
    document.getElementById("result-message2").innerText = "";
    
}  