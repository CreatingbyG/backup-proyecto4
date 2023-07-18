const editButton = document.querySelector('.edit-button');
const btnClosed = document.querySelector('.popup__btn-closed');
const addButton = document.querySelector('.add-button');
const btnClosedImages = document.querySelector('.popup__btn-closed');

editButton.addEventListener('click', openPopUpProfile);
btnClosed.addEventListener('click', closePopUpProfile);
addButton.addEventListener('click', openPopUpImages);
btnClosedImages.addEventListener('click', closePopUpImages);

function openPopUpProfile() {
  const popUpProfile = document.querySelector('.popup__user');
  popUpProfile.classList.add('popup_opened');
}

function closePopUpProfile() {
  const btnClosed = document.querySelector('.popup__user');
  popUpProfile.classList.remove('popup_opened');
}

function openPopUpImages() {
  const popUpFormImages = document.querySelector('.popup__img');
  popUpFormImages.classList.add('popup_opened');
}

function closePopUpImages() {
  const btnClosedImages = document.querySelector('.popup');
  popUpFormImages.classList.remove('popup_opened');
}

function handlerProfileFormSubmit(e) {
  e.preventDefault();

  let nameInput = document.querySelector('.popup__container-input');
  let jobInput = document.querySelector('.popup__container-input');

  titulo.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopUpProfile();
}
