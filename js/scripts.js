const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function (){

    const gridContainer = document.getElementById('grid-container');

    const diffLevels = document.getElementById('levels');
    console.log(diffLevels.value);

    let numberCells = 100;
    
    if (diffLevels.value == '2') {
        numberCells = 81;
    }
    else if (diffLevels.value == '3') {
        numberCells = 49;
    }

    gridContainer.innerHTML = '';

    for (let i = 1; i <= numberCells; i++) {

        const newCell = document.createElement('div');
        newCell.innerHTML = i;

        
        if (numberCells == 100){
            newCell.classList.add('easy');
        }
        else if (numberCells == 81){
            newCell.classList.add('medium');
        }
        else if (numberCells == 49){
            newCell.classList.add('hard');
        }
            
        newCell.addEventListener ('click', function (){

            this.classList.add('click-card');
            console.log(i);
        })

        gridContainer.append(newCell);
    }
})