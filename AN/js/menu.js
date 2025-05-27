addEventListener('load', function() {
    
    document.getElementById('play').addEventListener('click', 
    function(){
        window.location.assign("./html/phaserGame.html");
    });

    document.getElementById('options').addEventListener('click', 
    function(){
        window.location.assign("./html/options.html");
    });

    document.getElementById('exit').addEventListener('click', 
    function(){
        console.warn("No es pot sortir!");
    });
});