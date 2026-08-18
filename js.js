const rows = document.querySelectorAll(".row:not(.total-row)");
const totalGbInput = document.getElementById("total-gb");
const totalmBInput = document.getElementById("total-mb");

function updateTotal() {
  let totalgb = 0;
  document.querySelectorAll(".gigabyte .unit").forEach(function (input) {
    totalgb += Number(input.value);
  });
  totalGbInput.value = totalgb.toFixed(2);

  let totalmb = 0;
  document.querySelectorAll(".megabyte .unit").forEach(function (input) {
    totalmb += Number(input.value);
  });
  totalmBInput.value = totalmb.toFixed(2);
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
