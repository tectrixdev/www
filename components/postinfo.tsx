const PostInfo = ({ author, date }: { author: string; date: string }) => (
  <p className="text-center font-bold text-slate-400">{`By ${author} on ${new Date(date).toLocaleDateString()}`}</p>
);

export default PostInfo;
