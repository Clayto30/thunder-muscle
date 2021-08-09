shrimpy = {
    name: "Shrimpy McDee",
    hp: 100
}

hogman = {
    name: "Hogman Wilder",
    hp: 115
}

const displayChar = function () {
    //$("#textDiv").empty().append("You chose a character!");
};

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
    console.log(this.value)
    //displayChar();
});