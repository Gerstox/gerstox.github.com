let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        content.classList.remove("fadeIn");
        content.classList.remove("animated");
        content.classList.add("fadeOut");
        content.classList.add("animated");
        setTimeout(function(){
            location.href = "/";
        }, 900);
    });
});