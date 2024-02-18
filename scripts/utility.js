//set background color
function setColor(event)
{
    const setColor=event.target.classList.add('bg-orange-400');
}

// update available seat
function availableSeat(elementId)
{
    const AvailableSeat=document.getElementById(elementId);
    const presentSeat=AvailableSeat.innerText;
    document.getElementById(elementId).innerText=parseInt(presentSeat)-1;
}
// create li and append some text inside it
function showClassSeat(elementId,section,seatType,price)
{
    const element=document.getElementById(elementId);
    const div=document.createElement('div');
    div.classList.add('grid');
    div.classList.add('grid-cols-3');
    const p=document.createElement('p');
    p.innerText=section;
    const p2=document.createElement('p');
    p2.innerText=seatType;
    const p3=document.createElement('p');
    p3.innerText=price;
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    element.appendChild(div);

}
function calTotal(elementId,price)
{
    const total=document.getElementById(elementId);
    let cost=parseInt(total.innerText)+parseInt(price);
    document.getElementById(elementId).innerText=parseInt(cost);
}
function GrandTotal(elementId,price)
{
    const element=document.getElementById(elementId).innerText;
    let elementCost=parseInt(element)+parseInt(price);
    document.getElementById(elementId).innerText=parseInt(elementCost);
}