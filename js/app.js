const $ = document
const searchBtn = $.querySelector(".search-btn");
const darkModeBtn = $.querySelector(".darkmode-btn");
const ChevronDownBtn = $.querySelector(".chevrondown-btn");
const backSearchModal = $.querySelector(".back-search-modal");
const backSigninModal = $.querySelector(".back-modal");
const blogPostsWrapper = $.querySelector(".blog-posts-wrapper");
const profileInformationsSection = $.querySelector(".profile-informations-section");



// serach modal started
function openSearchModal() {
    backSearchModal.style.display = "block"
    $.body.style.overflow = "hidden"
    $.body.classList.add("pad-t-15");
}

function closeSearchModal() {
    backSearchModal.style.display = "none"
    $.body.style.overflow = "auto"
    $.body.classList.remove("pad-t-15");
}

searchBtn.addEventListener("click", openSearchModal);
backSearchModal.addEventListener("click", event => {
    if(event.target === backSearchModal){
        closeSearchModal()
    }
})
// search modal ended

// darkmode started
function darkMode(){
   $.body.classList.toggle("darkmode")
}
darkModeBtn.addEventListener("click", darkMode)
// darkmode ended

// sign in modal started
function openSigninModal() {
    backSigninModal.style.display = "block"
    $.body.style.overflow = "hidden"
    $.body.classList.add("pad-t-15");
}

function closeSigninModal() {
    backSigninModal.style.display = "none"
    $.body.style.overflow = "auto"
    $.body.classList.remove("pad-t-15");
}
ChevronDownBtn.addEventListener("click", openSigninModal)
backSigninModal.addEventListener("click", event => {
    if(event.target === backSigninModal){
        closeSigninModal()
    }
})
// sign in modal ended