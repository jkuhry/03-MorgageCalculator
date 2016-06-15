
$( document ).ready(function() {
var mosSel = [
    ['monthly', 12],
    ['bimonthly', 6]
 ];




for (var i = 0; i < mosSel.length; i++) {
    $("<option>").val(mosSel[i][1]).html(mosSel[i][0]).appendTo(".pPop");
}
//array finish//

//button function to input print answer//
$(function() {
    $("#yourBtn").on("click", function() {

        var Mbalance = $("#MorgLoanBalance").val();

        var AnnualPR = $("#AnnualPR").val();

        var LoanYRS = $("#LoanTermYrs").val();

        var monthsel = $("#periodPop").val();

        var numPayment =  LoanYRS * monthsel;

        var monintresT = (AnnualPR / 100) / monthsel;

        var compInt = Math.pow((1 + monintresT), numPayment);

        var IntrQuot = (monintresT * compInt) / (compInt-1);


        var finalCal = Mbalance * IntrQuot; 
    

//output to print//

       
        $("#output").html("Your monthly payment would be $" + parseInt(finalCal) + " hope this helps you!");


    })

});
});

//jk/sb/jl

