const byteUnitInput = document.querySelector("byte-input");
const megabyteUnitInput = document.querySelector("megabyteInput");
const gigabyteUnitInput = document.querySelector("gigabyteInput");

const convertBytes = (bytes) => ({
  MB: (bytes / (1000 * 1000)).toFixed(2),
  GB: (bytes / (1000 * 1000 * 1000)).toFixed(2),
});

function showResult() {

  if (isNaN(byteUnitInput) || byteUnitInput < 0) {
    console.log("please enter a valid number");
    return;
  }
  const result = convertBytes(bytes);
  megabyteInput.textContent(result.MB);
  gigabyteInput.textContent(result.GB);
}

showResult();
