interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-14 px-20 py-10 text-white">
      {children}
    </div>
  );
};

export default Content;
