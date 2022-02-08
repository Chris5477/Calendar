import { useState } from "react";
import CalendarDays from "./CalendarDays";
import Day from "./Day";
import SectionCalendar from "./SectionCalendar";

const Calendar = () => {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const [numbDate, setNumbDate] = useState(new Date().getDate());
	const [month, setMonth] = useState(months[new Date().getMonth()]);
	const [year, setYear] = useState(new Date().getFullYear());
	const actualDate = numbDate;
	const [visibilityConainer, setVisibilityContainer] = useState(false);
	const indexMonth = months.indexOf(month);

	const allMonths = {
		January: 31,
		February: year % 4 == 0 ? 29 : 28,
		March: 31,
		Apris: 30,
		May: 31,
		June: 30,
		July: 31,
		August: 31,
		September: 30,
		October: 31,
		November: 30,
		December: 31,
	};

	const correctPositionDay = () => {
		const firstOfMonth = new Date(year, indexMonth, 1);
		const getDay = String(firstOfMonth).split(" ")[0];
		const findIndex = days.indexOf(getDay);
		return findIndex;
	};

	const firstDay = correctPositionDay();

	const selectMonth = (e) => {
		setMonth(e.target.innerText);
		setVisibilityContainer(false);
	};

	const changeDate = () => {
		const response = prompt("Quelle la date que vous choisissez ?");
		setYear(Number(response));
	};

	const getDate = (e) => {
		setNumbDate(e.target.innerText);
	};
	console.log(`${numbDate}/${month}/${year}`);

	return (
		<div className="calendar">
			<div className="calendar-header">
				<span className="changeMonth"> &#x3008; </span>
				<div className="container-actual-date">
					<p onClick={() => setVisibilityContainer(true)} className="actualMonth">
						{month}
					</p>
					<p onClick={changeDate} className="actualDay">
						{String(new Date(year, indexMonth, numbDate)).split(" ").splice(0, 4).join(" ")}
					</p>
				</div>
				<span className="changeMonth"> &#x3009;</span>
				{visibilityConainer && (
					<SectionCalendar array={months} method={selectMonth} classWrapper={"select-date"} classElement={"select-month"} />
				)}
			</div>
			<SectionCalendar array={days} classWrapper={"calendar-all-days"} classElement={"day-of-week"} />
			<CalendarDays arrayMonth={allMonths[month]} dayOne={firstDay} method={getDate} actualDate={actualDate} />
		</div>
	);
};
export default Calendar;
