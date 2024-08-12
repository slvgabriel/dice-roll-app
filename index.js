function rollDice() {
    // returning values
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResults = document.getElementById("diceResults");
    const diceImgs = document.getElementById("diceImgs");
    const values = [];
    const images = [];

    //
    if (numOfDice > 20) {
        window.alert("You can roll up to 20 dices only!");
        document.getElementById("numOfDice").value = 20;
        return;
    } else if (numOfDice == 0) {
        window.alert("You need to select a valid amount!");
        return;
    } 

    // loop to generate values
    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.gif">`);
        reloadGifs()
    }
    
    // display results
    diceResults.textContent = `The results are: ${values.join(', ')}`;
    diceImgs.innerHTML = images.join("");
    
    // rename button after first roll
    let button = document.getElementById("rollBtn").innerHTML = "Roll Again!";

    // reload images
    function reloadGifs() {
        const diceImgs = document.getElementById("diceImgs").getElementsByTagName("img");
        for (let img of diceImgs) {
        img.src = img.src;
        }
    }
}
