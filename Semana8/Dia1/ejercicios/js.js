let img = document.getElementById('star');
let span = document.getElementById('stars');



img.onclick = function() {
    this.src = 'star_on.gif';
}

span.onclick = function() {
     this.childNodes[2].src = 'star_on.gif';

    // const list = document.querySelectorAll('img');
    // for(let index = 0; index < list.length; index++) {
    //     // setTimeout(function(){
    //         // list[index].src = 'star_on.gif';
    //     // }, 2000);

    //     setInterval(list[index].src = 'star_on.gif',9000);
        
    // }
}