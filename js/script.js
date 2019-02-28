const burger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuAllItems = document.querySelectorAll('.mobile-menu__menu a');
const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const allItems = document.querySelectorAll('.header ~ section');
const shops = document.querySelectorAll('.shop__adres-box');
const allItemAnim = document.querySelectorAll('header ~ *');


const mobileMenuActive = () => {
    burger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
}
burger.addEventListener('click', mobileMenuActive)

mobileMenuAllItems.forEach(item => {
    item.addEventListener('click', mobileMenuActive)
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= header.offsetHeight - headerNav.offsetHeight) {
        headerNav.style.backgroundColor = '#95e1d3';
    } else if (header.offsetHeight - headerNav.offsetHeight >= window.pageYOffset) {
        headerNav.style.backgroundColor = 'transparent';
    }
})

// Scroll smooth
$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - headerNav.offsetHeight
        }, 1000);
    }
});

// Google maps api
// Key: AIzaSyCgVTA6vb3q-MIN8oXs8iDZDlqQq81V82A
var map;

var locale = {
    lat: 52.397932,
    lng: 17.070309
};

function initMap() {
    var swa = {
        lat: 52.397932,
        lng: 17.070309
    };

    var poz = {
        lat: 52.3905853,
        lng: 16.916714
    };

    map = new google.maps.Map(document.querySelector('.shop__map'), {
        center: locale,
        zoom: 18,
        disableDefaultUI: true,
        zoomControl: true,
    });
    var markerSwa = new google.maps.Marker({
        position: swa,
        map: map
    });

    var markerPoz = new google.maps.Marker({
        position: poz,
        map: map
    });
}

shops.forEach(shop => {
    shop.addEventListener('click', function () {
        locale = {
            lat: parseFloat(shop.dataset.lat),
            lng: parseFloat(shop.dataset.lng)
        }
        initMap();
    })
})