const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

/* CUPONES*/

const couponsList = [];

couponsList.push({
    name: 'navidad',
    discount: 15,
});
couponsList.push({
    name: 'day',
    discount: 25,
});
couponsList.push({
    name: 'noche',
    discount: 35,
});


/*Funcion*/

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputDiscount.value;

    if(!price || !coupon){
        pResult.innerText = 'Favor de llenar el formulario';
        return;
    }

    let discount;
    
    //Creamos el Filtro (entre parentesis nombre de la funcion)
    //Find devuelve objetos y Filter devuelve arrays.
    const couponInArray = couponsList.find(isCouponInArray);

    //Filtramos creamos la funcion
    function isCouponInArray(couponElement){
        //Preguntamos si lo que escribio el usuario exíste en el array
        return couponElement.name == coupon;
    }

   


    if(couponInArray){
        //
        discount = couponInArray.discount;
    }else{
        //
        pResult.innerText = 'El cupón no es válido';
        return;
    }

    console.log({
        coupon,
        discount,
        couponInArray,
        couponsList,
    });

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;

}

