const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)

function dragStart() {
    console.log('drag Start');
}
function dragEnd() {
    console.log('drag End');
}
function dragOver() {
    console.log('drag Over');
}
function dragEnter() {
    console.log('drag Enter');
}
function dragLeave() {
    console.log('drag Leave');
}
function dragDrop() {
    console.log('drag Drop');
}