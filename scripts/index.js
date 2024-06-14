const initialCards = [
    {
      name:"Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },

    {
        name:"Lake Louise",
        link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },

    {
        name:"Bald Mountains",
        link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },

    {
        name:"Latemar",
        link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },

    {
        name:"Vanoise National Park",
        link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    
    {
        name:"Lago di Braies",
        link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },
];

/* -------------------------------------------------------------------------- */
/*                                   ELEMENT                                  */
/* -------------------------------------------------------------------------- */
 const profileEditButton = document.querySelector("#profile-edit-button");
 const profileCloseButton = document.querySelector(".modal__close");
 const profileEditModal = document.querySelector("#profile-edit-modal");
 const profileTitle = document.querySelector("#profile-title");
 const profileDescription = document.querySelector("#profile-description");
 const profileTitleInput = document.querySelector("#profile-title-input")
 const profileDescriptionInput = document.querySelector("#profile-description-input");
 const profileEditForm = profileEditModal.querySelector(".modal__form");
 const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
 const cardListEl = document.querySelector(".cards__list");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
 function closePopup(){
    profileEditModal.classList.remove("modal_opened");
 }
 function  getCardElement(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__title");
  
    cardTitleEl.textContent = cardData.name;
    cardImageEl.alt = cardData.name;
    cardImageEl.src = cardData.link;
    return cardElement;
  } 
 /* -------------------------------------------------------------------------- */
 /*                               EVENT HANDLERS                               */
 /* -------------------------------------------------------------------------- */

 function handleProfileEditSubmit (e) {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopup();
   }

/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */
 profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
   profileEditModal.classList.add("modal_opened");
 } );

 profileCloseButton.addEventListener("click", closePopup);

 profileEditForm.addEventListener("submit", handleProfileEditSubmit);

/* -------------------------------------------------------------------------- */
/*                                    LOOPS                                   */
/* -------------------------------------------------------------------------- */
for (let i = 0; i < initialCards.length; i++) {
    const card = getCardElement(initialCards[i]);
    cardListEl.append(card);
  }