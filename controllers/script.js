'use strict'

// Hàm render product
function renderProduct(arr) {
    var content = "";

    for (var i = 0; i < arr.length; i++) {
        var productServer = arr[i]
        content += `
        <div class="col-12 col-sm-6 col-md-4">
                <div class="product-card">
                    <a href="./../Pages/detail-page.html?id=${productServer.id}" class="product-card__link-overlay"></a>
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

    document.querySelector('.products').innerHTML = content;
}

// Hàm gọi API để lấy product
function getProduct() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        // responseType: "JSON"
    })

    promise.then(function (res) {
        console.log(res.data.content)
        renderProduct(res.data.content)
    })

    promise.catch(function (err) {
        console.log(err)
    })
}

getProduct()

// Hàm chuyển trang
const redirectPage = function (link) {
    if(link){
        location.href = link;
    }
    else {
        location.href = "./index.html";
    }
}
// Hàm lấy và gắn event vào product item để chuyển đến trang product detail


// Hàm đăng ký người dùng
const signUp = function () {
    let user = getData();

    let promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: user,
    });

    const toastContent = document.querySelector('.toast');
    const toast = new bootstrap.Toast(toastContent);
    const toastBody = document.querySelector('.toast-body');

    promise.then(function (res) {
        console.log(res)

        toastBody.textContent = res.data.message;

        toastContent.classList.remove('text-white');
        toastContent.classList.add('text-black');
        toastContent.classList.remove('bg-danger');
        toastContent.classList.add('bg-white');

        toast.show();

        document.querySelector('.form').reset();

        setTimeout(redirectPage, 2000);
    })
    promise.catch(function (err) {
        console.log(err)

        if (err.message === 'Request failed with status code 400') {
            toastBody.textContent = `Email đã được sử dụng.`

            toastContent.classList.add('text-white');
            toastContent.classList.add('bg-danger');

            toast.show();
        }
    })
}

getEle('btnSignUp').addEventListener("click", signUp)