document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.querySelector('.input-box');
    const box = document.querySelector('.search-box');
    const searchicon=document.getElementById("search-icon")
    const search=document.getElementById("search")
    searchicon.addEventListener("click",function(){inputBox.focus();
        search.focus();
    })
    inputBox.addEventListener('focus', () => {
        box.classList.add('focused');
    });

    inputBox.addEventListener('blur', () => {
        box.classList.remove('focused');
    });
});
