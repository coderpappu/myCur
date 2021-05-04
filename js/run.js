m = 0;
var y;

function start() {
     y = setInterval(run,100);

    function run() {
        if ( m == 1200) {
            clearInterval(y);   
        }
        else{
            m+=5;
            var x = document.getElementById("carImg");
            x.style.marginLeft =m + 'px';
        }
    }
}
function stop() {
    clearInterval(y)
}
