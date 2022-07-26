const popup = document.querySelector("#popup")
const logIn = document.querySelector("#log-in")
const signUp = document.querySelector("#sign-up")
const popupClose = document.querySelector("#popup__close")
signUp.addEventListener("click",()=>{
    popup.classList.add("visible")
})
popupClose.addEventListener("click",()=>{
    popup.classList.remove("visible")
})