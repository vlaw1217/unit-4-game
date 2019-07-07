$(document).ready(() => {

    let myElements =
        
        $("#rules").html(rules.innerHTML + "<br/>" + "Each crystal has its own hidden number." + "<br/>" + " Each time you click the crystal the hidden number will add it up." + "<br/>" + "The add up is equal to the number its provedied you will get a score.");

    
    let targetNum = [24, 46, 29, 44, 31, 37, 50, 18, 22, 33];
     
    let crystalHiddenNum = [6, 7, 8, 9];
    let randomCrystalNum = crystalHiddenNum(Math.floor(Math.random) * 5);
    function numValue() {
        $("#greenCrystal").value = randomCrystalNum;

    }
    
    
    

    $()










});