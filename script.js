//with whatsapp web open and in the desired conversation, 
//inspect the element and open the console.
//Then just paste this script into the console and it will transform each word 
//written inside the sendScript(``) into messages :D 
function enviarScript(scriptText) {
  const lines = scriptText.split("\n");

  let i = 0;

  setInterval(() => {
    if (i >= lines.length) return

    if (lines[i].trim() != '') {
      console.log(lines[i]);

      window.InputEvent = window.Event || window.InputEvent;

      const event = new InputEvent('input', { bubbles: true });

      const textbox = document.querySelector('#main div._13NKt');

      textbox.textContent = lines[i];

      textbox.dispatchEvent(event);

      document.querySelector("#main span[data-testid=send]").click();

    }
    i++;
  }, 250)
}
//paste your text or movie script here for script to work//
enviarScript(`your movie script or text...............`)
