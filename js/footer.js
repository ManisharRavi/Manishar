const createFooter =() => {
    let footer = document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
    <img src="image/logo.png" class="logo" alt="logo">
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">Gadgets</li>
        <li><a href="#" class="footer-link">Mobiles</a></li>
        <li><a href="#" class="footer-link">Laptops</a></li>
        <li><a href="#" class="footer-link">Watch</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">Automobiles</li>
        <li><a href="#" class="footer-link">Car</a></li>
        <li><a href="#" class="footer-link">Bikes</a></li>
        <li><a href="#" class="footer-link">e-cycle</a></li>
      </ul>
    </div>
  </div>
   <p class="info">support emails - help@gd.com,
    customersupport@ty.com</p>
    <p class="info">telephonr - 9876543210, 9753124680</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-links">terms & services</a>
        <a href="#" class="social-links">privacy policy</a>
      </div>
      <div>
        <a href="#" class="social-links">Instagram</a>
        <a href="#" class="social-links">Facebook</a>
      </div>
    </div>
    <p class="footer-credit">Purchase and sale of used merchandise and repair services</p>

    `;
}

createFooter();
