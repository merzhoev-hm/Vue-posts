export default {
  mounted(el, binding) {
    const options = {
      rootMargin: "0px",
      threshold: 0,
    };

    const callback = (entries, observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }

      binding.value();
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: "intersection",
};
