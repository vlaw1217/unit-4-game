$(document).ready(() => {



    let myElements =

        $("#rules").html(rules.innerHTML + "<br/>" + "Each crystal has its own hidden number." + "<br/>" + " Each time you click the crystal the hidden number will add it up." + "<br/>" + "The add up is equal to the number its provedied you will get a score.");



    $("#start").on("click", () => {
        let targetNum = [24, 46, 29, 44, 31, 37, 50, 18, 22, 33];
        let randomNum = Math.floor(Math.random() * (targetNum.length));

        document.getElementById("fixNum").innerHTML = (targetNum[randomNum]);

    });

    
    let crystalHiddenNum = [4, 5, 6, 7, 8, 9];
    
    let hiddenNumber = Math.floor(Math.random() * (crystalHiddenNum.length));
    

    $("#greenCrystal").click(() => {
         document.getElementById("hiddenNum").innerHTML = crystalHiddenNum[hiddenNumber];
     
    });
      
    $("#redCrystal").click(() => {
        document.getElementById("hiddenNum").innerHTML = crystalHiddenNum[hiddenNumber];

    });

    $("#yellowCrystal").click(() => {
        document.getElementById("hiddenNum").innerHTML = crystalHiddenNum[hiddenNumber];
        
    });
        
    $("#blueCrystal").click(() => {
        document.getElementById("hiddenNum").innerHTML = crystalHiddenNum[hiddenNumber];

    });

            


    
            

 });











