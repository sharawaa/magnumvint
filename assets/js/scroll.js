const wrapper = document.querySelector(".wrapper");
const active_1_p = document.querySelector(".unActive-1-p");
const active_1_h1 = document.querySelector(".unActive-1-h1");
const active_2_p = document.querySelector(".unActive-2-p");
const active_2_h1 = document.querySelector(".unActive-2-h1");
const active_3_p = document.querySelector(".unActive-3-p");
const active_3_h1 = document.querySelector(".unActive-3-h1");
const active_4_p = document.querySelector(".unActive-4-p");
const active_4_h1 = document.querySelector(".unActive-4-h1");
const active_5_p = document.querySelector(".unActive-5-p");
const active_5_h1 = document.querySelector(".unActive-5-h1");
const active_6_p = document.querySelector(".unActive-6-p");
const active_6_h1 = document.querySelector(".unActive-6-h1");
const active_7_p = document.querySelector(".unActive-7-p");
const active_7_h1 = document.querySelector(".unActive-7-h1");
const active_8_p = document.querySelector(".unActive-8-p");
const active_8_h1 = document.querySelector(".unActive-8-h1");
const active_9_p = document.querySelector(".unActive-9-p");
const active_9_h1 = document.querySelector(".unActive-9-h1");
const active_10_p = document.querySelector(".unActive-10-p");
const active_10_h1 = document.querySelector(".unActive-10-h1");
const active_11_p = document.querySelector(".unActive-11-p");
const active_11_h1 = document.querySelector(".unActive-11-h1");
const active_12_p = document.querySelector(".unActive-12-p");
const active_12_h1 = document.querySelector(".unActive-12-h1");
const active_13_p = document.querySelector(".unActive-13-p");
const active_13_h1 = document.querySelector(".unActive-13-h1");
const active_14_p = document.querySelector(".unActive-14-p");
const active_14_h1 = document.querySelector(".unActive-14-h1");
const active_15_p = document.querySelector(".unActive-15-p");
const active_15_h1 = document.querySelector(".unActive-15-h1");
const active_16_p = document.querySelector(".unActive-16-p");
const active_16_h1 = document.querySelector(".unActive-16-h1");
wrapper.addEventListener("scroll", () => {
  const scrollY = wrapper.scrollTop;
  //   1
  if (scrollY > 0 || scrollY > 5071) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1643182678807.jpg)";
    active_2_p.style.color = "transparent";
    active_2_h1.style.color = "transparent";
    active_1_p.style.color = "#ffffff";
    active_1_h1.style.color = "#ffffff";
  }
  //   2
  if (scrollY > 239.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1674021346556.jpg)";
    active_2_p.style.color = "#ffffff";
    active_2_h1.style.color = "#ffffff";
    active_1_p.style.color = "transparent";
    active_1_h1.style.color = "transparent";
    active_3_p.style.color = "transparent";
    active_3_h1.style.color = "transparent";
  }
  //   3
  if (scrollY > 478.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1650855088952.jpg)";
    active_2_p.style.color = "transparent";
    active_2_h1.style.color = "transparent";
    active_3_p.style.color = "#ffffff";
    active_3_h1.style.color = "#ffffff";
    active_4_p.style.color = "transparent";
    active_4_h1.style.color = "transparent";
  }
  //   4
  if (scrollY > 718) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1654841637324.jpg)";
    active_3_p.style.color = "transparent";
    active_3_h1.style.color = "transparent";
    active_4_p.style.color = "#ffffff";
    active_4_h1.style.color = "#ffffff";
    active_5_p.style.color = "transparent";
    active_5_h1.style.color = "transparent";
  }
  //   5
  if (scrollY > 1020) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1650860673656.jpg)";
    active_6_p.style.color = "transparent";
    active_6_h1.style.color = "transparent";
    active_5_p.style.color = "#ffffff";
    active_5_h1.style.color = "#ffffff";
    active_4_p.style.color = "transparent";
    active_4_h1.style.color = "transparent";
  }
  //   6
  if (scrollY > 1340.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1647958034368.jpg)";
    active_5_p.style.color = "transparent";
    active_5_h1.style.color = "transparent";
    active_6_p.style.color = "#ffffff";
    active_6_h1.style.color = "#ffffff";
    active_7_p.style.color = "transparent";
    active_7_h1.style.color = "transparent";
  }
  //   7
  if (scrollY > 1705.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1648447508528.jpg)";
    active_6_p.style.color = "transparent";
    active_6_h1.style.color = "transparent";
    active_7_p.style.color = "#ffffff";
    active_7_h1.style.color = "#ffffff";
    active_8_p.style.color = "transparent";
    active_8_h1.style.color = "transparent";
  }
  //   8
  if (scrollY > 2055) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1643172892453.jpg)";
    active_7_p.style.color = "transparent";
    active_7_h1.style.color = "transparent";
    active_8_p.style.color = "#ffffff";
    active_8_h1.style.color = "#ffffff";
    active_9_p.style.color = "transparent";
    active_9_h1.style.color = "transparent";
  }
  //   9
  if (scrollY > 2370) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1656470305206.jpg)";
    active_8_p.style.color = "transparent";
    active_8_h1.style.color = "transparent";
    active_9_p.style.color = "#ffffff";
    active_9_h1.style.color = "#ffffff";
    active_10_p.style.color = "transparent";
    active_10_h1.style.color = "transparent";
  }
  //   10
  if (scrollY > 2710.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1645530607487.jpg)";
    active_9_p.style.color = "transparent";
    active_9_h1.style.color = "transparent";
    active_10_p.style.color = "#ffffff";
    active_10_h1.style.color = "#ffffff";
    active_11_p.style.color = "transparent";
    active_11_h1.style.color = "transparent";
  }
  //   11
  if (scrollY > 3050.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1645613759404.jpg)";
    active_10_p.style.color = "transparent";
    active_10_h1.style.color = "transparent";
    active_11_p.style.color = "#ffffff";
    active_11_h1.style.color = "#ffffff";
    active_12_p.style.color = "transparent";
    active_12_h1.style.color = "transparent";
  }
  //   12

  if (scrollY > 3385) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1645533029533.jpg)";
    active_11_p.style.color = "transparent";
    active_11_h1.style.color = "transparent";
    active_12_p.style.color = "#ffffff";
    active_12_h1.style.color = "#ffffff";
    active_13_p.style.color = "transparent";
    active_13_h1.style.color = "transparent";
  }
  //   13
  if (scrollY > 3725) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1657675897228.jpg)";
    active_12_p.style.color = "transparent";
    active_12_h1.style.color = "transparent";
    active_13_p.style.color = "#ffffff";
    active_13_h1.style.color = "#ffffff";
    active_14_p.style.color = "transparent";
    active_14_h1.style.color = "transparent";
  }
  //   14
  if (scrollY > 4070.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1650861010183.jpg)";
    active_13_p.style.color = "transparent";
    active_13_h1.style.color = "transparent";
    active_14_p.style.color = "#ffffff";
    active_14_h1.style.color = "#ffffff";
    active_15_p.style.color = "transparent";
    active_15_h1.style.color = "transparent";
  }
  //   15
  if (scrollY > 4330) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1664513507687.jpg)";
    active_14_p.style.color = "transparent";
    active_14_h1.style.color = "transparent";
    active_15_p.style.color = "#ffffff";
    active_15_h1.style.color = "#ffffff";
    active_16_p.style.color = "transparent";
    active_16_h1.style.color = "transparent";
  }
  //   1
  if (scrollY > 4571.5) {
    wrapper.style.backgroundImage =
      "url(https://www.magnumvint.com/upload/homepage/portfolio/1643182678807.jpg)";
    active_15_p.style.color = "transparent";
    active_15_h1.style.color = "transparent";
    active_16_p.style.color = "#ffffff";
    active_16_h1.style.color = "#ffffff";
  }
});
