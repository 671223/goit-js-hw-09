function $a8f70f0d8966e1fc$var$getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let $a8f70f0d8966e1fc$var$intervalId;
async function $a8f70f0d8966e1fc$var$startChangingColor() {
    if (!$a8f70f0d8966e1fc$var$intervalId) {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        $a8f70f0d8966e1fc$var$intervalId = setInterval(async ()=>{
            document.body.style.backgroundColor = $a8f70f0d8966e1fc$var$getRandomHexColor();
        }, 1000);
    }
}
function $a8f70f0d8966e1fc$var$stopChangingColor() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval($a8f70f0d8966e1fc$var$intervalId);
    $a8f70f0d8966e1fc$var$intervalId = null;
}


//# sourceMappingURL=01-color-switcher.0d41c2d6.js.map
