const container = document.querySelector(".dropdown-container");
const dropdownItems = [
    {
        id: 0,
        name: "Lorem Ipsum 1",
        image: "./assets/images/svg/icon-02.svg",
        description: "Loreim ipsum dolor sit amet. consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Loreim ipsum dolor sit amet. consectetuer adipiscing elit.",
    },
    {
        id: 1,
        name: "Lorem Ipsum 2",
        image: "./assets/images/svg/icon-03.svg",
        description: "Loreim ipsum dolor sit amet. consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Loreim ipsum dolor sit amet. consectetuer adipiscing elit.",
    },
    {
        id: 2,
        name: "Lorem Ipsum 3",
        image: "./assets/images/svg/icon-04.svg",
        description: "Loreim ipsum dolor sit amet. consectetuer adipiscing elit, sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat. Loreim ipsum dolor sit amet. consectetuer adipiscing elit.",
    }
];
let active = {
    display: false,
    index: null
}

function extendDropdown(el) {
    if (el.className === "arrow-down") {
        if (active.display) {
            document.querySelector(".arrow-up").src = "./assets/images/svg/icon-arrow-down.svg";
            document.querySelector(".arrow-up").className = "arrow-down";
            document.querySelector(".bottom-active span").innerHTML = "";
            document.querySelector(".bottom-active").className = "dropdown-area-bottom";
        }
        active.display = true;
        active.index = parseInt(el.getAttribute("key"));
        document.querySelectorAll(".dropdown-area-bottom")[active.index].className = "bottom-active";
        document.querySelector(".bottom-active span").innerHTML = el.getAttribute("description");
        el.src = "./assets/images/svg/icon-arrow-up.svg";
        el.className = "arrow-up";
    } else {
        active.display = false;
        active.index = null;
        document.querySelector(".bottom-active span").innerHTML = "";
        document.querySelector(".bottom-active").className = "dropdown-area-bottom";
        el.src = "./assets/images/svg/icon-arrow-down.svg";
        el.className = "arrow-down";
    }
}

function mountHTML({ image, id, description }) {
    return `
        <div class="dropdown-area-top">
            <img src="${image}" class="dropdown-image-icon" alt="" />
            <img src="./assets/images/svg/icon-arrow-down.svg" id="arrow-icon" class="arrow-down" key="${id}" description="${description}" onclick="extendDropdown(this)" alt="" />
        </div>
        <div class="dropdown-area-bottom">
            <span></span> 
        </div>
    `
}

dropdownItems.forEach((item) => {
    let element = document.createElement("div");
    element.className = "dropdown-area";
    element.innerHTML = mountHTML(item);
    container.appendChild(element);
});
