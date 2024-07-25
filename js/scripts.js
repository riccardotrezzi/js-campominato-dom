const startButton = document.getElementById('start-button');

startButton.addEventListener ('click', function (){
    const gridContainer = document.getElementById('grid-container');

    for (let i = 1; i <= 100; i++) {

        const newCell = document.createElement('div');
        newCell.innerHTML = i;
        gridContainer.append(newCell);

        newCell.addEventListener ('click', function (){
            //console.log('this', this, typeof this);

            this.classList.add('click-card');
            console.log(i);
        })
    }
})