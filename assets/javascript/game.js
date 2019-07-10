$(document).ready(() => {



    let myElements =

        $("#rules").html(rules.innerHTML + "<br/>" + "Each crystal has its own hidden number." + "<br/>" + " Each time you click the crystal the hidden number will add it up." + "<br/>" + "If the adding up number is match the number it shows on the left box. You will win.");


    function randomNum() {
        $("#start").on("click", () => {
            let targetNum = [24, 46, 29, 44, 31, 37, 50, 18, 22, 33];
            let randomNum = Math.floor(Math.random() * (targetNum.length));
            document.getElementById("fixNum").innerHTML = (targetNum[randomNum]);


            randomHiddenNum = targetNum[randomNum];


            let crystalHiddenNum = [4, 5, 6, 7, 8, 9];
        
            let hiddenNumberG = Math.floor(Math.random() * (crystalHiddenNum.length));
            g = crystalHiddenNum[hiddenNumberG];

            let hiddenNumberR = Math.floor(Math.random() * (crystalHiddenNum.length));
            r = crystalHiddenNum[hiddenNumberR];

            let hiddenNumberY = Math.floor(Math.random() * (crystalHiddenNum.length));
            y = crystalHiddenNum[hiddenNumberY];

            let hiddenNumberB = Math.floor(Math.random() * (crystalHiddenNum.length));
            b = crystalHiddenNum[hiddenNumberB];


        });


    }

    let click = 0;
    {
        let gg; {

            $("#greenCrystal").click(() => {
                click += g;

                if (click < randomHiddenNum) {

                    document.getElementById("hiddenNum").innerHTML = click;
                } else if (click > randomHiddenNum) {
                    document.getElementById("lose").innerHTML = "YOU LOSE";
                } else if (click == randomHiddenNum) {
                    document.getElementById("win").innerHTML = "YOU WIN";
                }
            });

        }

        let rr; {

            $("#redCrystal").click(() => {
                click += r;

                if (click < randomHiddenNum) {
                    document.getElementById("hiddenNum").innerHTML = click;
                } else if (click > randomHiddenNum) {               
                    document.getElementById("lose").innerHTML = "YOU LOSE";
                } else if (click == randomHiddenNum) {               
                    document.getElementById("win").innerHTML = "YOU WIN";
                }

            });

        }

        let yy; {

            $("#yellowCrystal").click(() => {
                click += y;

                if (click < randomHiddenNum) {
                    document.getElementById("hiddenNum").innerHTML = click;
                } else if (click > randomHiddenNum) {
                    document.getElementById("lose").innerHTML = "YOU LOSE";
                } else if (click == randomHiddenNum) {
                    document.getElementById("win").innerHTML = "YOU WIN";
                }

            });


        }

        let bb; {

            $("#blueCrystal").click(() => {
                click += b;

                if (click < randomHiddenNum) {
                    document.getElementById("hiddenNum").innerHTML = click;
                } else if (click > randomHiddenNum) {
                    document.getElementById("lose").innerHTML = "YOU LOSE";
                } else if (click == randomHiddenNum) {
                    document.getElementById("win").innerHTML = "YOU WIN";
                }

            });

            randomNum()
        }

    }




});











