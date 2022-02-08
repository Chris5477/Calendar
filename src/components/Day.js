const Day = ({ method, text, isActive }) => {
	return (
		<span onClick={(e) => method && method(e)} className={isActive ? "active-day" : "day-of-month"}>
			{text}
		</span>
	);
};
export default Day;
