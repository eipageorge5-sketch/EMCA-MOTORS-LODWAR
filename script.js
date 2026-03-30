document.addEventListener('DOMContentLoaded', () => {
    // 1. Update Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Set min date for booking to TODAY
    const datePicker = document.getElementById('bookingDate');
    if(datePicker) {
        datePicker.min = new Date().toISOString().split("T")[0];
    }

    // 3. WhatsApp Booking Logic
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = bookingForm.name.value;
            const phone = bookingForm.phone.value;
            const service = bookingForm.service.value;
            const date = bookingForm.date.value;
            const notes = bookingForm.notes.value || "None";

            const message = `*NEW BOOKING: EMCA MOTORS*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Notes:* ${notes}`;
            
            const myNumber = "254768927893"; 
            const whatsappUrl = `https://wa.me{myNumber}?text=${message}`;

            document.getElementById('bookingMessage').textContent = "Redirecting to WhatsApp...";

            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                bookingForm.reset();
                document.getElementById('bookingMessage').textContent = "";
            }, 1000);
        });
    }
});
