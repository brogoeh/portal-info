
const btn=document.getElementById("menuBtn");
const menu=document.getElementById("mobileMenu");

btn.onclick=()=>{
menu.classList.toggle("hidden");
}

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
})
})

document.querySelectorAll(".fade").forEach(el=>{
observer.observe(el);
})

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const inc=target/80;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,20);

}else{

counter.innerText=target.toLocaleString();

}

}

update();

});