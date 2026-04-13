document.addEventListener('DOMContentLoaded', () => {

    // ====================== MOBILE MENU ======================
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ====================== FOOTER YEAR ======================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ====================== GALLERY SLIDER ======================
    const slideHolder = document.getElementById('slideHolder');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (slideHolder && nextBtn && prevBtn) {
        const scrollAmount = () => slideHolder.clientWidth;

        nextBtn.addEventListener('click', () => {
            const maxScroll = slideHolder.scrollWidth - slideHolder.clientWidth;
            if (slideHolder.scrollLeft >= maxScroll - 10) {
                slideHolder.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slideHolder.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
            }
        });

        prevBtn.addEventListener('click', () => {
            if (slideHolder.scrollLeft <= 10) {
                slideHolder.scrollTo({ left: slideHolder.scrollWidth, behavior: 'smooth' });
            } else {
                slideHolder.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
            }
        });
    }

    // ====================== BOOKING FORM ======================
    const bookingForm = document.getElementById('bookingForm');
    const bookingMessage = document.getElementById('bookingMessage');

    if (bookingForm) {
        // Prevent selecting past dates
        const datePicker = document.getElementById('bookingDate');
        if (datePicker) {
            datePicker.min = new Date().toISOString().split("T")[0];
        }

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = bookingForm.name.value.trim();
            const phone = bookingForm.phone.value.trim();
            const service = bookingForm.service.value;
            const date = bookingForm.date.value;
            const notes = bookingForm.notes.value.trim() || "No additional notes";

            if (!name || !phone || !service || !date) {
                bookingMessage.style.color = "red";
                bookingMessage.textContent = "Please fill all required fields!";
                return;
            }

            const message = `🚗 *EMCA MOTORS BOOKING*\n\n` +
                           `Name: ${name}\n` +
                           `Phone: ${phone}\n` +
                           `Service: ${service}\n` +
                           `Preferred Date: ${date}\n` +
                           `Issue: ${notes}`;

            const whatsappUrl = `https://wa.me/254768927893?text=${encodeURIComponent(message)}`;

            bookingMessage.style.color = "#f97316";
            bookingMessage.textContent = "Opening WhatsApp... ✅";

            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                bookingForm.reset();
                bookingMessage.textContent = "";
            }, 1000);
        });
    }


    const backToTopButton = document.getElementById("backToTop");

// Show button when user scrolls down 300px
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to top smoothly when clicked
backToTopButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

    // ====================== OPTIONAL: SMOOTH SCROLL FOR ANCHORS ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
