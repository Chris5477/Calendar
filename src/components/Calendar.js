const Calendar = () => {
	const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
	const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
	const date = new Date();
	const month = months[date.getMonth()];
	const formatDate = String(date).split(" ").splice(0, 4).join(" ");

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
				{/* A modifier , Creer pour le css */}
				{Array.from({ length: 31 }).map((_, index) => (
					<span key={`index ${index}`} className="day-of-month">
						{index + 1}
					</span>
				))}
			</div>
		</div>
	);
};
export default Calendar;
