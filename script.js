document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Update Footer Year automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Gallery Slider Logic
    const slideHolder = document.getElementById('slideHolder');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (slideHolder && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            const isAtEnd = slideHolder.scrollLeft + slideHolder.offsetWidth >= slideHolder.scrollWidth - 10;
            if (isAtEnd) {
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

    // 3. WhatsApp Booking Logic
    const bookingForm = document.getElementById('bookingForm');
    const bookingMessage = document.getElementById('bookingMessage');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = bookingForm.name.value;
            const phone = bookingForm.phone.value;
            const service = bookingForm.service.value;
            const date = bookingForm.date.value;
            const notes = bookingForm.notes.value || "No extra notes provided.";

            // Create formatted message
            const messageText = `Hello EMCA MOTORS!%0A%0A` +
                                `*NEW BOOKING REQUEST*%0A` +
                                `--------------------------%0A` +
                                `*Client:* ${name}%0A` +
                                `*Phone:* ${phone}%0A` +
                                `*Service:* ${service}%0A` +
                                `*Date:* ${date}%0A` +
                                `*Issue:* ${notes}`;

            // Line 59 is already good (Keep it as it is):
const myNumber = "254768927893"; 

const whatsappUrl = `https://wa.me/${myNumber}?text=${messageText}`;
            
            // UI Feedback
            if (bookingMessage) {
                bookingMessage.style.color = "#f97316"; 
                bookingMessage.textContent = "Redirecting to WhatsApp...";
            }
            
            // Open WhatsApp in a new tab
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                bookingForm.reset();
                if (bookingMessage) {
                    bookingMessage.textContent = "Booking request triggered! Please send the message on WhatsApp.";
                }
            }, 800);
        });
    }
});
