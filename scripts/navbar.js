import navbar from "../components/nav.js";
document.getElementById("navbar").innerHTML = navbar();

let today = new Date();

let day = today.getDay();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
switch (day) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "saturday";
}

switch (month) {
    case 0:
        month = "January"
        break;
    case 1:
        month = "Feburary"
        break;
    case 2:
        month = "March"
        break;
    case 3:
        month = "April"
        break;
    case 4:
        month = "May"
        break;
    case 5:
        month = "June"
        break;
    case 6:
        month = "July"
        break;
    case 7:
        month = "August"
        break;
    case 8:
        month = "September"
        break;
    case 9:
        month = "October"
        break;
    case 10:
        month = "November"
        break;
    case 11:
        month = "December"
}
let currentDate = day + "," + date + " " + month + " " + year;
document.getElementById("todayDate").textContent = currentDate
console.log(currentDate);





let loginData = JSON.parse(localStorage.getItem("loginData"));
if (loginData == null) {
    let data = document.getElementById("signInData");
    data.innerText = "Sign in";
    data.style.cursor = "pointer";
    data.addEventListener("click", function(e) {
        window.location.href = "login.html";
    });
} else {
    let data = document.getElementById("signInData");
    data.innerText = "My Account";
    data.style.cursor = "pointer";

    data.addEventListener("click", function(e) {
        let account_id = document.getElementById("account_id");
        account_id.style.display = "block";
        let dataUser = document.getElementById("userName");
        dataUser.innerText = "Unknown";
        let userDetails = document.getElementById("userDetails");
        userDetails.innerText = loginData;
        let firstLetter = document.getElementById("firstLetter");
        firstLetter.innerText = "U";
    });
    let x = document.getElementById("closeAccoutnPro");
    x.addEventListener("click", function(e) {
        let account_id = document.getElementById("account_id");
        account_id.style.display = "none";
    });
}




import { appendNews, searchNews } from "../components/fetch.js"

let query;
let search = (e) => {
    if (e.key == "Enter") {
        query = null;
        query = document.getElementById("search-txt").value;
        localStorage.setItem("query", JSON.stringify(query))
        window.location.href = "search.html";

        searchNews(query).then((data) => {
            console.log("data: ", data);

            let container = document.getElementById("chandan")
            container.innerHTML = null;
            appendNews(data.articles, container)


        });


    }
}

document.getElementById("search-txt").addEventListener("keydown", search)