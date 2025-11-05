function addToCart() {
  const buttons = document.querySelectorAll("button");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      console.log(
        event.target.closest(".display-card").getAttribute("data-title")
      );
    })
  );
}
addToCart();
