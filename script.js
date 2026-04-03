document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const datePicker = document.getElementById('bookingDate');
    if(datePicker) {
        datePicker.min = new Date().toISOString().split("T")[0];
    }

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = `*EMCA MOTORS BOOKING*%0A%0A*Name:* ${bookingForm.name.value}%0A*Phone:* ${bookingForm.phone.value}%0A*Service:* ${bookingForm.service.value}%0A*Date:* ${bookingForm.date.value}`;
            const myNumber = "254768927893";
            const whatsappUrl = `https://wa.me{myNumber}?text=${message}`;
            
            document.getElementById('bookingMessage').textContent = "Opening WhatsApp...";
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                bookingForm.reset();
            }, 800);
        });
    }
});


