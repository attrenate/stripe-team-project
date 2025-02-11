document.addEventListener('DOMContentLoaded', function() {
    // Select all elements to animate
    var slideElements = document.querySelectorAll('.tcontainer, .t-container, .ts-rightside');

    // Intersection Observer setup
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('slideIn');
                observer.unobserve(entry.target); // Stop observing once animation starts
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of element is visible

    slideElements.forEach(function(el) {
        observer.observe(el);
    });
});
