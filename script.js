document.addEventListener("DOMContentLoaded", function () {
    // Initialize Smooth Scrolling
    initSmoothScrolling();

    // Start Countdown Timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

/**
 * Smooth scrolling for navbar links
 */
function initSmoothScrolling() {
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

/**
 * Countdown Timer Function
 */
function updateCountdown() {
    const eventDate = new Date("2025-06-15T09:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "Registration Closed";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `<i class="fas fa-clock"></i> ${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
}
