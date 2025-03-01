//button
document.getElementById("button").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
// current date

// time
let date = new Date();

document.getElementById("date").innerHTML = date.toDateString();

// main function

const allButton = document.getElementsByClassName("all-btn");
// console.log(allButton);
for (i = 0; i < allButton.length; i++) {
  const button = allButton[i];
  button.addEventListener("click", function (event) {
    const click = event.target.innerHTML;
    // const t = event.target.getElementsByClassName("title-text");
    // t.innerHTML = t;
    // const title = document.getElementsByClassName("title-text");
    // console.log(t);

    // Plus && Minus
    if (click) {
      const minus = parseInt(document.getElementById("minus").innerText);
      const plus = parseInt(document.getElementById("plus").innerText);
      const plusAdd = plus + 1;
      const minusAdd = minus - 1;
      document.getElementById("plus").innerText = plusAdd;
      document.getElementById("minus").innerText = minusAdd;
      this.disabled = true;
      this.style.backgroundColor = "rgba(55, 82, 253, 0.21)";
      alert("Board updated Successfully");
      //   create history
      const history = document.getElementById("history");
      const p = document.createElement("p");
      p.innerHTML = `
                     <p class="bg-[#F4F7FF] p-3 text-gray-500 mt-0 my-3  rounded-xl text-sm">You have Complete The Task
                        Add
                        Dark Mode at 12:48:15 PM
                    </p>              
      `;
      history.appendChild(p);
      //   remove history
      document.getElementById("clear").addEventListener("click", function () {
        history.innerHTML = "";
      });
    }
    // alert("okay");
  });
}
// redirect page
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "../inside.html";
});
document.getElementById("back").addEventListener("click", function () {
  window.location.href = "../index.html";
});
