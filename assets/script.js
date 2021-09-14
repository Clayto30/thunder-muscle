const shrimpy = {
    name: "Shrimpy McDee",
    hp: 100,
    charImg: "assets/shrimpy.jpg"
}

const hogman = {
    name: "Hogman Wilder",
    hp: 115,
    charImg: "assets/hammer.jpg"
}

const roger = {
    name: "Roger 'The Hammer' Stein",
    hp: 100,
    charImg: "assets/hammer.jpg"
}

const bobby = {
    name: "Young Bobby",
    hp: 100,
    charImg: "assets/young.jpg"
}

const swole = {
    name: "SwoleFather",
    hp: 115,
    charImg: "assets/swole.jpg"
}

var char = {
    name: "",
    hp: 100,
    charImg: ""
}

$("#charBtn").on("click", function () {
    event.preventDefault();
    function displayRadioValue() {
        var ele = document.getElementsByName('char');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
                document.getElementById("textDiv").innerHTML
                    = "You chose " + ele[i].value;
            if (ele[i].value === "Shrimpy McDee") {
                return char = shrimpy;
            } else if (ele[i].value === "Hogman Wilder") {
                return char = hogman
            } else if (ele[i].value === "Young Bobby") {
                return char = bobby
            } else if (ele[i].value === "Roger the Hammer Stein") {
                return char = roger
            } else if (ele[i].value === "Swole Father") {
                return char = swole
            } else {
                console.log("It didn't work")
                break;
            }
        }
        }
    }
    displayRadioValue();
    console.log(char.charImg + "2");
    $("#choiceDiv").empty();
    document.getElementById("imgDiv").innerHTML = "<img src=" + char.charImg + ">"
    console.log(char.name + "3");
    const text1 = function () {
        document.getElementById("textDiv").innerHTML = char.name + " pins the opponent!"
    };
    const text2 = function () {
        document.getElementById("textDiv").innerHTML = "<h3>3!</h3>"
    };
    const text3 = function () {
        document.getElementById("textDiv").innerHTML = "<h2>2!</h2>"
    };
    const text4 = function () {
        document.getElementById("textDiv").innerHTML = "<h1>1!</h1>"
    };
    const text5 = function () {
        document.getElementById("textDiv").innerHTML = char.name + " wins the match! The crowd goes wild!"
    };
    setTimeout(text1, 3000);
    setTimeout(text2, 6000);
    setTimeout(text3, 7500);
    setTimeout(text4, 9000);
    setTimeout(text5, 12000);
});