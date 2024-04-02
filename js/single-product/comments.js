const commentReviews = function() {
  const commentStarDom = document.querySelectorAll(".comment-form-rating .star")
    commentStarDom.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault()
            commentStarDom.forEach(star => star.classList.remove("active"))

            item.classList.add("active")
        })
    })
}

const addNewCommentsFunc = () => {
    let commentTextDom = document.getElementById("comment-text")
    let commentNameDom = document.getElementById("comment-name")
    let commentButton = document.querySelector(".form-submit input")
    const commentList = document.querySelector(".comment-list")
    
    const nowDate = new Date()
    let nowDay = nowDate.getDay()
    let nowMonth = (nowDate.getMonth() + 1)
    let nowYear = nowDate.getFullYear()

    if(nowDay < 10 && nowMonth < 10){
        nowDay = "0"+nowDay
        nowMonth = "0"+nowMonth
    } 

    const commentStars = document.querySelectorAll(".stars .star")
    let starComment

    commentStars.forEach(star => {
      star.addEventListener("click", () => {
        starComment = star.innerHTML
      })
    })

    let result = ""

    commentButton.addEventListener("click", (e) => {
        e.preventDefault()
        result += `
        <li class="comment-item">
          <div class="comment-avatar">
            <img src="./img/avatars/avatar1.jpg" alt="" />
          </div>
          <div class="comment-text">
            <ul class="comment-star">
              <div class="star">
                  ${starComment}
              </div>
            </ul>
            <div class="comment-meta">
              <strong>${commentNameDom.value}</strong>
              <span>-</span>
              <time>${nowDay}.${nowMonth}.${nowYear}</time>
            </div>
            <div class="comment-description">
              <p>
                ${commentTextDom.value}
              </p>
            </div>
          </div>
        </li>
        `
        commentList.innerHTML = result
        commentNameDom.value = ""
        commentTextDom.value = ""
        window.scrollTo({ top: 1000, behavior: 'smooth' });
    })
}

function commentsFunc() {
    commentReviews()
    addNewCommentsFunc()
}

export default commentsFunc()