function colorsActiveFunc() {
    const colorWrapper = document.querySelectorAll(".color-wrapper")

    colorWrapper.forEach(item => {      
        
        item.addEventListener("click", () => {
            colorWrapper.forEach(div => {
                div.classList.remove("active")
            })
            
            item.classList.add("active")
        })
      
    })
}

export default colorsActiveFunc()