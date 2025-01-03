const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  
  function displayCalendar(month, year) {
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    document.getElementById("month").textContent = monthNames[month] + " " + year;
  
    let daysHTML = "";
    for (let i = 0; i < firstDay.getDay(); i++) {
      daysHTML += `<div></div>`;
    }
    for (let day = 1; day <= daysInMonth; day++) {
      daysHTML += `<div>${day}</div>`;
    }
    document.getElementById("days").innerHTML = daysHTML;
  }
  
  function prevMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    displayCalendar(currentMonth, currentYear);
  }
  
  function nextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    displayCalendar(currentMonth, currentYear);
  }
  
  // Display current month initially
  displayCalendar(currentMonth, currentYear);
  