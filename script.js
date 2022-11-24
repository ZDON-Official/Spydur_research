<<<<<<< HEAD
// $(document).ready(function () {
//     $("#fullview").fullView();
// });

// get https://api.npoint.io/d4cc8fe1e072152513d4
// get https://api.npoint.io/e63430d2389f8304dab6
(async function getData(){
	const response = await fetch("https://api.npoint.io/e63430d2389f8304dab6"); 
	const data = await response.json();
	console.log(data);
	fill_department(data);
})()


function fill_department(dep_object)
{
	var dep_contain = document.querySelector('.department_section');
    //Get the department that the user searched up so that we can fill 
    // in the proper data : department.prof_department i.e. && department_info.prof_department == User input

	if (dep_contain){
		for (department of dep_object){
			var html = department_info();
			var item_container = document.createElement('div');
			item_container.className = 'department';
			item_container.innerHTML = html;

			dep_contain.appendChild(item_container);
		}
	}
}
=======
// $(document).ready(function () {
//     $("#fullview").fullView();
// });

// var search_bar = document.getElementById('search_bar_main')

// search_bar.addEventListener('keydown', check_input())

function check_input(e){
    console.log('search bar')
    document.location.href = './departments.html'
    
    // console.log(`inside search`)
    // if(e.key() === 'Enter'){
    // }

   
    
    // if(Event.key === 'Enter'){
    //     console.log('checking search bar')
    //     document.location.href = './departments.html'
    // }
}

// search_bar.addEventListener('blur', check_input())
>>>>>>> cfd5e70 (redesigning)
