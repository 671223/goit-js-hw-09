function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

async function startChangingColor() {
  if (!intervalId) {
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    intervalId = setInterval(async () => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
}

function stopChangingColor() {
  document.getElementById('start').disabled = false;
  document.getElementById('stop').disabled = true;
  clearInterval(intervalId);
  intervalId = null;
}
