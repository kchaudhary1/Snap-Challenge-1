// const button = document.getElementById("target")
// button.style.backgroundColor = "black"
// console.log(button)

function handleClick() {
    const button = document.getElementById("target")
   if (button.style.backgroundColor === "blue") {
       button.style.backgroundColor = ""
   } else {
       button.style.background = "blue"
   }
}