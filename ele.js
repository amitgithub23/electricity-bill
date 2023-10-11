const da = document.getElementById('brd')
const u = document.getElementById('omr')
const u1 = document.getElementById('cmr')
const ar = document.getElementById('arr')
const ans = document.getElementById('answer')
const na = document.getElementById('name')

function date(){
d = new Date(); 
// console.log(d.setDate(+15));

    let mo = d.getMonth()+1;
    let da1 = d.getDate();
    let ye = d.getFullYear();
if(mo<10){
 mo = '0'+mo;

}
if (da1<10){
    da1 = '0'+da1;
}
 am = ye+'-'+mo+'-'+da1;
console.log(am)
// console.log(am+15);
   
  
    if(da.value>am){
        alert('The bill date cant be grater than today');
        
       
    }
    else if(da.value<am) {
        alert('sorry!! current reading date cant be less than today');
        
    }
}

function calculateBill(){
   r = parseInt(u1.value-u.value);
//    console.log(r);
if(da.value==am) {
   if(1<=r<100){
    bill = (r*10)
    return bill;
   }
   else if (100<=r<200){
    bill = (r*15)
    return bill;
   }
   else if(200<=r<300){
    bill = (r*20);
    return bill;
   }
   else {
    bill = (r*25);
    return bill;
   }
}
}
 function arr(){

    //  if(ar.value==""){
    //     return 0;
    //  }
    //  else{
        
        return(ar.value);
    //  }
 }
 function total() {
     a = arr();
     console.log(`arr() ==> returned ${a}`);
     b = calculateBill();
     console.log(`calculateBill() ==> returned ${b}`);
    return (a+b);
   
 }
  
 function calling(){
    event.preventDefault();
date();


let dt = new Date();
 dt.setDate(dt.getDate() + 15);

console.log(dt.toLocaleDateString());

  d = total();

  if(da.value==am) {
 ans.innerHTML = `Dear ${na.value} <br/> Your electry 
 bill is Rs : 
 ${d} <br/> and pay by date ${dt.toLocaleDateString()}  `; //i am using html tag br inside `` so i have to use .innerHTML otherwise it will not work
 }
}