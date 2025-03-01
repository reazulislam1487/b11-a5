//button
document.getElementById("button").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
// current date

// time
let date = new Date();

document.getElementById("date").innerHTML = date.toDateString();
const allButton = document.getElementsByClassName("all-btn");
// console.log(allButton);
for (i = 0; i < allButton.length; i++) {
  const button = allButton[i];
  button.addEventListener("click", function (event) {
    
  })
    const color = event.target.id.replace("-color", "");
}
