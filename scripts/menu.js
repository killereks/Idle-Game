function OpenMenu(targetMenu){
    var menus = ["generators","board"];
    
    for (var menu of menus){
        document.getElementById(menu).style.display = targetMenu == menu ? "block" : "none";
    }
}
OpenMenu("generators");