console.log("Sidebar Loaded");

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(button=>{

    button.addEventListener("click",()=>{

        menuItems.forEach(item=>{

            item.classList.remove("active");

        });

        button.classList.add("active");

    });

});