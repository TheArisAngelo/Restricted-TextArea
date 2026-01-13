document.getElementById("textarea").addEventListener("input", function () {
  const textarea = this;
  const charCountDisplay = document.getElementById("charCount");
  const maxLimit = 200;

  const currentCount = textarea.value.length;

  charCountDisplay.textContent = `${currentCount}/${maxLimit}`;

  if (currentCount >= maxLimit) {
    textarea.classList.add("max-reached");
  } else {
    textarea.classList.remove("max-reached");
  }

  if (currentCount >= maxLimit) {
    textarea.value = textarea.value.substring(0, maxLimit);
  }
});
