const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const currentlyActive = document.querySelector('.accordion-header.active');
    if (currentlyActive && currentlyActive !== header) {
      currentlyActive.classList.remove('active');
      currentlyActive.nextElementSibling.style.display = 'none';
    }

    header.classList.toggle('active');
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
