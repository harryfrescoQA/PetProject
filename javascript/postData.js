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

const params = new URLSearchParams(window.location.search);

for(let param of params ){
    console.log("here i am",param)
    let id = param[1];
    console.log(id);
    getData(id)
}



function getData(id) {
    //for (let i = 0; i < 200; i++) {
        fetch('https://petstore.swagger.io/v2/pet/' + id)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
                    // Examine the text in the response
                    response.json().then(function (data) {
                        console.log("MY DATA OBJ", data)

                        document.querySelector("input#commentPet").value = data.postId
                        document.querySelector("input#commentId").value = data.id
                        document.querySelector("input#commentStatus").value = data.name

                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    //}
}

document
    .querySelector("form.viewRecord")
    .addEventListener("submit", function (stop) {
        stop.preventDefault();
        let formElements = document.querySelector("form.viewRecord").elements;
        console.log(formElements)
        let pet = formElements["commentPet"].value;
        let petId = formElements["input#commentId"].value;
        let status = formElements["commentStatus"].value;

        let data = {
            "Pet": pet,
            "ID": id,
            "Status": status,
        }
        console.log("Data to post", data)
    });

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

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
        }
    });
  });
  
  function imageIsLoaded() { 
    alert(this.src);  // blob url
    // update width and height ...
  }
