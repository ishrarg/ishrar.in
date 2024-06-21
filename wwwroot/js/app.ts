import gsap from 'gsap';


function swipeCardToRight(cardId: string) {
    gsap.to(cardId, {
        x: 100,
        opacity: 0,
    })
}

async function swipeCardFromLeft(cardId: string) {
    gsap.fromTo(
        cardId,
        {
            x: -100,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
        })
}

async function waitUntil(time: number) {
    await new Promise(res => setTimeout(res, time));
}

const methods = [waitUntil, swipeCardToRight, swipeCardFromLeft] as const;

for (const method of methods) {
    window[method.name] = method;
}

declare global {
    interface Window {
        waitUntil: typeof waitUntil;
        swipeCardToRight: typeof swipeCardToRight;
        swipeCardFromLeft: typeof swipeCardFromLeft;
    }
}