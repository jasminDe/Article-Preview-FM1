// i want to mute display none on my mistriousDiv class
function toggleDisplay(){
    const popuPDiv = document.getElementById("mistriousDiv")
    const options = {flex: "none", none: "flex"}

    popuPDiv.style.display = options[popuPDiv.style.display] || "none"
}

toggleDisplay() 