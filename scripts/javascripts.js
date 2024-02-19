let count=0;
let freq={
    'A1':0,
    'A2':0,
    'A3':0,
    'A4':0,
    'B1':0,
    'B2':0,
    'B3':0,
    'B4':0,
    'C1':0,
    'C2':0,
    'C3':0,
    'C4':0,
    'D1':0,
    'D2':0,
    'D3':0,
    'D4':0,
    'E1':0,
    'E2':0,
    'E3':0,
    'E4':0,
    'F1':0,
    'F2':0,
    'F3':0,
    'F4':0,
    'G1':0,
    'G2':0,
    'G3':0,
    'G4':0,
    'H1':0,
    'H2':0,
    'H3':0,
    'H4':0,
    'I1':0,
    'I2':0,
    'I3':0,
    'I4':0,
    'J1':0,
    'J2':0,
    'J3':0,
    'J4':0,

}
let cnt=parseInt(0);
const AllBtn=document.getElementsByClassName('button');
for(const btn of AllBtn)
{
    btn.addEventListener('click',function handler(event)
    {

        
        const section=event.target.innerText;
        freq[section]++;
        if(freq[section]===1)
        {
            count++;
        }
        
        const seatType="economy";
        const price=550;
        if(count>=4)
        {
            document.getElementById('apply').removeAttribute('disabled',true);
            document.getElementById('applyID').removeAttribute('disabled',true);
        }

        if(count<=4)
        {
            // disable button

            if(freq[section]>=1)
            {
                document.getElementById('pas').removeAttribute('disabled',true);
                document.getElementById('nub').removeAttribute('disabled',true);
                document.getElementById('em').removeAttribute('disabled',true);
            }
            document.getElementById('pas').addEventListener('input',function(event)
            {
                if(event.target.value.length>3)
                {
                    cnt+=1;
                    checkCnt();

                }
                
                
            });
            document.getElementById('nub').addEventListener('input',function(event)
            {
                
                if(event.target.value.length>=9)
                {
                    cnt+=1;
                    checkCnt();
                }
                
            });
            
            document.getElementById('em').addEventListener('input',function(event)
            {
                if(event.target.value.length>=14)
                {
                    cnt+=1;
                    checkCnt();
                }
                
            });
            if(freq[section]===1)
            {
                setColor(event);
                // make button visited if it once used
                
                // end her
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
                            document.getElementById('distract').setAttribute('disabled',true);
                            document.getElementById('apply').setAttribute('disabled',true);
                            document.getElementById('applyID').setAttribute('disabled',true);
                            

                        }
                        else if((input)===(offer1)){
                            discountThePrice('g-total',discountOFFER2);
                            document.getElementById('distract').setAttribute('disabled',true);
                            document.getElementById('apply').setAttribute('disabled',true);
                            document.getElementById('applyID').setAttribute('disabled',true);
                        }
                        else
                        {
                            // console.log('not matched');
                        }
                    })
                    
                })
            }
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

function checkCnt() {
    if (cnt === 3) {
        document.getElementById('applied').removeAttribute('disabled', true);
    }
}