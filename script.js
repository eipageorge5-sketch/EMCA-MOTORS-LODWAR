document.addEventListener('DOMContentLoaded', () => {
    // 1. Update Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Gallery Logic (Scroll Based)
    const slideHolder = document.getElementById('slideHolder');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (slideHolder && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            const isAtEnd = slideHolder.scrollLeft + slideHolder.offsetWidth >= slideHolder.scrollWidth - 10;
            slideHolder.scrollBy({ left: isAtEnd ? -slideHolder.scrollWidth : slideHolder.offsetWidth, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            const isAtStart = slideHolder.scrollLeft <= 10;
            slideHolder.scrollBy({ left: isAtStart ? slideHolder.scrollWidth : -slideHolder.offsetWidth, behavior: 'smooth' });
        });
    }

    // 3. Prevent past dates in booking
    const datePicker = document.getElementById('bookingDate');
    if(datePicker) {
        datePicker.min = new Date().toISOString().split("T")[0];
    }

    // 4. WhatsApp Booking
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = bookingForm.name.value;
            const phone = bookingForm.phone.value;
            const service = bookingForm.service.value;
            const date = bookingForm.date.value;
            const notes = bookingForm.notes.value || "No extra notes.";

            const messageText = `*NEW BOOKING REQUEST*%0A` +
                                `*Client:* ${name}%0A` +
                                `*Phone:* ${phone}%0A` +
                                `*Service:* ${service}%0A` +
                                `*Date:* ${date}%0A` +
                                `*Note:* ${notes}`;

            const myNumber = "254768927893"; 
            const whatsappUrl = `https://wa.me{myNumber}?text=${messageText}`;
            
            document.getElementById('bookingMessage').textContent = "Redirecting to WhatsApp...";
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                bookingForm.reset();
            }, 500);
        });
    }
});

