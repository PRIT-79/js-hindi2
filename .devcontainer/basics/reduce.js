// const myNums =[1,2,3]


// const MyTotal = myNums.reduce(function(acc,cur_val){

//     console.log(`acc:${acc} and cur_val:${cur_val}`);
    
//     return acc + cur_val
// },0)

// const MyTotal = myNums.reduce((acc,curr) => acc + curr,0)

// console.log(MyTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price:2999
    },
    {
        itemName : "python course",
        price:999
    },
    {
        itemName : "mobile dev course",
        price:5999
    },
    {
        itemName : "data science course",
        price:12999
    },
    
]

const pricetopay = shoppingCart.reduce((acc,item) => acc + item.price,0)

    console.log(pricetopay);
    