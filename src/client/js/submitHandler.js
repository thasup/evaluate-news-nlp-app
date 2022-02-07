function handleURL(event) {
    event.preventDefault();

    const result = document.getElementsByClassName("results")[0];

    // check what url was put into the form field
    let inputURL = document.getElementById("name").value;
    console.log(inputURL);

    const path =
        "https://thasup-evaluate-news-nlp.herokuapp.com" ||
        "http://localhost:8081";
    // POST request to server side
    if (Client.checkForURL(inputURL) === true) {
        console.log("::: Form Submitted :::");
        fetch(`${path}/data`, {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: inputURL }),
        })
            .then((res) => res.json())
            .then(function (res) {
                Client.updateUI(res);
                console.log(res);
                console.log("::: Fetching Success :::");
                result.classList.add("show");
            });
    } else alert("Invalid URL");
}

export { handleURL };
