const bars = {
    top: document.getElementById('top'),
    mid1: document.getElementById('middle'),
    mid2: document.getElementById('middle-2'),
    bottom: document.getElementById('bottom')
};

const menu = document.getElementById('mobile-nav'); 

document.getElementById('hmenu').addEventListener("click",function(){
    bars.top.classList.toggle('hide');
    bars.bottom.classList.toggle('hide');

    bars.mid1.classList.toggle('r45');
    bars.mid2.classList.toggle('r315');

    bars.mid1.classList.toggle('cross-line');
    bars.mid2.classList.toggle('cross-line');

    menu.classList.toggle('show');
});