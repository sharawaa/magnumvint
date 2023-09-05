const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("scroll", () => {
  console.log("Scrolling");
  const scrollY = wrapper.scrollTop;
  console.log("scrolly y", scrollY);
  //   1
  if (scrollY === 0 || scrollY === 3581) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1643182678807.jpg)";
  }
  //   2
  if (scrollY === 239.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1674021346556.jpg)";
  }
  //   3
  if (scrollY === 478.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1650855088952.jpg)";
  }
  //   4
  if (scrollY === 718) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1654841637324.jpg)";
  }
  //   5
  if (scrollY === 957) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1650860673656.jpg)";
  }
  //   6
  if (scrollY === 1196.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1647958034368.jpg)";
  }
  //   7
  if (scrollY === 1435.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1648447508528.jpg)";
  }
  //   8
  if (scrollY === 1675) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1643172892453.jpg)";
  }
  //   9
  if (scrollY === 1914) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1656470305206.jpg)";
  }
  //   10
  if (scrollY === 2153.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1645530607487.jpg)";
  }
  //   11
  if (scrollY === 2392.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1645613759404.jpg)";
  }
  //   12

  if (scrollY === 2632) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1645533029533.jpg)";
  }
  //   13
  if (scrollY === 2871) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1657675897228.jpg)";
  }
  //   14
  if (scrollY === 3110.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1650861010183.jpg)";
  }
  //   15
  if (scrollY === 3349.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1664513507687.jpg)";
  }
  //   1
  if (scrollY === 3581.5) {
    wrapper.style.backgroundImage =
      "https://www.magnumvint.com/upload/homepage/portfolio/1664513507687.jpg";
  }
});

const h1Element = document.querySelector(".unActive-h1");
h1Element.classList.add("active-h1");
