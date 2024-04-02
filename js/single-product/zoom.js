export function zoomFunc() {
    const singleImg = document.querySelector("#single-img")
    const singleImgGallery = document.querySelector(".single-img-gallery")

    singleImgGallery.addEventListener("mousemove", (e) => {
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop
        
        singleImg.style.transformOrigin = `${x}px ${y}px`
        singleImg.style.transform = "scale(3)"
    })

    singleImgGallery.addEventListener("mouseleave", () => {
        singleImg.style.transformOrigin = "center"
        singleImg.style.transform = "scale(1)"
    })
}

export default zoomFunc()