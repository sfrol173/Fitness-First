"use strict";

const DATA = [
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m1.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "8 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f1.png",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m2.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Тетяна",
    "last name": "Мороз",
    photo: "./img/trainers/trainer-f2.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
  },
  {
    "first name": "Сергій",
    "last name": "Коваленко",
    photo: "./img/trainers/trainer-m3.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
  },
  {
    "first name": "Олена",
    "last name": "Лисенко",
    photo: "./img/trainers/trainer-f3.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
  },
  {
    "first name": "Андрій",
    "last name": "Волков",
    photo: "./img/trainers/trainer-m4.jpg",
    specialization: "Бійцівський клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
  },
  {
    "first name": "Наталія",
    "last name": "Романенко",
    photo: "./img/trainers/trainer-f4.jpg",
    specialization: "Дитячий клуб",
    category: "спеціаліст",
    experience: "3 роки",
    description:
      "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
  },
  {
    "first name": "Віталій",
    "last name": "Козлов",
    photo: "./img/trainers/trainer-m5.jpg",
    specialization: "Тренажерний зал",
    category: "майстер",
    experience: "10 років",
    description:
      "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
  },
  {
    "first name": "Юлія",
    "last name": "Кравченко",
    photo: "./img/trainers/trainer-f5.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
  },
  {
    "first name": "Олег",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-m6.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "12 років",
    description:
      "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
  },
  {
    "first name": "Лідія",
    "last name": "Попова",
    photo: "./img/trainers/trainer-f6.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
  },
  {
    "first name": "Роман",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m7.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
  },
  {
    "first name": "Анастасія",
    "last name": "Гончарова",
    photo: "./img/trainers/trainer-f7.jpg",
    specialization: "Басейн",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
  },
  {
    "first name": "Валентин",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-m8.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
  },
  {
    "first name": "Лариса",
    "last name": "Петренко",
    photo: "./img/trainers/trainer-f8.jpg",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "7 років",
    description:
      "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
  },
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m9.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "11 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f9.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m10.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Наталія",
    "last name": "Бондаренко",
    photo: "./img/trainers/trainer-f10.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "8 років",
    description:
      "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
  },
  {
    "first name": "Андрій",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m11.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
  },
  {
    "first name": "Софія",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-f11.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "6 років",
    description:
      "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
  },
  {
    "first name": "Дмитро",
    "last name": "Ковальчук",
    photo: "./img/trainers/trainer-m12.png",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
  },
  {
    "first name": "Олена",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-f12.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "5 років",
    description:
      "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
  },
];
const DATA_NEW = [];
DATA_NEW.push(...DATA);
// trainers constants
const originalData = DATA_NEW.slice(0);
const trainersList = document.querySelector(".trainers-cards__container");
const template = document.getElementById("trainer-card");
const templateFullInfo = document.getElementById("modal-template");
const trainerCardsContainer = document.querySelector(".trainers-cards");

// sorting
const sortingWrapper = document.querySelector(".sorting");
sortingWrapper.removeAttribute("hidden");

const sortingButtonAll = document.querySelectorAll(".sorting__btn");
for (let i = 0; i < sortingButtonAll.length; i++) {
  sortingButtonAll[i].setAttribute("data-sort", `${i}`);
}
sortingWrapper.addEventListener("click", (ev) => {
  const targetButton = ev.target.closest("button");
  if (ev.target == targetButton) {
    for (let i = 0; i < sortingButtonAll.length; i++) {
      sortingButtonAll[i].classList.remove("sorting__btn--active");
    }
    targetButton.classList.add("sorting__btn--active");

    if (
      targetButton.classList.contains("sorting__btn--active") &&
      targetButton.dataset.sort === "0"
    ) {
      DATA_NEW.splice(0, DATA_NEW.length);
      DATA_NEW.push(...originalData);
      trainersList.innerHTML = "";
      addCards(DATA_NEW);
    }

    if (
      targetButton.classList.contains("sorting__btn--active") &&
      targetButton.dataset.sort === "1"
    ) {
      DATA_NEW.sort(function (a, b) {
        if (a["last name"] < b["last name"]) {
          return -1;
        }
        if (a["last name"] > b["last name"]) {
          return 1;
        }
        return 0;
      });
      trainersList.innerHTML = "";
      addCards(DATA_NEW);
    }

    if (
      targetButton.classList.contains("sorting__btn--active") &&
      targetButton.dataset.sort === "2"
    ) {
      DATA_NEW.sort(function (a, b) {
        if (a["experience"] < b["experience"]) {
          return 1;
        }
        if (a["experience"] > b["experience"]) {
          return -1;
        }
        return 0;
      });
      trainersList.innerHTML = "";
      addCards(DATA_NEW);
    }
  }
});

//filter
const filterWrapper = document.querySelector(".sidebar");
filterWrapper.removeAttribute("hidden");
const form = document.forms[0];
DATA_NEW.forEach((item) => {
  if (item["specialization"] === "Тренажерний зал") {
    item.id = "gym";
  }
  if (item["specialization"] === "Бійцівський клуб") {
    item.id = "fight club";
  }
  if (item["specialization"] === "Дитячий клуб") {
    item.id = "kids club";
  }
  if (item["specialization"] === "Басейн") {
    item.id = "swimming pool";
  }

  if (item["category"] === "майстер") {
    item.data = "master";
  }
  if (item["category"] === "спеціаліст") {
    item.data = "specialist";
  }
  if (item["category"] === "інструктор") {
    item.data = "instructor";
  }
});
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const direction = document.querySelector(
    'input[name="direction"]:checked'
  ).value;
  const category = document.querySelector(
    'input[name="category"]:checked'
  ).value;
  DATA_NEW.splice(0);
  DATA.forEach((user) => {
    if (direction == user["id"] && category == user["data"]) {
      DATA_NEW.push(user);
    }
    if (direction == "all" && category == user["data"]) {
      DATA_NEW.push(user);
    }
    if (category == "all" && direction == user["id"]) {
      DATA_NEW.push(user);
    }
    if (direction == "all" && category == "all") {
      DATA_NEW.push(user);
    }
  });
  trainersList.innerHTML = "";
  addCards(DATA_NEW);
});

// appending trainers cards
document.addEventListener("DOMContentLoaded", addCards(DATA_NEW));

function addCards(arr) {
  arr.forEach((user) => {
    const trainerClone = template.content.cloneNode(true);

    const trainerName = trainerClone.querySelector(".trainer__name");
    const trainerImage = trainerClone.querySelector(".trainer__img");
    trainerName.textContent = user["first name"] + " " + user["last name"];
    trainerImage.setAttribute("src", user["photo"]);
    trainersList.append(trainerClone);
  });

  // trainers modules
  arr.forEach((user) => {
    const trainerCloneFullInfo = templateFullInfo.content.cloneNode(true);

    const trainerImageFullInfo =
      trainerCloneFullInfo.querySelector(".modal__img");
    const trainerNameFullInfo =
      trainerCloneFullInfo.querySelector(".modal__name");
    const trainerCategory = trainerCloneFullInfo.querySelector(
      ".modal__point--category"
    );
    const trainerExperience = trainerCloneFullInfo.querySelector(
      ".modal__point--experience"
    );
    const trainerSpecialization = trainerCloneFullInfo.querySelector(
      ".modal__point--specialization"
    );
    const trainerDescription =
      trainerCloneFullInfo.querySelector(".modal__text");

    trainerImageFullInfo.setAttribute("src", user["photo"]);
    trainerNameFullInfo.textContent =
      user["first name"] + " " + user["last name"];
    trainerCategory.textContent = "Категорія: " + user["category"];
    trainerExperience.textContent = "Досвід: " + user["experience"];
    trainerSpecialization.textContent =
      "Напрям тренера: " + user["specialization"];
    trainerDescription.textContent = user["description"];
    const modalClone = trainerCloneFullInfo.querySelector(".modal");
    modalClone.style.display = "none";
    trainersList.append(trainerCloneFullInfo);
  });

  // add trainers modules
  const modal = document.querySelectorAll(".modal");
  for (let i = 0; i < modal.length; i++) {
    modal[i].setAttribute("id", `${i}`);
  }

  const trainerButton = document.querySelectorAll(".trainer__show-more");
  for (let i = 0; i < trainerButton.length; i++) {
    trainerButton[i].setAttribute("data-id", `${i}`);
  }
  trainerButton.forEach((button) => {
    button.addEventListener("click", () => {
      const trainerId = button.dataset.id;
      const modalId = document.getElementById(trainerId);
      modalId.style.display = "block";
      document.body.classList.add("disable-scroll");
    });
  });
  const buttonClose = document.querySelectorAll(".modal__close");
  buttonClose.forEach((button) => {
    button.addEventListener("click", () => {
      for (let i = 0; i < modal.length; i++) {
        modal[i].style.display = "none";
      }
      document.body.classList.remove("disable-scroll");
    });
  });
}
