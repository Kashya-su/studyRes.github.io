document.addEventListener('DOMContentLoaded', function() {
    const juniorLink = document.getElementById('junior-link');
    const juniorSection = document.getElementById('junior');

    juniorLink.addEventListener('click', function(event) {
        event.preventDefault();
        juniorSection.classList.toggle('hidden');
    });
});
