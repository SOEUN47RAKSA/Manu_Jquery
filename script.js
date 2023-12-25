$(document).ready(function() {
    // Initial filter category
    let currentCategory = 'all';
  
    // Handle filter button click
    $('.filter-buttons button').click(function() {
      $('.filter-buttons button').removeClass('active');
      $(this).addClass('active');
  
      currentCategory = $(this).data('category');
  
      filterImages();
    });
  
    function filterImages() {
      if (currentCategory === 'all') {
        $('.image').show();
      } else {
        $('.image').hide();
        $(`.image[data-category="${currentCategory}"]`).show();
        $(`.image[data-category=${currentCategory}]`).show();

      }
    }
  });
  
