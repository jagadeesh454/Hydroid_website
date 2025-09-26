export default function Pill({ children }) {
  return (
    <span className="inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wide text-gray-700">
      {children}
    </span>
  );
}
