let player = {
    boxes: new Decimal(1),
    shoints: new Decimal(0),
    
    generators: [{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal(1),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e4'),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e9'),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e16'),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e25'),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e36'),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e49'),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e64'),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e81'),
        priceMultiplier: 100
    },{
        amount: new Decimal(0),
        purchasedAmount: 0,
        multiplier: new Decimal(1),
        price: new Decimal('1e100'),
        priceMultiplier: 100
    }],
    
    squares: {
        cost: new Decimal(2),
        amountFilled: 0,
        level: 0,
        items: [],
        globalMultiplier: 1,
    },
    
    research: {
        energy: new Decimal(0),
        energyMax: new Decimal(15),
        level: 0,
        energyPerSec: new Decimal(0),
        generatorBoosts: new Array(10).fill(1),
        buildings: [{
                name: "Hamsters running in a wheel",
                amount: new Decimal(0),
                powerBase: new Decimal(1),
                priceBase: new Decimal(15),
            },{
                name: "Spinning a generator with your hand",
                amount: new Decimal(0),
                powerBase: new Decimal(5),
                priceBase: new Decimal(80),
            },{
                name: "Energy generating bike",
                amount: new Decimal(0),
                powerBase: new Decimal(30),
                priceBase: new Decimal(365),
            },{
                name: "Wind Turbine",
                amount: new Decimal(0),
                powerBase: new Decimal(120),
                priceBase: new Decimal(2360),
            },{
                name: "Solar Panels",
                amount: new Decimal(0),
                powerBase: new Decimal(560),
                priceBase: new Decimal(14280),
            },{
                name: "Nuclear Power Station",
                amount: new Decimal(0),
                powerBase: new Decimal(3080),
                priceBase: new Decimal(56750),
            },{
                name: "Dyson's Sphere",
                amount: new Decimal(0),
                powerBase: new Decimal(62000),
                priceBase: new Decimal(10560280),
            }]
    }
}

const boxesIcon = `<i class="ui icon box"></i>`;
const shointsIcon = `<i class="ui icon square"></i>`;

var fps = 30;
var dt = 1/fps;

function Loop(){
    
    document.getElementById("moneyDisplay").innerHTML = boxesIcon+Simplify(player.boxes);
    document.getElementById("moneyPerSecDisplay").innerHTML = boxesIcon+Simplify(GetGeneratorAmount(0),2)+" / sec";
    
    document.getElementById("shointsDisplay").innerHTML = shointsIcon+Simplify(player.shoints);
    
    UpdateGenerators(dt);
    UpdateGeneratorButtons();
    UpdateResearch(dt);
    
    for (var i = 0; i < player.generators.length; i++){
        if (player.generators[i].amount.greaterThan(0)){
            player.shoints = Decimal.add(player.shoints, dt * 0.1);
        }
    }
    
    
    setTimeout(Loop, 1000/fps);
}

window.addEventListener("load", function(){
    Loop();
    PurchaseSquare(0);
})