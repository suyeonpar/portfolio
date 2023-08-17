axios.get("data/data.json")
.then(function(res){
    console.log(res);
    res.data.Profile.map((e,i)=>{
        console.log(e)

        let div = document.createElement("div");
        div.className = "bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1] p-5 mb-8 last:mb-0";

        let h3 = document.createElement("h3");
        h3.className = "text-base md:text-xl mb-4";
        h3.textContent = e.title;
        div.appendChild(h3)

        let p;
        if(e.desc){
            p = document.createElement("p");
            p.innerHTML = `<span class="font-bold">'${e.desc}'</span> ${e.desc2}`;
            p.className = "mb-2 last:mb-0 text-sm md:text-base"
            div.appendChild(p)
        }else{
            e.date.map((el,index)=>{
                console.log(el)
                p = document.createElement("p");
                p.className = "mb-2 last:mb-0 text-sm md:text-base"
                p.textContent = `${el} : ${e.dateDesc[index]}`;
                div.appendChild(p)
            })
        }

        document.querySelector(".profile-content").appendChild(div)

    })
})
.catch(function(error){
    console.log(error)
})