let catalog = document.querySelector('#catalog');
let mainDescription = document.querySelector('#mainDescription');
let btnAllProducts = document.querySelector('#btnAllProducts');
let btnTshirt = document.querySelector('#btnTshirt');
let btnComplect = document.querySelector('#btnComplect');
let modalProduct = document.querySelector('#modalProduct');

// Каталог

renderCatalog();

function renderCatalog() {
  products.forEach((i)=> {
    catalog.innerHTML += `
      <div class="card" id="${i.id}" onclick = "viewProduct(id)">
          <h3>${i.name}</h3>
          <img src="${i.img}">
          <p>₽ ${i.price}</p>
      </div>
      `;  
  });
};


// Отображение товаров по категориям

btnAllProducts.addEventListener('click', () => {
    catalog.innerHTML = '';
    mainDescription.innerHTML = `
      <h1>Добро пожаловать на Chelsea Store</h1>
      <h2>Атрибутика Chelsea FC</h2>
      <h2> Все товары </h2>
    `;
    renderCatalog();
  });
  
  btnTshirt.addEventListener('click', () => {
    catalog.innerHTML = '';
    mainDescription.innerHTML = `
    <h1>Добро пожаловать на Chelsea Store</h1>
    <h2>Атрибутика Chelsea FC</h2>
    <h2> Футболки </h2>
  `;
    products.forEach((i)=> {
      if (i.category === 'Футболки') {
        catalog.innerHTML += `
          <div class="card" id="${i.id}" onclick = "viewProduct(id)">
              <h3>${i.name}</h3>
              <img src="${i.img}">
              <p>₽ ${i.price}</p>
          </div>
          `;  
      };
    });
  });
  
  btnComplect.addEventListener('click', () => {
    catalog.innerHTML = '';
    mainDescription.innerHTML = `
    <h1>Добро пожаловать на Chelsea Store</h1>
    <h2>Атрибутика Chelsea FC</h2>
    <h2> Комплекты </h2>
  `;
    products.forEach((i)=> {
      if (i.category === 'Комплекты') {
        catalog.innerHTML += `
          <div class="card" id="${i.id}" onclick = "viewProduct(id)">
              <h3>${i.name}</h3>
              <img src="${i.img}">
              <p>₽ ${i.price}</p>
          </div>
          `;  
      };
    });
  });
  

// Модальное окно товара
function viewProduct(id) {
  modalProduct.style.display = 'flex';
   modalProduct.innerHTML = `
      <div class="modalProduct__window">
      <button class="modalProduct__window_close" id="modalProductClose">✕</button>
        <div class="modalProduct__window_description">
          <h1> ${products[id].name} </h1>
          <h3> ${products[id].price} ₽</h3>
        </div>
        <img src="${products[id].img}"></img>
        <span> ${products[id].availability} </span>
        <div class="modalProduct__window_input">
          <label> Размер </label>
          <select id="sel"> 
            <option> ${products[id].size[0]} </option>
            <option> ${products[id].size[1]} </option>
            <option> ${products[id].size[2]} </option>
          </select>
        </div>
        
        <button id="${products[id].id}" class="btnToCart" onclick = "addToCart(id)">
          <i class="fa fa-cart-plus" aria-hidden="true"></i></button>
      </div>
   `;
   let modalProductClose = document.querySelector('#modalProductClose');
    modalProductClose.addEventListener('click', () => {
      modalProduct.style.display = 'none';
    });
};