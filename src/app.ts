// const aDOM = document.querySelector('a') ;
// aDOM?.children
const classDom = document.querySelector(".a1") as HTMLAnchorElement ;
classDom.href;
const btn = document.querySelector("#btn") as HTMLButtonElement ;
btn.addEventListener("click" , (e:Event) => {
    e.preventDefault() ;
}) 