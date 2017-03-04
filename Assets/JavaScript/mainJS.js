function Section(name) {
    this.name = name;
}

function LowerSection(name) {
    this.name = name;
}

function Product(image, information, price) {
    this.image = image;
    this.information = information;
    this.price = price;
}

var sections = [
    {
        section: new Section('Телефони, Таблети & Смарт технологии'),
        lowerSections: [
            new LowerSection('Мобилни телефони'),
            new LowerSection('Таблети'),
            new LowerSection('Външни батерии'),
            new LowerSection('Аксесоари'),
            new LowerSection('Смарт часовници'),
            new LowerSection('Фитнес гривни'),
            new LowerSection('Преносими тонколони'),
            new LowerSection('Smart Home & VR очила')
        ]
    },
    {
        section: new Section('Лаптопи, IT продукти & Офис'),
        lowerSections: [
            new LowerSection('Лаптопи'),
            new LowerSection('Чанти за лаптопи'),
            new LowerSection('Хард дискове'),
            new LowerSection('Охлоадителни Подложки'),
            new LowerSection('Компютри'),
            new LowerSection('Аксесоари за Компютри'),
            new LowerSection('Офис столове'),
            new LowerSection('Всичко за офиса')
        ]
    },
    {
        section: new Section('ТВ, Електроника & Фото'),
        lowerSections: [
            new LowerSection('Телевизори'),
            new LowerSection('Кабели и адаптери'),
            new LowerSection('Система за домашно кино'),
            new LowerSection('Усилватели'),
            new LowerSection('Видео проектори'),
            new LowerSection('MP3 и MP4 Плейъри'),
            new LowerSection('Фотоапарати'),
            new LowerSection('Видеокамери')
        ]
    },
    {
        section: new Section('Големи електроуреди'),
        lowerSections: [
            new LowerSection('Хладилници'),
            new LowerSection('Фризери'),
            new LowerSection('Перални'),
            new LowerSection('Сушилни'),
            new LowerSection('Съдомиялни'),
            new LowerSection('Печки'),
            new LowerSection('Климатици'),
            new LowerSection('Бойлери')
        ]
    },
    {
        section: new Section('Малки електроуреди & Лична грижа'),
        lowerSections: [
            new LowerSection('Прахосмукачки'),
            new LowerSection('Кафе машини'),
            new LowerSection('Месомелачки'),
            new LowerSection('Хлебопекарни'),
            new LowerSection('Сешоари'),
            new LowerSection('Парфюми'),
            new LowerSection('Епилатори'),
            new LowerSection('Кремове')
        ]
    },
    {
        section: new Section('Козметика, Мода & Спорт'),
        lowerSections: [
            new LowerSection('Гримове'),
            new LowerSection('Маникюр & педикюр'),
            new LowerSection('Спортни обувки'),
            new LowerSection('Спортно облекло'),
            new LowerSection('Къмпинг'),
            new LowerSection('Зимни спортове'),
            new LowerSection('Бижута'),
            new LowerSection('Часовници')
        ]
    },
    {
        section: new Section('Книги, Детски артукули & Играчки'),
        lowerSections: [
            new LowerSection('Художествена литература'),
            new LowerSection('Световни романи'),
            new LowerSection('Пелени'),
            new LowerSection('Бебешки пюрета'),
            new LowerSection('Залагалки'),
            new LowerSection('Детски превозни средства'),
            new LowerSection('Детски дрехи'),
            new LowerSection('Играчки')
        ]
    },
    {
        section: new Section('Дом & Градина'),
        lowerSections: [
            new LowerSection('Косачка'),
            new LowerSection('Мебели'),
            new LowerSection('Осветление'),
            new LowerSection('Кухненски прибори'),
            new LowerSection('Баня'),
            new LowerSection('Кухния'),
            new LowerSection('Спалния'),
            new LowerSection('Хол')
        ]
    },
    {
        section: new Section('Авто, Инструменти & Petshop'),
        lowerSections: [
            new LowerSection('Инструменти'),
            new LowerSection('Масло'),
            new LowerSection('Застраховки'),
            new LowerSection('Акумулатори'),
            new LowerSection('Храна за любимци'),
            new LowerSection('Играчки за любимци'),
            new LowerSection('Къщички за любимци'),
            new LowerSection('Каишки')
        ]
    }
]





function getLowerSecNames(ele) {
    var text = ele.textContent;
    var linkNames = [];
    sections.forEach(function (obj) {
        console.log(obj.section.name);
        if (obj.section.name === text) {
            obj.lowerSections.forEach(function (lowSec) {
                linkNames.push(lowSec.name);
            })
        }
    })

    return linkNames;
}


function displayProduct(img, info, price, supPrice, appendOn) {
    var ele1 = document.createElement('div');
    ele1.className = 'productWrap';
    appendOn.appendChild(ele1);


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
    ele441.textContent += 'лв';




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



displayProduct('../Images/tv1.jpg', 'tv sdaasd', '241', '99', document.getElementById('productSection1'));

