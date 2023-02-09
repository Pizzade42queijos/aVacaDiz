const textoarea = document.getElementById("mytextarea")
const typed = document.getElementById("typed")
const btn = document.getElementById("btn")
const cowsound = document.getElementById("VacaSom1")

function typingAnimation(textAsArray, status) {
	setTimeout(function () {
		textoarea.value += (textAsArray[status.countWord] + " ")
		status.countWord += 1
		cowsound.play()

		if (status.countWord != textAsArray.length) {
			
			typingAnimation(textAsArray, status)
		}
	}, 1500)
}

btn.addEventListener("click", function () {
	const text = typed.value
	const textAsArray = text.split(" ")

	textoarea.value = ""

	typingAnimation(textAsArray, {countWord: 0})
})