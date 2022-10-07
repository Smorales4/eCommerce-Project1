// JSON FILE 
let data = {
    homeProducts: [
    {
        name: "Bear kids water bottle",
        description:"Ready stock 650ml bear kids water bottle with straw for school BPA free water bottle korean style cute cartoon bear leak proof mug portable cup bottle drink outdoor travel drinking tumbler.",
        brand: "Cute",
        price: "$10.98",
        image: "https://my-test-11.slatic.net/p/8d85237d373161271217bf1757474692.jpg",
    },
    {
        name: "KOREAN STONE BOWL ",
        description:"These authentic Stone Bowls - Dolsots 돌솥 , are the real deal, imported straight from Korea. The bowls are made out of solid granite with a stainless steel band for reinforcement, and are extensively used in Korean cooking. They are very durable and retain heat well, and come with their own wooden trivet.",
        brand: "DOLSOT",
        price: "$45.95",
        image: "https://gd.image-gmkt.com/BONTOY-TRAVELER-CARRIER-LUGGAGE-BAG-TOY-TRAVEL-100KG-LOAD/li/190/475/1427475190.g_350-w-et-pj_g.jpg",
    },
    {
        name: "TRAVELER",
        description:"Carrier / LUGGAGE BAG / TOY / TRAVEL / 100KG load.",
        brand: "Bontoy",
        price: "$161.68",
        image: "https://gd.image-gmkt.com/BONTOY-TRAVELER-CARRIER-LUGGAGE-BAG-TOY-TRAVEL-100KG-LOAD/li/190/475/1427475190.g_350-w-et-pj_g.jpg",
    },
    {
        name: "Korean Chopsticks",
        description:"Flat Metal Chopsticks",
        brand: "Jeotgarak",
        price: "$15.98",
        image: "https://cdn.shopify.com/s/files/1/0164/6592/articles/Korean_chopsticks_00fd43b5-4cb7-439a-81bb-cc59fd3ad297.jpg?v=1658277396&width=1400",
    },
    ],

    kitchenProducts: [
    {
        name: "Multi Function Mini Rice Cooker",
        description:"Modern Designed Portable Cooker Digital Display 2L capacity. Five menus. Cook quickly in 25 minutes. With a steamer. Steaming and cooking. Start with one button. 24 hours smart reservation.",
        brand: "EAP",
        price: "$15.00",
        image: "https://p.globalsources.com/IMAGES/PDT/B5225857184/rice-cooker.jpg",
    },
    {
        name: "Rice & Grain Dispenser",
        description:"Grain Dispenser 2 Layers Rice Container Kitchen Food Organizer with 6 Small Grids&1 Large Grid for Home Kitchen Use, Rice Beans Grains Holder.",
        brand: "JIAWANSHUN",
        price: "$78.98",
        image: "https://m.media-amazon.com/images/I/71a0UuMwN1L._AC_SL1500_.jpg",
    },
    {   
        name: "Mini Korean BBQ Grill",
        description: "This Mini Korean BBQ Grill will allow you to make BBQ at your dinner table! The grill is compact, perfect for 1 to 2 people, practical, and convenient. Made of high-quality aluminum material, wear-resistant and durable. Uses regular alcohol burners.",
        brand: "Fabulous Kitchen Appliances",
        price: "$79.00",
        image: "https://m.media-amazon.com/images/I/71puEv4vGqL._AC_SL1500_.jpg",
    },
    {   
        name: "Retro Mini Blender",
        description: "Kitchen Flower Retro Mini Blender Tritan BPA BPA Free Jar Smoothie Ice Crush Blender 600mL Capacity 220v.",
        brand: "Kitchen Flower",
        price: "$79.00",
        image: "https://m.media-amazon.com/images/I/51XrAlcJMBL._AC_SX679_.jpg",
    },

    ],
    beautyProducts: [
    {   
        name: "12L Skincare Fridge",
        description: "For Makeup, Cosmetic & Facial Skin Care Products - for Women & Teen Girls - Pearl White Mini Fridge for Bedroom & Bathroom Vanity - Interior LED Lights",
        brand: "Cooluli Beauty",
        price: "$139.00",
        image: "https://m.media-amazon.com/images/I/71puEv4vGqL._AC_SL1500_.jpg",
    },
    {   
        name: "Derma LED Mask",
        description: "120 LEDs thoroughly take care of your skin from the inside. Improve your skin tone and elasticity simultaneously. Only 9 minutes a day to make your skin more radiant. Wear-sensing sensor. Eye protection design",
        brand: "Pra.L",
        price: "$986.00",
        image: "https://m.media-amazon.com/images/I/41-fPbmq10L._AC_SX679_.jpg",
    },
    {   
        name: "Ultrasonic Cleaner",
        description: "inFace MS7100 Skin Purifier Face Peeling",
        brand: " Xiaomi",
        price: "$39.00",
        image: "https://i0.wp.com/www.cybuy.online/wp-content/uploads/2020/12/Ultrasonic-Cleaner-Xiaomi-Inface-MS7100-Skin-Purifier-Face-Peeling.jpg?fit=768%2C768&ssl=1",
    },
    {   
        name: "Skin Light Therapy",
        description: "Home Beauty Device Brightening Elasticity MO-ST002",
        brand: "MAKEON",
        price: "$339.00",
        image: "https://m.media-amazon.com/images/I/41Q9k1lKF0L._SX679_.jpg",
    },

    ],
};

let productsElement= document.querySelector(".pro-container");

for (let category in data){
    for (let index in data[category]){
        let product = (data[category][index])
        productsElement.innerHTML += 
            `<div class="pro">
            <img src="${product.image}" alt="">
            <div class="des">${product.description}
            <span>${product.brand}</span>
            <h5>${product.name}</h5>
            <h4>${product.price}</h4>
            </div>`
    }
}

// Slider functions - Not working  //
var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}