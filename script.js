let toggleMenu = document.querySelector('#toggleMenu');
let modalMenu = document.querySelector('#modalMenu');
let modalMenuClose = document.querySelector('#modalMenuClose');
let modalBtnAllProducts = document.querySelector('#modalBtnAllProducts');
let modalBtnTshirt = document.querySelector('#modalBtnTshirt');
let modalBtnComplect = document.querySelector('#modalBtnComplect');


// Модальное окно меню 

toggleMenu.addEventListener('click', () => {
  modalMenu.style.display = 'block';
});

modalMenuClose.addEventListener('click', () => {
  modalMenu.style.display = 'none';
});

modalBtnAllProducts.addEventListener('click', () => {
  modalMenu.style.display = 'none';
  catalog.innerHTML = '';
  renderCatalog();
});

modalBtnTshirt.addEventListener('click', () => {
  modalMenu.style.display = 'none';
  catalog.innerHTML = '';
  products.forEach((i)=> {
    if (i.category === 'Футболки') {
      catalog.innerHTML += `
        <div class="card">
            <h3>${i.name}</h3>
            <img src="${i.img}">
            <p>₽ ${i.price}</p>
            <button id="${i.id}" class="btnToCart" onclick = "addToCart(id)">
            <i class="fa fa-cart-plus" aria-hidden="true"></i></button>
        </div>
        `;  
    };
  });
});

modalBtnComplect.addEventListener('click', () => {
  modalMenu.style.display = 'none';
  catalog.innerHTML = '';
  products.forEach((i)=> {
    if (i.category === 'Комплекты') {
      catalog.innerHTML += `
        <div class="card">
            <h3>${i.name}</h3>
            <img src="${i.img}">
              <p>₽ ${i.price}</p>
              <button id="${i.id}" class="btnToCart" onclick = "addToCart(id)">
              <i class="fa fa-cart-plus" aria-hidden="true"></i></button>
        </div>
        `;  
    };
  });
});
