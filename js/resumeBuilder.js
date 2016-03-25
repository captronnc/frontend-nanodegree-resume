// bio ****

var bio = {
	"name": "Ronald Schaeffer",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "704-300-5618",
		"email": "captronnc@yahoo.com",
		"github": "captronnc",
		"twitter": "@ronschaeffer",
		"location": "North Carolina"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc et etc.",
	"skills": ["fixing stuff", "watching stuff", "keeping odd hours"],
	"bioPic": "images/chefron.jpeg"
}

// work ****

var work = {
	"jobs": [
	{
		"employer": "TJCA",
		"title": "Head Chef & Culinary Instructor",
		"dates": "now",
		"description": "Manager, cook, teacher.",
		"location": "Mooresboro, NC, US"
	},
	{
		"employer": "NASP",
		"title": "Project Manager & Training Specialist",
		"dates": "then",
		"description": "Developer, analyst, instructor.",
		"location": "Shelby, NC, US"
	}
	]
}

// education ****

var education = {
	"schools": [
		{
			"name": "MSU",
			"city": "Stark Vegas",
			"major": "Technology Teacher Education"
		},
		{
			"name": "CCC",
			"city": "Shelby",
			"major":"Business Administration"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-end Development",
			"school": "Udacity",
			"dates": "2016",
			"url": "http://www."
		}
	]

}

// projects ****

var projects = {
	"projects": [
	{
		"name": "WPI",
		"dates": "2012",
		"description": "informational website",
		"images": [
			"image location", "image location"],
		"url": "http://www.wpintergroup.org"
	},
	{
		"name": "Portfolio",
		"dates": "2016",
		"description": "portfolio website",
		"images": [
			"image location", "image location"],
		"url": "http://www.http://captronnc.github.io/"
	}
	]
}

var formattedName =	HTMLheaderName.replace
("%data%", bio.name);

var formattedRole =	HTMLheaderRole.replace
("%data%", bio.role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic)
$("#header").append(formattedPic);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for(job in work.jobs){

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkDescription);
	}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for(job in work.jobs) {
    	var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
    }

console.log(locationizer(work));


function inName(name) {
	var name = bio.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0]+ " " + name[1];
}

$("#main").append(internationalizeButton);

$('<button>Test</button>').click(function () { alert('hi'); });