import flatpickr from "flatpickr";
import "./style.css";
import "flatpickr/dist/flatpickr.min.css";

document.addEventListener("DOMContentLoaded", function () {
  const datePicker = document.getElementById("datePicker") as HTMLInputElement;
  const messageParagraph = document.getElementById(
    "message"
  ) as HTMLParagraphElement;

  const now = new Date();

  flatpickr(datePicker, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    minDate: now,
    disable: [
      (date) => {
        return date.getDay() === 0 || date.getDay() === 6;
      },
    ],
  });

  datePicker.addEventListener("change", () => {
    const selectedDate = new Date(datePicker.value);
    const message = buildInterviewMessage(selectedDate);
    messageParagraph.textContent = message;
  });
});

const buildInterviewMessage = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const isToday = date.getDate() === today.getDate();
  const isTomorrow = date.getDate() === tomorrow.getDate();

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  const formattedDate = new Intl.DateTimeFormat("en-Gb", dateOptions).format(
    date
  );

  if (isToday) {
    return `We would like to conduct a short informational interview with you via video call today, ${formattedDate}.`;
  }

  return `We would like to conduct a short informational interview with you via video call ${
    isTomorrow ? `tomorrow on ${formattedDate}` : `on ${formattedDate}`
  }.`;
};
