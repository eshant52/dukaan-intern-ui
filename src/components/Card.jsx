export default function Card({title, body}) {
  return (
    <div className="flex basis-1/2 flex-col space-y-5 rounded-md bg-white p-5 drop-shadow-sm">
      <div className="text-secondary font-light">{title}</div>
      <span className="text-3xl text-primary">{body}</span>
    </div>
  );
}