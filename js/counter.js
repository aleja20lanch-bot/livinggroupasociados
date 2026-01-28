document.addEventListener("DOMContentLoaded", () => {

    const counter = document.getElementById("counter");
    if (!counter) return;

    let count = 0;
    const target = 350;
    const speed = 10;

    const updateCounter = () => {
        if (count < target) {
            count++;
            counter.textContent = count;
            setTimeout(updateCounter, speed);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
});
