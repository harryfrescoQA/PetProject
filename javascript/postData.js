function getData() {
  for (let i = 0; i < 200; i++) {
      fetch(`https://petstore.swagger.io/v2/pet/${i}`)
          .then(
              function (response) {
                  if (response.status !== 200) {
                      console.log('Looks like there was a problem. Status Code: ' +
                          response.status);
                      return;
                  }
                  // Examine the text in the response
                  response.json().then(function (data) {
                      console.log(data)
                      createPara(data);


                  });
              }
          )
          .catch(function (err) {
              console.log('Fetch Error :-S', err);
          });
  }
}

getData();

function createPara(data) {
  for (let i = 0; i < 1; i++) {
      let id = data.id;
      let name = data.name;
      let para = document.createElement("p"); // Create a <p> element
      para.className = "alert alert-warning";
      para.style.color = "blue"
      para.innerText = `Pet Id = ${id} + Pet Name = ${name}`
      let myDiv = document.getElementById("myDiv3");
      myDiv.appendChild(para);
  }
}
