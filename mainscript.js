const button = document.querySelector("#HTContain .Button");
const calcbutton = document.querySelector(".Three .Button");
console.log(button);
button.addEventListener("click",() => {

    window.location.href = "links/etch.html";

})
calcbutton.addEventListener("click",()=>{
    window.location.href = "links/calc.html";
})

//pop in animation stuff

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const bluebox = document.querySelector(".bluebox");
observer.observe(bluebox);
