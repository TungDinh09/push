const fur_list = window.furniture;
const decor_list = window.decor;

//random furlist
function createFurBlock(product) {
    const productData = '<li class = "item_home" category="' +
        product.category + '"company="' +
        product.company + '"><a href = "./furniture_detail.html?id=' +
        product.id +
        '&category=' +
        product.category +
        '"> <span> <img src = "' +
        product.previewimage +
        '"alt = ""> </span><span class ="saleicon ">Sale</span> <div class = "product-item-details" ><div class="product-item-details items-name">' +
        product.name + '</div><div class=" product-item-details items-company ">' +
        product.company + '</div><div class="product-item-details item-curnent-price ">' +
        product.price.currentprice + '</div><div class="product-item-details item-old-price ">' +
        product.price.oldprice + '</div></div><a/></li>';
    const target = document.querySelector('#fur_list');

    target.innerHTML += productData;
}

function renderFur_list(productList) {
    const target = document.querySelector('#fur_list');
    console.log(target)
    target.innerHTML = '';

    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }
    getMultipleRandom(productList, 4).forEach(product => {
        createFurBlock(product);
    });
}

renderFur_list(fur_list);

/// random decor list

function createDecorBlock(product) {
    const productData = '<li class = "item_home" category="' +
        product.category + '"company="' +
        product.company + '"><a href = "./decor_detail.html?id=' +
        product.id +
        '&category=' +
        product.category +
        '"> <span> <img src = "' +
        product.previewimage +
        '"alt = ""> </span><span class ="saleicon ">Sale</span> <div class = "product-item-details" ><div class="product-item-details items-name">' +
        product.name + '</div><div class=" product-item-details items-company ">' +
        product.company + '</div><div class="product-item-details item-curnent-price ">' +
        product.price.currentprice + '</div><div class="product-item-details item-old-price ">' +
        product.price.oldprice + '</div></div><a/></li>';
    const target = document.querySelector('#decor_list');

    target.innerHTML += productData;
}

function renderDecor_list(productList) {
    const target = document.querySelector('#decor_list');
    console.log(target)
    target.innerHTML = '';

    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }
    getMultipleRandom(productList, 4).forEach(product => {
        createDecorBlock(product);
    });
}

renderDecor_list(decor_list);