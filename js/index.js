// Знайдіть кнопки «Prev» та «Next» у DOM і додайте обробники подій (click).
// При натисканні на «Prev» слайдер має перемикатися на попередній слайд,
// а при натисканні на «Next» — на наступний.
// Після перемикання оновлюйте положення слайдів, щоб відобразити потрібний
// слайд.
// Додатково (опційно):
// Реалізуйте автоперегортання з таймером (наприклад, кожні 3 секунди).
// Додайте нижню навігацію (точки), які вказують, який слайд зараз активний.
// Реалізуйте плавний перехід між слайдами.
// Перевірте коректність роботи:

// Переконайтеся, що кнопки перемикають слайди без проблем.
// Перевірте, чи не виходять слайди за межі контейнера, і все виглядає акуратно.

// Пояснення завдання:
// HTML:
//
// У контейнері .slider-container є блок .slider, що містить кілька .slide.
// Початково перший слайд має клас active.
// Також є дві кнопки: .prev та .next.
// CSS:
//
// Встановлено фіксовану ширину 600px для слайдера, щоб усі слайди мали однаковий розмір.
// Використовується display: flex; для послідовного розташування слайдів.
// За переміщення відповідатиме властивість transform: translateX(...), яку ви змінюватимете у JavaScript.
// Анімація переміщення реалізується через transition: transform 0.5s ease;.
// JavaScript:
//
// Ваш код має відстежувати індекс поточного слайду (наприклад, змінна currentIndex).
// При натисканні на .prev зменшуйте індекс та змінюйте позицію .slider (наприклад, transform: translateX(-currentIndex * 600px)), а при натисканні на .next — збільшуйте.
// Не забудьте враховувати, що при переході за межі кількості слайдів потрібно повертатися до початку чи в кінець (або забороняти перехід).
// За бажання можете додати функцію автоперемикання з використанням setInterval.
// Зрештою, завдяки цим інструкціям ви отримаєте простий повноцінний слайдер з анімацією та кнопками керування. Успіхів у розробці!

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slider = document.querySelector(".slider");

nextBtn.addEventListener("click", () => {
  const activeSlide = document.querySelector(".active");
  document.querySelector(`.active + .slide`).classList.add("active");
  activeSlide.classList.remove("active");
  slider.append(activeSlide);
});

prevBtn.addEventListener("click", () => {
  const activeSlide = document.querySelector(".active");
  slider.lastElementChild.classList.add("active");
  activeSlide.classList.remove("active");
  slider.prepend(slider.lastElementChild);
});
