'use strict'

function renderProductById(arr) {
    let productSize = '';
    var contentRelatedPro = "";

    for (let i = 0; i < arr.size.length; i++) {
        productSize += `<span class='product-card__detail'>${arr.size[i]}</span>`
        // console.log(arr.size[i]);
    }

    for (let j = 0; j < arr.relatedProducts.length; j++) {
        var productServer = arr.relatedProducts[j]
        contentRelatedPro += `
        <div class="col-12 col-sm-6 col-md-4">
                <div class="product-card">
                    <a href="#" class="product-card__link-overlay"></a>
                    <div class="product-card__image-box">
                        <img src="${productServer.image}" alt="shoes" class="product-card__image img-fluid">
                    </div>
                    <div class="product-card__info">
                        <h2 class="product-card__title">${productServer.name}</h2>
                        <p class="product-card__subtitle">Featured New Shoes</p>
                        <p class="product-card__short-desc">${productServer.shortDescription}</p>
                        <p class="product-card__price">$ ${productServer.price}</p>
                    </div>
                </div>
            </div>
        `
    }

    let content = "";

    // for (var i = 0; i < arr.length; i++) {
    // var productServer = arr[i];
    console.log(arr.id);
    content += `
        <div class="row detail_display">
                    <div class="col-sm-12 col-md-7 col-12 product-card__image-box">
                        <img src="${arr.image}" alt="shoes" class="product-card__image img-fluid">
                    </div>
                    <div class="col-sm-12 col-md-5 col-12"> 
                        <div class="product-card__info">
                            <h2 class="product-card__title">${arr.name}</h2>
                            <p class="product-card__subtitle">Featured New Shoes</p>                            
                            <p class="product-card__price">$ ${arr.price}</p>
                            Select size:
                            <div class="product-card__size">                            
                            ${productSize} 
                            </div>
                            <button class="btn-primary-dark">Add to cart</button>
                            <button class="btn-secondary">Favourite</button>
                            <ul class="product-list_item">
                                <li class="product-card__short-desc">${arr.description}</li>
                                <li class="product-card__short-desc">Colour Shown: White/Black/White/Smoke Grey</li>
                                <li class="product-card__short-desc">Alias: ${arr.alias}</li>
                                <li class="product-card__short-desc">Quantity: ${arr.quantity}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="related_list row">
                        <h2 class="related__product-category">
                            You Might Also Like
                        </h2>
                        ${contentRelatedPro}
                    </div>
                </div>
                `

    document.getElementById('productById').innerHTML = content;
}


function getProductById(id) {
    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
        // responseType: "JSON"
    })

    promise.then(function (res) {
        renderProductById(res.data.content)
    })

    promise.catch(function (err) {
        console.log(err)
    })
}

const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id');

getProductById(idParam)
