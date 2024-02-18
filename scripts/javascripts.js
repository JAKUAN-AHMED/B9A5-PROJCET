let count=0;
const AllBtn=document.getElementsByClassName('button');
for(const btn of AllBtn)
{
    btn.addEventListener('click',function handler(event)
    {
        count+=1;
        const section=event.target.innerText;
        const seatType="economy";
        const price=500;
        showClassSeat('appendSide',section,seatType,price);
        if(count<=4)
        {
            setColor(event);

        }
        else
        {
            if(count===5)
            {
                alert('You selected more than 4 which is not allow');
            }
            

        }
        availableSeat('setAvailable');
        const increaseSeat=document.getElementById('seatTwist');
        increaseSeat.innerText=count;
        calTotal('total-cost',price);
        // need discount also which is 15 and its has coupon code if matched
        GrandTotal('g-total',price);

        /*
            step-1=>if once visit a button make it true
            step-2=>make button disabled if once used
            event.target.setAttribute("disabled", true);
        */


        

    })
}


