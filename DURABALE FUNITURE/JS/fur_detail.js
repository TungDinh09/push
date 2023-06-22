const furniture = window.furniture;


function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function getDetailData() {
    const queryId = getProductId();
    const rslt = furniture.find(product => product.id === +queryId);

    if (!rslt) {
        document.body.innerHTML = `<h1>Page not found</h1>`;
        return;
    };
    $('#image').attr('src', rslt.listimage[0]);
    $('#image1').attr('src', rslt.listimage[1]);
    $('#image2').attr('src', rslt.listimage[2]);
    $('#name').text(rslt.name);
    $('#company').text(rslt.company);
    $('#description').text(rslt.description);
    $('#currentprice').text(rslt.price.currentprice);
    $('#oldprice').text(rslt.price.oldprice);
    $('#detail').text(rslt.detail);
    //source data 
    $('#src_img').attr('src', rslt.listimage[0]);
    $('#src_name').text(rslt.name);
    $('#src_company').text(rslt.company);
    $('#src_price').text(rslt.price.currentprice);
    $('#src_detail').text(rslt.detail);
}

getDetailData();

const plus = document.querySelector(".btn-increase"),
    minus = document.querySelector(".btn-decrease"),
    num = document.querySelector(".qty");
let a = 1;
plus.addEventListener("click", () => {
    a++;
    num.innerText = a;
});

minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        num.innerText = a;
    }
});



// export Data to word
function exportHTML() {
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header + document.getElementById("sourcedata").innerHTML + footer;

    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}


// Display similar product

function getProductCategory() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category');
}

const queryCategory = getProductCategory();
console.log(queryCategory);
const rslt = furniture.filter(product => product.category.includes(queryCategory));
console.log(rslt);

function createProductBlock(rslt) {
    const productData = '<li class = "item" category="' +
        rslt.category + '"company="' +
        rslt.company + '"><a href = "./furniture_detail.html?id=' +
        rslt.id +
        '&category=' +
        rslt.category +
        '"> <span> <img src = "' +
        rslt.previewimage +
        '"alt = ""> </span><span class ="saleicon ">Sale</span> <div class = "product-item-details" ><div class="product-item-details items-name">' +
        rslt.name + '</div><div class=" product-item-details items-company ">' +
        rslt.company + '</div><div class="product-item-details item-curnent-price ">' +
        rslt.price.currentprice + '</div><div class="product-item-details item-old-price ">' +
        rslt.price.oldprice + '</div></div><a/></li>';
    const target = document.querySelector('#similarProduct');
    console.log(rslt);

    target.innerHTML += productData;
}

function renderListproduct(productList) {
    const target = document.querySelector('#similarProduct');
    console.log(target)
    target.innerHTML = '';

    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }
    getMultipleRandom(productList, 4).forEach(product => {
        createProductBlock(product);
    });

}

renderListproduct(rslt);