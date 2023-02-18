let menuButton = document.getElementById("order-menu");
let messageDiv = document.getElementById("message");
menuButton.addEventListener('click',getMenu)
function getMenu() {
fetch("https://free-food-menus-api-production.up.railway.app/burgers")
.then(response =>response.json())
.then( data =>{
    console.log(data);
    let menuDiv = document.getElementById('menu');
        data.forEach(item => {
            let itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price}</p>
            `;
            menuDiv.appendChild(itemDiv);
        });
    })
    .catch(error => console.log(error));
}
function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let order = {
                burger1: "Random Burger 1",
                burger2: "Random Burger 2",
                burger3: "Random Burger 3"
            };
            resolve(order);
            console.log("Take order");
            messageDiv.innerHTML="Take the order safely";
        }, 2500);
    });
}
function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let order_status = true;
            let paid = false;
            let order = {
                order_status: order_status,
                paid: paid
            };
            resolve(order);
            console.log("order is prepared");
            messageDiv.innerHTML="Order is prepared immediately";
        }, 1500);
    });
}
function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let order_status = true;
            let paid = true;
            let order = {
                order_status: order_status,
                paid: paid
            };
            resolve(order);
            console.log("Do the payment");
            messageDiv.innerHTML="Payment is necessary";
        }, 1000);
    });
}
function thankyouFnc() {
    alert("Thank you for your order!");
}
let orderButton = document.getElementById('take-order');
orderButton.addEventListener('click', () => {
    takeOrder()
    .then(orderPrep)
    .then(payOrder)
    .then((order) => {
        if (order.paid) {
            thankyouFnc();
        }
    })
    .catch(error => console.log(error));
});
