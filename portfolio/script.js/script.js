
    let nav = document.querySelector('nav');

    window.addEventListener('scroll',()=>{
        nav.classList.toggle('nav-scroll', window.scrollY > 0);
    })
    
    let AllNavLinkA = document.querySelectorAll('.nav-links li a');
    AllNavLinkA.forEach(items=>{
        item.addEventListener('click',()=>{
            removeActive();
        })
    });
    const removeActive = ()=> AllNavLinkA.forEach(item=>{
    })
    let menuBars = document.querySelector('new button');
    let navlinks = document.querySelector('.nav-links')
    menuBars.addEventListener('click',()=>{
        navlinks.classList.toggle('nav-links-block');
    })
