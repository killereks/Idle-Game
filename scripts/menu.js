function OpenMenu(targetMenu, btn){
    var menus = ["generators","board","research","industry","skilltree","challenges","milestones","settings"];
    
    for (var menu of menus){
        document.getElementById(menu).style.display = targetMenu == menu ? "block" : "none";
    }
    
    var activeElements = document.querySelectorAll("#mainMenu .active");
    
    for (var elem of activeElements){
        elem.classList.remove("active");
    }
    
    if (btn){
        btn.classList.add("active");
    }
}
OpenMenu("research");