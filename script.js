const accordianContents = document.querySelectorAll(".accordian-content");
const additionalTexts = document.querySelectorAll(".additional");

accordianContents.forEach((desc, index) => {
  desc.addEventListener("click", () => {
    const additionalText = additionalTexts[index];
    additionalText.classList.toggle("hidden");

    additionalTexts.forEach((text) => {
      if (text !== additionalText) {
        text.classList.add("hidden");
      }
    });
  });
});
