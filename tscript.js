// here is eventlistener for sections animation slidein comes right to left
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements to animate
    var slideElements = document.querySelectorAll('.ts-rightside, .trightpayment, .tpay-box, .tcontainer, .t-container');

    // Intersection Observer setup
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('slideIn');
            } else {
                entry.target.classList.remove('slideIn'); // Allows re-triggering
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of element is visible

    slideElements.forEach(function(el) {
        observer.observe(el);
    });
});
