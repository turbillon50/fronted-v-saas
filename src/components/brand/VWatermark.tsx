export function VWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/2 top-[-12%] -translate-x-1/2 select-none text-[60rem] font-black leading-none [filter:blur(60px)]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(139,92,246,0.10), rgba(34,211,238,0.04) 60%, transparent 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        V
      </div>
    </div>
  );
}
