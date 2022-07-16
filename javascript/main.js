let nav = document.querySelector(".nav")
let login = document.querySelector(".login")
let loginUser = document.querySelector(".login .logoin-user");
let logout = document.querySelector(".logout");
let shopCart = document.querySelector(".shop-cart");
let iconshop = document.querySelector('[name="cart"]')
let closeIcon = document.querySelector('[name="close"]');
let arrowUp = document.querySelector('[name="arrow-up"]')
let arrowDown = document.querySelector('[name="arrow-down"]')
let badget = document.querySelector(".badget");
let showAll = document.querySelector(".showAll")
let input = document.querySelector("header .container input");
let plus = document.querySelector(".plus")
let chooseitems;
let favoritedata;


if(window.localStorage.login) {
    nav.style.display = "none"
    login.style.display = "flex"
    loginUser.innerHTML = window.localStorage.getItem("login")
    if(window.localStorage.getItem(window.localStorage.login)) {
        chooseitems = JSON.parse(window.localStorage.getItem(window.localStorage.login))
        putDataInCard(chooseitems);
    } else {
        chooseitems = []
    }
    if(window.localStorage.getItem(`favorite${window.localStorage.login}`)) {
        favoritedata = JSON.parse(window.localStorage.getItem(`favorite${window.localStorage.login}`));
    } else {
        favoritedata = []
    }

} else {
    nav.style.display = "flex";
    login.style.display = "none";
}

logout.addEventListener("click", () => {
    window.localStorage.removeItem("login")
    setTimeout(() => {
        window.location = "../register.html"
    }, 500);
})

showAll.onclick = function(){
    if(chooseitems.length && window.localStorage.login) {
        window.location = "../myproducts.html"
    } else {
        return false
    }
}
// handle products
let productscontainer = document.querySelector(".products .container") 
let productdata = [
    {
        id: 1,
        title: "chair wood",
        src: "./image/chair1.jpg",
        price: 100,
        qun: 1,
        favort: function () {
            let filter = favoritedata.filter((item) => {
                return item.id === this.id;
            });
            if (filter.length) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        id: 2,
        title: "chair plastic",
        src: "./image/chair2.jpg",
        price: 120,
        qun: 1,
        favort: function () {
            let filter = favoritedata.filter((item) => {
                return item.id === this.id;
            });
            if (filter.length) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        id: 3,
        title: "stand chair",
        src: "./image/chair3.jpg",
        price: 110,
        qun: 1,
        favort: function () {
            let filter = favoritedata.filter((item) => {
                return item.id === this.id;
            });
            if (filter.length) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        id: 4,
        title: "Almuim chair",
        src: "./image/chair4.jpg",
        price: 99,
        qun: 1,
        favort: function () {
            let filter = favoritedata.filter((item) => {
                return item.id === this.id;
            });
            if (filter.length) {
                return true;
            } else {
                return false;
            }

        },
    },
    {
        id: 5,
        title: "wood chair",
        src: "./image/chair5.jpg",
        price: 125,
        qun: 1,
        favort: function () {
            let filter = favoritedata.filter((item) => {
                return item.id === this.id;
            });
            if (filter.length) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        id: 6,
        title: "modern chair",
        src: "./image/chair6.jpg",
        price: 108,
        qun: 1,
        favort: function () {
            let filter = favoritedata.filter((item) => {
                return item.id === this.id;
            });
            if (filter.length) {
                return true;
            } else {
                return false;
            }
        },
    },
];

window.localStorage.setItem("mainproduct", JSON.stringify(productdata));
// fuction to show products 
function showProducts(products) {
    productscontainer.innerHTML = ""
    let productUI = products.map((product, index) => {
        productscontainer.innerHTML += `
        <div class="product-box">
                <img src=${product.src} alt="chair">
                <div class="info">
                    <a  onclick ="details(${index})">${product.title}</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, temporibus!</p>
                </div>
                <div class="shop">
                    <button  onclick = "checkShoping(${product.id})">add to cart</button>
                    <ion-icon name="heart" style="color:${product.favort() ? "red" : "white"} ;" onclick = "favorite(this,${product.id})"></ion-icon>
                </div>
        </div>
        `;
    });
}
showProducts(productdata);

// close icon 
closeIcon.onclick = function(){
    shopCart.classList.remove("active")
}

// click on icon shop
iconshop.addEventListener("click", () => {
    if(chooseitems.length){
        shopCart.classList.toggle("active");
    } else {
        return false 
    }
})

// show shopcart
function showShopCart() {
    if (chooseitems.length) {
        shopCart.classList.add("active");
    } else {
        shopCart.classList.remove("active");
    }
}


// fuction to shoping 
function checkShoping(id){
    if (window.localStorage.login) {
        let chooseproduct = productdata.find((product) => {
            return product.id === id
        });
        chooseoOneOnly(chooseproduct);
        showShopCart();
        totalcount();
    } else {
        alert("please sign first ")
    }
}

// arrow countdown fuction
function arrowUP(index){
    let qunUp = chooseitems[index]
    qunUp.qun +=  1
    window.localStorage.setItem(window.localStorage.login , JSON.stringify(chooseitems))
    putDataInCard(chooseitems);
}
function arrowdown(index){
    let qunUp = chooseitems[index];
    if (qunUp.qun == 1) {
        return false 
    } else {
        qunUp.qun -= 1;
    }
    window.localStorage.setItem(window.localStorage.login,JSON.stringify(chooseitems));
    putDataInCard(chooseitems);
}

// fuction to delete
function dele( index) {
    chooseitems.splice(index,1)
    showShopCart();
    window.localStorage.setItem(window.localStorage.login,JSON.stringify(chooseitems));
    putDataInCard(chooseitems);
}


// function to  count items in cart shop 
function totalcount(){
    badget.innerHTML = "0";
    chooseitems.forEach((element) => {
        badget.innerHTML = parseInt(badget.innerHTML) + element.qun
    })
}

// chooose one only 

function chooseoOneOnly(chooseproduct) {
    if (chooseitems.length === 0) {
        chooseitems.push(chooseproduct);
        window.localStorage.setItem(window.localStorage.login,JSON.stringify(chooseitems));
        putDataInCard(chooseitems);
    } else {
        let filter = chooseitems.find((item) => {
            return item.id === chooseproduct.id
        })
        if(filter) {
            return false 
        } 
        else {
            chooseitems.push(chooseproduct)
            putDataInCard(chooseitems);
            window.localStorage.setItem(window.localStorage.login, JSON.stringify(chooseitems));
        }
    }
};


// fuction put data in card 
function putDataInCard(chooseitems) {
    cartcontent.innerHTML = "";
    chooseitems.forEach((element, index) => {
        cartcontent.innerHTML += `
        <div class="cart">
            <div class="shop-img">
                <img src="${element.src}">
                </div>
                <div class="shop-details">
                    <p class="shopname">${element.title}</p>
                    <span><strong>${element.price}</strong>$</span> <br>
                    <del onclick = dele(${(index)})>delete</del>
                </div>
                <div class="count">
                    <ion-icon name="arrow-up" onclick = "arrowUP(${index})"></ion-icon>
                    <span class="countnum">${element.qun}</span>
                    <ion-icon name="arrow-down" onclick = "arrowdown(${index})"></ion-icon>
            </div>
        </div>
        `;
    });
    totalcount();
}

function details(index) {
    let prodetalis = productdata[index];
    window.localStorage.setItem("prodetails", JSON.stringify(prodetalis))
    window.location = "../peoductdetails.html"
}

// search fuction
input.addEventListener("input", function(){
    let textsearch = input.value.trim()
    let result = productdata.filter((product) => {
        return product.title.indexOf(textsearch) !== -1 
    })
    if(result) {
        showProducts(result);
    } else {
        showProducts(productdata);
    }
})

// fuction favorite
let deletefav;
function favorite(ele, id) {
    let favoriteproduct = productdata.find((product) => {
        return product.id === id
    })
    if (favoritedata.length) {
        let filter = favoritedata.filter((item, index) => {
            if (item.id === favoriteproduct.id){
                deletefav = index;
                return item
            } 
        })
        if(filter.length) {
            ele.style.color = "white"
            favoritedata.splice(deletefav,1)
            window.localStorage.setItem(`favorite${window.localStorage.login}`, JSON.stringify(favoritedata))
        } else {
            ele.style.color = "red";
            favoritedata.push(favoriteproduct);
            window.localStorage.setItem(`favorite${window.localStorage.login}`,JSON.stringify(favoritedata));
        }
    } else {
        favoritedata.push(favoriteproduct);
        ele.style.color = "red";
        window.localStorage.setItem(
            `favorite${window.localStorage.login}`,
            JSON.stringify(favoritedata)
        );
    }
}

// add new product 
plus.addEventListener("click", addproduct)

function addproduct (){
    window.location = "../addproduct.html"
}