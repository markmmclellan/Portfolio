const phrases = [
    'Mark.',
    'an IT Professional.',
    'a Tech Enthusiast.',
    'an Explorer.',
    'a Scuba Diver.',
    'an Animal Lover.'
];

const typedEl = document.getElementById('typed-text');

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const HOLD_TIME = 1500;
const GAP_TIME = 300;

let phraseIndex = 0;
let charIndex = 0;

function tick() {
    const phrase = phrases[phraseIndex];
    const deleting = tick.deleting;

    if (!deleting) {
        charIndex++;
        typedEl.textContent = phrase.slice(0, charIndex);

        if (charIndex === phrase.length) {
            tick.deleting = true;
            setTimeout(tick, HOLD_TIME);
            return;
        }
        setTimeout(tick, TYPE_SPEED);
        return;
    }

    charIndex--;
    typedEl.textContent = phrase.slice(0, charIndex);

    if (charIndex === 0) {
        tick.deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, GAP_TIME);
        return;
    }
    setTimeout(tick, DELETE_SPEED);
}

if (typedEl && phrases.length) {
    tick.deleting = false;
    tick();
}
