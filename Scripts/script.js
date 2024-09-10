let searchInput = document.querySelector('.searchInput')
let searchBtn = document.querySelector('.searchBtn')

searchBtn.addEventListener('click' , (e)=>{
	e.preventDefault()
	let word=searchInput.value
	getWordInfo(word)
})

const getWordInfo = async (word)=>{
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
	const data = await response.json();
	console.log(data)
	let definition = data[0].meanings[0].definitions[0].definition
	console.log(definition)
	document.querySelector('.word').innerHTML = word;
	document.querySelector('.meaning').innerHTML = definition;
	searchInput.value = ''
}

