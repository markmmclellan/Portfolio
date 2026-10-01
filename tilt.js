const tiltEls = document.querySelectorAll('.tag-list .pill');

const MAX_TILT = 14;
const SCALE = 1.08;

tiltEls.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = x / rect.width - 0.5;
        const percentY = y / rect.height - 0.5;

        const rotateY = percentX * MAX_TILT * 2;
        const rotateX = percentY * -MAX_TILT * 2;

        el.style.transform =
            `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${SCALE})`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)';
    });
});
