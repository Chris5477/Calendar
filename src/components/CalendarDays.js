import Content from "./Content";

const CalendarDays = ({ arrayMonth, dayOne, method, actualDate }) => {
	return (
		<div className="calendar-days-of-month">
			{Array.from({ length: arrayMonth + dayOne }).map((_, index) =>
				index >= dayOne ? (
					<Content
						method={method}
						key={`index ${index}`}
						text={index - dayOne + 1}
						classCss={index == actualDate ? "active-day" : "day-of-month"}
					/>
				) : (
					<Content key={`index ${index}`} tet={""} classCss={index == actualDate ? "active-day" : "day-of-month"} />
				)
			)}
		</div>
	);
};
export default CalendarDays;
