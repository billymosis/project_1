import EmblaCarousel from "embla-carousel";

const autoPlay = (embla, interval) => {
  const lastIndex = embla.scrollSnapList().length - 1;
  const state = { timer: 0 };

  const play = () => {
    stop();
    requestAnimationFrame(
      () => (state.timer = window.setTimeout(next, interval))
    );
  };

  const stop = () => {
    window.clearTimeout(state.timer);
    state.timer = 0;
  };

  const next = () => {
    if (embla.selectedScrollSnap() === lastIndex) {
      embla.scrollTo(0);
    } else {
      embla.scrollNext();
    }
    play();
  };

  return { play, stop };
};

const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
  prevBtn.addEventListener("click", embla.scrollPrev, false);
  nextBtn.addEventListener("click", embla.scrollNext, false);
};

const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
  return () => {
    if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  };
};

const setupDotBtns = (dotsArray, embla) => {
  dotsArray.forEach((dotNode, i) => {
    dotNode.addEventListener("click", () => embla.scrollTo(i), false);
  });
};

const generateDotBtns = (dots, embla) => {
  const template = document.getElementById("embla-dot-template").innerHTML;
  dots.innerHTML = embla.scrollSnapList().reduce((acc) => acc + template, "");
  return [].slice.call(dots.querySelectorAll(".embla__dot"));
};

const selectDotBtn = (dotsArray, embla) => () => {
  const previous = embla.previousScrollSnap();
  const selected = embla.selectedScrollSnap();
  dotsArray[previous].classList.remove("is-selected");
  dotsArray[selected].classList.add("is-selected");
};

const toggleEmblaReady = (event) => {
  const isResizeEvent = event === "resize";
  const toggleClass = isResizeEvent ? "remove" : "add";
  viewPort.classList[toggleClass]("embla--is-ready");
  if (isResizeEvent) embla.reInit();
};


const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const dots = document.querySelector(".embla__dots");
const embla = EmblaCarousel(viewPort, { loop: true, skipSnaps: false });
const dotsArray = generateDotBtns(dots, embla);
const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
const auto = autoPlay(embla, 1000);

setupPrevNextBtns(prevBtn, nextBtn, embla);
setupDotBtns(dotsArray, embla);

embla
  .on("select", setSelectedDotBtn)
  .on("select", disablePrevAndNextBtns)
  .on("init", setSelectedDotBtn)
  .on("init", disablePrevAndNextBtns)
  .on("init", toggleEmblaReady)
  .on("resize", toggleEmblaReady)
  .on("reInit", toggleEmblaReady);

viewPort.addEventListener('mouseenter', auto.stop, false);
viewPort.addEventListener('mouseleave', auto.play, false);
viewPort.addEventListener('touchstart', auto.stop, false);
viewPort.addEventListener('touchend', auto.play, false);
auto.play();

embla.dangerouslyGetEngine().translate.toggleActive(false);

document.getElementById("hamburger").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};

