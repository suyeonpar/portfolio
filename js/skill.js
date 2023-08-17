axios.get("../data/data.json")
.then(function(res){
    console.log(res)
    res.data.Skill.map((e,i)=>{
        let div = document.createElement("div")
        div.className = "w-full h-20";

        let div_child = document.createElement("div");
        div_child.className = "w-full h-5 bg-[#e0e0de] rounded-[50px]";
        div.appendChild(div_child)

        let div_child2 = document.createElement("div");
        div_child2.className = "h-full bg-slate-700 duration-1000 ease-in-out rounded-[50px] text-right relative mb-3 first:mt-10";
        div_child.appendChild(div_child2)
        div_child2.style.width = e.progressBefore

        let p = document.createElement("p");
        p.className = "absolute -top-6 md:-top-7 text-sm left-1 md:text-lg";
        p.textContent = e.title
        div_child2.appendChild(p)

        let p_child = document.createElement("p");
        p_child.className = "text-sm md:text-base";
        p_child.textContent = e.desc
        div_child.appendChild(p_child)

        setTimeout(()=>{
            div_child2.style.width = e.progressAfter+"%"
        }, 500);


        document.querySelector(".skill-content").appendChild(div)
    })
})
.catch(function(error){
    console.log(error)
})
