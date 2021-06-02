function OpenSettingsMenu(targetMenu, btn){
    var menus = ["general","automation","save","changelog","statistics","credits"];
    
    for (var menu of menus){
        document.getElementById("settings_"+menu).style.display = targetMenu == menu ? "block" : "none";
    }
    
    var activeElements = document.querySelectorAll("#settingsMenu .active");
    
    for (var elem of activeElements){
        elem.classList.remove("active");
    }
    
    if (btn){
        btn.classList.add("active");
    }
}
OpenSettingsMenu("general");