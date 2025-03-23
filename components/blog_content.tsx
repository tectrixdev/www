interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-full flex-col px-10 py-10 text-white lg:px-96">
      {children}
    </div>
  );
};

export default Content;
