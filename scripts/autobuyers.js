function AutobuyGenerators(){
	for (var i = 0; i < 10; i++){
		if (player.automation.boxGenerators[i]){
			PurchaseGenerator(i);
		}
	}
}

function ToggleGeneratorAutomation(){
	for (var i = 0; i < 10; i++){
		player.automation.boxGenerators[i] = document.getElementById(`automate_generator_${i}`).checked;
	}
	
}