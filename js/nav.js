const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="image/logo.png" class="brand-logo">
    <div class="nav-items">
      <div class="search" id="search-container">
        <input type="search" class="search-box" id="search-input" placeholder="Search the product">
        <button class="search-btn" id="search">Search</button>
      </div>
      <a>
      <img src="image/user.png" onclick="toggleMenu()">
      <div class="sub-menu-warp" id="subMenu">
        <div class="sub-menu">
            <div class="user-info">
                <h3>User name</h3>
            </div>
            <hr>

            <a href="#" class="sub-menu-link">
              <p>Edit Profile</p>
              <span>></span>
            </a>
            <a href="postad.html" class="sub-menu-link">
              <p>Post AD</p>
              <span>></span>
            </a>
            <a href="applicationn.html" class="sub-menu-link">
              <p>Need Mechanic</p>
              <span>></span>
            </a>
            <a href="#" class="sub-menu-link">
              <p>My post</p>
              <span>></span>
            </a>
            <a href="#" class="sub-menu-link" id="logout">
              <p>Logout</p>
              <span>></span>
            </a>


        </div>
    </div>
    </a>
      <a href="#"><img src="image/cart.png"></a>
    </div>
  </div>
  <ul class="Links-container">
    <li class="Link-item"><a href="home.html" class="Link">Home</a></li>
    <li class="Link-item" onclick="filterProduct('Cars')"><a href="#" class="Link">Cars</a></li>
    <li class="Link-item" onclick="filterProduct('Bikes')"><a href="#" class="Link">Bikes</a></li>
    <li class="Link-item" onclick="filterProduct('Mobiles')"><a href="#" class="Link">Mobiles</a></li>
    <li class="Link-item" onclick="filterProduct('Appliances')"><a href="#" class="Link">Home Appliances</a></li>
  </ul>
  `;      
}


createNav();

//toggle

let subMenu = document.getElementById("subMenu");
      
        function toggleMenu(){
          subMenu.classList.toggle("open-menu");
        }