function displayProducts(img, info, price, supPrice, parent, insertBefore) {
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