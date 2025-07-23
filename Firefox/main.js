theButton = document.getElementById("submit");
userInput = document.getElementById("queryText");

function handleQuery() {
    userQuery = userInput.value;

    // Make get request to Google
    window.open("https://google.com/search?q=" + userQuery + " -noai");
}

theButton.addEventListener('click', handleQuery);
