function Section(name) {
    this.name = name;
}

function LowerSection(name, category) {
    this.name = name;
    this.category = category;
    this.products = [];
}

LowerSection.prototype.addProducts = function (products) {
    this.products = products;
}

LowerSection.prototype.getProducts = function () {
    var obj = this;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            obj.products = (JSON.parse(xhr.responseText))
            obj.setProducts();
        }
    }
    xhr.open('GET', '../JavaScript/jsonfiles/' + this.category + '.json');
    xhr.send();
}

LowerSection.prototype.displayProducts = function (img, info, price, supPrice, parent, insertBefore) {
    var ele1 = document.createElement('div');
    ele1.className = 'productWrap';
    parent.insertBefore(ele1, insertBefore);


    var ele2 = document.createElement('div');
    ele2.className = 'productImg';
    ele1.appendChild(ele2);

    var ele22 = document.createElement('img');
    ele22.src = img;
    ele2.appendChild(ele22);


    var ele3 = document.createElement('div');
    ele3.className = 'productInfo';
    ele1.appendChild(ele3);

    var ele33 = document.createElement('p');
    ele33.textContent = info;
    ele3.appendChild(ele33);


    var ele4 = document.createElement('div');
    ele4.className = 'productPrice';
    ele1.appendChild(ele4);

    var ele44 = document.createElement('span');
    ele4.appendChild(ele44);
    var ele441 = document.createElement('span');
    ele441.innerHTML = price;
    ele44.appendChild(ele441);
    var ele442 = document.createElement('sup');
    ele442.textContent = '.' + supPrice;
    ele44.appendChild(ele442);
    var ele443 = document.createElement('span');
    ele443.innerHTML = ' лв.';
    ele44.appendChild(ele443);



    var ele5 = document.createElement('div');
    ele5.className = 'productMoreInfo';
    ele1.appendChild(ele5);

    var ele55 = document.createElement('span');
    ele5.appendChild(ele55);
    var ele551 = document.createElement('span');
    ele551.textContent = '>>';
    ele55.appendChild(ele551);
    var ele552 = document.createElement('span');
    ele552.textContent = 'виж повече';
    ele55.appendChild(ele552);
}

LowerSection.prototype.setProducts = function() {
    var indexOfSection = this.checkSection();
    var parent = document.getElementById('productSection' + (indexOfSection + 1));
    var displayBefore = document.getElementById('productSection' + (indexOfSection + 1) + '-first');
    for (var index = 0; index < this.products.length; index++) {
        var element = this.products[index];
        this.displayProducts(element.img, element.info, element.price, element.supPrice, parent, displayBefore)
    }
}

LowerSection.prototype.checkSection = function() { 
    var text = this.name;
    for (var index = 0; index < sections.length; index++) {
        var obj = sections[index];
        for (var index2 = 0; index2 < obj.lowerSections.length; index2++) {
            var element = obj.lowerSections[index2];
            if (element.name === text) {
                return index2;
            }    
        }
    }
   
}

var sections = [
    {
        section: new Section('Телефони, Таблети & Смарт технологии'),
        lowerSections: [
            new LowerSection('Мобилни телефони', 'phones'),
            new LowerSection('Таблети', 'tablets'),
            new LowerSection('Външни батерии', 'outer-batteries'),
            new LowerSection('Аксесоари', 'accessories'),
            new LowerSection('Смарт часовници', 'smartwatches'),
            new LowerSection('Фитнес гривни', 'fitnessbrace'),
            new LowerSection('Преносими тонколони', 'portable-speaker'),
            new LowerSection('Smart Home & VR очила', 'smarthome-vr')
        ]
    },
    {
        section: new Section('Лаптопи, IT продукти & Офис'),
        lowerSections: [
            new LowerSection('Лаптопи', 'laptops'),
            new LowerSection('Чанти за лаптопи', 'lapbags'),
            new LowerSection('Хард дискове', 'harddiscs'),
            new LowerSection('Охлоадителни Подложки', 'cooling-pads'),
            new LowerSection('Компютри', 'PCs'),
            new LowerSection('Аксесоари за Компютри', 'acc-for-pc'),
            new LowerSection('Офис столове', 'office-chairs'),
            new LowerSection('Всичко за офиса', 'office-stuff')
        ]
    },
    {
        section: new Section('ТВ, Електроника & Фото'),
        lowerSections: [
            new LowerSection('Телевизори', 'TVs'),
            new LowerSection('Кабели и адаптери', 'cables-adapters'),
            new LowerSection('Система за домашно кино', 'home-cinema'),
            new LowerSection('Усилватели', 'amplifiers'),
            new LowerSection('Видео проектори', 'vid-proj'),
            new LowerSection('MP3 и MP4 Плейъри', 'mp3-mp4'),
            new LowerSection('Фотоапарати', 'cameras'),
            new LowerSection('Видеокамери', 'video-cameras')
        ]
    },
    {
        section: new Section('Големи електроуреди'),
        lowerSections: [
            new LowerSection('Хладилници', 'refrigerators'),
            new LowerSection('Фризери', 'Freezers'),
            new LowerSection('Перални', 'washing-mach'),
            new LowerSection('Сушилни', 'dryers'),
            new LowerSection('Съдомиялни', 'dishwashers'),
            new LowerSection('Печки', 'stoves'),
            new LowerSection('Климатици', 'air-cond'),
            new LowerSection('Бойлери', 'boilers')
        ]
    },
    {
        section: new Section('Малки електроуреди & Лична грижа'),
        lowerSections: [
            new LowerSection('Прахосмукачки', 'vac-cleaners'),
            new LowerSection('Кафе машини', 'coffee-mach'),
            new LowerSection('Месомелачки', 'meat-grinders'),
            new LowerSection('Хлебопекарни', 'breadmakers'),
            new LowerSection('Сешоари', 'hairdryers'),
            new LowerSection('Парфюми', 'perfumes'),
            new LowerSection('Епилатори', 'epilators'),
            new LowerSection('Кремове', 'skin-creams')
        ]
    },
    {
        section: new Section('Козметика, Мода & Спорт'),
        lowerSections: [
            new LowerSection('Гримове', 'makeup'),
            new LowerSection('Маникюр & педикюр', 'manicure-pedicure'),
            new LowerSection('Спортни обувки', 'sports-shoes'),
            new LowerSection('Спортно облекло', 'playwear'),
            new LowerSection('Къмпинг', 'camping'),
            new LowerSection('Зимни спортове', 'winter-sports'),
            new LowerSection('Бижута', 'jewelry'),
            new LowerSection('Часовници', 'watches')
        ]
    },
    {
        section: new Section('Книги, Детски артукули & Играчки'),
        lowerSections: [
            new LowerSection('Художествена литература', 'fiction-books'),
            new LowerSection('Световни романи', 'best-novels'),
            new LowerSection('Пелени', 'diapers'),
            new LowerSection('Бебешки пюрета', 'purees'),
            new LowerSection('Залъгалки', 'pacifiers'),
            new LowerSection('Детски превозни средства', 'vehicles-for-children '),
            new LowerSection('Детски дрехи', 'clothes-for-children'),
            new LowerSection('Играчки', 'toys')
        ]
    },
    {
        section: new Section('Дом & Градина'),
        lowerSections: [
            new LowerSection('Косачка', 'mowers'),
            new LowerSection('Мебели', 'furniture'),
            new LowerSection('Осветление', 'lighting'),
            new LowerSection('Кухненски прибори', 'tableware'),
            new LowerSection('Баня', 'bathroom'),
            new LowerSection('Кухния', 'kitchen'),
            new LowerSection('Спалния', 'bedroom'),
            new LowerSection('Хол', 'livingroom')
        ]
    },
    {
        section: new Section('Авто, Инструменти & Petshop'),
        lowerSections: [
            new LowerSection('Инструменти', 'tools'),
            new LowerSection('Масло', 'oil'),
            new LowerSection('Застраховки', 'insurance'),
            new LowerSection('Акумулатори', 'accumulators'),
            new LowerSection('Храна за любимци', 'pet-food'),
            new LowerSection('Играчки за любимци', 'toys-for-pets'),
            new LowerSection('Къщички за любимци', 'houses-for-pets'),
            new LowerSection('Каишки', 'leashes')
        ]
    }
]





function getLowerSecNames(ele) {
    var text = ele.textContent;
    var linkNames = [];
    $('.productWrap').remove();
    sections.forEach(function (obj) {
        if (obj.section.name === text) {
            obj.lowerSections.forEach(function (lowSec) {
                lowSec.getProducts();
                linkNames.push(lowSec.name);
            })
        }
    })

    return linkNames;
}

function onLoad() {
    sections[0].lowerSections.forEach(function(lowSec) {
        lowSec.getProducts();
    })
}

onLoad();