let Home = document.querySelector("#Home");
let Providor = document.querySelector("#Providor");
let Services = document.querySelector("#Services");
let Galary = document.querySelector("#Galary");
let Client = document.querySelector("#Client");
let Contact = document.querySelector("#Contact");


Home.addEventListener("click", function(){
    window.scrollTo(0,0)
});
Providor.addEventListener("click", function(){
    window.scrollTo(0,540)
});
Services.addEventListener("click", function(){
    window.scrollTo(0,1200)
});
Galary.addEventListener("click", function(){
    window.scrollTo(0,1800)
})
Client.addEventListener("click", function(){
    window.scrollTo(0,2500)
})
Contact.addEventListener("click", function(){
    window.scrollTo(0,3200)
})