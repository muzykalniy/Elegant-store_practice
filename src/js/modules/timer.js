function timer() {
  // Дата окончания акции
  const endDate = new Date("Dec 04, 2024, 12:32:32");
  console.log(endDate);

  // Поиск элементов по ID
  const daysElement = document.querySelector("#days");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");
  let timerInterval;

  // Функция обновления таймера
  function updateTimer() {
    // Текущая дата и время
    const now = new Date();
    // Разница во времени в миллисекундах
    const timeDifference = endDate - now;

    // Окончания таймера
    if (timeDifference <= 0) {
      daysElement.innerText = "0";
      hoursElement.innerText = "0";
      minutesElement.innerText = "0";
      secondsElement.innerText = "0";
      clearInterval(timerInterval);
      return;
    }

    console.log("timeDifference", timeDifference); // Будет уменьшаться

    // Преобразование миллисекунд в дни, часы, минуты и секунды
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Обновление содержимого элементов на странице
    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
  }

  // Запуск функции обновления таймера
  updateTimer();

  // Запуск обновления таймера каждую секунду
  timerInterval = setInterval(updateTimer, 1000);
}

export default timer;
