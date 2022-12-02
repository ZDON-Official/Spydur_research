// $(document).ready(function () {
//     $("#fullview").fullView();
// });

// get https://api.npoint.io/d4cc8fe1e072152513d4
// get https://api.npoint.io/e63430d2389f8304dab6
// (async function getData(){
// 	const response = await fetch("https://api.npoint.io/e63430d2389f8304dab6"); 
// 	const data = await response.json();
// 	console.log(data);
// 	fill_department(data);
// })()


// function fill_department(dep_object)
// {
// 	var dep_contain = document.querySelector('.department_section');
//     //Get the department that the user searched up so that we can fill 
//     // in the proper data : department.prof_department i.e. && department_info.prof_department == User input

// 	if (dep_contain){
// 		for (department of dep_object){
// 			var html = department_info();
// 			var item_container = document.createElement('div');
// 			item_container.className = 'department';
// 			item_container.innerHTML = html;

// 			dep_contain.appendChild(item_container);
// 		}
// 	}
// }



console.log("script loaded")
// const buttons = document.querySelectorAll("[data-carousel-button]")

// console.log(`button is ${buttons.length}`)

// buttons.forEach(button => {
//     console.log("buttons")
//     button.addEventListener("click", () =>{
//         console.log("button clicked")
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1
//         const proj = button
//             .closest("[data-carousel]")
//             .querySelector("[data-projects]")

//         const active_prj = proj.querySelector("[data-active]")
//         let newIndex = [...proj.children].indexOf(active_prj) + offset

//         if(newIndex < 0) newIndex = proj.children.length - 1
//         if(newIndex >= proj.children.length) newIndex = 0

//         proj.children[newIndex].dataset.active = true
//         delete active_prj.dataset.active
//     })
// })

var assets = {
	'Dr. Rana' : 'Assets/rana.png',
	'Dr. Shaw' : 'shaw placeholder',
	'Dr. Szajda' : 'szajda placeholder'
}


if(window.location.pathname === '/prof_profile.html'){
	console.log('on prof page')
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