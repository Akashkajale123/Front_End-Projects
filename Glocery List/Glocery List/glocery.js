
let btn=document.querySelector('button');
let add=0;
let No=1;
btn.addEventListener('click',function(){
  
 let name=document.querySelector('#item-name-input');
let price=document.querySelector('#item-price-input');
 let grand=document.querySelector('#grandTotal').innerHTML;
   let itemName=name.value;
   let itemPrice=parseInt(price.value);
   if(itemName===""||itemName===undefined){
    alert("please enter item-Name")
   }
   else if(itemPrice<=0|| itemPrice===undefined){
    alert("please enter valid price")
   }else{
    add+=itemPrice;

 grand=document.querySelector('#grandTotal').innerHTML=`${add.toFixed(2)} ₹`;
 const itemList = document.getElementById("item_table");
 const row = itemList.insertRow();
        const  sr_No = row.insertCell(0);
        const item_Name = row.insertCell(1);
        const item_Price = row.insertCell(2);
  
        sr_No.innerHTML = No++;
        item_Name.innerHTML = itemName;
        item_Price.innerHTML = `₹ ${itemPrice.toFixed(2)}`;
   }
   
})


