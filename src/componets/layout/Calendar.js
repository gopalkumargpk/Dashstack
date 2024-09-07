import React, { useState } from 'react';
import '../../App.css';
import '../styles/Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getWeekDay = (date) => {
    const day = date.getDay();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays[day];
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();

    const calendar = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null);
        } else if (dayCounter > daysInMonth) {
          week.push(null);
        } else {
          const date = new Date(year, month, dayCounter);
          week.push({
            date,
            weekday: getWeekDay(date),
            selected: selectedDate && selectedDate.getDate() === date.getDate() && selectedDate.getMonth() === date.getMonth() && selectedDate.getFullYear() === date.getFullYear(),
          });
          dayCounter++;
        }
      }
      calendar.push(week);
    }
    return calendar;
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const calendar = generateCalendar();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="calendar-grid">
        {calendar.map((week, weekIndex) => (
          <div key={weekIndex} className="calendar-week">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`calendar-day ${day ? 'day-cell' : 'empty-cell'}`}
                onClick={() => day && handleDateClick(day.date)}
              >
                {day && (
                  <>
                    <div className="day-number">{day.date.getDate()}</div>
                    {day.selected && <div className="selected-day-overlay"></div>}
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="selected-date-info">
          <div>Selected Date:</div>
          <div>{selectedDate.toLocaleDateString()}</div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
