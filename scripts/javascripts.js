let count=0;
const AllBtn=document.getElementsByClassName('button');
for(const btn of AllBtn)
{
    btn.addEventListener('click',function handler(event)
    {
        count+=1;
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

        

    })
}


