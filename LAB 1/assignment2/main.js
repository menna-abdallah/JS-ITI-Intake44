var contdition = true;
while (contdition){

    var num = prompt("Can you Guess the number? ")

    if ( num == 7 )
    {
        alert("Well DONE \n it's the right number :) ")
        contdition = false;
    }
    else if ( num > 7)
    {
        alert(" WRONG ! \n Above secret number")
    }
    else if ( num < 7)
    {
        alert("WRONG ! \n Below secret number")
    }
    else
    {
        alert("please enter a number")
    }
}
