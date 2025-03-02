//color change
document.getElementById("button").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
// current date
let date = new Date();

document.getElementById("date").innerHTML = date.toDateString();

// main function

const allButton = document.getElementsByClassName("all-btn");
for (i = 0; i < allButton.length; i++) {
  const button = allButton[i];
  button.addEventListener("click", function (event) {
    const click = event.target.innerHTML;
    let grandParent = event.target.parentElement.parentElement.parentElement;
    let child = grandParent.querySelector(".title-text");
    let title = child.textContent;

    // Plus && Minus

    const minus = parseInt(document.getElementById("minus").innerText);
    const plus = parseInt(document.getElementById("plus").innerText);
    const plusAdd = plus + 1;
    const minusAdd = minus - 1;
    document.getElementById("plus").innerText = plusAdd;
    document.getElementById("minus").innerText = minusAdd;
    this.disabled = true;
    this.style.backgroundColor = "rgba(55, 82, 253, 0.21)";

    if (minusAdd === 0) {
      alert("Board updated Successfully");
      alert("Congrates!!! You have completed all the current task");
    } else {
      alert("Board updated Successfully");
    }
    // time set
    const time = new Date();
    date.setHours(12);
    date.setMinutes(48);
    date.setSeconds(15);
    let currentTime = time.toLocaleTimeString();

    //   create history
    const history = document.getElementById("history");
    const p = document.createElement("p");
    p.innerHTML = `
                     <p class="bg-[#F4F7FF] p-3 text-gray-500 mt-0 my-3  rounded-xl text-sm">You have Complete The Task
                        ${title} at ${currentTime}.
                    </p>              
      `;
    history.appendChild(p);
    //   remove history
    document.getElementById("clear").addEventListener("click", function () {
      history.innerHTML = "";
    });
  });
}

// redirect page
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "inside.html";
});
