function sizesActiveFunc() {
    const sizeSpans = document.querySelectorAll(".values-list span")

    sizeSpans.forEach(item => {
        item.addEventListener("click", () => {
            sizeSpans.forEach(span => {
                span.classList.remove("active")
            })
            item.classList.add("active")
        })
    })
}

export default sizesActiveFunc()