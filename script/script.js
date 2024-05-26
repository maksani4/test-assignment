const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next-image',
    prevEl: '.swiper-button-prev-image',
  },
});

ymaps.ready(function () {
    let map = new ymaps.Map("api-maps", {
        center: [55.028894, 82.926493],
        zoom: 15
    });
        ymaps.geocode('55.028894, 82.926493', {
            results: 1
        }).then(function (res) {
            let coords = res.geoObjects.get(0).geometry.getCoordinates();
            let placemark = new ymaps.Placemark(coords, {
                hintContent: 'Депутатская, 46',
                balloonContent: 'Адрес офиса: ' + res.geoObjects.get(0).properties.get('name')
            });
            map.geoObjects.add(placemark);
        });
    });

    let modalButton1 = document.getElementById('modal-button-1');
    let modalButton2 = document.getElementById('modal-button-2');
    let modalButton3 = document.getElementById('modal-button-3');
    let closeModal = document.getElementById('close-modal');

    let modal = document.getElementById('modal');
    
    modalButton1.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
    
    modalButton2.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
    
    modalButton3.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
     
    modal.querySelector('form button[type="submit"]').addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    let openModalButton = document.getElementById("menu-toggle");
    let closeMenu = document.getElementById('close-menu');
    let modalMenu = document.getElementById("modal-menu");

    openModalButton.addEventListener("click", () => {
        modalMenu.classList.remove('hidden');
    });
    
    closeMenu.addEventListener('click', () => {
        modalMenu.classList.add('hidden');
    });

    