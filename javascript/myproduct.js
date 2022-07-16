let login = document.querySelector(".login");
let allproducts = document.querySelector(".allproducts");
let myproduct;

if(window.localStorage.login) {
    login.innerHTML = window.localStorage.login
    if(window.localStorage.getItem(window.localStorage.login)) {
        myproduct = JSON.parse(window.localStorage.getItem(window.localStorage.login));
    } else {
        myproduct = []
    }
}

function myproducts() {
    allproducts.innerHTML = ""
    if(myproduct.length) {
        myproduct.forEach(element => {
            allproducts.innerHTML += `
            <div class="product">
                    <div class="product-img">
                        <img src="${element.src}">
                    </div>
                    <div class="product-info">
                        <h3>${element.title}</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div class="prcount">
                            <p class="price">price: <span>${element.price}$</span></p>
                            <p class="count">count: <span>${element.qun}</span></p>
                        </div>
                        <div class="totalprice">
                            totalprice: <span>${element.price * element.qun} $</span>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        allproducts.innerHTML = "No product to show";
    }
}

myproducts();