const rows = document.querySelectorAll(".row:not(.total-row)");
const totalGbInput = document.getElementById("total-gb");

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".gigabyte .unit").forEach(function (input) {
    total += Number(input.value);
  });
  totalGbInput.value = total.toFixed(2);
}

rows.forEach(function (row) {
  const byteInput = row.querySelector(".byte-input");
  const megabyteInput = row.querySelector(".megabyte .unit");
  const gigabyteInput = row.querySelector(".gigabyte .unit");

  byteInput.addEventListener("keyup", function () {
    const bytes = Number(byteInput.value);
    megabyteInput.value = (bytes / (1024 * 1024)).toFixed(2);
    gigabyteInput.value = (bytes / (1024 * 1024 * 1024)).toFixed(2);
    updateTotal();
  });
});
