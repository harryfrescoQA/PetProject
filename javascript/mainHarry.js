function post() {
    document
        .querySelector("form.putForm")
        .addEventListener("submit", function (stop) {
            stop.preventDefault();
            let x = document.querySelector("form.putForm").elements;
            let category = x["category"].value;
            let name = x["name"].value;
            let photo = x["photo"].value;
            let tags = x["tags"].value;
            let status = x["status"].value;
            console.log("category: ", category);
            console.log("name: ", name);
            console.log("photo: ", photo);
            console.log("tags: ", tags);
            console.log("status: ", status);
            // {
            //   "category": {
            //     "name": "ffffddddf"
            //   },
            //   "name": "ffff",
            //   "photoUrls": [
            //     "ff"
            //   ],
            //   "tags": [
            //     {
            //       "name": "strfffing"
            //     }
            //   ],
            //   "status": "available"
            // }
            let bodyx = {

                "category": { "name": category },
                "name": name,
                "photoUrls": [photo],
                "tags": [{ "name": tags }],
                "status": status

            }
            console.log(bodyx)
            postData(bodyx)
        });



    function postData(body) {
        fetch('https://petstore.swagger.io/v2/pet/', {
            method: 'post', //post, put,delete
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);


            })
            .catch(function (error) {
                console.log('Request failed', error);
            })

    }

}