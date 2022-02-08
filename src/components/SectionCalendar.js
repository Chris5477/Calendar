import Content from "./Content";

const SectionCalendar = ({ array, method, classWrapper, classElement }) => {
	return (
		<div className={classWrapper}>
			{array.map((content, index) => (
				<Content method={(e) => method && method(e)} key={`index ${index}`} classCss={classElement} text={content} />
			))}
		</div>
	);
};
export default SectionCalendar;
