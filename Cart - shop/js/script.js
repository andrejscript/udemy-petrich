'use strict';

window.addEventListener('DOMContentLoaded', () => {
  let products = document.querySelectorAll('.product'),
    buttons = document.querySelectorAll('button'),
    openBtn = document.querySelector('.open');

  function createCart() {
    let cart = document.createElement('div'),
      field = document.createElement('div'),
      title = document.createElement('div'),
      closeBtn = document.createElement('button');

    cart.classList.add('cart');
    field.classList.add('cart-field');
    closeBtn.classList.add('close');

    title.textContent = 'В вашей корзине:';
    closeBtn.textContent = 'Закрыть';

    document.body.appendChild(cart);
    cart.appendChild(title);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
  }

  createCart();

  let field = document.querySelector('.cart-field'),
      cart = document.querySelector('.cart'),
      close = document.querySelector('.close');

      function openCart() {
        cart.style.display = 'block';
      }

      function closeCart() {
        cart.style.display = 'none';
      }

      openBtn.addEventListener('click', openCart);
      close.addEventListener('click', closeCart);

      // for (let i = 0; i < buttons.length; i++) {
      //   buttons[i].addEventListener('click', () => {
      //     let item  = products[i].cloneNode(true),
      //     btn = item.querySelector('button');

      //     btn.remove();
      //     field.appendChild(item);
      //     products[i].remove();

      //   });
      // }

      buttons.forEach((item, i) => {
        item.addEventListener('click', () => {
          let el  = products[i].cloneNode(true),
          btn = el.querySelector('button');

          btn.remove();
          field.appendChild(el);
          products[i].remove();

        });
      });

});
