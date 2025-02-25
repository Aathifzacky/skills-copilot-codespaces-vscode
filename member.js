function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.value;
    var memberError = document.getElementById("member-error");
    var memberErrorText = document.getElementById("member-error-text");

    if (memberValue === "") {
        memberError.style.display = "block";
        memberErrorText.innerText = "Please select a member.";
    } else {
        memberError.style.display = "none";
        memberErrorText.innerText = "";
    }
}