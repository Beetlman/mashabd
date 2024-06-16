window.onload = function() {
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ZHUK";
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Initialize drops array with random starting positions
    const drops = Array.from({ length: Math.floor(columns) }, () => Math.floor(Math.random() * canvas.height / fontSize));

    // The draw function
    function draw() {
        // Black background with opacity to fade out older frames
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Green text color
        ctx.fillStyle = "#A0F";
        ctx.font = `${fontSize}px monospace`;

        // Looping over drops
        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Resetting drop to the top randomly after it reaches the bottom
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Incrementing Y coordinate
            drops[i]++;
        }
    }

    draw(); // Draw once immediately to reset drops at the beginning

    setInterval(draw, 33); // Set interval for continuous animation
}
