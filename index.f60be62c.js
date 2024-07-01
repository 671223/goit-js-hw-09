function $b9dff960cd1c7100$var$getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let $b9dff960cd1c7100$var$intervalId;
async function $b9dff960cd1c7100$var$startChangingColor() {
    if (!$b9dff960cd1c7100$var$intervalId) {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        $b9dff960cd1c7100$var$intervalId = setInterval(async ()=>{
            document.body.style.backgroundColor = $b9dff960cd1c7100$var$getRandomHexColor();
        }, 1000);
    }
}
function $b9dff960cd1c7100$var$stopChangingColor() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval($b9dff960cd1c7100$var$intervalId);
    $b9dff960cd1c7100$var$intervalId = null;
}


//# sourceMappingURL=index.f60be62c.js.map
