// reduce() is probably the most powerful of the three.
// It is used when you want to combine all elements of an array into a single value.
// That single value could be:

// number
// string
// object
// array
// etc.

const nums = [1,21,3,14,52,6];

const result = nums.reduce((sum,num)=> sum+num,0);

// find max using reduce

const max = nums.reduce((max,num)=>{
    return num > max ? num : max;
},nums[0])


// in onbjects

const products = [
    {name :"phone",price:5000},
    {name :"car",price:750000},
    {name :"laptop",price:50000}
];

const totalPrice = products.reduce((sum,product)=> sum+product.price,0)


console.log(totalPrice);

