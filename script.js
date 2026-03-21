function copyEmail() {
  // 1. Get the specific text inside the <a> tag
  const emailElement = document.getElementById('email-text');
  const emailToCopy = emailElement.textContent || emailElement.innerText;

  // 2. Get the status message element
  const status = document.getElementById('copy-status');

  // 3. Use the Clipboard API
  navigator.clipboard.writeText(emailToCopy).then(() => {
      // Show "Copied!"
      status.style.display = 'inline';
      
      // Hide after 2 seconds
      setTimeout(() => {
          status.style.display = 'none';
      }, 2000);
  }).catch(err => {
      console.error('Copy failed:', err);
  });
}

// Existing navigation logic
(function ($) {
$(window).on('load hashchange', function(){
  // First hide all content regions
  $('.content-region').hide();
  
  // Remove active classes
  $('.main-menu a').removeClass('active');
  
  // Get the current region from the URL hash
  var region = location.hash.toString() || $('.main-menu a:first').attr('href');
  
  // Show the region and set menu to active
  $(region).show();
  $('.main-menu a[href="'+ region +'"]').addClass('active'); 
});
})(jQuery);