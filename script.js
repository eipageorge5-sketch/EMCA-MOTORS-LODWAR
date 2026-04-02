document.addEventListener('DOMContentLoaded', () => {
    // 1. Update Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Gallery Logic
    const slideHolder = document.getElementById('slideHolder');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (slideHolder && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            const isAtEnd = slideHolder.scrollLeft + slideHolder.clientWidth >= slideHolder.scrollWidth - 10;
            if (isAtEnd) {
                slideHolder.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slideHolder.scrollBy({ left: slideHolder.clientWidth, behavior: 'smooth' });
            }
        });
        prevBtn.addEventListener('click', () => {
            const isAtStart = slideHolder.scrollLeft <= 10;
            if (isAtStart) {
                slideHolder.scrollTo({ left: slideHolder.scrollWidth, behavior: 'smooth' });
            } else {
                slideHolder.scrollBy({ left: -slideHolder.clientWidth, behavior: 'smooth' });
            }
        });
    }

    // 3. Prevent Past Dates
    const datePicker = document.getElementById('bookingDate');
    if(datePicker) {
        datePicker.min = new Date().toISOString().split("T")[0];
    }
    // 4. WhatsApp Submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = bookingForm.name.value;
            const phone = bookingForm.phone.value;
            const service = bookingForm.service.value;
            const date = bookingForm.date.value;
            const notes = bookingForm.notes.value || "None";

            const message = `*EMCA MOTORS BOOKING*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Issue:* ${notes}`;
            
            const myNumber = "254768927893";
            
            // FIXED: Added forward slash / and the $ sign before {myNumber}
            const whatsappUrl = `https://wa.me{myNumber}?text=${message}`;

            document.getElementById('bookingMessage').textContent = "Opening WhatsApp...";
            
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                bookingForm.reset();
            }, 800);
        });
    }

