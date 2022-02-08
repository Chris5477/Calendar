const Calendar = () => {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const date = new Date(1944, 4, 19);
	const month = months[date.getMonth()];
	const formatDate = String(date).split(" ").splice(0, 4).join(" ");
	const yearOnly = formatDate.split(" ")[3];
	const actualDate = formatDate.split(" ")[2];

	const allMonths = {
		January: 31,
		February: yearOnly % 4 == 0 ? 29 : 28,
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
		const month = date.getMonth();
		const year = date.getFullYear();
		const firstOfMonth = new Date(year, month, 1);
		const getDay = String(firstOfMonth).split(" ")[0];
		const findIndex = days.indexOf(getDay);
		return findIndex;
	};

	const wxc = correctPositionDay();

	return (
		<div className="calendar">
			<div className="calendar-header">
				<span className="changeMonth"> &#x3008; </span>
				<div className="container-actual-date">
					<p className="actualMonth">{month}</p>
					<p className="actualDay">{formatDate}</p>
				</div>
				<span className="changeMonth"> &#x3009;</span>
			</div>
			<div className="calendar-all-days">
				{days.map((day, index) => (
					<span key={`index ${index}`} className="day-of-week">
						{day}
					</span>
				))}
			</div>
			<div className="calendar-days-of-month">
				{Array.from({ length: allMonths[month] + wxc }).map((_, index) =>
					index >= wxc ? (
						<span key={`index ${index}`} className={index == actualDate ? "active-day" : "day-of-month"}>
							{index - wxc + 1}
						</span>
					) : (
						<span key={`index ${index}`} className="day-of-month">
							{""}
						</span>
					)
				)}
			</div>
		</div>
	);
};
export default Calendar;
