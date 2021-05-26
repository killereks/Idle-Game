function MakeGenerators(){
    var html = ``;
    
    for (var i = 0; i < player.generators.length; i++){
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


function CreateGrid(){
    var html = ``;
    
    for (var i = 0; i < 100; i++){
        html += `<div class="grid-square" id="grid-square-${i}"></div>`;
    }
    
    document.getElementById("boardGrid").innerHTML = html;
}
CreateGrid();