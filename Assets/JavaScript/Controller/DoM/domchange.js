function displayProducts(img, info, price, supPrice, parent, insertBefore, last) {
    var ele1 = document.createElement('div');
    ele1.className = 'productWrap';
    ele1.style.display = 'none';
    parent.insertBefore(ele1, insertBefore);



    var ele2 = document.createElement('div');
    ele2.className = 'productImg';
    ele2.addEventListener('click', function () {
        sessionStorage.prodImage = img;
        sessionStorage.prodInfo = info;
        sessionStorage.prodPrice = price;
        sessionStorage.prodSupPrice = supPrice;

        window.location = "./productpage.html"
    }, false)
    ele1.appendChild(ele2);

    var ele22 = document.createElement('img');
    ele22.src = img;
    if (last) {
        ele22.addEventListener('load', function () {
            $(parent).children('.productWrap').css({
                display: 'block'
            })
            $('.prodIndicator').remove();
        })
    }

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
    ele5.addEventListener('click', function () {
        sessionStorage.prodImage = img;
        sessionStorage.prodInfo = info;
        sessionStorage.prodPrice = price;
        sessionStorage.prodSupPrice = supPrice;

        window.location = "./productpage.html"
    }, false)
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


function indicatorsDisplay(parent, insertBefore, howMany) {
    for (var index = 0; index < howMany; index++) {
        var ele = document.createElement('div');
        ele.className = 'prodIndicator';
        parent.insertBefore(ele, insertBefore);

        var eleImg = document.createElement('img');
        eleImg.src = '../Images/indicator.gif';
        ele.appendChild(eleImg);
    }
}



function createHoverWindow(target, infoText, buttonInfo) {
    var ele1 = document.createElement('div');
    ele1.className = 'hoverWindow';
    target.appendChild(ele1);

    var ele2 = document.createElement('div');
    ele2.className = 'hoverWindowContainer';
    ele1.appendChild(ele2);

    var ele3 = document.createElement('p');
    ele3.className = 'hoverWindowInfo';
    ele3.textContent = infoText;
    ele2.appendChild(ele3);

    var ele4 = document.createElement('div');
    ele4.className = 'hoverWindowButton';
    ele2.appendChild(ele4);

    var ele5 = document.createElement('span');
    ele4.appendChild(ele5);

    var ele6 = document.createElement('span');
    ele6.textContent = '>>';
    ele5.appendChild(ele6);

    var ele7 = document.createElement('span');
    ele7.textContent = buttonInfo;
    ele5.appendChild(ele7);
}

function showMore(ele, parent, displayBefore, button, indexOfSection) {
    if (!$(button).hasClass('seeLess')) {
        $(button).addClass('seeLess');
        button.textContent = 'Виж по-малко'
        indicatorsDisplay(parent, displayBefore, ele.products.length - ele.showNumber);
        for (var index = ele.showNumber; index < ele.products.length; index++) {
            var element = ele.products[index];
            if (index + 1 === ele.products.length) {
                displayProducts(element.img, element.info, element.price, element.supPrice, parent, displayBefore, true);
            } else {
                displayProducts(element.img, element.info, element.price, element.supPrice, parent, displayBefore);
            }
        }
    } else {
        $(button).removeClass('seeLess');
        button.textContent = 'Виж повече';
        for (var index = ele.showNumber; index < ele.products.length; index++) {
            var element = document.querySelectorAll('#productSection' + (indexOfSection + 1) + '>.productWrap')[ele.showNumber];
            element.parentNode.removeChild(element);
        }
    }
}