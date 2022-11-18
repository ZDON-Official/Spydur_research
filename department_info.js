function department_info(){
	console.log(department.image_source);
	console.log(department.prof_info);
	console.log(department.prof_name);
	var info = `
                <img src = "${department.image_source}.jpg" width = 200 height = 200 id = "dep_pic"> 
                <p id = "prof_name">${department.prof_name}</p>
                <p id = "prof_info">${department.prof_info}</p>
                <button type = "button" id = "learn_more"><a href ="prof_profile.html">Learn More</a></button>		
			`
	return info;
}