
function contentLoaded() {
    
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content'); 

    
    preloader.style.display = 'none';
    content.style.display = 'block'; 
}

setTimeout(contentLoaded, 3000);

