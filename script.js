document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.querySelector('.products-grid');
    
    productsGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('move-up')) {
            moveProduct(e.target.closest('.product-card'), 'up');
        } else if (e.target.classList.contains('move-down')) {
            moveProduct(e.target.closest('.product-card'), 'down');
        }
    });

    function moveProduct(card, direction) {
        const parent = card.parentNode;
        if (direction === 'up' && card.previousElementSibling) {
            parent.insertBefore(card, card.previousElementSibling);
        } else if (direction === 'down' && card.nextElementSibling) {
            parent.insertBefore(card.nextElementSibling, card);
        }
        updateButtonStates();
    }

    function updateButtonStates() {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            const upBtn = card.querySelector('.move-up');
            const downBtn = card.querySelector('.move-down');
            
            if (upBtn) upBtn.disabled = index === 0;
            if (downBtn) downBtn.disabled = index === cards.length - 1;
        });
    }
    
    updateButtonStates();
});