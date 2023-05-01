
document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
}
let login=document.getElementById("login");
let form= document.getElementById("form");
login.addEventListener('click',()=>{
   form.style.display="block";
})
//lxbtn
let lxbtn=document.getElementById("lxbtn");
lxbtn.addEventListener('click',()=>{
form.style.display="none";

})


function time()
{
let clock = document.getElementById("clock");
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s= date.getSeconds();
if(h<10)
{
   h="0"+h;
}
if(m<10)
{
   m="0"+m;
}
if(s<10)
{
   s="0"+s;
}
clock.innerHTML="TIME:"+h+":"+m+":"+s;
setInterval(time,1000);
}
time();