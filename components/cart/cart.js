let cart = [];
let toCart = document.querySelector('#toCart');
let btnToCart = document.querySelector('.btnToCart');
let cartProducts = document.querySelector('#cartProducts');
let deleteProducts = document.querySelector('#deleteProducts');
let buy = document.querySelector('#buy');
let totalCart = document.querySelector('#totalCart');

let btnView = document.querySelector('#btnView');
let modal = document.querySelector('#modal');
let cartLink = document.querySelector('#cartLink');
let modalClose = document.querySelector('#modalClose');

// Количество товаров в корзине

cartLength = 0;

function cartSum() {
  if (cartLength !== 0) {
    cartLink.innerHTML = `
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <b>(${cartLength})</b>
    `; 
  } else {
    cartLink.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i>`;
  };
};  

  // Добавление товаров в корзину 

  function addToCart(id) {
    let sel = document.querySelector('#sel');
    if(products[id].name === cart[id]) {
      cart[id].selSize +=`, ${sel.value}`;
      cart[id].price = cart[id].price + products[id].price;
      cart[id].quantity = cart[id].quantity + products[id].quantity;
      cartLength++;
      cartSum();
      renderCart();
    } else {
        products[id].selSize = sel.value;
        cart.push(products[id]);
        renderCart();
        cartLength++;
        cartSum();
        totalPrice();
        modal.style.display = 'none';
      }        
  };

// Удаление товара из корзины

  function removeFromCart(id) {
    let index = cart.indexOf(products[id]);
    //products[id] хранит объект. indexOf ищет такой же объект в cart
    //когда находит совпадение, присваивает его позицию переменной index
    cart.splice(index, 1);
    totalPrice();
    renderCart();
    cartLength = cart.length;
    cartSum();
  };

// Очистить корзину

deleteProducts.addEventListener('click', ()=> {
  cart = [];
  cartLength = 0;
  cartSum();
  totalPrice();
  renderCart();
});


// Итого к оплате

function totalPrice() {
  productsInCart = 0;
  cart.forEach((i) => {
    productsInCart += i.price;
  });
  totalCart.innerHTML = `Итого: <b>${productsInCart} ₽</b>`;
};

// Модальное окно корзины

function renderCart() {
  if(cart.length === 0) {
    cartProducts.innerHTML = `
      <h4> Ничего не добавлено <h4/>
    `;
    deleteProducts.disabled = true;
    buy.disabled = true;
  } else {
    cartProducts.innerHTML = '';
    cart.forEach((i) => {
      cartProducts.innerHTML += `
        <li class="modal__window_product">   
          <img class="modal__window_img" src="${i.img}">
          <div class="modal__window_description">
            <span><b>${i.name} (${i.selSize}) ${i.quantity} шт.</b></span>
            <span>${i.price} ₽</span>
          </div>
          <button id="${i.id}" class="modal__window_btn"
          onclick = "removeFromCart(id)">
          ✖</button>
        </li>
      `;
    });
      deleteProducts.disabled = false;
      buy.disabled = false;
  };
};

  cartLink.addEventListener('click', () => {
      modal.style.display = 'flex';
      renderCart();
      totalPrice();
  });

  modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  });
