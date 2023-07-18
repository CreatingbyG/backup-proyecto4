const editButton = document.querySelector('.edit-button');
const btnClosed = document.querySelector('.popup__btn-closed');
const addButton = document.querySelector('.add-button');
const btnClosedImages = document.querySelector('.popup__btn-closed');

editButton.addEventListener('click', openPopUpProfile);
btnClosed.addEventListener('click', closePopUpProfile);
addButton.addEventListener('click', openPopUpImages);
btnClosedImages.addEventListener('click', closePopUpImages);

// PATRÓN DE COMPONENTES
function createModal(modalName, labelOne, valueOne, labelTwo, valueTwo) {
  return /* HTML */ `
    <div class="popup">
      <form class="popup__container">
        <fieldset class="popup__container-texts">
          <h4 class="popup__container-title">${modalName}</h4>
          <input
            type="text"
            class="popup__container-input"
            placeholder="${labelOne}"
            value="${valueOne}"
          />
          <input
            type="text"
            class="popup__container-input"
            placeholder="${labelTwo}"
            value="${valueTwo}"
          />
          <button class="popup__btn-closed">
            <img src="/images/Close Icon.svg" />
          </button>
        </fieldset>
        <fieldset class="popup__handlers">
          <button type="submit" class="save__button">Crear</button>
        </fieldset>
      </form>
    </div>
  `;
}

function openPopUpProfile() {
  const popUpProfile = document.querySelector('.popup');
  popUpProfile.classList.add('popup_opened');
  const exampleSection = document.querySelector('#example');
  const resultHTML = createModal(
    'Editar perfil',
    'Nombre',
    '',
    'Acerca de mi',
    ''
  );
  console.log('resultHTML', resultHTML);
  exampleSection.innerHTML = resultHTML;
}

function closePopUpProfile() {
  const btnClosed = document.querySelector('.popup');
  popUpProfile.classList.remove('popup_opened');
}

function openPopUpImages() {
  const popUpFormImages = document.querySelector('.popup');
  popUpFormImages.classList.add('.popup_opened');

  const exampleSection = document.querySelector('#example');

  const resultHTML = createModal(
    'Nuevo Lugar',
    'Título',
    '',
    'Enlace a tu imagen',
    ''
  );
  exampleSection.innerHTML = resultHTML;
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
