//////////////////////////////////////////////////////////////////
//                     section drop                             //
/////////////////////////////////////////////////////////////////
let centerSection = document.querySelectorAll(".center_section");
let containers = document.querySelectorAll(".container");
        
        obs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                entry.target.classList.toggle("drop",entry.isIntersecting);
                }),{ threshold : 1}
        });

        centerSection.forEach(section =>{
            obs.observe(section);
        });
/////////////////////////////////////////
let ulDiv = document.querySelector(".top-list");

        obsResize = new ResizeObserver(entries =>{
            Element = entries[0];
             const small = Element.contentRect.width < 200;
             if(small){
                Element.target.classList.add("delete");
             }else{
                Element.target.classList.remove("delete");
             }
             
             console.log(entries)
        });

        obsResize.observe(ulDiv);

//////////////////////////////////////////////////////////////////
//                   header &&  side bar(nav)                   //
///////////////////////////////////////////////////////////////// 
const menu  = document.querySelector(".menu");
const aside = document.querySelector(".aside");
menu.innerHTML = menu.classList.contains("open") ? "&#xf00d;" :"&#xf0c9;";
menu.addEventListener("click" , ()=>{
    menu.classList.toggle("open");
    // menu.style.transform = "rotatez(180deg)";
    menu.innerHTML = menu.classList.contains("open") ? "&#xf00d;" :"&#xf0c9;";
    side();  
});

function side(){
    if(menu.classList.contains("open")){
        aside.style.opacity = "1";
        aside.style.transform = "scale3d(1,1,1)";
    }else{
        aside.style.transform = "scale3d(0,1,1)";
    }
}

window.onscroll = function scrollAside(){
    aside.style.transform = "scale3d(0,1,1)";
}

