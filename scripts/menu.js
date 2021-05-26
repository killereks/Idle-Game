function OpenMenu(targetMenu){
    var menus = ["generators","board","research"];
    
    for (var menu of menus){
        document.getElementById(menu).style.display = targetMenu == menu ? "block" : "none";
    }
}
OpenMenu("research");