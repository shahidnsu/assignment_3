//problem 1

function kilometerToMeter(kilo)
{
    if (kilo <=0)
    {
        return "kilometer cannot be negative";
    }
    else 
    {
         return kilo * 1000;   
    }
}
//problem 2 

function budgetCalculator(watch,phone,laptop)
  
       
{
    if (watch >=0 && phone >=0 && laptop >=0   )
    {
        let totalCost = (50*watch) + (100*phone) + (500*laptop);
        return totalCost;
    }
        else if (watch <0 || phone <0 || laptop <0)
        {
            return "you cannot buy a negative number of products please input positive numbers for items";
        }
}


//problem 3
function hotelCost (numberOfDays)
{
    if (numberOfDays <= 10)
    {
        let totalCost = 100* numberOfDays;
        return totalCost;
    }
    else if (numberOfDays > 10 && numberOfDays <=20)
    {
        let totalCost = (10*100) + ((numberOfDays-10)*80);
        return totalCost;
    }
    else if (numberOfDays > 20)
    {
        let totalCost = (10*100) +((10*80)) +((numberOfDays - 20)*50);
        return totalCost;
    }
    else (numberOfDays <=0)
    {
        return "please input postive numbers or greater then 0 for numberofDays";
    }
}


//problem 4

function megaFriend(namesOfFriends)
{
    let max = namesOfFriends[0]
    for(var i = 0; i <namesOfFriends.length; i++)
    {
        
        if (max < namesOfFriends[i])
        {
            max = namesOfFriends[i];
        }
        
    }
    return max;
    

}

