const inputFieldId='quantity-mobile';
const getMobilePrice=document.querySelector('#mobile-price');

const mobilePrice= getMobilePrice.innerText;

document.querySelector('#increase-mobile').addEventListener('click',function(){ 
    const isIncrease=true;
   const totalMobileQuantity=quantityTotal(isIncrease,inputFieldId);
   priceTotal(getMobilePrice,mobilePrice,totalMobileQuantity);
   summation()
   
})

document.querySelector('#decrease-mobile').addEventListener('click',function(){ 
    const isIncrease=false;
    const totalMobileQuantity=quantityTotal(isIncrease,inputFieldId);
    priceTotal(getMobilePrice,mobilePrice,totalMobileQuantity);
    summation()
})