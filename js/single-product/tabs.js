function tabsFunc() {
    const tabContents = document.querySelectorAll(".tab-content")
    const tabButtons = document.querySelectorAll(".tab-button")
    const tabsList = document.querySelector(".tabs-list")

    tabsList.addEventListener("click", (e) => {
        e.preventDefault()
        const id = e.target.dataset.id
        tabButtons.forEach(button => button.classList.remove("active"))
        tabContents.forEach(content => content.classList.remove("active"))

        if(id){
            e.target.classList.add("active")
            const content = document.getElementById(id)
            content.classList.add("active")
        }
    })
}

export default tabsFunc()