// 1. Initialize logic when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    
    // --- AUTO UPDATE YEAR ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- SMOOTH IMAGE SLIDER ---
    const slideHolder = document.getElementById('slideHolder');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (slideHolder && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            // Slides to the next image based on the width of the holder
            slideHolder.scrollBy({ left: slideHolder.offsetWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slideHolder.scrollBy({ left: -slideHolder.offsetWidth, behavior: 'smooth' });
        });
    }

    // --- FORM SUBMISSION ---
    const bookingForm = document.getElementById('bookingForm');
    const bookingMessage = document.getElementById('bookingMessage');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page refresh
            
            // Collect form data (for your future use)
            const formData = new FormData(bookingForm);
            console.log("Booking for:", formData.get('name'));

            // Show success message
            bookingMessage.style.color = "#f97316";
            bookingMessage.textContent = "Thank you! Your request has been sent to EMCA Motors.";
            
            // Clear the form
            bookingForm.reset();
        });
    }
});
