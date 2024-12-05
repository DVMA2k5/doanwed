
document.getElementById("showMoreButton").addEventListener("click", function() {
    var content = document.getElementById("content");
    content.classList.add("expanded");
    document.getElementById("showMoreButton").style.display = "none";
    document.getElementById("showLessButton").style.display = "inline-block";
});


document.getElementById("showLessButton").addEventListener("click", function() {
    var content = document.getElementById("content");
    content.classList.remove("expanded");
    document.getElementById("showMoreButton").style.display = "inline-block";
    document.getElementById("showLessButton").style.display = "none";
});

 // JavaScript để xử lý việc thêm sản phẩm vào giỏ hàng và hiển thị thông báo
 document.getElementById('addToCartButton').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút (chuyển trang)
    
    // Lấy thông tin sản phẩm từ trang
    const productName = document.querySelector('h1').textContent;
    const productPrice = document.querySelector('.gsp h3').textContent;
    const quantity = document.getElementById('Số Lượng').value;

    // Tạo thông báo đã thêm vào giỏ
    const cartMessage = document.getElementById('cartMessage');
    cartMessage.style.display = 'block';

    // Ẩn thông báo sau 3 giây
    setTimeout(function() {
        cartMessage.style.display = 'none';
    }, 3000);

    // Có thể thêm vào giỏ hàng ở đây (sử dụng localStorage hoặc gửi về server)
    console.log(`Sản phẩm: ${productName}, Giá: ${productPrice}, Số lượng: ${quantity}`);
});