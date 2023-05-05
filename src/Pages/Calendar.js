import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const days = [];
  let day = 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        week.push(null);
      } else if (day > daysInMonth) {
        break;
      } else {
        week.push(day);
        day++;
      }
    }
    days.push(week);
  }

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-between w-full mb-8">
        <button
          className="px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
          onClick={prevMonth}
        >
          Prev
        </button>
        <div className="text-2xl font-medium text-gray-800">
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <button
          className="px-4 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
          onClick={nextMonth}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-4">
    {daysOfWeek.map((day) => (
      <div
        key={day}
        className="flex items-center justify-center text-lg font-medium text-gray-800"
      >
        {day}
      </div>
    ))}
    {days.map((week, weekIndex) =>
      week.map((day, dayIndex) => (
        <div
          key={`${weekIndex}-${dayIndex}`}
          className="flex items-center justify-center h-16 text-lg font-medium text-gray-800"
        >
          {day}
        </div>
      ))
    )}
  </div>
</div>
);
};

export default Calendar;