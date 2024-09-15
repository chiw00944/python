document.getElementById('clothing-category').addEventListener('change', function() {
    var selectedCategory = this.value;
    var allCards = document.querySelectorAll('.product-card');

    allCards.forEach(function(card) {
        if (selectedCategory === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(selectedCategory)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
});
