let detailsInfo = document.querySelector(".details-box .container");

let product = JSON.parse(window.localStorage.getItem("prodetails"));

function detailsshow(){
    detailsInfo.innerHTML = `
            <img src="${product.src}" alt="">
            <div class="details-info">
                <div class="title">
                    <h3>Title: <span>${product.title}</span></h3>
                    <h3>categeroy: <span>wood</span></h3>
                </div>
                <div class="property">
                    <h3 class="color">color: <span>black</span> <span>brown</span> <span>blue</span></h3>
                    <h3>avaiablecount: <span>10</span></h3>
                    <h3>price: <span>${product.price}$</span></h3>
                </div>
                <div class="description">
                    <strong>description:</strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat aperiam incidunt deleniti doloribus sed mollitia quas autem,
                        recusandae nesciunt ratione repellendus officia nisi.
                        Dicta maxime quaerat perferendis vitae. Dolor, praesentium!</p>
                </div>
            </div>
    `;
}
detailsshow();

