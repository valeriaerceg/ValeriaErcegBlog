fetch('http://127.0.0.1:3000/upload/public/images', {
  
method: 'GET',
headers: {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'
}
}).then(res => {
  
  var json = res.json()
  
  
  return json
})
.then(data => console.log(data))



// headers: new Headers(
//     {
// 'http://localhost:5500',
// 'Access-Control-Allow-Methods': 'GET',
// 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
// // 'Content-Type': 'application/json; charset=UTF-8',
// //     'Access-Control-Allow-Origin': "allow"
// fetch("http://localhost:3000/upload/public/images/"),{
//     this:app.use(cors({
//         origin: "http://127.0.0.1:5500/index.html"
//     })).then((data) =>{
//         HTMLFormControlsCollection.log(data);
//     }).catch(error => {
//         console.log(error);
// })}



// body: JSON.stringify({
//     name: 'User 1'
//   })