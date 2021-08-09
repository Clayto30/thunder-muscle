shrimpy = {
    name: "Shrimpy McDee",
    hp: 100
}

hogman = {
    name: "Hogman Wilder",
    hp: 115
}

$("#charBtn").on("click", function () {
    event.preventDefault();
    function displayRadioValue() {
        var ele = document.getElementsByName('char');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                document.getElementById("textDiv").innerHTML
                    = "You chose " + ele[i].value;
        }
    }
    displayRadioValue();
    $("#choiceDiv").empty();
    const text1 = function() {
        document.getElementById("textDiv").innerHTML = "Your character pins the opponent!"
    };
    const text2 = function() {
        document.getElementById("textDiv").innerHTML = "<h3>3!</h3>"
    };
    const text3 = function() {
        document.getElementById("textDiv").innerHTML = "<h2>2!</h2>"
    };
    const text4 = function() {
        document.getElementById("textDiv").innerHTML = "<h1>1!</h1>"
    };
    const text5 = function() {
        document.getElementById("textDiv").innerHTML = "Your character wins the match! The crowd goes wild!"
    };
    setTimeout(text1, 3000);
    setTimeout(text2, 6000);
    setTimeout(text3, 7500);
    setTimeout(text4, 9000);
    setTimeout(text5, 12000);
});