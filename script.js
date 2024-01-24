//your JS code here. If required.
const promise1 = new Promise((res,rej)=>{
	setTimeout(()=>{res()},1000)
})
//your JS code here. If required.
const promise2 = new Promise((res,rej)=>{
	setTimeout(()=>{res()},2000)
})
//your JS code here. If required.
const promise3 = new Promise((res,rej)=>{
	setTimeout(()=>{res()},3000)
})
Promise.all([promise1,promise2,promise3]).then(data=>console.log(data))
.catch(err=>console.log(err));