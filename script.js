document.addEventListener('DOMContentLoaded', function() {
    // Sample product data - you can replace this with your actual products
    const products = [
        {
            id: 1,
            name: "Hydrating Facial Serum",
            description: "Deeply hydrating serum with hyaluronic acid for plump, glowing skin.",
            price: 29.99,
            oldPrice: 39.99,
            image: "images/6.jpg?text=Hydrating+Serum"
        },
        {
            id: 2,
            name: "Vitamin C Brightening Cream",
            description: "Brightens skin tone and reduces dark spots with potent Vitamin C.",
            price: 34.99,
            oldPrice: 44.99,
            image: "images/7.jpg?text=Brightening+Cream"
        },
        {
            id: 3,
            name: "Charcoal Detox Mask",
            description: "Deep cleansing mask that draws out impurities and minimizes pores.",
            price: 24.99,
            image: "images/8.jpg?text=Charcoal+Mask"
        },
        {
            id: 4,
            name: "Luxury Makeup Brush Set",
            description: "Professional-grade brushes for flawless makeup application.",
            price: 49.99,
            oldPrice: 59.99,
            image: "images/9.jpg?text=Brush+Set"
        },
        {
            id: 5,
            name: "Nourishing Hair Oil",
            description: "Repair and strengthen hair with this nutrient-rich oil blend.",
            price: 19.99,
            image: "images/10.jpg?text=Hair+Oil"
        },
        {
            id: 6,
            name: "Matte Liquid Lipstick",
            description: "Long-lasting, highly pigmented liquid lipstick in trendy shades.",
            price: 16.99,
            oldPrice: 19.99,
            image: "images/11.jpg?text=Lipstick"
        }
    ];

    // Display products
    const productContainer = document.getElementById('product-container');
    
    function displayProducts() {
        productContainer.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                        <span class="price">$${product.price.toFixed(2)}</span>
                    </div>
                    <button class="add-to-cart btn" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            
            productContainer.appendChild(productCard);
        });
    }
    
    displayProducts();

    // Cart functionality
    let cart = [];
    const cartCount = document.querySelector('.cart-count');
    
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    // Add to cart
    productContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            // Check if product is already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image
                });
            }
            
            updateCartCount();
            
            // Show added to cart feedback
            e.target.textContent = 'Added!';
            e.target.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
                e.target.style.backgroundColor = '';
            }, 1500);
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Here you would typically send the email to your server
            // For this example, we'll just show a message
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your server
            // For this example, we'll just show a message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Mobile menu toggle (you can add a mobile menu button in your HTML if needed)
    // Example:
    // <button class="mobile-menu-toggle"><i class="fas fa-bars"></i></button>
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});