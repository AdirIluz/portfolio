
// projects class 
class Projects {
    constructor(id, name, description, link, image, stack, gitHub) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.link = link;
        this.image = image;
        this.stack = stack;
        this.gitHub = gitHub;
    }
    get(propName) {
        return this[propName]
    }
    set(propName, value) {
        return this[propName] = value;
    }
}
let projects = [
    {
        id: 1,
        name: "Mardi Gras",
        description: "Mardi Gras is a friendly website for the Mardi Gras festival in New Orleans, You can find information About Mardi Gras!",
        link: "https://adir-mardi.netlify.app/",
        image: "images/projects/mardi.png",
        stack: "Html, CSS , JS",
        gitHub: "https://github.com/AdirIluz/MardiGrasProject",
    }, {
        id: 2,
        name: "TechIt",
        description: "TecIt is an online gaming shop, With a user-friendly web interface, customers can easily order their favorite products.",
        link: "https://techit-adir.netlify.app/",
        image: "images/projects/techit.png",
        stack: "Html, JS",
        gitHub: "https://github.com/AdirIluz/techit",
    }, {
        id: 3,
        name: "ManageU",
        description: "ManageU is a Todo list app, to help users organize and manage their tasks efficiently and easy to operate. ",
        link: "https://adir-manageu.netlify.app/",
        image: "images/projects/managu.png",
        stack: "JS , TS , HTML",
        gitHub: "https://github.com/AdirIluz/managu",
    }, {
        id: 4,
        name: "MyAccount",
        description: "MyAccount is a finance management app that allows users to effortlessly track their expenses and incomes.",
        link: "https://adir-myaccount.netlify.app/",
        image: "images/projects/account.png",
        stack: "JS, HTML",
        gitHub: "https://github.com/AdirIluz/myAccount",
    }
];
// print projects
function showProject() {
    for (let i = 0; i < projects.length; i++) {
        if (i % 3 == 0) {
            document.getElementById("projectsBox").innerHTML += `<br>`;
        }
        document.getElementById("projectsBox").innerHTML += `<div class="col-md-4 col-sm-6"><div class="card"> <a href="${projects[i].link}" target="_blank"><img src="${projects[i].image}" class="card-img-top" alt="..."></a>
                    <div class="card-body">
                        <h5 class="card-title">${projects[i].name}</h5>
                        <p class="card-text">${projects[i].description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Stacks: ${projects[i].stack}</li>
                        <li class="list-group-item"><a href="${projects[i].gitHub}" target="_blank"><i class="fa-brands fa-github"></i> Github</a></li>
                    </ul>
                </div>
            </div>
    </div>`;
    }
}
showProject();

// Languages & Technologies
class Languages {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
    get(propName) {
        return this[propName]
    }
    set(propName, value) {
        return this[propName] = value;
    }
}
let languages = [
    {
        id: 1,
        name: "javascript",
        image: "images/skills/js.png",
    }, {
        id: 2,
        name: "c#",
        image: "images/skills/cSharp2.png",
    }, {
        id: 3,
        name: "c++",
        image: "images/skills/c++.png",
    }, {
        id: 4,
        name: "typescript",
        image: "images/skills/ts.png",
    }, {
        id: 5,
        name: "html",
        image: "images/skills/html.png",
    }, {
        id: 6,
        name: "css",
        image: "images/skills/css.png",
    }, {
        id: 7,
        name: "bootstrap",
        image: "images/skills/bootstrap2.png",
    }, {
        id: 8,
        name: "jQuery",
        image: "images/skills/jQuery.png",
    },
    {
        id: 9,
        name: "react",
        image: "images/skills/react.png",
    },
];

function showLanguages() {
    for (let i = 0; i < languages.length; i++) {
        /*  if (i % 5 == 0) {
             document.getElementById("skills").innerHTML += `<br>`;
         } */
        document.getElementById("skills").innerHTML += `<img class="skill" src="${languages[i].image}" alt="${languages[i].name}">`
    }

}
showLanguages();
// form validation
const btn = document.getElementById("btn2");
btn.addEventListener('click', function () {
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email2");
    const error = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorMessage = document.getElementById("errorMessage");
    const message = document.getElementById("message");
    let isValid = true;
    if (fullName.value == '') {
        error.innerHTML = "Enter Your Full Name!";
        fullName.focus();
        isValid = false;
    } else {
        error.innerHTML = "";
    }
    if (email.value == '') {
        errorEmail.innerHTML = "Enter Your Email!";
        email.focus();
        isValid = false;
    }
    else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        errorEmail.innerHTML = "Make Sure Your Email is correct";
        email.focus();
        isValid = false;
    }
    if (message.value == '') {
        errorMessage.innerHTML = "Enter Your Message";
        message.focus
        isValid = false
    } else {
        errorMessage.innerHTML == "";
    }
    if (isValid) {
        let user = {
            name: fullName.value,
            email: email.value,
            message: message.value,
        };
        localStorage.setItem("user", JSON.stringify(user));
        email.value = "";
        fullName.value = "";
        message.value = "";
        error.innerText = "";
        errorEmail.innerHTML = "";
        window.location.href = "contact.html";

    }

});