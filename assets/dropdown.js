// dropdown.js
(()=>{
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
  
    dropdownButtons.forEach(button => {
      button.addEventListener('click', function () {
        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle('hidden');
      });
    });
  
    // Đóng dropdown khi click bên ngoài
    document.addEventListener('click', function (event) {
      dropdownButtons.forEach(button => {
        const dropdown = button.nextElementSibling;
        if (!button.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.classList.add('hidden');
        }
      });
    });
})()
  