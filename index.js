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

var settings = {
    visible: 1, 
    CSSVarTarget: document.body, 
    knobs: [
      {
        cssVar: ['fps'],
        label: 'Frame Per Second',
        type: 'range',
        value: 26,
        min: 1,
        max: 60,
        step: 1,
      }
    ]
  }
  
  new Knobs(settings)