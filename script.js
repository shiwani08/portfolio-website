function showPage(pageId) {
      // Hide all sections
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => {
          page.classList.remove('active');
      });
  
      // Show the selected section
      const activePage = document.getElementById(pageId);
      activePage.classList.add('active');
  }
  