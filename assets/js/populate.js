var total = 0;
function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    books.forEach((book, index) => {
        categoriesContainer.innerHTML +=
            `
            <div onclick="loadBooks('` + index + `')" class="card-btn shadow p-3 flex-grow-1">
              <div class="d-flex flex-column align-items-center justify-content-center h-100">
                <span class="category-icon d-md-none"><i class="fas fa-book-open" style="color: var(--secondary-color)"></i></span>
                <div class="card-title mb-2 d-none d-md-block subheading">`+ book.category + `</div>
                <p class="mb-0 d-none d-md-block">` + book.books.length + ` items</p>
                <span class="badge d-md-none" style="background-color: var(--primary-color)">` + book.books.length + `</span>
              </div>
            </div>
          `;
    });
    loadBooks(0);
}

function loadBooks(categoryIndex) {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";
    books[categoryIndex].books.forEach((book) => {
        maincontainer.innerHTML +=
            `<div onclick="addToReceipt('` + book.price + `','` + book.code + `')" class="col">
              <div class="card shadow-sm h-100">
                <img src="assets/img/` + book.coverImage + `" class="card-img-top pt-3" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                  <div class="badge position-absolute" style="background-color: var(--primary-color); top: 10px; right: 10px;">New</div>
                  <div class="subheading card-title" style="font-size:1rem;">` + book.title + `</div>
                  <div class=" h6 text-muted mb-3" style="font-size:0.9rem;">by ` + book.author + `</div>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="fw-bold">₱` + book.price + `</span>
                    <button class="cart-btn subheading py-1 px-2">
                      <i class="fa fa-cart-plus"></i> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
    });
}

function findExistingItem(code) {
    var items = document.querySelectorAll("#receipt > div");
    for (var i = 0; i < items.length; i++) {
        if (items[i].querySelector(".h6").textContent.trim() === code) {
            return items[i].id;
        }
    }
    return null;
}

function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");
    
    if (receiptContainer.innerHTML.includes("Thank you for shopping with us!")) {
        receiptContainer.innerHTML = "";
    }

    var existingId = findExistingItem(code);
    if (existingId) {
        updateQuantity(existingId, 1, price);
        return;
    }

    total = parseFloat(total) + parseFloat(price);

    var totalValueElement = document.getElementById("totalValue");
    if (totalValueElement) {
        totalValueElement.innerHTML = total.toFixed(2);
    }

    var itemId = 'cart-item-' + Date.now();

    receiptContainer.innerHTML +=
        `<div class="d-flex justify-content-between align-items-center py-2 border-bottom" id="` + itemId + `">
                <div class="w-40">
                    <div class="h6">` + code + `</div>
                </div>
                <div class="d-flex align-items-center">
                    <button class="cart-btn px-1 py-0" style="font-size:0.6rem;" onclick="updateQuantity('` + itemId + `', -1, ` + price + `)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="mx-2 quantity">1</span>
                    <button class="cart-btn px-1 py-0" style="font-size:0.6rem;" onclick="updateQuantity('` + itemId + `', 1, ` + price + `)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="text-end w-25">
                    <div class="fw-medium item-total">₱`+ parseFloat(price).toFixed(2) + `</div>
                </div>
                <div class="w-10 text-end">
                    <button class="btn btn-sm btn-outline-dark" onclick="removeItem('` + itemId + `', ` + price + `)">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>`;
    
    var checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
    }
}

function removeItem(itemId, price) {
    var itemElement = document.getElementById(itemId);
    var quantity = parseInt(itemElement.querySelector('.quantity').textContent);

    total = parseFloat(total) - (price * quantity);
    document.getElementById("totalValue").innerHTML = total.toFixed(2);

    itemElement.remove();
}

function updateQuantity(itemId, change, price) {
    var itemElement = document.getElementById(itemId);
    var quantityElement = itemElement.querySelector('.quantity');
    var itemTotalElement = itemElement.querySelector('.item-total');
    var totalValueElement = document.getElementById("totalValue");

    var currentQuantity = parseInt(quantityElement.textContent);
    var newQuantity = currentQuantity + change;

    if (newQuantity < 1) {
        removeItem(itemId, price);
        return;
    }

    quantityElement.textContent = newQuantity;

    var priceDifference = change * price;
    total = parseFloat(total) + priceDifference;
    totalValueElement.innerHTML = total.toFixed(2);

    var newItemTotal = newQuantity * price;
    itemTotalElement.innerHTML = '₱' + newItemTotal.toFixed(2);
}

function checkOut() {
    var receipt = document.getElementById("receipt");
    receipt.innerHTML = ""; // clear items
    total = 0;
    document.getElementById("totalValue").innerHTML = "0.00";
    receipt.innerHTML = `
            <div class='p-3 text-center'>
                <div class="h6">Thank you for shopping with us!</div>
            </div>
        `;
}

loadCategories();