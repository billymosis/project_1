import EmblaCarousel from "../_snowpack/pkg/embla-carousel.js";
const autoPlay = (embla2, interval) => {
  const lastIndex = embla2.scrollSnapList().length - 1;
  const state = {timer: 0};
  const play = () => {
    stop();
    requestAnimationFrame(() => state.timer = window.setTimeout(next, interval));
  };
  const stop = () => {
    window.clearTimeout(state.timer);
    state.timer = 0;
  };
  const next = () => {
    if (embla2.selectedScrollSnap() === lastIndex) {
      embla2.scrollTo(0);
    } else {
      embla2.scrollNext();
    }
    play();
  };
  return {play, stop};
};
const setupPrevNextBtns = (prevBtn2, nextBtn2, embla2) => {
  prevBtn2.addEventListener("click", embla2.scrollPrev, false);
  nextBtn2.addEventListener("click", embla2.scrollNext, false);
};
const disablePrevNextBtns = (prevBtn2, nextBtn2, embla2) => {
  return () => {
    if (embla2.canScrollPrev())
      prevBtn2.removeAttribute("disabled");
    else
      prevBtn2.setAttribute("disabled", "disabled");
    if (embla2.canScrollNext())
      nextBtn2.removeAttribute("disabled");
    else
      nextBtn2.setAttribute("disabled", "disabled");
  };
};
const setupDotBtns = (dotsArray2, embla2) => {
  dotsArray2.forEach((dotNode, i) => {
    dotNode.addEventListener("click", () => embla2.scrollTo(i), false);
  });
};
const generateDotBtns = (dots2, embla2) => {
  const template = document.getElementById("embla-dot-template").innerHTML;
  dots2.innerHTML = embla2.scrollSnapList().reduce((acc) => acc + template, "");
  return [].slice.call(dots2.querySelectorAll(".embla__dot"));
};
const selectDotBtn = (dotsArray2, embla2) => () => {
  const previous = embla2.previousScrollSnap();
  const selected = embla2.selectedScrollSnap();
  dotsArray2[previous].classList.remove("is-selected");
  dotsArray2[selected].classList.add("is-selected");
};
const toggleEmblaReady = (event) => {
  const isResizeEvent = event === "resize";
  const toggleClass = isResizeEvent ? "remove" : "add";
  viewPort.classList[toggleClass]("embla--is-ready");
  if (isResizeEvent)
    embla.reInit();
};
const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const dots = document.querySelector(".embla__dots");
const embla = EmblaCarousel(viewPort, {loop: true, skipSnaps: false});
const dotsArray = generateDotBtns(dots, embla);
const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);
const auto = autoPlay(embla, 1e3);
setupPrevNextBtns(prevBtn, nextBtn, embla);
setupDotBtns(dotsArray, embla);
embla.on("select", setSelectedDotBtn).on("select", disablePrevAndNextBtns).on("init", setSelectedDotBtn).on("init", disablePrevAndNextBtns).on("init", toggleEmblaReady).on("resize", toggleEmblaReady).on("reInit", toggleEmblaReady);
viewPort.addEventListener("mouseenter", auto.stop, false);
viewPort.addEventListener("mouseleave", auto.play, false);
viewPort.addEventListener("touchstart", auto.stop, false);
viewPort.addEventListener("touchend", auto.play, false);
auto.play();
embla.dangerouslyGetEngine().translate.toggleActive(false);
document.getElementById("hamburger").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};
