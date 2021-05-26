let player = {
    boxes: new Decimal(1),
    
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
    }
}

const boxesIcon = `<i class="ui icon box"></i>`;

var fps = 30;
var dt = 1/fps;

function Loop(){
    
    document.getElementById("moneyDisplay").innerHTML = boxesIcon+Simplify(player.boxes);
    document.getElementById("moneyPerSecDisplay").innerHTML = boxesIcon+Simplify(GetGeneratorAmount(0),2)+" / sec";
    
    UpdateGenerators(dt);
    UpdateGeneratorButtons();
    
    
    
    setTimeout(Loop, 1000/fps);
}

window.addEventListener("load", function(){
    Loop();
    PurchaseSquare(0);
})