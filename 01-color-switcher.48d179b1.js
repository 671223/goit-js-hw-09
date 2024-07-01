function $0cb3843cd6ff9825$var$getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let $0cb3843cd6ff9825$var$intervalId;
async function $0cb3843cd6ff9825$var$startChangingColor() {
    if (!$0cb3843cd6ff9825$var$intervalId) {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        $0cb3843cd6ff9825$var$intervalId = setInterval(async ()=>{
            document.body.style.backgroundColor = $0cb3843cd6ff9825$var$getRandomHexColor();
        }, 1000);
    }
}
function $0cb3843cd6ff9825$var$stopChangingColor() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval($0cb3843cd6ff9825$var$intervalId);
    $0cb3843cd6ff9825$var$intervalId = null;
}


