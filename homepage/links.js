document.addEventListener('DOMContentLoaded', function() {
    const catCard = document.getElementById('cat-card');
    const bodyCard = document.getElementById('body-card');
    const cat2Card = document.getElementById('cat2-card');

    catCard.addEventListener('click', function() {
        location.href = 'essay.html';
    });

    bodyCard.addEventListener('click', function() {
        location.href = 'landmark.html';
    });

    cat2Card.addEventListener('click', function() {
        location.href = 'https://www.amazon.com';
    });
});