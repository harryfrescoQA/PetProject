// function getData(){
//     for (let i = 1;i<100;i++){
//      fetch(`https://petstore.swagger.io/v2/pet/${i}`)
//       .then(
//         function(response) {
//           if (response.status !== 200) {
//             console.log('Looks like there was a problem. Status Code: ' +
//               response.status);
//             return;
//           }
    
//           // Examine the text in the response
//           response.json().then(function(data) {
//             console.log(data);
         
//             let table = document.querySelector("#tbl");
//             let data2 = Object.keys(data[5]);
    
//             createTableHead(table,data2)
//             createTableBody(table,data)
    
//           });
//         }
//       )
//       .catch(function(err) {
//         console.log('Fetch Error :-S', err);
//       });
//     }
// }

//     // function createTableHead(table,data){
//     //     let tableHead = table.createTHead();
//     //     let row = tableHead.insertRow();
//     //     for(let val of data){
//     //         let th = document.createElement("th");
//     //         let text = document.createTextNode(val);
//     //         th.appendChild(text);
//     //         row.appendChild(th);
//     //     }
//     // }
    
//     // function createTableBody (table,data){
//     //     for(let record of data){
//     //         let row = table.insertRow();
//     //         for(let prop in record){
//     //             let cell = row.insertCell();
//     //             let text = document.createTextNode(record[prop])
//     //             cell.appendChild(text);
//     //         }
//     //     }
//     // }
//         getData();
// //     function createPara(data){
// //         for(let i = 0; i<1){
//             let id = data.id;
//             let name = data.name;

//             let para = document.createElement("p");
//             let updBtn = document.createElement("button");
//             para.innerText = `Pet ID = ${id} Pet Name = ${name}`
//             updBtn.innerText = "Update"

//             let myDiv = querySelector("myDiv");
//             myDiv.appendChild(para);
//             myDiv.appendChild(updBtn);

//         }
//     }