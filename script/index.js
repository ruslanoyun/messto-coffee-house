const data = [
  {
    section: 'Завтраки',
    data: [
      {
        title: 'Глазунья c сосисками или беконом',
        description:
          '2 яйца, помидоры, огурцы, лист салата, хлеб c творожным сыром',
        price: '370p',
        image: 'images/food.jpg',
      },
      {
        title: 'Каша на молоке на миндальном, кокосовом молоке',
        description: 'на выбор рисовая или овсяная',
        price: '230p | 310p',
        image: 'images/food.jpg',
      },
      {
        title: 'Сырники со сметаной или сгущенным молоком',
        price: '290p',
        image: 'images/food.jpg',
      },
      {
        title: 'Блины со сметаной или сгущенным молоком',
        price: '210p',
        image: 'images/food.jpg',
      },
      {
        title: 'Хотролл с курицей или лососем',
        price: '390p | 430p',
        image: 'images/food.jpg',
      },
    ],
  },
  {
    section: 'Супы',
    data: [
      {
        title: 'Куриный суп с домашней лапшой',
        price: '320p',
        image: 'images/food.jpg',
      },
      {
        title: 'Грибной суп-пюре',
        price: '370p',
        image: 'images/food.jpg',
      },
      {
        title: 'Сырный суп-пюре',
        price: '370p',
        image: 'images/food.jpg',
      },
      {
        title: 'Тыквенный крем суп',
        price: '390p',
        image: 'images/food.jpg',
      },
      {
        title: 'Финская уха',
        price: '390p',
        image: 'images/food.jpg',
      },
    ],
  },
  {
    section: 'Пасты',
    data: [
      {
        title: 'Карбонара',
        price: '490p',
        image: 'images/food.jpg',
      },
      {
        title: 'Паста с курицей и грибами',
        price: '490p',
        image: 'images/food.jpg',
      },
      {
        title: 'Паста с лососем и шпинатом',
        price: '520p',
        image: 'images/food.jpg',
      },
    ],
  },
  {
    section: 'Листовой чай',
    data: [
      {
        title: 'Черный | зеленый',
        milliliters: '100 | 600мл',
        price: '100 | 160p',
        image: 'images/food.jpg',
      },
      {
        title: 'Жасминовый',
        milliliters: '100 | 600мл',
        price: '130 | 170p',
        image: 'images/food.jpg',
      },
      {
        title: 'Чай с чабрецом',
        milliliters: '100 | 600мл',
        price: '130 | 170p',
        image: 'images/food.jpg',
      },
      {
        title: 'Молочный улун',
        milliliters: '100 | 600мл',
        price: '130 | 170p',
        image: 'images/food.jpg',
      },
      {
        title: 'Гречишный',
        milliliters: '100 | 600мл',
        price: '130 | 170p',
        image: 'images/food.jpg',
      },
    ],
  },
  {
    section: 'Авторский чай',
    data: [
      {
        title: 'Облепиховый',
        milliliters: '100 | 600мл',
        price: '270 | 330p',
        image: 'images/food.jpg',
      },
      {
        title: 'Брусничный',
        milliliters: '100 | 600мл',
        price: '270 | 330p',
        image: 'images/food.jpg',
      },
      {
        title: 'Имбирный',
        milliliters: '100 | 600мл',
        price: '290 | 340p',
        image: 'images/food.jpg',
      },
      {
        title: 'Клубничный',
        milliliters: '100 | 600мл',
        price: '290 | 340p',
        image: 'images/food.jpg',
      },
      {
        title: 'Малиновый',
        milliliters: '100 | 600мл',
        price: '290 | 340p',
        image: 'images/food.jpg',
      },
      {
        title: 'Цитрусовый',
        milliliters: '100 | 600мл',
        price: '290 | 340p',
        image: 'images/food.jpg',
      },
      {
        title: 'Ягодный',
        milliliters: '100 | 600мл',
        price: '290 | 340p',
        image: 'images/food.jpg',
      },
      {
        title: 'Яблочный',
        milliliters: '100 | 600мл',
        price: '290 | 330p',
        image: 'images/food.jpg',
      },
    ],
  },
  {
    section: 'Напитки',
    data: [
      {
        title: 'Матча зеленая | синяя',
        milliliters: '250 | 350мл',
        price: '270p',
        image: 'images/food.jpg',
      },
      {
        title: 'Глинтвейн',
        milliliters: '250 | 350мл',
        price: '290p',
        image: 'images/food.jpg',
      },
      {
        title: 'Какао',
        milliliters: '250 | 350мл',
        price: '220 | 260p',
        image: 'images/food.jpg',
      },
      {
        title: 'Какао с маршмеллоу',
        milliliters: '250 | 350мл',
        price: '240 | 280p',
        image: 'images/food.jpg',
      },
      {
        title: 'Горячий шоколад',
        milliliters: '250 | 350мл',
        price: '250 | 280p',
        image: 'images/food.jpg',
      },
    ],
  },
  {
    section: 'Смузи',
    data: [
      {
        title: 'Клубничный',
        milliliters: '350мл',
        price: '310p',
        image: 'images/food.jpg',
      },
      {
        title: 'Тропический',
        milliliters: '350мл',
        price: '310p',
        image: 'images/food.jpg',
      },
      {
        title: 'Ягодный',
        milliliters: '350мл',
        price: '330p',
        image: 'images/food.jpg',
      },
      {
        title: 'Морковно-апельсивный с куркумой',
        milliliters: '350мл',
        description: 'ПП смузи',
        price: '310p',
        image: 'images/food.jpg',
      },
      {
        title: 'Смузи из свеклы, яблока и меда',
        milliliters: '350мл',
        description: 'ПП смузи',
        price: '310p',
        image: 'images/food.jpg',
      },
      {
        title: 'Смузи из сельдерея и банана',
        milliliters: '350мл',
        description: 'ПП смузи',
        price: '310p',
        image: 'images/food.jpg',
      },
    ],
  },
];

const menuContainer = document.getElementById('menu-container');

data.forEach((section) => {
  const sectionElement = document.createElement('div');
  sectionElement.classList.add('menu-section');
  sectionElement.id = `section-${section.section}`;

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = section.section;
  sectionElement.appendChild(sectionTitle);

  const itemsContainer = document.createElement('div');
  itemsContainer.classList.add('menu-items');

  section.data.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('menu-item');

    if (item.image) {
      const itemImage = document.createElement('img');
      itemImage.src = item.image;
      itemImage.alt = item.title;
      itemElement.appendChild(itemImage);
    }

    const infoElement = document.createElement('div');
    infoElement.classList.add('item-info');

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = item.title;
    infoElement.appendChild(itemTitle);

    if (item.description) {
      const itemDescription = document.createElement('p');
      itemDescription.textContent = item.description;
      infoElement.appendChild(itemDescription);
    }

    if (item.milliliters) {
      const itemMill = document.createElement('div');
      itemMill.classList.add('milliliters');
      itemMill.textContent = item.milliliters;
      infoElement.appendChild(itemMill);
    }

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('price');
    itemPrice.textContent = item.price;
    infoElement.appendChild(itemPrice);

    itemElement.appendChild(infoElement);
    itemsContainer.appendChild(itemElement);
  });

  sectionElement.appendChild(itemsContainer);
  menuContainer.appendChild(sectionElement);
});
