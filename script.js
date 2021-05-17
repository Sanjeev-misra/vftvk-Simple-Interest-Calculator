function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal > 0)
    {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = (principal * years * rate /100);
        var year = new Date().getFullYear()+parseInt(years);
        var myin = 0.00;
        //myin = parseint(interest)+parseint(principal);
        //document.getElementById("result").innerText=interest + " in the year "+year;
	document.getElementById("result").innerHTML="<b>If</b> you deposit "+principal+", <b>at</b> an interest rate of "+rate+". <br><b>You</b> will receive an amount of "+interest+", <br>"+" <b>in</b> the year "+year+"<br>";
    }
    else
    {
        alert("Enter a positive number");
	document.getElementById("principal").focus();
        
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
         