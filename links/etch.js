const sketcharea = document.querySelector(".sketch");
const slide = document.querySelector("#slide");
const color = document.querySelector("#color");
const theme = document.querySelector(".button.Theme");
const lines = document.querySelector(".button.Lines");
const rainbow = document.querySelector(".button.ToggleRainbow");
let rainbowenabled = false;
let drawing = false;
let linesenabled = true;

lines.addEventListener("click",()=>{linesenabled = !linesenabled; ChangeGridSize();})
theme.addEventListener("click", () => {
    document.body.classList.toggle("white");
})
rainbow.addEventListener("click",()=>{rainbowenabled = !rainbowenabled;})
document.addEventListener("mouseup",() =>{drawing = false;})
//init
ChangeGridSize();


slide.addEventListener("change", ChangeGridSize)

function ChangeGridSize(){
    let s = parseInt(slide.value);
    sketcharea.replaceChildren();
    sketcharea.style.gridTemplateColumns = "repeat(" + s + ", 1fr)";
    sketcharea.style.gridTemplateRows = "repeat(" + s + ", 1fr)";

    for(i = 0; i < s * s; i++){

        const pixel = document.createElement("div");
        pixel.addEventListener("mouseenter",DrawStuff);
        pixel.addEventListener("mousedown",EnableDraw);
        if(linesenabled)
        pixel.style.outline = "1px solid black";
        pixel.style.backgroundColor = "white";
        sketcharea.appendChild(pixel);

    }
}



//sketching part
function DrawStuff(){
    if(!drawing) return;
    if(!rainbowenabled){
        this.style.backgroundColor = color.value;
    }else{
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        this.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
}

function EnableDraw(){
    drawing = true;
    this.style.backgroundColor = color.value;
}