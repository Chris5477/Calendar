const Content = ({ method, classCss, text }) => {
	return (
		<span onClick={(e) => method && method(e)} className={classCss}>
			{text}
		</span>
	);
};
export default Content;
