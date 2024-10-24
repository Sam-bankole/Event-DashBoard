document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item, .nav-item-not");
  const navItemsDiv = document.querySelectorAll(
    ".nav-item > div, .Notification > div"
  );
  const collapse = document.querySelector(".collapse");
  const collapseDiv = document.querySelector(".collapse > div");
  const Logoname = document.querySelector(".side-logo > div");
  const darkModeToggle = document.querySelector(".darkmode-toggle");
  const themeCheckbox = document.querySelector(".theme-checkbox");
  const profile = document.querySelector(".profile > div");
  const logo = document.querySelector(".side-logo > img");
  const sideBar = document.querySelector(".sideBar");
  const notification = document.querySelector(".nav-item-not > span");
  const openSvg = document.querySelector(".open-svg");
  const collapseSvg = document.querySelector(".collapse-svg");
  const profileEmail = document.querySelector(".profile-email");
  const body = document.body;

  // Nav item click
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((i) => {
        i.classList.remove("active", "darkmode-active");
        i.style.backgroundColor = "";
        i.style.color = "";

        const svg = i.querySelector("svg");
        if (svg) {
          svg.style.stroke = "";
        }
      });

      item.classList.add("active");

      if (themeCheckbox.checked) {
        // Dark mode styles
        item.classList.add("darkmode-active");
        item.style.backgroundColor = "#8576ff";
        item.style.color = "#FCF7FF";

        // dark mode svg
        const svg = item.querySelector("svg");
        if (svg) {
          svg.style.stroke = "#FCF7FF";
        }
      } else {
        // Default mode styles
        item.style.backgroundColor = "#fcf7ff";
        item.style.color = "#8576ff";

        // default mode svg
        const svg = item.querySelector("svg");
        if (svg) {
          svg.style.stroke = "#8576ff";
        }
      }
    });
  });

  //
  // Handle collapse toggle click
  collapse.addEventListener("click", () => {
    if (window.innerWidth > 770) {
      const allIcons = document.querySelectorAll(
        ".nav-item svg, .Notification svg"
      );
      const allCollapseIcons = document.querySelectorAll(
        ".nav-item svg, .Notification svg"
      );
      const isCollapsed = sideBar.style.width === "64px";

      if (isCollapsed) {
        // Expand sidebar
        allCollapseIcons.forEach(
          (collapseIcon) => (collapseIcon.style.stroke = "")
        );
        allIcons.forEach((icon) => (icon.style.stroke = ""));
        collapseSvg.style.display = "none";
        openSvg.style.display = "block";
        sideBar.style.width = "16vw";
        sideBar.style.overflow = "";
        sideBar.style.transitionDuration = "0.5s";

        navItemsDiv.forEach((div) => (div.style.display = ""));
        collapseDiv.style.display = "";
        Logoname.style.display = "";
        darkModeToggle.style.display = "";
        profile.style.display = "";
        logo.style.width = "";
        notification.style.fontSize = "";
        notification.style.padding = "";
      } else {
        // Collapse sidebar
        allIcons.forEach((icon) => (icon.style.stroke = "none"));
        allCollapseIcons.forEach(
          (collapseIcon) => (collapseIcon.style.stroke = "#64748B")
        );
        collapseSvg.style.display = "block";
        openSvg.style.display = "none";
        sideBar.style.width = "64px";
        sideBar.style.overflow = "hidden";
        sideBar.style.transitionDuration = "0.5s";

        navItemsDiv.forEach((div) => (div.style.display = "none"));
        collapseDiv.style.display = "none";
        Logoname.style.display = "none";
        darkModeToggle.style.display = "none";
        profile.style.display = "none";
        notification.style.fontSize = "1px";
        notification.style.padding = "5px";
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 770) {
      sideBar.style.width = "";
      sideBar.style.overflow = "hidden";
      sideBar.style.transitionDuration = "0.5s";
      collapseSvg.style.display = "block";
      openSvg.style.display = "none";
      navItemsDiv.forEach((div) => (div.style.display = "none"));
      collapseDiv.style.display = "none";
      Logoname.style.display = "none";
      darkModeToggle.style.display = "none";
      profile.style.display = "none";
      notification.style.fontSize = "1px";
      notification.style.padding = "5px";
    }
  });

  // DarkMode Toggle
  function toggleDarkMode() {
    const dashboardComponents = document.querySelectorAll(
      ".dashboard, .stats-title, .top-layer, .stats-digit, .y-axis, .labels"
    );
    const resBar = document.querySelector(".res-bar");
    const resColor = document.querySelector(".res-logo-title");
    const resSVG = document.querySelectorAll("#menuToggle svg, #close-svg svg");
    const detRow = document.querySelectorAll(".details-row");
    const bottomBar = document.querySelector(" .bottom-nav");
    const navBarIcon = document.querySelectorAll(
      ".nav-option, .nav-option svg "
    );
    const topLayerStats = document.querySelectorAll(
      ".top-layer-stats, #searchBar, #filterDate, #filterStatus, #filterName, #sortOption, #exportBtn, #tableBody, #rowsPerPage, .table-menu, #prevPage, #nextPage, .table-menu>svg, #exportBtn>svg"
    );
    const chartDiv = document.querySelector(".chart-div");
    const gridLine = document.querySelectorAll(
      ".grid-line-ver, .grid-line-hor"
    );

    const svgDarkMode = document.querySelectorAll(
      "#prevPage>svg, #nextPage>svg"
    );

    const tHead = document.querySelector("thead");
    const container = document.getElementById("tableContainer");

    if (themeCheckbox.checked) {
      sideBar.style.backgroundColor = "#484554";
      sideBar.style.borderRight = "#484554";
      body.style.backgroundColor = "#383544";
      sideBar.style.color = "#FCF7FF";
      openSvg.style.stroke = "#FFFFFF";
      collapseSvg.style.stroke = "#FFFFFF";
      profileEmail.style.color = "#FCF7FF";
      chartDiv.style.backgroundColor = "#484554";
      chartDiv.style.border = "none";
      tHead.style.backgroundColor = "#6A6676";
      container.classList.add("dark-mode");
      resColor.style.color = "#ffffff";
      resBar.style.backgroundColor = "#484554";
      resBar.style.border = "none";
      bottomBar.style.backgroundColor = "#383544";

      topLayerStats.forEach((component) => {
        component.style.backgroundColor = "#484554";
        component.style.border = "none";
        component.style.stroke = "#FFFFFF";
      });

      gridLine.forEach((component) => {
        component.style.display = "block";
      });

      resSVG.forEach((component) => {
        component.style.stroke = "#FCF7FF";
      });

      detRow.forEach((component) => {
        component.style.backgroundColor = "#383544";
      });

      navBarIcon.forEach((component) => {
        component.style.color = "#FCF7FF";
        component.style.stroke = "#FCF7FF";
      });

      svgDarkMode.forEach((component) => {
        component.style.stroke = "#8576FF";
      });

      dashboardComponents.forEach((component) => {
        component.style.color = "#FFFFFF";
      });

      const activeNavItem = document.querySelector(
        ".nav-item.active, .Notification.active, .nav-item-not.active"
      );
      if (activeNavItem) {
        activeNavItem.classList.add("darkmode-active");
        activeNavItem.style.backgroundColor = "#8576ff";
        activeNavItem.style.color = "#FCF7FF";

        const svg = activeNavItem.querySelector("svg");
        if (svg) {
          svg.style.stroke = "#FCF7FF";
        }
      }
    } else {
      resBar.style.backgroundColor = "";
      resBar.style.border = "";
      resColor.style.color = "";
      sideBar.style.backgroundColor = "";
      body.style.backgroundColor = "";
      sideBar.style.color = "";
      sideBar.style.borderRight = "none";
      sideBar.style.borderLeft = "none";
      openSvg.style.stroke = "";
      collapseSvg.style.stroke = "";
      profileEmail.style.color = "";
      chartDiv.style.backgroundColor = "";
      chartDiv.style.border = "";
      tHead.style.backgroundColor = "";
      bottomBar.style.backgroundColor = "";
      container.classList.remove("dark-mode");

      resSVG.forEach((component) => {
        component.style.stroke = "";
      });

      detRow.forEach((component) => {
        component.style.backgroundColor = "";
      });

      dashboardComponents.forEach((component) => {
        component.style.color = "";
      });

      topLayerStats.forEach((component) => {
        component.style.backgroundColor = "";
        component.style.border = "";
        component.style.stroke = "#141414";
      });

      gridLine.forEach((component) => {
        component.style.display = "";
      });

      svgDarkMode.forEach((component) => {
        component.style.stroke = "#334155";
      });

      const activeNavItem = document.querySelector(
        ".nav-item.active, .Notification.active, .nav-item-not.active"
      );
      if (activeNavItem) {
        activeNavItem.classList.remove("darkmode-active");
        activeNavItem.style.backgroundColor = "#fcf7ff";
        activeNavItem.style.color = "#8576ff";

        const svg = activeNavItem.querySelector("svg");
        if (svg) {
          svg.style.stroke = "#8576ff";
        }
      }
    }
  }

  darkModeToggle.addEventListener("click", () => {
    themeCheckbox.checked = !themeCheckbox.checked;
    toggleDarkMode();
  });

  themeCheckbox.addEventListener("click", () => {
    themeCheckbox.checked = !themeCheckbox.checked;
    toggleDarkMode();
  });

  themeCheckbox.addEventListener("change", toggleDarkMode);

  toggleDarkMode();
});

//
// DashBoard Code

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const indicators = document.querySelectorAll(".indicator");
let autoSlide;

// Slide Code
// display current slide
function showSlide(index) {
  const slidesContainer = document.querySelector(".slides");
  currentSlide = (index + totalSlides) % totalSlides;
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators();
}

// update active indicator bar
function updateIndicators() {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === currentSlide);
  });
}

// previous slide btn
function prevSlide() {
  showSlide(currentSlide + 1);
}

// next slide btn
function nextSlide() {
  showSlide(currentSlide - 1);
}

// current slide continuation
function goToSlide(index) {
  showSlide(index);
  restartAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    prevSlide();
  }, 3500);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

function restartAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// slide control
document.querySelector(".arrow-left-con").addEventListener("click", () => {
  prevSlide();
  restartAutoSlide();
});

document.querySelector(".arrow-right-con").addEventListener("click", () => {
  nextSlide();
  restartAutoSlide();
});

// pause slide on hover
document
  .querySelector(".slide-con")
  .addEventListener("mouseenter", stopAutoSlide);
document
  .querySelector(".slide-con")
  .addEventListener("mouseleave", startAutoSlide);

document.addEventListener("DOMContentLoaded", () => {
  startAutoSlide();
  showSlide(0);
});

// Table Content Code
// Sample Data
const data = [
  {
    eventName: "Digital Transformation Summit",
    date: "2024-01-10",
    speaker: "David Harris",
    status: "In Progress",
    eventDescription:
      "A summit focused on digital transformation strategies for businesses.",
    attendees: 300,
  },
  {
    eventName: "Cybersecurity Summit",
    date: "2024-04-20",
    speaker: "Dr. Sarah Lee",
    status: "Completed",
    eventDescription:
      "An event dedicated to the latest trends and technologies in cybersecurity.",
    attendees: 500,
  },
  {
    eventName: "AI in Healthcare Conference",
    date: "2024-03-15",
    speaker: "John Doe",
    status: "Completed",
    eventDescription: "Exploring the impact of AI in the healthcare industry.",
    attendees: 450,
  },
  {
    eventName: "Blockchain Expo",
    date: "2024-05-05",
    speaker: "Jessica Tan",
    status: "In Progress",
    eventDescription:
      "An expo showcasing the latest blockchain technology advancements.",
    attendees: 700,
  },
  {
    eventName: "Marketing Innovations Forum",
    date: "2024-02-28",
    speaker: "Michael Brown",
    status: "Completed",
    eventDescription: "A forum discussing innovative marketing strategies.",
    attendees: 400,
  },
  {
    eventName: "Future of Work Summit",
    date: "2024-06-18",
    speaker: "Alice Morgan",
    status: "In Progress",
    eventDescription:
      "A summit addressing the changes in the workplace and future trends.",
    attendees: 350,
  },
  {
    eventName: "Tech Leaders Summit",
    date: "2024-07-25",
    speaker: "Samuel Johnson",
    status: "Completed",
    eventDescription:
      "Gathering the top tech leaders to discuss industry trends.",
    attendees: 600,
  },
  {
    eventName: "SaaS Growth Conference",
    date: "2024-08-14",
    speaker: "Emma Williams",
    status: "In Progress",
    eventDescription:
      "Exploring the growth potential and challenges in the SaaS industry.",
    attendees: 800,
  },
  {
    eventName: "Startups and Investors Forum",
    date: "2024-09-12",
    speaker: "Chris Parker",
    status: "In Progress",
    eventDescription: "Connecting startups with potential investors.",
    attendees: 1000,
  },
  {
    eventName: "Renewable Energy Expo",
    date: "2024-10-22",
    speaker: "Dr. Alan Smith",
    status: "Completed",
    eventDescription: "An expo showcasing renewable energy solutions.",
    attendees: 900,
  },
  {
    eventName: "Cloud Computing Symposium",
    date: "2024-11-30",
    speaker: "Laura Green",
    status: "In Progress",
    eventDescription: "Discussing the latest developments in cloud computing.",
    attendees: 750,
  },
  {
    eventName: "E-commerce Summit",
    date: "2024-12-05",
    speaker: "James Wilson",
    status: "Completed",
    eventDescription: "Exploring the future of e-commerce.",
    attendees: 550,
  },
  {
    eventName: "VR/AR Expo",
    date: "2024-02-01",
    speaker: "Samantha Wright",
    status: "In Progress",
    eventDescription:
      "Showcasing advancements in virtual and augmented reality.",
    attendees: 670,
  },
  {
    eventName: "Financial Technology Conference",
    date: "2024-03-22",
    speaker: "Tom Anderson",
    status: "Completed",
    eventDescription: "Exploring the innovations in financial technology.",
    attendees: 920,
  },
  {
    eventName: "EdTech Forum",
    date: "2024-04-30",
    speaker: "Olivia Davis",
    status: "In Progress",
    eventDescription: "Discussing the impact of technology on education.",
    attendees: 300,
  },
  {
    eventName: "Smart Cities Expo",
    date: "2024-05-17",
    speaker: "Richard Lee",
    status: "Completed",
    eventDescription: "Showcasing smart city innovations and technologies.",
    attendees: 850,
  },
  {
    eventName: "Robotics and Automation Summit",
    date: "2024-06-10",
    speaker: "Emily Martinez",
    status: "In Progress",
    eventDescription: "Exploring the future of robotics and automation.",
    attendees: 650,
  },
  {
    eventName: "Data Science Forum",
    date: "2024-07-20",
    speaker: "Mark Thompson",
    status: "Completed",
    eventDescription: "Discussing the latest trends in data science.",
    attendees: 530,
  },
  {
    eventName: "Game Development Expo",
    date: "2024-08-08",
    speaker: "Jennifer Hall",
    status: "In Progress",
    eventDescription: "Showcasing the latest in game development technologies.",
    attendees: 770,
  },
  {
    eventName: "Space Exploration Summit",
    date: "2024-09-01",
    speaker: "Elon Rogers",
    status: "Completed",
    eventDescription: "Exploring advancements in space exploration.",
    attendees: 1100,
  },
  {
    eventName: "5G Technology Symposium",
    date: "2024-10-15",
    speaker: "Angela White",
    status: "In Progress",
    eventDescription: "Discussing the impact of 5G technology.",
    attendees: 920,
  },
  {
    eventName: "Biotech Innovations Conference",
    date: "2024-11-09",
    speaker: "Dr. Brian Harris",
    status: "Completed",
    eventDescription: "Showcasing the latest biotech innovations.",
    attendees: 680,
  },
  {
    eventName: "Internet of Things Expo",
    date: "2024-12-20",
    speaker: "Linda Clark",
    status: "In Progress",
    eventDescription: "Exploring the future of IoT and connected devices.",
    attendees: 740,
  },
  {
    eventName: "Climate Change Forum",
    date: "2024-01-22",
    speaker: "Dr. Ethan Lewis",
    status: "Completed",
    eventDescription: "Discussing strategies to combat climate change.",
    attendees: 870,
  },
  {
    eventName: "Ethical AI Summit",
    date: "2024-02-14",
    speaker: "Jessica Taylor",
    status: "In Progress",
    eventDescription: "Exploring the ethics surrounding AI development.",
    attendees: 660,
  },
  {
    eventName: "Quantum Computing Conference",
    date: "2024-03-25",
    speaker: "Matthew Evans",
    status: "Completed",
    eventDescription: "Showcasing the potential of quantum computing.",
    attendees: 970,
  },
  {
    eventName: "Digital Payments Forum",
    date: "2024-04-11",
    speaker: "Paul Carter",
    status: "In Progress",
    eventDescription: "Discussing the evolution of digital payments.",
    attendees: 590,
  },
  {
    eventName: "Healthcare Innovations Summit",
    date: "2024-05-09",
    speaker: "Dr. Emily Johnson",
    status: "Completed",
    eventDescription: "Exploring the latest innovations in healthcare.",
    attendees: 810,
  },
  {
    eventName: "Machine Learning Symposium",
    date: "2024-06-04",
    speaker: "Daniel Roberts",
    status: "In Progress",
    eventDescription: "Discussing advancements in machine learning.",
    attendees: 730,
  },
  {
    eventName: "Creative Arts Expo",
    date: "2024-07-13",
    speaker: "Natalie Turner",
    status: "Completed",
    eventDescription: "Celebrating creativity in arts and design.",
    attendees: 620,
  },
];

let currentPage = 1;
let rowsPerPage = 10;
let filteredData = [...data];

// table data rendering
function renderTable(data, page = 1, rows = 10) {
  const start = (page - 1) * rows;
  const end = start + rows;
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  data.slice(start, end).forEach((row, index) => {
    const rowElement = `
        <tr data-index="${index}" class="top-row">
          <td class="td-event-name" >
          <div class="arrow-container">
      <div class="drop-arrow" style="cursor: pointer;">
        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.75 0.75L4.25 4L0.75 7.25" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="up-arrow" style="cursor: pointer; display: none;">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
         <div class="control-modal"> ${row.eventName}</div></td>
          <td class="td-event-date">${row.date}</td>
          <td class= "td-evetn-speaker" >${row.speaker}</td>
          <td class="Status-label"><span class="${
            row.status === "Completed"
              ? "status-completed"
              : "status-in-progress"
          }"><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#10B981"/>
            </svg> ${row.status}</span>
          </td>
        </tr>
        <tr class="details-row" style="display: none;">
  <td colspan="4">
    <div class="drop-down-det">
      <div>${row.date}</div>
      <div>${row.speaker}</div>
    </div>
  </td>
</tr>
      `;
    tableBody.insertAdjacentHTML("beforeend", rowElement);
  });

  updatePagination(data.length);
  document.getElementById("totalResults").textContent = data.length;

  const tableRows = document.querySelectorAll("#tableBody tr .control-modal");
  tableRows.forEach((row, index) => {
    row.addEventListener("click", () => openModal(index + start));
  });
}

// open modal
function openModal(index) {
  const event = filteredData[index];
  if (!event) return;

  document.querySelector(".modal .event-name div:first-child").textContent =
    event.eventName;
  document.querySelector(".modal .event-date").textContent = event.date;
  document.querySelector(".modal .event-decp").textContent =
    event.eventDescription;
  document.querySelector(".modal .speaker-names").innerHTML = `<span>${
    event.speaker ? 1 : 0
  }</span> Guest Speaker: ${event.speaker}.`;
  document.querySelector(
    ".modal .attendees"
  ).textContent = `${event.attendees} Attendees`;

  document.querySelector(".Modal-con").style.display = "block";
}

// close modal
function closeModal() {
  document.querySelector(".Modal-con").style.display = "none";
}

// close icon listener
document
  .querySelector(".modal .close-icon")
  .addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("Modal-con")) {
    closeModal();
  }
});

// pagination update
function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const paginationNumbers = document.getElementById("paginationNumbers");
  paginationNumbers.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageElement = `<button onclick="goToPage(${i})" class=${
      i === currentPage
        ? "paginationNumbersActive"
        : "paginationNumbersInActive"
    }>${i}</button>`;
    paginationNumbers.insertAdjacentHTML("beforeend", pageElement);
  }

  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages;
}

function goToPage(page) {
  currentPage = page;
  renderTable(filteredData, currentPage, rowsPerPage);
}

// pagination controls
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  goToPage(currentPage + 1);
});

// rows Page Change
document.getElementById("rowsPerPage").addEventListener("change", (e) => {
  rowsPerPage = parseInt(e.target.value);
  currentPage = 1;
  renderTable(filteredData, currentPage, rowsPerPage);
});

renderTable(filteredData, currentPage, rowsPerPage);

//

// Responsive JS

const menuToggle = document.getElementById("menuToggle");
const menuContainer = document.getElementById("menuContainer");
const closeIcon = document.getElementById("close-svg");

// screen size function
function initializeMenu() {
  if (window.innerWidth <= 770) {
    menuContainer.style.display = "none";
    closeIcon.style.display = "none";

    function toggleMenu() {
      if (
        menuContainer.style.display === "none" ||
        menuContainer.style.display === ""
      ) {
        menuContainer.style.display = "block";
        closeIcon.style.display = "block";
        menuToggle.style.display = "none";
      } else {
        menuContainer.style.display = "none";
        closeIcon.style.display = "none";
        menuToggle.style.display = "block";
      }
    }

    menuToggle.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);
  }
}

function handleScreenResize() {
  if (window.innerWidth <= 770) {
    initializeMenu();
  }
}

handleScreenResize();

window.addEventListener("resize", handleScreenResize);

window.addEventListener("resize", () => {
  window.location.reload();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    window.location.reload();
  }, 500);
});

// table drop down details
document.querySelectorAll(".arrow-container").forEach((container) => {
  const dropArrow = container.querySelector(".drop-arrow");
  const upArrow = container.querySelector(".up-arrow");

  const parentRow = container.closest("tr");
  const detailsRow = parentRow.nextElementSibling;

  // update the background color based n checkbox
  const updateBackgroundColor = (isExpanded) => {
    if (themeCheckbox.checked) {
      parentRow.style.backgroundColor = isExpanded ? "#514E5D" : "";
      parentRow.style.borderBottom = isExpanded ? "none" : "";
    } else {
      parentRow.style.backgroundColor = isExpanded ? "#F2F2F7" : "";
      parentRow.style.borderBottom = isExpanded ? "1px solid #FCF7FF" : "";
    }
  };

  // drop arrow clcik event
  dropArrow.addEventListener("click", () => {
    dropArrow.style.display = "none";
    upArrow.style.display = "block";
    detailsRow.style.display = "table-row";
    updateBackgroundColor(true);
  });

  upArrow.addEventListener("click", () => {
    upArrow.style.display = "none";
    dropArrow.style.display = "block";
    detailsRow.style.display = "none";
    updateBackgroundColor(false);
  });
});

// scroll
document.addEventListener("DOMContentLoaded", function () {
  const bottomNav = document.getElementById("bottomNav");
  const triggerScrollDistance = 50;
  const screenThreshold = 682;

  function handleScroll() {
    if (window.innerWidth <= screenThreshold) {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      if (scrollY >= triggerScrollDistance) {
        bottomNav.classList.add("show");
        bottomNav.classList.remove("hide");
      } else {
        bottomNav.classList.remove("show");
        bottomNav.classList.add("hide");
      }

      if (scrollY <= triggerScrollDistance) {
        bottomNav.classList.add("hide");
      }

      if (scrollY + window.innerHeight >= maxScroll) {
        bottomNav.style.bottom = "0";
      } else {
        bottomNav.style.bottom = "-100px";
      }
    } else {
      bottomNav.classList.remove("show");
      bottomNav.classList.add("hide");
    }
  }

  // scroll event listener
  window.addEventListener("scroll", handleScroll);

  handleScroll();

  window.addEventListener("resize", handleScroll);
});
