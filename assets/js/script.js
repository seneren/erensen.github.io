'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });














// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
// const modalImg = document.querySelector("[data-modal-img]");   activate if you want img in testimonials
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

//    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;   activate if you want img in testimonials
//    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;    activate if you want img in testimonials
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
//const navigationLinks = document.querySelectorAll("[data-nav-link]");
//const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
//for (let i = 0; i < navigationLinks.length; i++) {
//  navigationLinks[i].addEventListener("click", function () {

//    for (let i = 0; i < pages.length; i++) {
//      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//        pages[i].classList.add("active");
//        navigationLinks[i].classList.add("active");
//        window.scrollTo(0, 0);
//      } else {
//        pages[i].classList.remove("active");
//        navigationLinks[i].classList.remove("active");
//      }
//    }

//  });
//}

















// page navigation variables   FROM https://quantumbagel.github.io/#about 

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
let defaultPage = "";

 for (let i = 0; i < pages.length; i++) {
        if (pages[i].classList.contains("active")) {
           defaultPage = pages[i];
        }
 }
window.onhashchange = function () {
     location.hash = location.hash.toLowerCase();
    let foundNew = false;
    console.log(location.hash);
    for (let i = 0; i < pages.length; i++) {
      if (decodeURI(location.hash.slice(1).toLowerCase()) === pages[i].dataset.page) {
          pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
        foundNew = true;
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
    if (!foundNew) {
        location.hash = "#" + defaultPage.dataset.page;
        defaultPage.classList.add("active");
      }
};

window.onhashchange(undefined);

// Update the navigation link click handler
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    location.hash = this.innerHTML.toLowerCase();

    if (this.innerHTML.toLowerCase() === 'portfolio') {
      // Clean up single view if active
      const singleViewTitle = document.querySelector('.project-title.single-view');
      if (singleViewTitle) {
        singleViewTitle.remove();
      }
      
      // Show all original titles
      document.querySelectorAll('.project-title').forEach(title => {
        title.style.visibility = '';
      });

      filterProjects('all');
      
      filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === 'all') {
          btn.classList.add('active');
        }
      });

      const selectValue = document.querySelector('[data-selecct-value]');
      if (selectValue) {
        selectValue.textContent = 'All';
      }

      projectList.classList.remove('viewing-single');
      goBackContainer.style.display = 'none';

      const filterList = document.querySelector('.filter-list');
      const filterSelect = document.querySelector('.filter-select-box');
      if (filterList) filterList.style.display = '';
      if (filterSelect) filterSelect.style.display = '';

      projectItems.forEach(item => {
        item.style.display = 'block';
        const projectContent = item.querySelector('.project-content');
        if (projectContent) {
          projectContent.style.display = 'none';
        }
      });

      // Clean up categories
      document.querySelectorAll('.project-category').forEach(category => {
        category.style.visibility = '';
      });
      document.querySelectorAll('.project-category.single-view').forEach(category => {
        category.remove();
      });
    }
  });
});

// Project and filter functionality
const projectItems = document.querySelectorAll('.project-item');
const projectList = document.querySelector('.project-list');
const goBackContainer = document.querySelector('.go-back-container');
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const selectBtns = document.querySelectorAll('[data-select-item]');

// Filter function
function filterProjects(category) {
  projectItems.forEach(item => {
    const itemCategories = item.dataset.category.split(',').map(cat => cat.trim());
    const projectContent = item.querySelector('.project-content');
    
    if (category === 'all' || itemCategories.includes(category)) {
      item.classList.add('active');
      item.style.display = 'block';
      if (projectContent) {
        projectContent.style.display = 'none';
      }
    } else {
      item.classList.remove('active');
      item.style.display = 'none';
    }
  });
}

// Update filter buttons click handler
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons and add to clicked button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    // Filter projects
    const category = this.textContent.toLowerCase();
    filterProjects(category);

    // Update mobile select value
    const selectValue = document.querySelector('[data-selecct-value]');
    if (selectValue) {
      // Capitalize the first letter of each word
      const capitalizedCategory = category.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      selectValue.textContent = capitalizedCategory;
    }

    // Update select buttons state
    selectBtns.forEach(selectBtn => {
      if (selectBtn.textContent.toLowerCase() === category) {
        selectBtn.classList.add('active');
      } else {
        selectBtn.classList.remove('active');
      }
    });
  });
});

// Update select items handler (mobile dropdown)
selectBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.textContent.toLowerCase();
    
    // Update filter buttons state
    filterBtns.forEach(filterBtn => {
      if (filterBtn.textContent.toLowerCase() === category) {
        filterBtn.classList.add('active');
      } else {
        filterBtn.classList.remove('active');
      }
    });

    // Update select buttons state
    selectBtns.forEach(selectBtn => {
      if (selectBtn === this) {
        selectBtn.classList.add('active');
      } else {
        selectBtn.classList.remove('active');
      }
    });

    filterProjects(category);
  });
});

// Update the project item click handler
projectItems.forEach(item => {
  item.addEventListener('click', function(e) {
    // Prevent click if we're not in single view and clicked on category
    if (!projectList.classList.contains('viewing-single') && 
        e.target.closest('.project-category')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (projectList.classList.contains('viewing-single')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (!item.classList.contains('active')) return;

    // Hide all other project items
    projectItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style.display = 'none';
      }
    });

    // Hide filter elements
    const filterList = document.querySelector('.filter-list');
    const filterSelect = document.querySelector('.filter-select-box');
    if (filterList) filterList.style.display = 'none';
    if (filterSelect) filterSelect.style.display = 'none';

    // Show back button
    goBackContainer.style.display = 'flex';

    // Add viewing-single class to project list
    projectList.classList.add('viewing-single');

    // Create and position a new title element
    const originalTitle = item.querySelector('.project-title');
    const singleViewTitle = document.createElement('h3');
    singleViewTitle.textContent = originalTitle.textContent;
    singleViewTitle.className = 'project-title single-view';
    
    // Hide the original title
    originalTitle.style.visibility = 'hidden';
    
    // Add the new title to the project list
    projectList.insertBefore(singleViewTitle, projectList.firstChild);
    
    // Position title to align with back button vertically
    const backButtonRect = goBackContainer.getBoundingClientRect();
    const projectListRect = projectList.getBoundingClientRect();
    singleViewTitle.style.top = `${backButtonRect.top - projectListRect.top}px`;

    // Show project content
    const projectContent = item.querySelector('.project-content');
    if (projectContent) {
      projectContent.style.display = 'block';
      
      const originalCategory = item.querySelector('.project-category');
      originalCategory.style.visibility = 'hidden';
      
      // Create new category element with multiple categories
      const categories = item.dataset.category.split(',').map(cat => cat.trim());
      const categoryContainer = document.createElement('p');
      categoryContainer.className = 'project-category single-view';
      
      // Create individual category spans - simplified version
      const categorySpans = categories.map((cat, index) => {
        const isLast = index === categories.length - 1;
        return `<span class="category-value" data-category="${cat}" style="cursor: pointer;">${cat}${!isLast ? ', ' : ''}</span>`;
      }).join('');
      
      categoryContainer.innerHTML = `<span class="category-label">Category: </span>${categorySpans}`;
      projectContent.appendChild(categoryContainer);

      // Add click handlers for each category span
      categoryContainer.querySelectorAll('.category-value').forEach(catSpan => {
        catSpan.style.pointerEvents = 'auto'; // Enable clicking
        catSpan.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent event bubbling
          const category = catSpan.dataset.category;
          
          // Navigate to portfolio and filter
          location.hash = 'portfolio';
          
          setTimeout(() => {
            // Remove single view elements
            const singleViewTitle = document.querySelector('.project-title.single-view');
            if (singleViewTitle) {
              singleViewTitle.remove();
            }
            
            // Show all original titles and categories
            document.querySelectorAll('.project-title, .project-category').forEach(el => {
              el.style.visibility = '';
            });
            
            // Remove single view categories
            document.querySelectorAll('.project-category.single-view').forEach(el => {
              el.remove();
            });
            
            // Show filter elements
            const filterList = document.querySelector('.filter-list');
            const filterSelect = document.querySelector('.filter-select-box');
            if (filterList) filterList.style.display = '';
            if (filterSelect) filterSelect.style.display = '';
            
            // Hide back button
            goBackContainer.style.display = 'none';
            
            // Remove viewing-single class
            projectList.classList.remove('viewing-single');
            
            // Filter projects by the clicked category
            filterProjects(category);
            
            // Update filter buttons UI
            filterBtns.forEach(btn => {
              btn.classList.remove('active');
              if (btn.textContent.toLowerCase() === category) {
                btn.classList.add('active');
              }
            });
            
            // Update select value for mobile
            const selectValue = document.querySelector('[data-selecct-value]');
            if (selectValue) {
              // Capitalize the first letter of each word
              const capitalizedCategory = category.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
              selectValue.textContent = capitalizedCategory;
            }
          }, 100);
        });
      });
    }
  });
});

// Add this to prevent category clicks when not in single view
document.querySelectorAll('.project-category').forEach(category => {
  category.addEventListener('click', (e) => {
    if (!projectList.classList.contains('viewing-single')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  });
});

// Update back button functionality
goBackContainer.addEventListener('click', () => {
  // Get current active filter
  const activeFilter = document.querySelector('[data-filter-btn].active');
  const category = activeFilter ? activeFilter.textContent.toLowerCase() : 'all';

  // Apply current filter
  filterProjects(category);

  // Show filter elements
  const filterList = document.querySelector('.filter-list');
  const filterSelect = document.querySelector('.filter-select-box');
  if (filterList) filterList.style.display = '';
  if (filterSelect) filterSelect.style.display = '';

  // Hide back button
  goBackContainer.style.display = 'none';

  // Remove viewing-single class
  projectList.classList.remove('viewing-single');

  // Remove single view title and show original titles
  const singleViewTitle = document.querySelector('.project-title.single-view');
  if (singleViewTitle) {
    singleViewTitle.remove();
  }
  
  document.querySelectorAll('.project-title').forEach(title => {
    title.style.visibility = '';
  });

  // Hide all project content
  projectItems.forEach(item => {
    const projectContent = item.querySelector('.project-content');
    if (projectContent) {
      projectContent.style.display = 'none';
    }
  });

  // Show original categories and remove single view categories
  document.querySelectorAll('.project-category').forEach(category => {
    category.style.visibility = '';
  });
  document.querySelectorAll('.project-category.single-view').forEach(category => {
    category.remove();
  });
});

// Blog functionality
const blogList = document.querySelector('.blog-posts-list');
const blogItems = document.querySelectorAll('.blog-post-item');

// Create and insert back button
const blogBackContainer = document.createElement('div');
blogBackContainer.className = 'blog-back-container';
blogBackContainer.innerHTML = '<ion-icon name="arrow-back-outline" class="go-back-icon"></ion-icon>';
document.querySelector('.blog-posts').insertBefore(blogBackContainer, blogList);

// Add click handler for blog posts
blogItems.forEach(item => {
  item.addEventListener('click', function(e) {
    if (blogList.classList.contains('viewing-single')) {
      return;
    }

    // Hide other blog posts
    blogItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style.display = 'none';
      }
    });

    // Show back button
    blogBackContainer.style.display = 'flex';

    // Add viewing-single class
    blogList.classList.add('viewing-single');
    item.classList.add('active');
  });
});

// Back button functionality
blogBackContainer.addEventListener('click', () => {
  // Show all blog posts
  blogItems.forEach(item => {
    item.style.display = 'block';
    item.classList.remove('active');
  });

  // Hide back button
  blogBackContainer.style.display = 'none';

  // Remove viewing-single class
  blogList.classList.remove('viewing-single');
});

// Update navigation handler for blog section
navigationLinks.forEach(link => {
  link.addEventListener("click", function() {
    if (this.innerHTML.toLowerCase() === 'blog') {
      // Reset blog view when navigating to blog section
      blogItems.forEach(item => {
        item.style.display = 'block';
        item.classList.remove('active');
      });
      blogBackContainer.style.display = 'none';
      blogList.classList.remove('viewing-single');
    }
  });
});

// Prevent clicking on blog-text when all blog posts are displayed
blogItems.forEach(item => {
  const blogText = item.querySelector('.blog-text');
  if (blogText) {
    blogText.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event from bubbling up to parent
    });
  }
});

document.querySelectorAll('.timeline-item').forEach(item => {
  const text = item.querySelector('.timeline-text');
  
  const toggle = document.createElement('div');
  toggle.className = 'timeline-toggle';
  toggle.textContent = '+ View details';
  item.insertBefore(toggle, text);

  // Create a clone to measure the full height
  const clone = text.cloneNode(true);
  clone.style.cssText = `
    position: absolute;
    visibility: visible;
    max-height: none;
    width: ${text.offsetWidth}px;
    left: -9999px;
  `;
  
  // Append clone to parent to get accurate height
  text.parentNode.appendChild(clone);
  
  // Get the full height including wrapped text
  const fullHeight = clone.scrollHeight;
  const hasBullets = clone.querySelector('li');
  const extraPadding = hasBullets ? 180 : 180; // Increased padding
  
  // Set the expanded height
  text.style.setProperty('--expanded-height', `${fullHeight + extraPadding}px`);
  
  // Clean up
  text.parentNode.removeChild(clone);

  toggle.addEventListener('click', () => {
    const isExpanding = !text.classList.contains('expanded');
    text.classList.toggle('expanded');
    toggle.textContent = isExpanding ? '- Hide details' : '+ View details';

    // Handle animations
    if (hasBullets) {
      const items = text.querySelectorAll('li');
      items.forEach((item, index) => {
        if (isExpanding) {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 100 + (index * 50));
        } else {
          const delay = (items.length - 1 - index) * 50;
          setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-10px)';
          }, delay);
        }
      });
    }
  });
});
