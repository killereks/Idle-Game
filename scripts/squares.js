function PurchaseSquare(amount){
    for (var i = 0; i < amount; i++){
        if (player.boxes.greaterThanOrEqualTo(player.squares.cost)){
            player.boxes = Decimal.sub(player.boxes, player.squares.cost);
            player.squares.amountFilled++;
            if (player.squares.amountFilled > 100){
                player.squares.amountFilled = 0;
                player.squares.level++;
            }
        }
    }
	
	player.squares.cost = Decimal.pow(15, player.squares.level * player.squares.level);
    
    for (var i = 0; i < 100; i++){
        document.getElementById(`grid-square-${i}`).classList.remove("active");
        
        if (i < player.squares.amountFilled){
            document.getElementById(`grid-square-${i}`).classList.add("active");
        }
    }
    
    document.getElementById("square-cost").innerHTML = `Square cost: ${Simplify(player.squares.cost, 1)}`;
	
	document.getElementById("square-multiplier").innerHTML = `${liraIcon} Chance: ${GetLiraChance()}%<br>${liraIcon} Amount Per Chance: ${GetLiraAmount()}`;
}

function SquaresBtnHighlight(){
	if (player.boxes.greaterThanOrEqualTo(player.squares.cost)){
		document.getElementById("square-1-btn").classList.add("green");
	} else {
		document.getElementById("square-1-btn").classList.remove("green");
	}
	
	if (player.boxes.greaterThanOrEqualTo(Decimal.mul(10, player.squares.cost))){
		document.getElementById("square-10-btn").classList.add("green");
	} else {
		document.getElementById("square-10-btn").classList.remove("green");
	}
	
	if (player.boxes.greaterThanOrEqualTo(Decimal.mul(100, player.squares.cost))){
		document.getElementById("square-100-btn").classList.add("green");
	} else {
		document.getElementById("square-100-btn").classList.remove("green");
	}
}

function GetLiraChance(){
	return player.squares.amountFilled;
}
function GetLiraAmount(){
	return Decimal.pow(3, player.squares.level);
}