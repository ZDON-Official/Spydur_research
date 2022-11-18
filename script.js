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