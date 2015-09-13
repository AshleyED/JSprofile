//Main header display
function displayHeader () {
  var name = "Ashley Davison";
  var role = "Front-End Developer";
  var formattedRole = HTMLheaderRole.replace ("%data%", role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace ("%data%" , name);
  $("#header").prepend(formattedName);
}

displayHeader ();

//Bio and contact information display
var bio = {
  "name" : "Ashley",
  "role" : "Developer",
  "picture" : ["images/profilepic2.jpg"],
  "welcome" : "Welcome!",
  "contacts" : {
    "mobile" : "(518) 847-7915",
    "email" : "ashley.e.davison@gmail.com",
    "github" : "AshleyED",
    "githubProfile": ["https://github.com/AshleyED"],
    "location" : "Schenectady NY"
  },
  "skills" : ["HTML" , "CSS" , "JavaScript" , "jQuery"]
}

function displayBio () {
  var formattedbioPicture = HTMLbioPic.replace("%data%" , bio.picture);
  $("#header").append(formattedbioPicture);
  var formattedbioWelcome = HTMLwelcomeMsg.replace("%data%" , bio.welcome);
  $("#header").append(formattedbioWelcome);
  var formattedbioMobile = HTMLmobile.replace("%data%" , bio.contacts.mobile);
  $("#topContacts").append(formattedbioMobile);
  $("#footerContacts").append(formattedbioMobile);
  var formattedbioEmail = HTMLemail.replace("%data%" , bio.contacts.email);
  var formattedbioEmail = formattedbioEmail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedbioEmail);
  $("#footerContacts").append(formattedbioEmail);
  var formattedbioGithub = HTMLgithub.replace("%data%" , bio.contacts.github);
  var formattedbioGithub = formattedbioGithub.replace("#", bio.contacts.githubProfile);
  $("#topContacts").append(formattedbioGithub);
  $("#footerContacts").append(formattedbioGithub);
  var formattedbioLocation = HTMLlocation.replace("%data%" , bio.contacts.location);
  $("#topContacts").append(formattedbioLocation);
}

displayBio ();

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

//Education information display
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
      "major": "Advanced Studies",
      "dates": "9/2001-1/2005",
      "url": "http://www.scotiaglenvilleschools.org/SrHS/SrHS_home.cfm"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "2015",
      "url": ["https://www.udacity.com/course/viewer#!/c-ud304-nd/l-3342528615/m-3343838767"]
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "dates": "2015",
      "url": ["https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3581758575/m-3575058641"]
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "dates": "2015",
      "url": ["https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851"]
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2015",
      "url": ["https://www.udacity.com/course/viewer#!/c-ud804"]
    }
  ]
}

function displayEducation () {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%" , education.schools[school].name);
    var formattedName = formattedName.replace("#", education.schools[school].url);
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
  $("#education").append(HTMLonlineClasses);
  for (onlineCourse in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[onlineCourse].title);
    var formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[onlineCourse].url);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[onlineCourse].school);
    var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedOnlineDates);
  }
}

displayOnlineEducation();

//Work information display
var work = {
  "jobs" : [
    {
      "employer": "The Alternative Living Group Inc",
      "title": "Human Resources Manager",
      "dates": "2014-Current",
      "location": "Albany NY",
      "description": "Acted as the sole Human Resources representative in a non-profit agency of 200 employees. Duties included completing generalist tasks, such as interviewing, hiring, employee relations, training, and terminations.",
      "url": ["http://www.alginc.org/"]
    },
    {
      "employer": "The Alternative Living Group Inc",
      "title": "Family Services Coordinator",
      "dates": "2009-2013",
      "location": "Albany NY",
      "description": "Acted as a Family Services Coordinator in a non-profit agency for individuals with developmental disabilities. Duties included supervising staff, ensuring full enrollment in all programs, and facilitating operations for all programs.",
      "url": ["http://www.alginc.org/"]
    },
    {
      "employer": "Wildwood Programs Inc",
      "title": "After-School Instructor",
      "dates": "2007-2009",
      "location": "Latham NY",
      "description": "Acted as an After-School Instructor in a non-profit agency at a program for teenagers with developmental disabilities. Duties included planning/carrying out activities, ensuring the safety of the indivduals, and completing necessary billing paperwork.",
      "url": ["https://www.wildwood.edu/"]
    }
  ]
}

function displayWork () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
    var formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
    var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%" , work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork ();

//Project information display
var projects = {
  "projects": [
    {
      "title": "Simple Resume",
      "dates": "2015",
      "description": "This is my HTML/CSS Portfolio",
      "images": ["images/Profile1foo2.png", "images/Profile2foo2.png", "images/Profile3foo2.png"],
      "url": ["https://github.com/AshleyED/profile"]
    },
    {
      "title": "Interactive Resume",
      "dates": "2015",
      "description": "This is my JavaScript resume",
      "images": ["images/Interactive1foo.png", "images/Interactive2foo.png", "images/Interactive3foo.png"],
      "url": ["https://github.com/AshleyED/JSprofile"]
    }
  ]
}

function displayProjects () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
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

//Google map display
$("#mapDiv").append(googleMap);

$(function(){
  $("#nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash);
  });
});
