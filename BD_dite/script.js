document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.draggable');
    let currentImage = null;
    let offsetX = 0;
    let offsetY = 0;

    function getRandomPosition(element) {
        const x = window.innerWidth - element.clientWidth;
        const y = window.innerHeight - element.clientHeight;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }

    images.forEach(image => {
        // Set random initial position
        const [randomX, randomY] = getRandomPosition(image);
        image.style.left = `${randomX}px`;
        image.style.top = `${randomY}px`;

        image.addEventListener('mousedown', (e) => {
            e.preventDefault();
            currentImage = image;
            offsetX = e.clientX - image.getBoundingClientRect().left;
            offsetY = e.clientY - image.getBoundingClientRect().top;
            image.style.cursor = 'grabbing';
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });

    function onMouseMove(e) {
        if (currentImage) {
            e.preventDefault();
            currentImage.style.left = `${e.clientX - offsetX}px`;
            currentImage.style.top = `${e.clientY - offsetY}px`;
        }
    }

    function onMouseUp(e) {
        if (currentImage) {
            e.preventDefault();
            currentImage.style.cursor = 'grab';
            currentImage = null;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }
});
