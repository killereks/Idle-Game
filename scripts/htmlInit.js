function MakeGenerators() {
    var html = ``;

    for (var i = 0; i < player.generators.length; i++) {
        let gen = player.generators[i];
        html += `<tr>
                    <td>Box Generator ${NumToRoman(i+1)}</td>
                    <td id="gen-amount-${i}">0</td>
                    <td id="gen-multiplier-${i}">x1</td>
                    <td><button id="buy-gen-${i}-btn" class="ui button fluid" onclick="PurchaseGenerator(${i});"></button></td>
                </tr>`;
    }

    document.getElementById("generatorParent").innerHTML = html;
}
MakeGenerators();


function CreateGrid() {
    var html = ``;

    for (var i = 0; i < 100; i++) {
        html += `<div class="grid-square" id="grid-square-${i}"></div>`;
    }

    document.getElementById("boardGrid").innerHTML = html;
}
CreateGrid();


function CreateResearch() {
    var html = ``;

    var index = 0;
    
    for (var module of player.research.buildings) {
        html += `
        <tr>
            <td id="research-building-${index}-amount">${module.amount}</td>
            <td>${module.name}</td>
            <td id="research-building-${index}-power">${module.powerBase}</td>
            <td><button onclick="PurchaseResearchBuilding(${index});" class="ui fluid button blue tiny">${shointsIcon} ${Simplify(module.priceBase,3)}</button></td>
        </tr>`
        
        index++;
    }
    
    document.getElementById("research-buildings-parent").innerHTML = html;
}
CreateResearch();


function GeneratorAutomationSettings(){
	var html = ``;
	
	for (var i = 0; i < 10; i++){
		html += `<div class="card">
					<div class="ui top attached label">Box Generator ${NumToRoman(i+1)} Autobuyer.</div>
					<div class="content">
						<div class="ui checkbox">
							<input type="checkbox" id="automate_generator_${i}" onclick='ToggleGeneratorAutomation()' checked>
							<label>Enabled?</label>
						</div>
					</div>
				</div>`;
	}
	
	document.getElementById("generatorAutomationParent").innerHTML = html;
}
GeneratorAutomationSettings();