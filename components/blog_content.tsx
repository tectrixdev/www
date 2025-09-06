interface Props {
	children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
	return (
		<div className="mt-10 flex min-h-screen flex-col px-10 py-10 text-white md:px-[5%] xl:px-[10%] 2xl:px-[20%]">
			{children}
		</div>
	);
};

export default Content;
