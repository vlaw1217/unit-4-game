$(document).ready(() => {

    let myElements =

        $("#rules").html(rules.innerHTML + "<br/>" + "Each crystal has its own hidden number." + "<br/>" + " Each time you click the crystal the hidden number will add it up." + "<br/>" + "The add up is equal to the number its provedied you will get a score.");


    $("#start").click(() => {
        let targetNum = [24, 46, 29, 44, 31, 37, 50, 18, 22, 33];
        let randomNum = Math.floor(Math.random() * (targetNum.length));
        document.getElementById("number").innerHTML = (targetNum[randomNum])

    });
});
        



    //let crystalHiddenNum = [6, 7, 8, 9];




    /*function myfunction() {
        var canvas = document.getElementById("numToAdd1");
        var ctx = canvas.getContext("2d");

        alert('aa');
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.font = "30px Arial";
        alert(targetNum);
        ctx.fillText = ((targetNum[randomTargetNum].toString()).value, 20, 20);
       
    }
    myfunction();
    //alert(targetNum[randomTargetNum].toString());



    //alert('aaa');
    /*$("#greenCrystal").click(() => {
 
function displayNum() {

    //alert('bbb')
    let num = Math.floor
        (Math.random() * (crystalHiddenNum.length));

   // alert("ccc")

    $("#greenCrystal").value[num];



}

displayNum()

});*/















