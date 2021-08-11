function handleFetchRequest() {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
        .then(response => {
            return response.json()
        }).then(data => {
            let accumulator = ""
            for(let i = 0; i < data.length; i++) {
                accumulator = accumulator + `<p class="changeTextColor">${data[i]}</p>`
            }
            console.log(accumulator)
            document.getElementById("target").innerHTML = accumulator

        }
    )
}

