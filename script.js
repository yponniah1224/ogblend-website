function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}
 
function contactUs(productName) {
    const subject = `Order Inquiry: ${productName}`;
    const body = `Hi, I'm interested in ordering ${productName}. Please provide more details about pricing and shipping.`;
    const mailtoLink = `mailto:info@ogblend.store?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
 
function amazonSoon(productName) {
    const subject = `Amazon Availability: ${productName}`;
    const body = `Hi, I'm interested in ${productName}. Please notify me when it's available on Amazon.`;
    const mailtoLink = `mailto:info@ogblend.store?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
 
function showImage(dot, index) {
    const card = dot.closest('.product-card');
    const images = card.querySelectorAll('.product-img');
    const dots = card.querySelectorAll('.dot');
   
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
   
    images[index].classList.add('active');
    dot.classList.add('active');
}
 
function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
   
    const subject = `Contact Form: ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nPlease add me to your email list for updates and promotions.`;
    const mailtoLink = `mailto:info@ogblend.store?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});