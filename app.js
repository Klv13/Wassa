const waterGlassbtn = document.getElementById('Button');
const waterGlass = document.getElementById('Glass');
const waterGlass2 = document.getElementById('Glass2');
const waterGlass3 = document.getElementById('Glass3');
const waterGlass4 = document.getElementById('Glass4');
const waterGlass5 = document.getElementById('Glass5');





function clicked(int){

    //1
    if (int == 1 && !waterGlass.classList.contains("WaterGlassComplete")) {
        waterGlass.classList.add("WaterGlassComplete");
        SaveStorage(1);
    }
    else if(int == 1 && waterGlass.classList.contains("WaterGlassComplete")){
        waterGlass3.classList.remove("WaterGlassComplete");
        waterGlass2.classList.remove("WaterGlassComplete");
        waterGlass.classList.remove("WaterGlassComplete");
        waterGlass4.classList.remove("WaterGlassComplete");
        waterGlass5.classList.remove("WaterGlassComplete");
        SaveStorage(0);
    }


    //2
    if (int == 2 && !waterGlass2.classList.contains("WaterGlassComplete")) {
        waterGlass2.classList.add("WaterGlassComplete");
        waterGlass.classList.add("WaterGlassComplete");
        SaveStorage(2);
    }
    else if(int == 2 && waterGlass2.classList.contains("WaterGlassComplete")){
        waterGlass2.classList.remove("WaterGlassComplete");
        waterGlass3.classList.remove("WaterGlassComplete");
        waterGlass4.classList.remove("WaterGlassComplete");
        waterGlass5.classList.remove("WaterGlassComplete");
        SaveStorage(1);
    }


    //3
    if (int == 3 && !waterGlass3.classList.contains("WaterGlassComplete")) {
        waterGlass3.classList.add("WaterGlassComplete");
        waterGlass2.classList.add("WaterGlassComplete");
        waterGlass.classList.add("WaterGlassComplete");
        SaveStorage(3);
        
    }
    else if(int == 3 && waterGlass3.classList.contains("WaterGlassComplete")){
        waterGlass3.classList.remove("WaterGlassComplete");
        waterGlass4.classList.remove("WaterGlassComplete");
        waterGlass5.classList.remove("WaterGlassComplete");
        SaveStorage(2);
        
    }

    //4
    if (int == 4 && !waterGlass4.classList.contains("WaterGlassComplete")) {
        waterGlass3.classList.add("WaterGlassComplete");
        waterGlass2.classList.add("WaterGlassComplete");
        waterGlass.classList.add("WaterGlassComplete");
        waterGlass4.classList.add("WaterGlassComplete");
        SaveStorage(4);
        
    }
    else if(int == 4 && waterGlass3.classList.contains("WaterGlassComplete")){
        waterGlass4.classList.remove("WaterGlassComplete");
        waterGlass5.classList.remove("WaterGlassComplete");
        SaveStorage(3);
        
    }


    //5
    if (int == 5 && !waterGlass5.classList.contains("WaterGlassComplete")) {
        waterGlass3.classList.add("WaterGlassComplete");
        waterGlass2.classList.add("WaterGlassComplete");
        waterGlass.classList.add("WaterGlassComplete");
        waterGlass4.classList.add("WaterGlassComplete");
        waterGlass5.classList.add("WaterGlassComplete");
        SaveStorage(5);
        
    }
    else if(int == 5 && waterGlass3.classList.contains("WaterGlassComplete")){
        waterGlass5.classList.remove("WaterGlassComplete");
        SaveStorage(4);
        
    }

}

window.onload = function(){
    loadStorage();
};

function SaveStorage(num){
    localStorage.clear();
    localStorage.setItem("num", num);
}

function loadStorage(){

    if(localStorage.getItem("num") != 0){
        clicked(localStorage.getItem("num"));
    }
}