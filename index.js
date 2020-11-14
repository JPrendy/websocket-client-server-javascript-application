const ws = new WebSocket("ws://localhost:8082");

ws.addEventListener("open", () => {
    console.log("we are connected");

    ws.send("User Connected");
});

document.getElementById("myBtn").addEventListener("click", function () {
    ws.send("Sample Message 1");
});

document.getElementById("myBtn2").addEventListener("click", function () {
    ws.send("Sample Message 2");
});

ws.addEventListener("message", (e) => {
    console.log(e.data);
    if (e.data == "User Connected") {
        let output = '';
        output += `<h7> ${e.data} </h7>`;
        document.getElementById("welcome").innerHTML = output;

    } else {
        let output = '';
        output += `<h7>Type: ${e.data} </h7>`;
        document.getElementById("results").innerHTML = output;
    }

});