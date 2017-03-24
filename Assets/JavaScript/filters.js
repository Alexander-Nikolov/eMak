var products = JSON.parse(sessionStorage.getItem("section")).products;
var divBrand = document.getElementById('brand');

function create(type, attributes) {
    var element = document.createElement(type);
    if (attributes) {
        for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                if (attr == 'text') {
                    element.innerHTML = attributes[attr];
                } else {
                    element.setAttribute(attr, attributes[attr]);
                }
            }
        }
    }
    return element;
}

var brands = [];
products.forEach(function(element){
    if(brands.indexOf(element.brand) == -1){
        var check = create('input', {id: element.brand, type: "checkbox", name:"brand", value:element.brand});
        var label = create('label', {for: check.id, text:element.brand});
        var div = create('div');
        div.appendChild(check);
        div.appendChild(label);
        brand.appendChild(div);
        brands.push(element.brand);
    }
});

products.forEach(function(element) {
    var div = create('div', {class:"product"});
    var info = create('h1', {text: element.info});
    var price = create('p', {text:element.price});
    var supPrice = create('sup', {text: element.supPrice});
    var img = create('img', {src: element.img});
    div.appendChild(info);
    price.appendChild(supPrice);
    div.appendChild(price); 
    div.appendChild(img);
    document.getElementById('products').appendChild(div);
});

var inputs = document.querySelectorAll('input[type=checkbox]');

function checkPrice(from, to) {
    return function(element) {
        var price = parseInt(element.price);
        if (price >= from && price <= to){
            return true;
        }
        return false;
    }
}

function checkBrand(brand) {
    return function(element){
        if (element.brand == brand) {
            return true;
        }
        return false;
    }
}

function getProducts(array) {
    var result = [];

    for (var check = 0; check < array.length; check++) {
        var currentResult = products.filter((array[check].parentElement.parentElement.id == "prices") ? (checkPrice(parseInt(array[check].min), parseInt(array[check].max))) : checkBrand(array[check].value));
        Array.prototype.forEach.call(currentResult, function(element) {
            result.push(element);
        });
    }
    return result;
}

inputs.forEach(function(element) {
    element.addEventListener('change', function(event){
        var checkboxes = document.getElementsByTagName('input');
        var pricesChecked = [];
        var brandsChecked = [];

        Array.prototype.forEach.call(checkboxes, function(checkbox){
            if (checkbox.checked){
                var array = (checkbox.parentElement.parentElement.id == 'prices') ? pricesChecked : brandsChecked;
                array.push(checkbox);
            }
        }); 

        var displayProducts = (pricesChecked.length != 0 || brandsChecked.length != 0) ? "none" : "block";  
        var productsDiv = document.querySelectorAll('.product');
        productsDiv.forEach(function(div) {
            div.style.display = displayProducts;
        });

        var resultPrice = getProducts(pricesChecked);
        var resultBrand = getProducts(brandsChecked);

        var result = [];

        if (resultPrice.length != 0 && resultBrand.length != 0){
            for (var i = 0; i < resultPrice.length; i++){
                for (var j = 0; j < resultBrand.length; j++) {
                    if(resultBrand[j] == resultPrice[i]){
                        result.push(resultBrand[j]);
                    }
                }
            }
        } else {
            result = resultBrand.length != 0 ? resultBrand : resultPrice;
        }

        for (var index = 0; index < result.length; index++) {
            productsDiv.forEach(function(div) {
                if (div.children[0].innerHTML == result[index].info){
                    div.style.display = "block";
                }
            });
        }
    }, false);
});