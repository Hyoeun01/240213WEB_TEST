function generateCalendar(year, month) {
    const calendarDiv = document.getElementById("calendar");
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const today = currentDate.getDate();

    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);

    let html = "<table>";
    html += "<tr><th colspan='7'>" + year + "년 " + month + "월</th></tr>";
    html += "<tr>";
    for (let i = 0; i < 7; i++) {
        html += "<th>" + daysOfWeek[i] + "</th>";
    }
    html += "</tr><tr>";

    // Fill in the days of the previous month
    for (let i = 0; i < firstDay.getDay(); i++) {
        html += "<td></td>";
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        if (i === today && year === currentYear && month === currentMonth) {
            html += "<td class='today'>" + i + "</td>";
        } else {
            html += "<td>" + i + "</td>";
        }
        if ((firstDay.getDay() + i) % 7 === 0) {
            html += "</tr><tr>";
        }
    }

    // Fill in the days of the next month
    const remainingCells = 7 - ((firstDay.getDay() + lastDay.getDate()) % 7);
    for (let i = 0; i < remainingCells; i++) {
        html += "<td></td>";
    }

    html += "</tr></table>";
    calendarDiv.innerHTML = html;
}

const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth() + 1);