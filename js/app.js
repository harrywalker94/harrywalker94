function changeRange() {
    // Get R,G,B values & Convert string into integer.
    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var b = parseInt(document.getElementById("b").value);

    // Generate color. Example: #20b9ff
    var color = "#" + hex(r) + hex(g) + hex(b);

    // Change background color and text.
    document.body.style.backgroundColor = color;
    document.getElementById("hex-label").innerText = color;
    document.getElementById("r-label").innerText = r;
    document.getElementById("g-label").innerText = g;
    document.getElementById("b-label").innerText = b;

    if (r < 100 && g < 100 && b < 100) {
        document.getElementById("container").style.color = "#ffffff";
    } else {
        document.getElementById("container").style.color = "#000000";
    }

}

function hex(v) {
    // Get hexadecimal numbers.
    var hex = v.toString(16);
    if (v < 16) {
        hex = "0" + hex;
    }
    return hex;
}