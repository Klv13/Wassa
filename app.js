const waterGlassbtn = document.getElementById('Button');
const waterGlass = document.getElementById('Glass');
const waterGlass2 = document.getElementById('Glass2');
const waterGlass3 = document.getElementById('Glass3');


function clicked(int){
    if (int == 1) {
        waterGlass.classList.add("WaterGlassComplete");
    }
    if (int == 2) {
        waterGlass2.classList.add("WaterGlassComplete");
    }
    if (int == 3) {
        waterGlass3.classList.add("WaterGlassComplete");
    }
    

}
