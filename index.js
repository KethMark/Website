const navLinks = document.querySelectorAll('.sidebar a');

// Add event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the href attribute of the clicked link
    const href = event.target.getAttribute('href');
    console.log(href);
    // Use the href to determine which content to show
    if (href === 'dashboard') {
      // Show dashboard content
    } else if (href === 'User') {
      // Show user content
    } else if (href === 'Doctor') {
      // Show doctor content
    } else if (href === 'Updated') {
      // Show updated content
    } else if (href === 'Delete') {
      // Show delete content
    } else if (href === 'Settings') {
      // Show settings content
    } else if (href === 'Help') {
      // Show help content
    } else if (href === 'logout') {
      // Show logout content
    }
  });
});


