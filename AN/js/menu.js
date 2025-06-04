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
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.color = '#fff';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.fontSize = '32px';
    overlay.innerText = "Tancar? Això és cosa teva... Jo només soc un botó bonic.";
    document.body.appendChild(overlay);
    });
});