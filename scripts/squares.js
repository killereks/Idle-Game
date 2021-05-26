function PurchaseSquare(amount){
    for (var i = 0; i < amount; i++){
        if (player.boxes.greaterThanOrEqualTo(player.squares.cost)){
            player.boxes = Decimal.sub(player.boxes, player.squares.cost);
            player.squares.amountFilled++;
            
            if (player.squares.amountFilled == 100){
                player.squares.cost = Decimal.pow(15, player.squares.level);
            }
            if (player.squares.amountFilled > 100){
                player.squares.amountFilled = 0;
                player.squares.level++;
            }
        }
    }
    
    for (var i = 0; i < 100; i++){
        document.getElementById(`grid-square-${i}`).classList.remove("active");
        
        if (i < player.squares.amountFilled){
            document.getElementById(`grid-square-${i}`).classList.add("active");
        }
    }
    
    document.getElementById("square-cost").innerHTML = `Square cost: ${Simplify(player.squares.cost, 1)}`;
    
    let min = Decimal.pow(1.1, player.squares.level+1);
    let max = Decimal.pow(2, player.squares.level+1);
    let t = player.squares.amountFilled / 100;
    
    player.squares.globalMultiplier = LerpDecimal(min, max, t*t);
    
    document.getElementById("square-multiplier").innerHTML = "x"+Simplify(player.squares.globalMultiplier, 2);
}