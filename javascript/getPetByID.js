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
    let id = data.id;
    let name = data.name;

    // Creating 
    let para = document.createElement("p"); // Create a <p> element
    let viewBtn = document.createElement("a") // create view button element
    let deleteBtn = document.createElement("a") // create delete button element

    // Styling child elements
    para.className = "alert alert-warning";
    viewBtn.className = "btn btn-primary"
    viewBtn.href = "" + data.id;
    deleteBtn.className = "btn btn-danger"
    para.style.color = "blue"
    para.style.textTransform = "capitalize" // Capitalises text;

    // Setting child elements' inner text
    para.innerText = `Pet Id = ${id} + Pet Name = ${name}`
    viewBtn.innerText = "View/Update";
    deleteBtn.innerText = "Delete"

    // Appending to div
    let myDiv = document.getElementById("myDiv");
    myDiv.appendChild(para);
    myDiv.appendChild(viewBtn);
    myDiv.appendChild(deleteBtn);

}


