var assets = {
	'Dr. Rana' : 'Assets/rana.png',
	'Dr. Shaw' : 'Assets/shaw.jpg',
	'Dr. Szajda' : 'Assets/szajda.jpeg'
}

var url=location.href;
var urlFilename = url.substring(url.lastIndexOf('/')+1);
console.log(`file name is - ${urlFilename}`)
if(urlFilename === 'prof_profile.html'){
	console.log(`on prof page`)
	var professor_name = document.getElementById('prof_name')
	let name = localStorage.getItem('name')
	professor_name.innerText = name
	
	var img = document.getElementById('picture')
	// img.innerHTML = `<img src="" alt="${assets[name]}">`
	img.innerHTML = `<img src="${assets[name]}" alt="picture of ${name}">`
} else{

	localStorage.clear
	const learn_button = document.querySelectorAll('[data-prof_name]')

	learn_button.forEach(button => {

		button.addEventListener('click', () => {
			console.log('learn more clicked')

			let prof_n = button.dataset.prof_name
			localStorage.setItem('name', prof_n)
			console.log(`prof name is ${prof_n}`)
		})
	})
}