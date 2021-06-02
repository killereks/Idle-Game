function UpdateResearch(dt){
    let energyPerTick = Decimal.mul(player.research.energyPerSec, dt);
    
    player.research.energy = Decimal.add(player.research.energy, energyPerTick);
    
    if (player.research.energy.greaterThanOrEqualTo(player.research.energyMax)){
        ResearchApplyUpgrade(player.research.level);
        player.research.level++;
        player.research.energyMax = Decimal.mul(Decimal.pow(2, player.research.level),4);
        
        player.research.energy = new Decimal(0);
        
        document.getElementById("research-next-upgrade").innerHTML = GetResearchUpgrade(player.research.level);
    }
    
    var secondsLeft = Decimal.div(Decimal.sub(player.research.energyMax, player.research.energy), player.research.energyPerSec);
    
    document.getElementById("research-time-left").innerHTML = "~"+secondsLeft.toFixed(1)+"s";
    document.getElementById("research-watts").innerHTML = Simplify(player.research.energyPerSec);
    
    var percentage = Decimal.mul(Decimal.div(player.research.energy, player.research.energyMax),100);
    percentage = Math.min(percentage, 100);
    
    document.getElementById("research-progress-bar").style.width = percentage +"%";
    document.getElementById("research-progress-value").innerHTML = percentage.toFixed(2)+"%";
    
    document.getElementById("research-progress-label").innerHTML = Simplify(player.research.energy)+" / "+Simplify(player.research.energyMax);
}


function GetResearchUpgrade(level){
    var randFunction = Math.seed(level);
    
    var randomIndex = randFunction() * 10;
    
    if (level < 3){
        randomIndex = 0;
    }
    
    return "Generator "+NumToRoman(Math.floor(randomIndex)+1)+" Boost";
}

function GetResearchBuildingCost(index){
    var building = player.research.buildings[index];
    return building.priceBase;
    //return Decimal.mul(building.priceBase, Decimal.pow(3, building.amount));
}

function PurchaseResearchBuilding(index){
    var building = player.research.buildings[index];
    
    var price = GetResearchBuildingCost(index);
    
    if (player.shoints.greaterThanOrEqualTo(price)){
        player.shoints = Decimal.sub(player.shoints, price);
        building.amount++;
    }
    
    document.getElementById("research-building-"+index+"-amount").innerHTML = building.amount;
    
    var totalPerSec = new Decimal(0);
    
    for (var building of player.research.buildings){
        totalPerSec = Decimal.add(totalPerSec, Decimal.mul(building.amount, building.powerBase));
    }
    
    player.research.energyPerSec = totalPerSec;
}

function ResearchApplyUpgrade(level){
    var randFunction = Math.seed(level);
    
    var randomIndex = Math.floor(randFunction() * 10);
    if (level < 3){
        randomIndex = 0;
    }
    
    player.research.generatorBoosts[randomIndex] *= 2;
}