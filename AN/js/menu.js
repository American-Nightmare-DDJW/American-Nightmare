addEventListener('load', function() {
    
    document.getElementById('play').addEventListener('click', 
    function(){
        localStorage.removeItem('isLoading');
        window.location.assign("./html/phaserGame.html");
    });

    document.getElementById('options').addEventListener('click', 
    function(){
        window.location.assign("./html/options.html");
    });

    document.getElementById('ranking').addEventListener('click', 
    function() {
        window.location.assign("./html/ranking.html");
    });

    document.getElementById('saves').addEventListener('click', 
    function(){
        localStorage.setItem('isLoading', 'true');
        window.location.assign("./html/phaserGame.html");
    });

    document.getElementById('exit').addEventListener('click', 
    function(){
        console.warn("No es pot sortir!");
    });
});