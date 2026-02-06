let yesSize = 1;
let noSize = 1;
let userName = "";

function goNext() {
    userName = document.getElementById("nameInput").value;
    if (userName === "") {
        alert("Please enter your name 💕");
        return;
    }
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
    document.getElementById("question").innerText =
        "Will you be my Valentine, " + userName + "? 💘";
}

function sayNo() {
    yesSize += 0.3;
    noSize -= 0.15;

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.style.transform = `scale(${yesSize})`;
    noBtn.style.transform = `scale(${noSize})`;

    if (yesSize > 5) {
        // Record FORCED YES
        document.getElementById("formName").value = userName;
        document.getElementById("formAnswer").value = "Forced Yes 😌💘";
        document.getElementById("responseForm").submit();

        // Make YES fill the screen
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.borderRadius = "0";
        yesBtn.innerText = "JUST CLICK YES 💖😌";
    }
}

function sayYes() {
    // Record NORMAL YES
    document.getElementById("formName").value = userName;
    document.getElementById("formAnswer").value = "Of course 💖";
    document.getElementById("responseForm").submit();

    document.getElementById("popup").classList.remove("hidden");
}
