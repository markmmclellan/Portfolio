const canvas = document.getElementById('particles');

if (canvas) {
    const ctx = canvas.getContext('2d');

    const PARTICLE_COUNT = 500;
    const MAX_RADIUS = 2.5;
    const MAX_SPEED = 0.15;
    const MOUSE_RADIUS = 140;
    const REPEL_STRENGTH = 0.6;
    const RETURN_STRENGTH = 0.02;
    const FRICTION = 0.94;
    const LINK_RADIUS = 130;

    let particles = [];
    let width, height;

    const mouse = { x: null, y: null, active: false };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = Array.from({ length: PARTICLE_COUNT }, () => {
            const vx = (Math.random() - 0.5) * MAX_SPEED;
            const vy = (Math.random() - 0.5) * MAX_SPEED - 0.05;
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * MAX_RADIUS + 0.5,
                baseVx: vx,
                baseVy: vy,
                vx,
                vy,
                alpha: Math.random() * 0.4 + 0.15
            };
        });
    }

    function step() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, i) => {
            if (mouse.active) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_RADIUS && dist > 0.01) {
                    const force = (1 - dist / MOUSE_RADIUS) * REPEL_STRENGTH;
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
            }

            p.vx += (p.baseVx - p.vx) * RETURN_STRENGTH;
            p.vy += (p.baseVy - p.vy) * RETURN_STRENGTH;
            p.vx *= FRICTION;
            p.vy *= FRICTION;

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;
            if (p.y < -10) p.y = height + 10;
            if (p.y > height + 10) p.y = -10;

            if (mouse.active) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < LINK_RADIUS) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / LINK_RADIUS) * 0.25})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(step);
    }

    resize();
    createParticles();
    step();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
        mouse.active = false;
    });
}
