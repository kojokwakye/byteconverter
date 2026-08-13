const byteUnitInput = document.getElementById("byte");
const megabyteUnitInput = document.getElementById("megabyte");
const gigabyteUnitInput = document.getElementById("gigabyte");

// conversion
let updateInput = function () {
  let bytes = Number(byteUnitInput.value);
  ((megabyteUnitInput.value = (bytes / (1000 * 1000)).toFixed(2)),
    (gigabyteUnitInput.value = (bytes / (1000 * 1000 * 1000)).toFixed(2)));
};

// update ui
if (byteUnitInput.addEventListener) {
  byteUnitInput.addEventListener("keyup", function () {
    updateInput();
  });
} else if (updateInput.attachEvent) {
  byteUnitInput.attachEvent("onkeyup", function () {
    updateInput();
  });
}
