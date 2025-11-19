  
//   function main(){
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(async response => {
//     const json =  await response.json();
//     // console.log(json.length)
//     console.log(json)
//     // await response.text()
// })
//   }
//   main();


// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/",{
// method: "PUT"
// })
//     const json = await response.json();
//     console.log(json.length)
// }
//------------------------------
// async function main(){
//     const response = await fetch("https://fake-json-api.mock.beeceptor.com/companies/1",{
// method: "POST",
// body : {
//     username : "vaibhav",
//     password :  "123245"
// },
// headers : {
//     "Authorization" :"Bear 123"
// }
// })
// const json = await response.text();
// console.log(json)
// }
//--------------------------------------------
// async function main(){
    //     // const response = await axios("https://jsonplaceholder.typicode.com/posts/")
    //     const response = await axios.get("https://jsonplaceholder.typicode.com/posts/")
    
    //     console.log(response.data.length)
    // }
    //-------------------------------------
    // POST:
    // change request method
    // send body
    // send headers
// get : can't send body with get request
//     const axios = require("axios")
//     async function main(){
//         // const response = await axios("https://jsonplaceholder.typicode.com/posts/")
//         const response = await axios.get(" https://httpdump.app/dumps/d73c4c9e-1567-4552-bcc5-50028c1c441c?a=b",{ 
//       username : "vaibhav",
//     password :  "123245"
//         },{
//             headers : {
//             "Authorization" :"Bear 123"
//         }
//     })
    
//     console.log(response.data)
// }

// --------------------------
const axios = require("axios");

async function main() {
    const response = await axios({
        url: "https://httpdump.app/dumps/d73c4c9e-1567-4552-bcc5-50028c1c441c?a=b",
        method: "POST",
        headers: {
            Authorization: "Bear 123",
        },
        data: {
            username: "vaibhav",
            password: "123245"
        }
    });

    console.log(response.data);
}

main();

