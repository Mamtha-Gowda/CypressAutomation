
const cart = ["shirts","shoes", "umbrella"];

createOrder(cart).
     then(function (orderId){

    console.log(orderId);
}).catch(function (error){

    console.log(error.message);

})



function createOrder(cart){

    const pr = new Promise(function (resolve,reject){


        if(!validateCart(cart)){

            const err = new Error("Cart is not valid");
            reject(err);
    
        }

        let orderId = "767676";

        if(orderId){

            setTimeout (function (){
                resolve(orderId);

            },5000);
            

        }

    })

    return pr;

}

function validateCart(){

    return true;
}