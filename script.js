let tablink=document.querySelectorAll('.tab-link');

tablink.forEach((link)=>{
    link.addEventListener("click",()=>{
        let tabid=link.getAttribute('href');
        console.log(tabid);
        let tab=document.querySelectorAll(tabid);
        hideTab();
        showTab(tab);
    })
})

function hideTab(){
    let tb=document.querySelectorAll('.tab');
    tb.forEach((t)=>{
        t.style.display="none";
    })
}

function showTab(tab){
    tab.forEach((t)=>{
        t.style.display="block";
    })
}