const furniture = window.furniture;


// display item list
function createProductBlock(product) {
    const productData = '<li class = "item" category="' +
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
        product.price.oldprice + '</div><div class="product-item-details add-to-cart"><a href="#" id="addcart">ADD TO CART</a></div></div><a/></li>';
    const target = document.querySelector('#itemlist');
    console.log(product);

    target.innerHTML += productData;
}

function renderListproduct(productList) {
    const target = document.querySelector('#itemlist');
    console.log(target)
    target.innerHTML = '';
    productList.forEach(product => {
        createProductBlock(product);
    });
}

renderListproduct(furniture);

// function filterByTypes() {
//     const listData = furniture.filter(product => product.category.includes('Tables'));
//     console.log(listData);
//     const target = document.querySelector('#itemlist');
//     console.log(target);
//     target.innerHTML = '';
//     renderListproduct(listData);
// }


function getAllCheckedFilter() {
    // lay toan bo danh sach cac filter da duoc tich
    const categoryFilterWrapper = document.querySelector('#filter-cat');
    const listCateChecked = [...categoryFilterWrapper.querySelectorAll('input[type=checkbox]:checked')] || [];

    const listFilterCate = listCateChecked.map(input => input.value);
    console.log(listFilterCate)

    const companyFilterWrapper = document.querySelector('#filter-com');

    const listCompanyChecked = [...companyFilterWrapper.querySelectorAll('input[type=checkbox]:checked')] || [];

    const listFilterCompany = listCompanyChecked.map(input => input.value);
    console.log(listFilterCompany);
    const listData = furniture.filter(product => {
        let validCategory = false;

        validCategory = listFilterCate.length ? product.category.some(cate => listFilterCate.includes(cate)) : true;

        let validCompany = false;
        validCompany = listFilterCompany.length ? product.company.some(com => listFilterCompany.includes(com)) : true;

        return validCategory && validCompany;
    });

    renderListproduct(listData);
}