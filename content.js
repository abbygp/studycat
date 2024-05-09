(function() {
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    const cat = document.createElement('img');
    cat.src = chrome.runtime.getURL('images/cat.png');
    cat.style.position = 'fixed';
    cat.style.bottom = '10px';
    cat.style.right = '15px';
    cat.style.width = '6%';
    cat.style.height = 'auto';
    cat.style.padding = '15px';
    cat.style.cursor = 'pointer';

    const mouseDownHandler = function(e) {
        // Update the offset when dragging starts
        offset = {
            x: e.clientX - cat.getBoundingClientRect().left,
            y: e.clientY - cat.getBoundingClientRect().top
        };
        isDragging = true;
    };

    const mouseMoveHandler = function(e) {
        // Move cat around screen by dragging
        if (isDragging) {
            cat.style.left = `${e.clientX - offset.x}px`;
            cat.style.top = `${e.clientY - offset.y}px`;

            const catRect = cat.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            // Check which side of the window the cat is closer to
            if (catRect.left < windowWidth / 2) {
                // If the cat is closer to the left side, position the textbox to the right of the cat
                bubble.style.left = `${parseInt(cat.style.left, 10) + 110}px`;
                bubble.style.right = 'auto';
            } else {
                // If the cat is closer to the right side, position the textbox to the left of the cat
                bubble.style.right = `${windowWidth - parseInt(cat.style.left, 10)}px`;
                bubble.style.left = 'auto';
            }

            bubble.style.top = `${parseInt(cat.style.top, 10) - 20}px`;
            bubble.style.bottom = 'auto';
        }
    };

    const mouseUpHandler = function() {
        isDragging = false;
    };

    // Add event listeners only when mouse is down and remove them when mouse is up
    cat.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    const bubble = document.createElement('div');
    bubble.style.position = 'fixed';
    bubble.style.bottom = '85px';
    bubble.style.right = '125px';
    bubble.style.width = 'auto';
    bubble.style.height = 'auto';
    bubble.style.padding = '13px 25px';
    bubble.style.background = '#fbeddb';
    bubble.style.borderRadius = '15px';
    bubble.style.color = 'black';
    bubble.style.fontSize = '15px';
    bubble.style.border = '2px solid black';

    document.body.appendChild(cat);
})();
