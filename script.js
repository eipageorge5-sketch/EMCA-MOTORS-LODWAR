document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Slider Logic
    const slideHolder = document.getElementById('slideHolder');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (slideHolder && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            if (slideHolder.scrollLeft + slideHolder.offsetWidth >= slideHolder.scrollWidth - 10) {
                slideHolder.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slideHolder.scrollBy({ left: slideHolder.offsetWidth, behavior: 'smooth' });
            }
        });

        prevBtn.addEventListener('click', () => {
            if (slideHolder.scrollLeft <= 0) {
                slideHolder.scrollTo({ left: slideHolder.scrollWidth, behavior: 'smooth' });
            } else {
                slideHolder.scrollBy({ left: -slideHolder.offsetWidth, behavior: 'smooth' });
            }
        });
    }

   // --- EMCA MOTORS WhatsApp Booking ---
const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 1. Collect values from your HTML inputs
        const name = bookingForm.name.value;
        const phone = bookingForm.phone.value;
        const service = bookingForm.service.value;
        const date = bookingForm.date.value;
        const notes = bookingForm.notes.value || "No extra notes provided.";

        // 2. Create the message text
        const messageText = `Hello EMCA MOTORS!%0A%0A` +
                            `*New Booking Request*%0A` +
                            `--------------------------%0A` +
                            `*Client:* ${name}%0A` +
                            `*Phone:* ${phone}%0A` +
                            `*Service:* ${service}%0A` +
                            `*Date:* ${date}%0A` +
                            `*Issue:* ${notes}`;

        // 3. YOUR FINAL LINK (Fixed with your number)
        const myNumber = "254768927893"; 
        const whatsappUrl = `https://wa.me{myNumber}?text=${messageText}`;
        
        // 4. Update the UI so the user knows it worked
        bookingMessage.style.color = "#f97316"; // Orange to match your brand
        bookingMessage.textContent = "Redirecting to WhatsApp...";
        
        // 5. Open WhatsApp after a short delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            bookingForm.reset();
            bookingMessage.textContent = "Request sent! Check your WhatsApp.";
        }, 800);
    });
}
