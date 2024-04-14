// Create an iframe to embed Scratch 3.0 project
window.addEventListener('load', function() {
    const scratchDemo = document.getElementById('scratch-demo');
    const iframe = document.createElement('iframe');

    iframe.src = 'https://scratch.mit.edu/projects/957463508/embed'; // Replace with your Scratch project ID
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;

    scratchDemo.appendChild(iframe);
});
