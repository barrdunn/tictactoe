const cellElements = document.querySelectorAll('[data-cell]');

let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
});

function handleClick() {
    //Check for a mark
    //Check for a win
    //Check for a draw
    //Switchturns
}

