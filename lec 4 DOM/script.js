 let ctr=0;
 function callback(){
    document.querySelectorAll("h4")[2].innerHTML = ctr;
    // console.log(ctr);
    ctr = ctr + 1;
 }
// setInterval(callback,1000);