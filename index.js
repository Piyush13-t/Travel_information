function myFunc()
{
    let ele=document.getElementById("toggle");
    ele.classList.toggle("toggle");
    document.getElementById("open").classList.toggle("fa-close")
    ele.style.transition="0.5s ease-out";
    
}