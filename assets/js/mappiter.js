
let center = [43.92762738491836,39.83341319238282];
let elbrus = [43.32059956512643,42.433919621989];
let cochi = [43.60468544198496,39.72578973917652];
let gelendzhik = [44.57426054402882,38.04940149999999];
let anapa = [44.89540150197132,37.31632008203121];
let crimea = [45.22695079519681,34.52619099999999];
let rasnodar = [45.03691170662985,38.97606646289061];
let rosaKhutor = [43.6254824517284,40.31093593649287];
let skireSorts = [43.4685531305524,40.80904362109374];
function init() {
	let map = new ymaps.Map('YMapsID-1', {
		center: center,
		zoom: 7
	});

	let placemark1 = new ymaps.Placemark(cochi, {
		balloonContent: `

    <div class="map-card">
    <div class="map-card_wrapper">
        <img src="assets/img/map.jpg" alt="map" class="map-card_wrapper-img">
    </div>
      <p class="map-card_text text-inMedium-15-12">
          Всего 50 км до самого крупного
          горного массива в стране
      </p>
    </div>

		`
	  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/cochi.svg', // картинка иконки
    iconImageSize: [58, 31], // размер иконки в пикселях
    iconImageOffset: [-20, -20],
    balloonContentSize: [277, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
    balloonShadow: true,
    balloonImageOffset: [-140, -280],
	});

  let placemark2 = new ymaps.Placemark(elbrus, {
		balloonContent: `

    <div class="map-card">
    <div class="map-card_wrapper">
        <img src="assets/img/map.jpg" alt="map" class="map-card_wrapper-img">
    </div>
      <p class="map-card_text text-inMedium-15-12">
          Всего 50 км до самого крупного
          горного массива в стране
      </p>
    </div>

		`
	  }, {
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'assets/img/elbrus.svg',
    iconImageOffset: [-30, -13],
    iconImageSize: [90, 31],
    balloonContentSize: [277, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
    balloonShadow: true,
    balloonImageOffset: [-140, -250],
	});

  let placemark3 = new ymaps.Placemark(gelendzhik, {
		balloonContent: `

    <div class="map-card">
    <div class="map-card_wrapper">
        <img src="assets/img/map.jpg" alt="map" class="map-card_wrapper-img">
    </div>
      <p class="map-card_text text-inMedium-15-12">
          Всего 50 км до самого крупного
          горного массива в стране
      </p>
    </div>

		`
	  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/gelendzhik.svg', // картинка иконки
    iconImageSize: [126, 31], // размер иконки в пикселях
    iconImageOffset: [-45, -13],
    balloonContentSize: [277, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
    balloonShadow: true,
    balloonImageOffset: [-140, -250],
	});

  let placemark4 = new ymaps.Placemark(anapa, {
		balloonContent: `

    <div class="map-card">
    <div class="map-card_wrapper">
        <img src="assets/img/map.jpg" alt="map" class="map-card_wrapper-img">
    </div>
      <p class="map-card_text text-inMedium-15-12">
          Всего 50 км до самого крупного
          горного массива в стране
      </p>
    </div>

		`
	  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/anapa.svg', // картинка иконки
    iconImageSize: [78, 31], // размер иконки в пикселях
    iconImageOffset: [-70, -30],
    balloonContentSize: [277, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
    balloonShadow: true,
    balloonImageOffset: [-140, -250],
	});

  let placemark5 = new ymaps.Placemark(crimea, {
		balloonContent: `

    <div class="map-card">
    <div class="map-card_wrapper">
        <img src="assets/img/map.jpg" alt="map" class="map-card_wrapper-img">
    </div>
      <p class="map-card_text text-inMedium-15-12">
          Всего 50 км до самого крупного
          горного массива в стране
      </p>
    </div>

		`
	  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/crimea.svg', // картинка иконки
    iconImageSize: [68, 31], // размер иконки в пикселях
    iconImageOffset: [0, 0],
    balloonContentSize: [277, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
    balloonShadow: true,
    balloonImageOffset: [-140, -250],
	});

  let placemark6 = new ymaps.Placemark(rasnodar, {
		balloonContent: `

    <div class="map-card">
    <div class="map-card_wrapper">
        <img src="assets/img/map.jpg" alt="map" class="map-card_wrapper-img">
    </div>
      <p class="map-card_text text-inMedium-15-12">
          Всего 50 км до самого крупного
          горного массива в стране
      </p>
    </div>

		`
	  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/rasnodar.svg', // картинка иконки
    iconImageSize: [132, 31], // размер иконки в пикселях
    iconImageOffset: [-60, -28],
    balloonContentSize: [277, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
    balloonShadow: true,
    balloonImageOffset: [-140, -250],
	});

  let placemark7 = new ymaps.Placemark(rosaKhutor, {
		balloonContent: `

    <div class="map-card">
    <div class="map-card_wrapper">
        <img src="assets/img/map.jpg" alt="map" class="map-card_wrapper-img">
    </div>
      <p class="map-card_text text-inMedium-15-12">
          Всего 50 км до самого крупного
          горного массива в стране
      </p>
    </div>

		`
	  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/rosaKhutor.svg', // картинка иконки
    iconImageSize: [140, 31], // размер иконки в пикселях
    iconImageOffset: [50, -50],
    balloonContentSize: [277, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
    balloonShadow: true,
    balloonImageOffset: [-140, -250],
	});

  let placemark8 = new ymaps.Placemark(skireSorts, {
		balloonContent: `

    <div class="map-card">
    <div class="map-card_wrapper">
        <img src="assets/img/map.jpg" alt="map" class="map-card_wrapper-img">
    </div>
      <p class="map-card_text text-inMedium-15-12">
          Всего 50 км до самого крупного
          горного массива в стране
      </p>
    </div>

		`
	  }, {
    iconLayout: 'default#image',
    iconImageHref: 'assets/img/skireSorts.svg', // картинка иконки
    iconImageSize: [159, 42], // размер иконки в пикселях
    iconImageOffset: [-18, -36],
    balloonContentSize: [277, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна - стилизовано
    balloonShadow: true,
    balloonImageOffset: [-140, -250],
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	// map.geoObjects.add(placemark);
	map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
  map.geoObjects.add(placemark3);
  map.geoObjects.add(placemark4);
  map.geoObjects.add(placemark5);
  map.geoObjects.add(placemark6);
  map.geoObjects.add(placemark7);
  map.geoObjects.add(placemark8);

  placemark2.balloon.open();
}

ymaps.ready(init);