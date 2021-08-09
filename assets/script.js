shrimpy = {
    name: "Shrimpy McDee",
    hp: 100
}

hogman = {
    name: "Hogman Wilder",
    hp: 115
}

const displayChar = function() {
    $("#textDiv").empty().append("You chose a character!");
};

$("#charBtn").on("click", function () {
    event.preventDefault();
    $("#choiceDiv").empty();
    console.log(this.value)
    displayChar();
});