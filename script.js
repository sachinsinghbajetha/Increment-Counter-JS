const counters = document.querySelectorAll(".counter");
const cup = document.querySelector(".cup");

counters.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCounter = () => {
        const targetCount = +counter.getAttribute("data-target");
        const startingCount = +counter.innerHTML;
        const incr = targetCount / 100000;
        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setInterval(updateCounter, 100);
        } else {
            cup.style.color = "brown";
            cup.style.transform = "scale(1.4)";
            counter.innerHTML = targetCount;
        }
    };

    updateCounter();
});
