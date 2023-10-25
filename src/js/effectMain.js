console.log("FUNCIOONOU")

let main = document.getElementById('main');
let header = document.getElementById('header-overlay');
main.addEventListener('scroll', function(event){
    var scroll = this.scrollTop;
    if(scroll < 60) {
        header.style.opacity = '.' + scroll;
    }else {
        header.style.opacity = 1;
    }
})
