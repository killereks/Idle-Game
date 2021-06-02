var skilltree = {
    skills: [
        {
            name: `x2 <i class="icon right arrow"></i>x2.2 <br> boost to generators per purchase.`,
            cost: new Decimal(1)
        },
        {
            name: `50% discount to generators.`,
            cost: new Decimal(5)
        },
        {
            name: `First 5 second after purchasing generators get a x10 boost.`,
            cost: new Decimal(25)
        },
        {
            name: `Gain a generator boost based on time spent in current prestige.`,
            cost: new Decimal(50)
        },
        {
            name: `Unlock 5th generator.`,
            cost: new Decimal(100)
        },
        {
            name: `Unlock 6th generator.`,
            cost: new Decimal(250)
        },
        {
            name: `Unlock 7th generator.`,
            cost: new Decimal(500)
        },
        {
            name: `Unlock 8th generator.`,
            cost: new Decimal(1000)
        },
        {
            name: `Gain a generator boost based on completed achievements.`,
            cost: new Decimal(2500)
        },
        {
            name: `Research is 5x faster.`,
            cost: new Decimal(5000)
        },
        {
            name: `Start with a Wind Turbine.`,
            cost: new Decimal(10000)
        },
        {
            name: `Research receives a boost based on time spent in current prestige.`,
            cost: new Decimal(25000)
        },
        {
            name: `Collecting resources in industry is much faster.`,
            cost: new Decimal(10000)
        },
        {
            name: `Start with 1x 8th generator after prestige.`,
            cost: new Decimal(15000)
        },
        {
            name: `Start with 1 million squares.`,
            cost: new Decimal(35000)
        },
        {
            name: `Unlock Blackmarket.`,
            cost: new Decimal(75000)
        }
    ]
}


function GenerateSkilltreeHTML(){
    var html = ``;

    for (var skill of skilltree.skills){
        html += `<div class="four wide column">
                    <button class="skilltree-btn">${skill.name}</button>
                    <div class="skilltree-cost">${Simplify(skill.cost,0)} prestige points</div>
                </div>`;
    }


    document.getElementById("skilltreeParent").innerHTML = html;
}
GenerateSkilltreeHTML();