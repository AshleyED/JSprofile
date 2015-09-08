var name = "Ashley Davison";
var role = "Front-End Developer";

var formattedName = HTMLheaderName.replace ("%data%" , name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace ("%data%", role);
$("#header").append(formattedRole);

var bio = {
  "name" : "Ashley",
  "role" : "Developer",
  "picture" : ["images/profilepic2.jpg"],
  "welcome" : "Welcome!",
  "contacts" : {
    "mobile" : "(518) 847-7915",
    "email" : "ashley.e.davison@gmail.com",
    "github" : "AshleyED",
    "location" : "Schenectady NY"
  },
  "skills" : ["HTML" , "CSS" , "JavaScript" , "jQuery"]
}

//TODO fix alignment of bio info

var formattedbioPicture = HTMLbioPic.replace("%data%" , bio.picture);
$("#topContacts").append(formattedbioPicture);
var formattedbioWelcome = HTMLwelcomeMsg.replace("%data%" , bio.welcome);
$("#topContacts").append(formattedbioWelcome);
var formattedbioMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
$("#topContacts").append(formattedbioMobile);
$("#footerContacts").append(formattedbioMobile);
var formattedbioEmail = HTMLemail.replace("%data%" , bio.contacts.email);
$("#topContacts").append(formattedbioEmail);
$("#footerContacts").append(formattedbioEmail);
var formattedbioGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
$("#topContacts").append(formattedbioGithub);
$("#footerContacts").append(formattedbioGithub);
var formattedbioLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
$("#topContacts").append(formattedbioLocation);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%" , bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%" , bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%" , bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%" , bio.skills[3]);
  $("#skills").append(formattedSkill);
}

var education = {
  "schools" : [
    {
      "name": "Empire State College",
      "location": "Saratoga NY",
      "degree": "BS",
      "major": "Business, Management & Economics",
      "dates": "2007-2009",
      "url": "http://www.esc.edu/"
    },
    {
      "name": "University at Albany",
      "location": "Albany NY",
      "degree": "None",
      "major": "Business",
      "dates":"2005-2007",
      "url": "http://www.albany.edu/"
    },
    {
      "name": "Scotia-Glenville High School",
      "location": "Scotia NY",
      "degree": "Advanced Regents Diploma",
      "major": "None",
      "dates": "9/2001-1/2005",
      "url": "http://www.scotiaglenvilleschools.org/SrHS/SrHS_home.cfm"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-3342528615/m-3343838767"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3581758575/m-3575058641"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud804"
    }
  ]
}

//TODO activacte links for schools

function displayEducation () {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%" , education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%" , education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedDates = HTMLschoolDates.replace("%data%" , education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%" , education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%" , education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }
}

displayEducation();

function displayOnlineEducation () {
  for (onlineCourse in education.onlineCourses) {
// TODO fix online classes header
//    $("#education").prepend(HTMLonlineClasses);
//    $("#education").append(HTMLschoolStart);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[onlineCourse].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[onlineCourse].school);
    var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%" , education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedOnlineUrl);
  }
}

$("#education").append(HTMLonlineClasses);
displayOnlineEducation();

var work = {
  "jobs" : [
    {
      "employer": "The Alternative Living Group Inc",
      "title": "Human Resources Manager",
      "dates": "2014-Current",
      "location": "Albany NY",
      "description": "Acted as HR Manager and generalist in non-profit agency",
      "url": ["http://www.alginc.org/"]
    },
    {
      "employer": "The Alternative Living Group Inc",
      "title": "Family Services Coordinator",
      "dates": "2009-2013",
      "location": "Albany NY",
      "description": "Acted as FSC in non-profit agency",
      "url": ["http://www.alginc.org/"]
    },
    {
      "employer": "Wildwood Programs Inc",
      "title": "After-School Instructor",
      "dates": "2007-2009",
      "location": "Latham NY",
      "description": "Acted as After-School Instructor in non-profit agency",
      "url": ["http://www.alginc.org/"]
    }
  ]
}

function displayWork () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
    //var formattedUrl = HTMLworkEmployer.replace("#" , work.jobs[job].url);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    //var formattedUrl = HTMLworkEmployer.replace("#" , work.jobs[job].url);
    //$(".work-entry:last").append(formattedUrl);
    var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork ();

var formattedUrl = HTMLworkEmployer.replace("#" , work.jobs[job].url);

/* Removed- do not wish to include at this time
$("#main").append(internationalizeButton);

function inName (name) {
  name = name.trim().split(" ");
  console.log(name);
  names[1] = names[1].toUpperCase();
  names[0] = names [0].slice(0,1).toUpperCase()+names[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
} */

/*if (work.jobs.location.length > 0) {
  $("#workExperience").append(HTMLworkLocation);
  var formattedLocation = HTMLworkLocation.replace("%data%" , jobs.location);
  $("#workExperience").append(formattedSkill);
}
*/


var projects = {
  "projects": [
    {
      "title": "Project One",
      "dates": "2015",
      "description": "This is Project One",
      "images": ["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"]
    },
    {
      "title": "Project Two",
      "dates": "2015",
      "description": "This is Project Two",
      "images": ["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"]
    },
    {
      "title": "Project Three",
      "dates": "2015",
      "description": "This is Project Three",
      "images": ["http://placehold.it/150x150", "http://placehold.it/150x150", "http://placehold.it/150x150"]
    }
  ]
}

function displayProjects () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

displayProjects ();

$("#mapDiv").append(googleMap);
