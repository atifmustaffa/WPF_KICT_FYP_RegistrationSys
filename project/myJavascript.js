var finalText = "";

// JSON variables
// default values
var database = {
	admin: [
		{name:"Atif Mustaffa", id:"1429619", pass:"qwe123"},
		{name:"Azfar Hamzah", id:"1426417", pass:"qwe123"},
		{name:"Hadi Nordin", id:"1428711", pass:"qwe123"},
		{name:"Fikri Arif", id:"1423231", pass:"qwe123"}],
	staff: [
		{name:"Dr Azlin Nordin", id:"drazlin", pass:"qwe123", spec:"Computer Science", coordinator: false},
		{name:"Dr Maznah", id:"drmaznah", pass:"qwe123", spec:"Computer Science", coordinator: false},
		{name:"Dr Zambri", id:"drzambri", pass:"qwe123", spec:"Computer Science", coordinator: false},
		{name:"Dr Messikh", id:"drmessikh", pass:"qwe123", spec:"Information System", coordinator: false},
		{name:"Dr Adil Afridi", id:"dradil", pass:"qwe123", spec:"Information Technology", coordinator: false},
		{name:"Dr Abdul Wahab", id:"drabdwahab", pass:"qwe123", spec:"Computer Science", coordinator: true},
		{name:"Dr Al-Sakib Khan Pathan", id:"dralsakib", pass:"qwe123", spec:"Information Technology", coordinator: true}],
	student: [
		{name:"Atif Mustaffa", id:"1429619", pass:"qwe123"},
		{name:"Azfar Hamzah", id:"1426417", pass:"qwe123"},
		{name:"Hadi Noordin", id:"1428711", pass:"qwe123"},
		{name:"Fikri Arif", id:"1423231", pass:"qwe123"},
		{name:"Mary Jane", id:"1428241", pass:"qwe123"},
		{name:"Jamal Hussin", id:"1427241", pass:"qwe123"},
		{name:"Danil Ishutin", id:"1421241", pass:"qwe123"},
		{name:"Amer Barqawi", id:"1422241", pass:"qwe123"}],
	fyp: [
		{name:"Atif Mustaffa", id:"1429619", title:"Antivirus", spec:"Computer Science", approval:"Under Approval", svisor:"Dr Azlin Nordin", date:"Under Approval"},
		{name:"Azfar Hamzah", id:"1426417", title:"Event Manager", spec:"Computer Science", approval:"Under Approval", svisor:"Dr Azlin Nordin", date:"Under Approval"},
		{name:"Hadi Noordin", id:"1428711", title:"Calendar Viewer", spec:"Information System", approval:"Under Approval", svisor:"Dr Messikh", date:"Under Approval"},
		{name:"Fikri Arif", id:"1423231", title:"IIUM Maps", spec:"Information Technology", approval:"Approved", svisor:"Dr Adil Afridi", date:"Thu Mar 24 2016"},
		{name:"Mary Jane", id:"1428241", title:"", spec:"", approval:"", svisor:"", date:""},
		{name:"John Doe", id:"1427241", title:"", spec:"", approval:"", svisor:"", svisor:"", date:""},
		{name:"Danil Ishutin", id:"1421241", title:"", spec:"", approval:"", svisor:"", svisor:"", date:""},
		{name:"Amer Barqawi", id:"1422241", title:"", spec:"", approval:"", svisor:"", svisor:"", date:""}]
};

function contactUs(f) {
	if(f.name.value == "" || f.email.value == "" || f.message.value == "")
		alert('Please re-enter details correctly!')
	else
		alert('Your message has been successfully sent!\nWe will respond as soon as possible.\nThank you')
}
function validateLoginStudent(f) {
	var userid = f.userid.value;
	var pass = f.pass.value;
	var foundIndex;
	var valid = false;
	
	var storedFYP = JSON.parse(localStorage.getItem("fyp"));
	
	for(var i = 0; i < database.student.length; i++) {
		if(userid == database.student[i].id && pass == database.student[i].pass) {
			alert("Login Student Sucessful");
			valid = true;
			foundIndex = i;
			break;
		}
	}
	
	if(valid == false) {
		alert("Invalid student matric no/password! Please re-enter.");
		document.loginForm.pass.value = "";
		document.loginForm.logintype[0].checked = false;
	}
	else {
		localStorage.setItem("userIndex", foundIndex);
		localStorage.setItem("loginType", "student");
		localStorage.setItem("fyp", JSON.stringify(storedFYP));
		window.open('./homePage.html', "_self");
	}
}
function validateLoginStaff(f) {
	var userid = f.userid.value;
	var pass = f.pass.value;
	var foundIndex;
	var valid = false;
	
	var storedFYP = JSON.parse(localStorage.getItem("fyp"));
	
	for(var i = 0; i < database.staff.length; i++) {
		if(userid == database.staff[i].id && pass == database.staff[i].pass) {
			alert("Login Staff Sucessful");
			valid = true;
			foundIndex = i;
			break;
		}
	}
	
	if(valid == false) {
		alert("Invalid staff matric no/password! Please re-enter.");
		document.loginForm.pass.value = "";
		document.loginForm.logintype[1].checked = false;
	}
	else {
		localStorage.setItem("userIndex", foundIndex);
		if(database.staff[i].coordinator == true)
			localStorage.setItem("loginType", "coordinator");
		else
			localStorage.setItem("loginType", "supervisor");
		
		localStorage.setItem("fyp", JSON.stringify(storedFYP));
		window.open('./homePage.html', "_self");
	}
}
function addFYP(index, name, id, title, spec, approval, svisor) {
	
	var storedFYP = JSON.parse(localStorage.getItem("fyp"));
	
	storedFYP[index] = {name: name, id: id, title: title, spec: spec, approval: approval, svisor: svisor, date: "Under Approval"};
	
	localStorage.setItem("fyp", JSON.stringify(storedFYP));
}
function logout() {
	if(confirm("Are you sure to logout?")) {
		window.open('./mainPage.html', "_self");
		localStorage.removeItem("userIndex");
	}
}