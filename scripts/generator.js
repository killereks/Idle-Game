function PurchaseGenerator(index){
    let generator = player.generators[index];
    
    if (player.boxes.greaterThanOrEqualTo(generator.price)){
        player.boxes = Decimal.sub(player.boxes, generator.price);
        
        generator.price = Decimal.mul(generator.price, generator.priceMultiplier);
        generator.purchasedAmount++;
        generator.amount = Decimal.add(generator.amount, 1);
        generator.multiplier = Decimal.mul(generator.multiplier, 2);
    }
}

function GetGeneratorMultipliers(index){
    let gen = player.generators[index];
    
    return Decimal.mul(gen.multiplier, player.squares.globalMultiplier);
}
function GetGeneratorAmount(index){
    let gen = player.generators[index];
    
    return Decimal.mul(gen.amount, GetGeneratorMultipliers(index));
}

function UpdateGenerators(deltaTime){
    player.boxes = Decimal.add(player.boxes, Decimal.mul(GetGeneratorAmount(0), deltaTime));
    
    for (var i = player.generators.length - 1; i >= 1; i--){
        let generator = player.generators[i];
        let nextGenerator = player.generators[i-1];
        
        let amountToAdd = GetGeneratorAmount(i);
        
        nextGenerator.amount = Decimal.add(nextGenerator.amount, Decimal.mul(amountToAdd, deltaTime));
    }
}

function UpdateGeneratorButtons(){
    for (var i = 0; i < player.generators.length; i++){
        let gen = player.generators[i];
        
        var btn = document.getElementById(`buy-gen-${i}-btn`)
        
        let canBuy = player.boxes.greaterThanOrEqualTo(gen.price);
        
        if (canBuy){
            btn.classList.add("green");
        } else {
            btn.classList.remove("green");
        }
        
        btn.innerHTML = `${boxesIcon} ${Simplify(gen.price)}`;
        
        document.getElementById("gen-amount-"+i).innerHTML = Simplify(gen.amount, 2);
        document.getElementById("gen-multiplier-"+i).innerHTML = "x"+Simplify(GetGeneratorMultipliers(i), 1);
    }
}