"use strict";

export const lazyLoad = (target) => {
  const options = {
    rootMargin: "50px 0px",
    threshold: 0.01,
  };

  const intObserv = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.target);
      if (entry.isIntersecting) {
        const img = entry.target;
        const imageUrl = img.dataset.lazy;

        img.setAttribute("src", imageUrl);
        img.classList.add("fade-in");

        observer.disconnect();
      }
    });
  }, options);

  intObserv.observe(target);
};
