/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Shitai Chen",
    "role": "Softerware Engineer",
    "contacts": {
        "mobile": "213-284-4252",
        "email": "shitaich@usc.edu",
        "github": "cstgyxlove",
        "location": "USC, Los Angeles, CA"
    },
    "welcomeMessage": "Welcome to my homepage, I am a CS student in USC. And I am looking for an intern in Summer 2016!",
    "skills": [
        "Java",
        "C++",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Matlab",
        "Verilog",
        "PLC",
        "LabView",
        "Pro/Engineer",
        "AltiumDesigner"
    ],
    "bioPic": "images/me.jpg"
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%","<a class='inlinea' href='mailto:shitaich@usc.edu'>"+bio.contacts.email+"</a>");
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedGithub = HTMLgithub.replace("%data%","<a class = 'inlinea' href = https://github.com/cstgyxlove>"+bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedMsg);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length ; i++) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	};
}


var projects = {
    "projects":[
    {
        "title" : "Spatial Database with GUI Desgin",
        "dates" : "2015.11",
        "description":"I wrote a Java program to create an application with a GUI, which allows users to interact with the spatial data provided(about the location of lions, ambulances, ponds and shape of regions).When the user runs your java program, it must fetch all regions, all ponds and all lions from the oracle database and show them in the GUI.",
        "images":[ "images/first.jpg","images/second.jpg","images/third.jpg"]
        
    },
    {
        "title" : "Socket Project",
        "dates" : "2015.10",
        "description":" I built a system which can build a map of the network topology. A set of neighbor information will be distributed among four servers. There will also be a client who is going to initiate the process and also do some computation to give the final topology output. The client and servers are going to communicate with each other to get the neighbor informations from the others and combine all this information together to build the entire map of the network.",
        "images":[  "images/socket.jpg"
          
        ]
    },
    {
        "title" : "Java Project",
        "dates" : "2015.9-2015-11",
        "description":"There are a series of assignments: DrunkardSteps, MazeSearch, RandomTextWriter!",
        "images":[  "images/randomwalker.jpg","images/Maze1.jpg","images/Maze2.jpg","images/textgen.jpg"
          
        ]
    },
    {
        "title" : "Fingerprint Verification Project",
        "dates" : "2014.9",
        "description":"Research project on Automated Fingerprint Verification in Attendance and Access Control, I built the circuit and write the codes(C++) for operating the system.",
        "images":[  "images/finger.png"
          
        ] 
    },
    {
        "title" : "Design of high frequency photodetector circuit based on polarization interferometer.",
        "dates" : "2015.3",
        "description":"Circuit Design of High-frequency Photodetector through Polarization Differential Interferometer Based on SCM Designed circuit by Multisim and Altium Designer, and wrote Verilog in the system.",
        "images":[  "images/circuit.png","images/circuit2.png","images/circuit3.png"
          
        ] 
    }
    ]
}

projects.display = function() {
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);  
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if(projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display(); //注意这里要加这句话，不然不会显示

var education = {
    "schools": [
        {
            "name": "Tianjin University",
            "location": "Tianjin,China",
            "degree": "Bachelor",
            "major": "Electronic Engineering",
            "dates": "2011 - 2015",
            "ulr": "http://www.tju.edu.cn/"
        },
        {
            "name": "University of Southern California",
            "location": "Los Angels, CA",
            "degree": "Master",
            "major": "Computer Science",
            "dates": "2015 - 2017",
            "ulr": "http://www.usc.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "site": "Udacity",
            "date": "2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud804"
        },
        {
            "title": "Intro to HTML and CSS",
            "site": "Udacity",
            "date": "2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud304/l-3063988721"
        }
    ]
}

function displayEducation(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		
        var formattedName1 = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedName = formattedName1.replace("#", education.schools[school].ulr);
		$(".education-entry:last").append(formattedName);
	    
        
        var formattedLocation =  HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
	
		var  formattedDates =  HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
	
		
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
        

	}
    
    

}
displayEducation();
$("#education").append(HTMLonlineClasses);


function displayonlinCourses(){
	for(onlineCourse in education.onlineCourses){
        	$("#education").append(HTMLschoolStart);
		var formattedName1 = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
        var formattedName = formattedName1.replace("#",education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedName);
        
        
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].site);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
		$(".education-entry:last").append(formattedDates);
		

        
	}
}

displayonlinCourses();





$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);

});

function inName() {
    var name = bio.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + "(Jason) " + name[1];
}



$('#header').append(internationalizeButton);
$("#mapDiv").append(googleMap);

