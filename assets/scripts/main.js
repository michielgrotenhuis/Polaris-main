document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  var socialListBtn = document.querySelector(".float-social-list--toggle");
  var socialListContainer = document.querySelector(".float-social-list");
  var body = document.body;

  // check welcome store banner exist
  if (document.querySelector(".welcome-store--close--icon")) {
    // Welcome to store
    const welcomeStoreCloseIcon = document.querySelector(
        ".welcome-store--close--icon"
    );

    if (!localStorage.getItem("hide-welcome-store-banner")) {
      body.classList.add("show-welcome-store-banner");
    }

    welcomeStoreCloseIcon.onclick = function () {
      body.classList.remove("show-welcome-store-banner");
      localStorage.setItem("hide-welcome-store-banner", true);
    };
  }

  const accordionBtns = document.querySelectorAll(".accordion");
  accordionBtns.forEach((accordion) => {
    const accordionTrigger = accordion.querySelector(".accordion-trigger");

    accordionTrigger.onclick = function () {
      const openAccordions = document.querySelectorAll(".accordion.open");

      // Close all open accordions
      openAccordions.forEach((openAccordion) => {
        if (openAccordion !== accordion) {
          openAccordion.classList.remove("open");
          let openContent = openAccordion.querySelector(".accordion-content");
          openContent.style.maxHeight = null;
        }
      });

      accordion.classList.toggle("open");

      let content = accordion.querySelector(".accordion-content");

      if (content.style.maxHeight) {
        //this is if the accordion is open
        content.style.maxHeight = null;
      } else {
        //if the accordion is currently closed
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
  });

  //Mobile Menu Show
  var el = document.querySelector(".menu-toggle");
  var body = document.querySelector("body");
  el.onclick = function () {
    //Mobile Menu Items Transition Delay
    var menuItems = document.querySelectorAll(
        ".header-holder--navigation--mobile li"
    );

    menuItems.forEach((item, index) => {
      item.style.transitionDelay = index * 0.1 + "s";
    });

    el.classList.toggle("is-active");
    body.classList.toggle("menu-show");
  };

  //Mobile Menu Close Button Click
  var elClose = document.querySelector(
      ".header-holder--navigation--top .close-icon"
  );

  elClose.onclick = function () {
    body.classList.remove("menu-show");
  };

  //Variant Option Select
  var variantOptions = document.querySelectorAll(".variant-item--option--name");
  // if clcik on variant option add selected class name and remove from other options
  variantOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // remove selected class from parent and inside options
      var parent = option.closest(".variant-item--option--list");
      var options = parent.querySelectorAll(".variant-item--option--name");
      options.forEach((option) => {
        option.classList.remove("selected");
      });

      option.classList.add("selected");
    });
  });

  //Search Dropdown
  var searchField = document.querySelector(".search-input");
  var searchDropdown = document.querySelector(".search-dropdown");

  searchField.addEventListener("input", () => {
    if (searchField.value.length > 1) {
      document.onkeydown = function (e) {
        e = e || window.event;
        // enter pressing
        if (e.keyCode == 13) {
          // do something
        }

        if (e.keyCode == 27) {
          closeSearchOnEsc();
        }
      };

      searchDropdown.classList.add("active");
    } else {
      searchDropdown.classList.remove("active");
    }
  });
  //Search Toggle
  var searchOpen = document.querySelector(".search-open");
  var searchInput = document.querySelector(".search-input");
  var searchClose = document.querySelector(".search-close");
  var searchParent = document.querySelector("body");
  const searchContainer = document.querySelector(".search-container");
  const scrollWidth = window.innerWidth - searchParent.clientWidth;

  searchOpen.onclick = function () {
    // Fix page flicking when body overflow is hidden
    searchParent.style.width = `calc(100vw - ${scrollWidth}px)`;

    if (socialListBtn) {
      socialListBtn.style.right = `${scrollWidth + 24}px`;
    }

    if (socialListContainer) {
      socialListContainer.style.right = `${scrollWidth + 24}px`;
    }

    header.style.width = `calc(100vw - ${scrollWidth}px)`;

    searchParent.classList.add("search-show");
    body.classList.remove("menu-show");
    searchInput.focus();
  };

  searchClose.onclick = function () {
    if (socialListBtn) {
      socialListBtn.style.right = "24px";
    }

    if (socialListContainer) {
      socialListContainer.style.right = "24px";
    }

    searchParent.classList.remove("search-show");
    searchDropdown.classList.remove("active");
    searchField.value = "";
  };

  function closeSearchOnEsc() {
    if (socialListBtn) {
      socialListBtn.style.right = "24px";
    }

    if (socialListContainer) {
      socialListContainer.style.right = "24px";
    }

    searchParent.classList.remove("search-show");
    searchDropdown.classList.remove("active");
    searchField.value = "";
  }

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 27) {
      closeSearchOnEsc();
    }
  };

  //Search Outside Click Close
  var searchWrapper = document.querySelector(".search-wrapper");
  var searchOpenButton = document.querySelector(".search-open");
  document.addEventListener("click", function (event) {
    var isClickSearchContainer = searchWrapper.contains(event.target);
    var isClickSearchButtonContainer = searchOpenButton.contains(event.target);
    if (!isClickSearchContainer && !isClickSearchButtonContainer) {
      if (socialListBtn) {
        socialListBtn.style.right = "24px";
      }

      if (socialListContainer) {
        socialListContainer.style.right = "24px";
      }

      searchParent.classList.remove("search-show");
      searchDropdown.classList.remove("active");
    }
  });

  //Product All Carousel(Swiper Slider)
  const allProductSlideCount = document.querySelectorAll(
      ".product-list--item.swiper-slide"
  ).length;
  const allProductLoop = allProductSlideCount > 4;

  var productAll = new Swiper(".product-all--carousel", {
    loop: allProductLoop,
    initialSlide: 1,
    slidesPerView: 4,
    navigation: {
      nextEl: ".product-all--btn--next",
      prevEl: ".product-all--btn--prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 1,
      },
      420: {
        spaceBetween: 16,
        slidesPerView: 2,
      },
      767: {
        spaceBetween: 48,
        slidesPerView: 3,
      },
      992: {
        spaceBetween: 48,
        slidesPerView: 4,
      },
    },
  });

  //Float Social List
  if (socialListBtn) {
    socialListBtn.onclick = function () {
      socialListContainer.classList.toggle("is-active");
    };
    //Float Social List Outside Click
    document.addEventListener("click", function (event) {
      var isClickInsideElement = socialListContainer.contains(event.target);
      if (!isClickInsideElement) {
      }
    });
  }

  // Basket
  const basketBtn = document.querySelector(".basket .basket-icon");
  basketBtn.addEventListener("click", function () {
    body.classList.add("show-basket");
  });

  const basketBackdrop = document.querySelector(".basket-backdrop");
  basketBackdrop.addEventListener("click", function () {
    body.classList.remove("show-basket");
  });

  const closeBasketBtn = document.querySelector(".close-basket-btn");
  closeBasketBtn.addEventListener("click", function () {
    body.classList.remove("show-basket");
  });

  // Select
  const selectHeaders = document.querySelectorAll(".select-header");

  function closingSelect(selectOptionList) {
    selectOptionList.setAttribute("closing", "");
    selectOptionList.addEventListener(
        "animationend",
        () => {
          selectOptionList.removeAttribute("closing");
        },
        {once: true}
    );
  }

  if (selectHeaders) {
    selectHeaders.forEach((header) => {
      const select = header.closest(".select");
      let selectedValue = select.getAttribute("selected");
      const selectOptionList = select.querySelector(".select-body");
      const selectItems = select.querySelectorAll(
          "li.select-option--list--item"
      );
      const selectBackdrop = select.querySelector(".select-backdrop");
      const selectHeaderContent = select.querySelector(
          ".select-header--content"
      );

      if (selectedValue) {
        selectItems.forEach((item) => {
          if (item.getAttribute("value") === selectedValue) {
            selectHeaderContent.innerHTML = item.innerText;
          }
        });
      }

      // open select
      header.addEventListener("click", (e) => {

        select.setAttribute("open", "");
        selectOptionList.setAttribute("open", "");

        if (select.hasAttribute("open")) {
          selectItems.forEach((item, index) => {
            item.setAttribute("tabindex", index);

            // keyboard navigation
            item.addEventListener("keydown", (e) => {
              e.preventDefault();

              if (e.key === "ArrowDown") {
                if (index < selectItems.length - 1) {
                  selectItems[index + 1].focus();
                } else {
                  selectItems[0].focus();
                }
              }

              if (e.key === "ArrowUp") {
                if (index > 0) {
                  selectItems[index - 1].focus();
                } else {
                  selectItems[selectItems.length - 1].focus();
                }
              }

              // if enter key, select item
              if (e.key === "Enter" || e.key === " ") {
                selectHeaderContent.textContent = item.textContent;
                selectedValue = item.getAttribute("value");

                select.removeAttribute("open");
                selectOptionList.removeAttribute("open");
                closingSelect(selectOptionList);

                if (!select.hasAttribute("open")) {
                  header.focus();
                }
              }

              // if press esc key and select is open, close select
              if (e.key === "Escape" || e.key === "Esc") {
                header.focus();
                select.removeAttribute("open");

                selectOptionList.removeAttribute("open");
                closingSelect(selectOptionList);
              }
            });

            // check if select is open and focus is on first item
            item.addEventListener("click", () => {
              selectHeaderContent.textContent = item.textContent;
              selectedValue = item.getAttribute("value");

              select.removeAttribute("open");
              selectOptionList.removeAttribute("open");
              closingSelect(selectOptionList);
            });


            if (selectedValue && selectItems) {
              selectItems.forEach((item) => {

                if (item.getAttribute("value") === selectedValue) {
                  item.focus();
                }
              });
            }
          });
        }

        // check if click outside option-list, then  close select
        selectBackdrop?.addEventListener("click", () => {
          select.removeAttribute("open");
          selectOptionList.removeAttribute("open");
          closingSelect(selectOptionList);
        });
      });
    });
  }
});
