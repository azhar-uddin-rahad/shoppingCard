const inputFieldId2='case-quantity';
const getCasePrice=document.querySelector('#case-price');
const casePrice= getCasePrice.innerText;
document.querySelector('#case-increase').addEventListener('click',function(){ 
    const isIncrease=true;
  const  totalCaseQuantity=quantityTotal(isIncrease,inputFieldId2);
    priceTotal(getCasePrice,casePrice,totalCaseQuantity)
    summation()
})

document.querySelector('#case-decrease').addEventListener('click',function(){ 
    const isIncrease=false;
    const totalCaseQuantity = quantityTotal(isIncrease,inputFieldId2);
    priceTotal(getCasePrice,casePrice,totalCaseQuantity)
    summation()
})