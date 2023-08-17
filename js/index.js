let dark = false;
function darkMode(){
    if(dark == false){
        dark = true;
        document.querySelector(".fa-moon").classList.add("fa-sun")
        document.querySelector(".fa-moon").classList.remove("fa-moon")
        document.querySelector("html").classList.add("dark")
        localStorage.setItem("dark", true);
    }else{
        dark = false;
        document.querySelector(".fa-sun").classList.add("fa-moon")
        document.querySelector(".fa-sun").classList.remove("fa-sun")
        document.querySelector("html").classList.remove("dark")
        localStorage.removeItem("dark")
    }
}

const dark_mode = localStorage.getItem("dark");
if(dark_mode == "true"){
    darkMode()
}

function language(lang){
    if(lang == "en"){
        localStorage.setItem("lang", "en");
    }else{
        localStorage.removeItem("lang", "en");
    }
}

const $lang = localStorage.getItem("lang");

// 다국어
const url = new URL(location.href).searchParams;
const lang = url.get("Lang")

axios.get("data/data.json")
.then(function(res){
    if($lang == "en"){
        res.data.EnNav.map((e,i)=>{
            //console.log(e)
            document.querySelectorAll(".list li a")[i].textContent = e.title
        })
    }
    if(lang == "en"){
        res.data.EnNav.map((e,i)=>{
            //console.log(e)
            document.querySelectorAll(".list li a")[i].textContent = e.title
        })
    }       
})
.catch(function(res){
    console.log(error)
})
// 다국어

//모바일 네비
function mNav(){
    document.querySelector(".m-btn").classList.toggle("on")
}
//모바일 네비