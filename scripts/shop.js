
// ==========================================
// 1. CURRENCY DROPDOWN
// ==========================================

const money = document.getElementById('money');

const DropDownOption = document.querySelectorAll('.drop-down .option');

DropDownOption.forEach(option => {

    option.addEventListener('click', () => {

        money.innerHTML = option.innerHTML.trim();

    });

});


// ==========================================
// 2. SIDE MENU
// ==========================================

const sideMenuBtn = document.getElementById('SideMenubtn');

const sideMenuLayout = document.querySelector('.side-menu-layout');

const closeMenuBtn = document.getElementById('closeMenuBtn');


sideMenuBtn.addEventListener('click', () => {

    sideMenuLayout.classList.add('active');

});


closeMenuBtn.addEventListener('click', () => {

    sideMenuLayout.classList.remove('active');

});


// ==========================================
// 3. CART ELEMENTS
// ==========================================

const cartMenuLayout = document.getElementById('cart-menu-layout');

const openCart = document.getElementById('openCart');

const closeCart = document.getElementById('closeCart');

const addalert = document.getElementById('addalert');

const cartmenubox = document.querySelector('.cart-menu-box');

const cartTotal = document.querySelector('.carttotal');

const cart = [];


// Open Cart

openCart.addEventListener('click', () => {

    cartMenuLayout.classList.add('open');

});


// Close Cart

closeCart.addEventListener('click', () => {

    cartMenuLayout.classList.remove('open');

});


// ==========================================
// 4. PRODUCTS DATA
// ==========================================

const data = [

    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        price: 129,
        category: "Audio",
        description: "Premium wireless headphones with active noise cancellation, deep bass, and long battery life.",
        image_1: "https://i.ibb.co/5WSR2d39/Product-images-1-1-min.jpg",
        image_2: "https://i.ibb.co/bj3Jb2FZ/Product-images-2-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },

    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 99,
        category: "Wearables",
        description: "Smart fitness watch with activity tracking, heart rate monitoring, notifications, and multiple sports modes.",
        image_1: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/mVwd0st9/Product-images-10-1-min-690x690.jpg"
    },

    {
        id: 3,
        name: "Mechanical Gaming Keyboard",
        price: 79,
        category: "Gaming",
        description: "RGB mechanical gaming keyboard with responsive switches, durable keys, and customizable lighting.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg",
        image_3: "https://i.ibb.co/sJzdXcnG/Product-images-8-1-min.jpg"
    },

    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        price: 59,
        category: "Audio",
        description: "Compact Bluetooth speaker delivering powerful sound with a portable design and long battery life.",
        image_1: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_2: "https://i.ibb.co/TMg1jQLz/Product-images-7-1-min.jpg",
        image_3: "https://i.ibb.co/sJzdXcnG/Product-images-8-1-min.jpg"
    },

    {
        id: 5,
        name: "4K Smart LED Monitor",
        price: 249,
        category: "Computers",
        description: "High-resolution 4K LED monitor with vibrant colors, sharp details, and a modern slim design.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },

    {
        id: 6,
        name: "Wireless Gaming Mouse",
        price: 69,
        category: "Gaming",
        description: "High-performance wireless gaming mouse with adjustable DPI, fast response time, and ergonomic design.",
        image_1: "https://i.ibb.co/dwCNm5qK/Product-images-9-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/BKKxXkmH/Product-images-9-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg"
    },

    {
        id: 7,
        name: "Smartphone Pro Max",
        price: 899,
        category: "Smart Phones",
        description: "Powerful smartphone featuring a high-resolution display, advanced camera system, and fast processor.",
        image_1: "https://i.ibb.co/60XkDLWN/Product-images-15-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/gLtQJxNh/Product-images-15-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/LXSBrBw4/Product-images-5-1-min.jpg"
    },

    {
        id: 8,
        name: "USB-C Fast Charger",
        price: 35,
        category: "Smart Phones",
        description: "Fast USB-C charger designed to provide safe and efficient charging for compatible smartphones and tablets.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },

    {
        id: 9,
        name: "Wireless Earbuds Pro",
        price: 89,
        category: "Audio",
        description: "True wireless earbuds with clear audio, touch controls, noise reduction, and a compact charging case.",
        image_1: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },

    {
        id: 10,
        name: "Gaming Laptop",
        price: 1199,
        category: "Computers",
        description: "High-performance gaming laptop with a powerful processor, dedicated graphics, fast SSD, and high-refresh display.",
        image_1: "https://i.ibb.co/B5TPjpkG/Product-images-12-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/pBGjMNxN/Product-images-13-1-min-690x690.jpg"
    },

    {
        id: 11,
        name: "Smart Home Security Camera",
        price: 75,
        category: "Smart Home",
        description: "Smart security camera with HD video, motion detection, night vision, and mobile app connectivity.",
        image_1: "https://i.ibb.co/sv0Shgzt/Product-images-4-1-min-768x768.jpg",
        image_2: "https://i.ibb.co/LXSBrBw4/Product-images-5-1-min.jpg",
        image_3: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg"
    },

    {
        id: 12,
        name: "Smart Health Tracker",
        price: 119,
        category: "Wearables",
        description: "Advanced wearable device for monitoring daily activity, sleep, heart rate, and fitness performance.",
        image_1: "https://i.ibb.co/pBGjMNxN/Product-images-13-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    }

];


// ==========================================
// 5. DISPLAY PRODUCTS
// ==========================================

const shopContainer = document.querySelector('.shop-box .container');

const categoryButtons = document.querySelectorAll('.category-filter button');


function displayProducts(products) {

    shopContainer.innerHTML = products.map(product => {

        const index = data.indexOf(product);

        return `

            <div class="card">

                <div class="card-img">

                    <img
                        src="${product.image_1}"
                        alt="${product.name}"
                        class="main-product-image"
                    >

                    <button onclick="addToCart(${index})">

                        <i class="fa-solid fa-cart-shopping"></i>

                        <span>Add to cart</span>

                    </button>

                </div>


                <div class="card-body">

                    <b>${product.category}</b>

                    <p>${product.name}</p>

                    <strong>$${product.price}</strong>

                </div>


                <div class="images-box">

                    <img
                        src="${product.image_1}"
                        class="active"
                        alt="${product.name}"
                        data-image="${product.image_1}"
                    >

                    <img
                        src="${product.image_2}"
                        alt="${product.name}"
                        data-image="${product.image_2}"
                    >

                    <img
                        src="${product.image_3}"
                        alt="${product.name}"
                        data-image="${product.image_3}"
                    >

                </div>

            </div>

        `;

    }).join('');

}


// Initial Display

displayProducts(data);


// ==========================================
// 6. CATEGORY FILTERING
// ==========================================

categoryButtons.forEach(button => {

    button.addEventListener('click', () => {

        const selectedCategory = button.dataset.category;


        // Update Active Button

        categoryButtons.forEach(btn => {

            btn.classList.remove('active');

        });

        button.classList.add('active');


        // Filter Products

        if (selectedCategory === 'all') {

            displayProducts(data);

        } else {

            const filteredProducts = data.filter(product => {

                return product.category === selectedCategory;

            });

            displayProducts(filteredProducts);

        }

    });

});


// ==========================================
// 7. PRODUCT IMAGE SWITCHING
// ==========================================

shopContainer.addEventListener('click', (e) => {

    const clickedImage = e.target.closest('.images-box img');

    if (!clickedImage) return;


    const card = clickedImage.closest('.card');

    const mainImage = card.querySelector('.main-product-image');

    const thumbnails = card.querySelectorAll('.images-box img');


    // Change Main Image

    mainImage.src = clickedImage.dataset.image;


    // Update Active Thumbnail

    thumbnails.forEach(image => {

        image.classList.remove('active');

    });

    clickedImage.classList.add('active');

});


// ==========================================
// 8. ADD TO CART
// ==========================================

function addToCart(number) {

    cart.push({

        ...data[number],

        quantity: 1

    });


    displaycartitems();


    // Update Cart Counter

    openCart.querySelector('span').innerText = cart.length;


    // Add Alert

    addalert.classList.add('active');


    setTimeout(() => {

        addalert.classList.remove('active');

    }, 1000);

}


// ==========================================
// 9. DISPLAY CART ITEMS
// ==========================================

function displaycartitems() {

    if (cart.length === 0) {

        cartmenubox.innerHTML = `

            <p>No products in the cart</p>

            <a href="./shop.html">Return to shop</a>

        `;

        cartTotal.classList.remove('active');

        openCart.querySelector('span').innerText = 0;

        return;

    }


    let items = '';

    let total = 0;


    cart.forEach((cartitem, index) => {

        total += cartitem.price * cartitem.quantity;


        items += `

            <div class="cart-item">

                <button
                    type="button"
                    class="delCartItem"
                    onclick="deletecartitem(${index})"
                >
                    X
                </button>


                <div class="item-image">

                    <img src="${cartitem.image_1}" alt="${cartitem.name}">

                </div>


                <div class="item-info">

                    <p>${cartitem.name}</p>

                    <div class="price-info">

                        <div class="amount-box">

                            <button
                                type="button"
                                onclick="changeQuantity(${index}, 1)"
                            >
                                +
                            </button>

                            <span>${cartitem.quantity}</span>

                            <button
                                type="button"
                                onclick="changeQuantity(${index}, -1)"
                            >
                                -
                            </button>

                        </div>

                        <b>$${cartitem.price * cartitem.quantity}</b>

                    </div>

                </div>

            </div>

        `;

    });


    cartmenubox.innerHTML = items;


    // Update Total Cost

    cartTotal.innerHTML = `

        Total cost:

        <span>$${total.toFixed(2)}</span>

    `;


    cartTotal.classList.add('active');


    // Update Cart Counter

    openCart.querySelector('span').innerText = cart.length;

}


// ==========================================
// 10. DELETE CART ITEM
// ==========================================

function deletecartitem(number) {

    cart.splice(number, 1);

    displaycartitems();

}


// ==========================================
// 11. CHANGE PRODUCT QUANTITY
// ==========================================

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    // Remove item if quantity becomes zero

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    displaycartitems();

}


// ==========================================
// 12. INITIALIZE CART
// ==========================================

displaycartitems();
