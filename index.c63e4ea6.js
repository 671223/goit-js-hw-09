function $6ec12aea1d79768d$var$getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let $6ec12aea1d79768d$var$intervalId;
async function $6ec12aea1d79768d$var$startChangingColor() {
    if (!$6ec12aea1d79768d$var$intervalId) {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        $6ec12aea1d79768d$var$intervalId = setInterval(async ()=>{
            document.body.style.backgroundColor = $6ec12aea1d79768d$var$getRandomHexColor();
        }, 1000);
    }
}
function $6ec12aea1d79768d$var$stopChangingColor() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval($6ec12aea1d79768d$var$intervalId);
    $6ec12aea1d79768d$var$intervalId = null;
}


