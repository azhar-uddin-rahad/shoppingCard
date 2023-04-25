function quantityTotal(isIncrease,inputFieldId){
    const inputField= document.getElementById(inputFieldId);
    const inputFieldValue=inputField.value;
       const inputValueNumber=parseInt(inputFieldValue);
       let quantity;
        if(isIncrease){
           quantity = inputValueNumber + 1;
          
           inputField.value=quantity;
        }
        else{
           quantity = inputValueNumber - 1;
           inputField.value=quantity;
        }
   
   return quantity
   
   }
   
function priceTotal(getMobilePrice,mobilePrice,totalMobileQuantity){
 const mobilePriceNumber=parseInt(mobilePrice);
 const totalPrice=mobilePriceNumber * totalMobileQuantity;
 getMobilePrice.innerText = totalPrice;
}

function summation(){
   const getMobilePrice=document.querySelector('#mobile-price');
   const  totalMobilePrice= parseInt(getMobilePrice.innerText);
   console.log(totalMobilePrice);
   const getCasePrice=document.querySelector('#case-price');
   const  totalCasePrice= parseInt(getCasePrice.innerText);
   console.log(totalCasePrice);
   const totalPriceString=totalMobilePrice + totalCasePrice;
   const totalPriceNumber=parseInt(totalPriceString)
   const subTotal=document.querySelector('#sub-total');
   subTotal.innerText=totalPriceNumber;
   const tax= (totalPriceNumber * 0.1).toFixed(2);
   const getTax=document.querySelector('#tax');
   getTax.innerText=tax;
   const total = totalPriceNumber + tax;
   const totalBuy=document.querySelector('#total');
   totalBuy.innerText=total;

   
}



