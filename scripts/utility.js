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
// creat li and append some text inside it
function showClassSeat()
{
    const element=document.getElementById('appendSide');

}