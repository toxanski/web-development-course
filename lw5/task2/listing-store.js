window.onload = function () {

  // состояние приложения: данные
  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  // логика JS, не связана с DOM
  // данная функция работает только с состоянием
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function addToListingElements(element) {
    const elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }

  function deleteElement(element) {
    const elementPositionListing = listingElements.indexOf(element.textContent);
    if (elementPositionListing > -1) {
      listingElements.splice(elementPositionListing, 1);
    }
    const elementPositionStore = storeElements.indexOf(element.textContent);
    if (elementPositionStore > -1) {
      storeElements.splice(elementPositionStore, 1);
    }
  }

  function addNewElements() {
    const elementName = prompt('Введите название элемента');
    listingElements.push(elementName);
  }

  function changeTotalElements(element) {
    if (element.hasAttribute('listing-total')) {
      element.textContent = `Listing (${listingElements.length})`;
    } else if (element.hasAttribute('store-total')) {
      element.textContent = `Store (${storeElements.length})`;
    }
  }

  // updateUI берет данные из массивов и вставляет в DOM
  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    // вставка элементов из Listing
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    // вставка элементов из Store
    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }

    const totalListing = document.querySelector('.total-listing');
    const totalStore = document.querySelector('.total-store');
    changeTotalElements(totalListing);
    changeTotalElements(totalStore);
  } //

  // событие для кнопки "Add to store"
  var addButton = document.querySelector('#add-button');
  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    !selectedOption ? console.log('zero items') : addToStoreElements(selectedOption.innerText);
    updateUI();
  }

  // событие для кнопки "Add to listing"
  const listingButton = document.querySelector('#add-listing');
  listingButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('.store-select option:checked');
    !selectedOption ? console.log('zero items') : addToListingElements(selectedOption.innerText);
    updateUI();
  });

  //delete
  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('.select-block option:checked');
    !selectedOption ? console.log('Не выделен item') : deleteElement(selectedOption);
    updateUI();
  });

  //new el
  const newElementButton = document.querySelector('#add-element-button');
  newElementButton.addEventListener('click', () => {
    addNewElements();
    updateUI();
  });

  // запускаем начальное обновление интерфейса
  // для первоначального вывода данных из состояния в UI
  updateUI();

};