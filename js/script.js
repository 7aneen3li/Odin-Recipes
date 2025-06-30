document.addEventListener('DOMContentLoaded', function() {
    // Add floating utensils to header
    // const header = document.querySelector('.header-content');
    // if (header) {
    //     const utensils = ['🥄', '🔪', '🍴', '🥣'];
    //     utensils.forEach((utensil, index) => {
    //         const tool = document.createElement('div');
    //         tool.className = 'floating-utensil';
    //         tool.textContent = utensil;
    //         tool.style.left = `${20 + (index * 20)}%`;
    //         tool.style.animationDelay = `${index * 0.5}s`;
    //         header.appendChild(tool);
    //     });
    // }

    // Recipe card hover effects
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });

    // Animated bubbles for cooking steps
    const cookingSteps = document.querySelectorAll('.step-list li');
    cookingSteps.forEach(step => {
        step.addEventListener('mouseover', function() {
            if (!this.dataset.animated) {
                this.dataset.animated = 'true';
                const bubbleCount = 3;
                for (let i = 0; i < bubbleCount; i++) {
                    createBubble(this);
                }
            }
        });
    });

    function createBubble(element) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 15 + 5;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 2 + 2}s`;
        element.appendChild(bubble);
        
        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, 3000);
    }
});
