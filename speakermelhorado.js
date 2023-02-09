const textoarea = document.getElementById("mytextarea")
const typed = document.getElementById("typed")
const btn = document.getElementById("btn")
const cowsound = document.getElementById("VacaSom1")

function typingAnimation(wordsAsArray, status) {
	setTimeout(function () {
		textoarea.value += wordsAsArray[status.countWord][status.countChar]
		status.countChar += 1

		if (status.countChar == wordsAsArray[status.countWord].length) {
			setTimeout(function () {
				status.countWord += 1
				status.countChar = 0

				if (status.countWord != wordsAsArray.length) {
					textoarea.value += " "
					cowsound.play()
					typingAnimation(wordsAsArray, status)
				}
			}, 1500)
		} else {
			typingAnimation(wordsAsArray, status)
		}
	}, 100)
}

btn.addEventListener("click", function () {
	const text = typed.value // captura input
	const textAsArray = text.split(" ") // [lista imput]
	const wordsAsArray = textAsArray.map(function (word) {
		return word.split("")
	}) // separa lista input 

	textoarea.value = ""

	typingAnimation(wordsAsArray, {countWord: 0, countChar: 0})
})