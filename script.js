document.addEventListener('DOMContentLoaded', () => {

const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');

menuToggle.addEventListener('click',()=>{
mainNav.classList.toggle('active');
});

document.getElementById('year').textContent=new Date().getFullYear();

const slideHolder=document.getElementById('slideHolder');
document.getElementById('nextBtn').onclick=()=>slideHolder.scrollBy({left:slideHolder.clientWidth,behavior:'smooth'});
document.getElementById('prevBtn').onclick=()=>slideHolder.scrollBy({left:-slideHolder.clientWidth,behavior:'smooth'});

setInterval(()=>slideHolder.scrollBy({left:slideHolder.clientWidth,behavior:'smooth'}),5000);

// BOOKING
const bookingForm=document.getElementById('bookingForm');
const bookingMessage=document.getElementById('bookingMessage');

bookingForm.addEventListener('submit',(e)=>{
e.preventDefault();

const phone=bookingForm.phone.value.trim();
const regex=/^[0-9+ ]{9,15}$/;
if(!regex.test(phone)){
bookingMessage.textContent="Enter valid phone!";
return;
}

const msg=`Booking:%0AName:${bookingForm.name.value}%0AService:${bookingForm.service.value}%0ADate:${bookingForm.bookingDate.value}`;
window.open(`https://wa.me/254768927893?text=${msg}`);
bookingMessage.textContent="Opening WhatsApp...";
bookingForm.reset();
});

// SCROLL ANIMATION
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}});
});
document.querySelectorAll('.service-card,.price-card').forEach(el=>{
el.style.opacity=0;
el.style.transform="translateY(40px)";
el.style.transition="0.6s";
observer.observe(el);
});
});

