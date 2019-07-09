$(document).ready(() => {



    let myElements =

        $("#rules").html(rules.innerHTML + "<br/>" + "Each crystal has its own hidden number." + "<br/>" + " Each time you click the crystal the hidden number will add it up." + "<br/>" + "The add up is equal to the number its provedied you will get a score.");


    function randomNum() {
        $("#start").on("click", () => {
            let targetNum = [24, 46, 29, 44, 31, 37, 50, 18, 22, 33];
            let randomNum = Math.floor(Math.random() * (targetNum.length));
             document.getElementById("fixNum").innerHTML = (targetNum[randomNum]);

            randomHiddenNum = targetNum[randomNum];
            
            let crystalHiddenNum = [4, 5, 6, 7, 8, 9];
            
            let hiddenNumber = Math.floor(Math.random() * (crystalHiddenNum.length));
            x = crystalHiddenNum[hiddenNumber];
            
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
  
    
    let click = 0; {

        let gc; {
            $("#greenCrystal").click(() => {
                click += g;
                if (click < randomHiddenNum) {
                    document.getElementById("hiddenNum").innerHTML = click;
                } else if (click > randomHiddenNum) {
                    message = "Sorry you lose, Please try again!";
                } else (click == randomHiddenNum); {
                    message = 'YOU GOT IT';
                }
            });           
        }

        let rc; {
            $("#redCrystal").click(() => {
                click += r;
                if (click < randomHiddenNum) {
                    document.getElementById("hiddenNum").innerHTML = click;
                } else if (click > randomHiddenNum) {
                    message = "Sorry you lose, Please try again!";
                } else (click == randomHiddenNum); {
                    message = 'YOU GOT IT';
                }
            });
        }

        let yc; {
            $("#yellowCrystal").click(() => {
                click += y;              
                if (click < randomHiddenNum) {
                    document.getElementById("hiddenNum").innerHTML = click;
                } else if (click > randomHiddenNum) {
                    message = "Sorry you lose, Please try again!";
                } else (click == randomHiddenNum); {
                    message = 'YOU GOT IT';
                }           
            }); 
        }
    
        let bc; {

            $("#blueCrystal").click(() => {
                click += b;
                if (click < randomHiddenNum) {
                    document.getElementById("hiddenNum").innerHTML = click;
                } else if (click > randomHiddenNum) {
                    message = "Sorry you lose, Please try again!";
                } else (click == randomHiddenNum); {
                    message = 'YOU GOT IT';
                }         
            });
        }


randomNum()


    }






});











