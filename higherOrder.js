//MAP-array ke har element pe function
const marks=[50,60,70];
const update=marks.map((num)=>{
  return num+5;
})
console.log(update);

//FIND-eveery eement that meets condn
const classMarks=[30,40,50,60,70];
const pass=classMarks.filter((mark)=>{
  return mark>40;
})
console.log(pass);

const arr=[1,2,3,4,5,6];
const even=arr.filter((a)=>{
   return a%2===0;
})
console.log(even);

//REDUCE

array.reduce((acc,curr)=>{
  return total
},initial)

const numbers=[1,2,3,4,5];
const sum=numbers.reduce((acc,curr)=>{
   return acc+curr
},0)
console.log(sum);

const num=[5,10,3,16,89,65];
const max=num.reduce((acc,curr)=>{
if(curr>acc)return curr;
else{
  return acc;
}
},0)
console.log(max);

//FIND
const id=[101,102,103,104];
const target=id.find((i)=>{
  return i>=102;
})
console.log(target);



//SOME
const marks=[12,30,92,89,76];
const isAnyTopper=marks.some(num=>num>0);
const isAnyfail=marks.every(num=>num<33);


//Sort
const nums=[10,5,12,6];
const sorted=nums.sort((a,b)=>{
  return a-b;
})
console.log(sorted);

//FLAT
const bags=["shirts",["pants","tie"],"socks"];
console.log(bags.flat());

//flatMap
const students=[{name:"divyanshu",subject:"chem"},{name:"rahul",subject:"Math"},{name:"aman",subject:"phy"}]
const fmap=students.flatMap((word)=>{
            return word.subject;
})
console.log(fmap);


const cart=[{
  name:"laptop",price:"50000"
},{name:"watch",price:"2000"},{name:"shoes",price:"3000"}]
const total=cart.reduce((acc,curr)=>{
    return acc+Number(curr.price);
},0);
console.log(total*0.9);
const smartPhones = [
  { name: "iphone", price: 8000, rating: 4.8 },
  { name: "vivo", price: 9000, rating: 4.6 },
  { name: "samsung", price: 7000, rating: 4.9 },
  { name: "samsung", price: 7000, rating: 3.7 }
];
const total = smartPhones
  .filter((phone) => {
    return phone.rating > 4.5;
  })
  .map((phone) => {
    return {
      name: phone.name,
      discount: 0.8 * phone.price
    };
  });

console.log(total);