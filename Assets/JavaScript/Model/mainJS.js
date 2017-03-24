function urlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}


var productSections = (function () {
    function Section(name) {
        this.name = name;
    }

    function LowerSection(name, category) {
        this.name = name;
        this.category = category;
        this.products = [];
        this.showNumber = 5;
    }

    LowerSection.prototype.addProducts = function (products) {
        this.products = products;
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
                new LowerSection('Фризери', 'freezers'),
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


    return {

        displaySearchResult: function (searched) {
            document.getElementById('noResult').style.display = 'none';
            var searched = {
                searched: searched
            }
            var parent = document.getElementById('productSection');
            var displayBefore = document.getElementById('productSection-first');
            indicatorsDisplay(parent, displayBefore, 6);
            for (var index = 0; index < sections.length; index++) {
                var lowerSections = sections[index].lowerSections;
                lowerSections.forEach(function (section) {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            section.products = (JSON.parse(xhr.responseText));
                        }
                    }
                    if (urlExists('../JavaScript/jsonfiles/' + section.category + '.json')) {
                        xhr.open('GET', '../JavaScript/jsonfiles/' + section.category + '.json');
                    } else {
                        xhr.open('GET', '../JavaScript/jsonfiles/phones.json');
                    }
                    xhr.send();
                })

            }
            setTimeout(function () {

                var searched = this.searched.split(/[ ,]+/);
                var productsToShow = [];

                for (var index = 0; index < sections.length; index++) {
                    var lowerSections = sections[index].lowerSections;
                    lowerSections.forEach(function (section) {
                        section.products.forEach(function (product) {
                            productsToShow.push(product);
                        })
                    })
                }

                for (var searchedIndex = 0; searchedIndex < searched.length; searchedIndex++) {
                    var searchedWord = searched[searchedIndex].toLowerCase();
                    if (searchedWord.length != 0) {
                        for (var index = 0; index < productsToShow.length; index++) {
                            var product = productsToShow[index];
                            var indexOfTag = product.tags.indexOf(searchedWord);
                            if (indexOfTag == -1) {
                                productsToShow.splice(index, 1);
                                index--;
                            }
                        }
                    }
                }

                var parent = document.getElementById('productSection');
                var displayBefore = document.getElementById('productSection-first');
                if (productsToShow.length != 0) {
                    for (var index = 0; index < productsToShow.length; index++) {
                        var element = productsToShow[index];
                        if (index + 1 == productsToShow.length) {
                            displayProducts(element.img, element.info, element.price, element.supPrice, parent, displayBefore, true);
                        } else {
                            displayProducts(element.img, element.info, element.price, element.supPrice, parent, displayBefore);
                        }

                    }
                } else {
                    $('.prodIndicator').remove();
                    document.getElementById('noResult').style.display = 'block';
                }

            }.bind(searched), 1000);

        },


        setProducts: function (lowerSection, index) {
            var parent = document.getElementById('productSection' + (index + 1));
            var displayBefore = document.getElementById('productSection' + (index + 1) + '-first');
            var seeMore = document.getElementById('seeMore' + (index + 1));
            var filter = document.getElementById('filters' + (index + 1));
            filter.addEventListener('click', function () {
                sessionStorage.section = JSON.stringify(lowerSection);
                window.location = './filter.html';
            }, false);
            var seeMoreFunc = function (e) {
                showMore(lowerSection, parent, displayBefore, e.currentTarget, index);
            }
            seeMore.onclick = seeMoreFunc;
            var howMuch = lowerSection.showNumber;
            for (var product = 0; product < howMuch; product++) {
                var element = lowerSection.products[product];
                if (product + 1 === howMuch) {
                    displayProducts(element.img, element.info, element.price, element.supPrice, parent, displayBefore, true);
                } else {
                    displayProducts(element.img, element.info, element.price, element.supPrice, parent, displayBefore);
                }
            }
        },

        getProducts: function (lowerSection, index) {
            var parent = document.getElementById('productSection' + (index + 1));
            var displayBefore = document.getElementById('productSection' + (index + 1) + '-first');

            indicatorsDisplay(parent, displayBefore, lowerSection.showNumber);

            if (lowerSection.products.length != 0) {
                productSections.setProducts(lowerSection, index);
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    if (xhr.status > 299 || xhr.status < 200) {
                        var xhr2 = new XMLHttpRequest();
                        xhr2.open('GET', '../JavaScript/jsonfiles/phones.json');
                        xhr2.send(null);
                        xhr2.addEventListener('load', function () {
                            lowerSection.products = (JSON.parse(xhr2.responseText));
                            productSections.setProducts(lowerSection, index);
                        })
                    } else {
                        lowerSection.products = JSON.parse(xhr.responseText);
                        productSections.setProducts(lowerSection, index);
                    }
                }
            }

            // if (urlExists('../JavaScript/jsonfiles/' + lowerSection.category + '.json')) {
            //     xhr.open('GET', '../JavaScript/jsonfiles/' + lowerSection.category + '.json');
            // } else {
            //     xhr.open('GET', '../JavaScript/jsonfiles/phones.json');
            // }
            xhr.open('GET', '../JavaScript/jsonfiles/' + lowerSection.category + '.json');
            xhr.send(null);
        },

        getLowerSections: function (index) {
            return sections[index].lowerSections;
        },

        getSection: function (index) {
            return sections[index];
        },

        findProduct: function (ele) {
            var text = ele.textContent;
            $('.productWrap').remove();
            $('.seeMore').removeClass('seeLess');
            $('.seeMore').text('Виж още');
            return sections.find(function (obj, index) {
                if (text === obj.section.name) {
                    obj.lowerSections.forEach(function (element, index2) {
                        productSections.getProducts(element, index2);
                    })
                    return obj;
                }
            })
        },
        onLoad: function () {
            sections[0].lowerSections.forEach(function (lowSec, index) {
                productSections.getProducts(lowSec, index);
            })
        }

    };
})();
