const convertBytes = (bytes) => ({
  MB: (bytes / (1000 * 1000)).toFixed(2),
  GB: (bytes / (1000 * 1000 * 1000)).toFixed(2),
});

function showResult() {
  const input = prompt("enter byte");
  const bytes = Number(input);

  if (isNaN(bytes) || bytes < 0) {
    console.log("please enter a valid number");
    return;
  }
  const result = convertBytes(bytes);
  console.log(result.MB + " mb");
  console.log(result.GB + " gb");
}

showResult();


