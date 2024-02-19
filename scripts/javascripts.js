let count=0;
const AllBtn=document.getElementsByClassName('button');
for(const btn of AllBtn)
{
    btn.addEventListener('click',function handler(event)
    {
        count+=1;
        const section=event.target.innerText;
        const seatType="economy";
        const price=550;
        if(count<=4)
        {
            setColor(event);
            classSeat('seatTwist',count);
            showClassSeat('appendSide',section,seatType,price);
            calTotal('total-cost',price);
            GrandTotal('g-total',price);
            availableSeat('setAvailable');

            document.getElementById('apply').addEventListener('input',function m(e)
            {
                const input=e.target.value;
                let offer='NEW15';
                let offer1='Couple 20';
                let discountOFFER1=15;
                let discountOFFER2=20;
                document.getElementById('applyID').addEventListener('click',function name()
                {
                    if((input)===(offer))
                    {
                        discountThePrice('g-total',discountOFFER1);
                    }
                    else if((input)===(offer1)){
                        discountThePrice('g-total',discountOFFER2);
                    }
                    else
                    {
                        // console.log('not matched');
                    }
                })
                
            })
        }
        else
        {
            if(count===5)
            {
                alert('You selected more than 4 which is not allow');
            }
            

        }
        // need discount also which is 15 and its has coupon code if matched
        /*
            step-1=>if once visit a button make it true
            step-2=>make button disabled if once used
             event.target.setAttribute("disabled", true);
        */

        

        

    })
}


