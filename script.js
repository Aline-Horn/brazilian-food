function reservation() {
  let name = prompt("What is your name?");
  let city = prompt("Where do you live in France?");
  let date = prompt("What day and time do you want to make the reservation?");

  let h1 = document.querySelector("h1");
  h1.innerHTML =
    "Thank you," + " " + name + "! It is done. Enjoy your experience!";
}

let reservationbutton = document.querySelector(".make-reservation");
reservationbutton.addEventListener("click", reservation);
