type Props = {
  className?: string;
  children?: React.ReactNode;
  origin?: "tl" | "tr" | "bl" | "br";
  tintClass?: string;
  gridOpacityClass?: string;
};

export function GridBackground({
  className = "",
  children,
  origin = "tl",
  tintClass = "from-cyan-900/50",
  gridOpacityClass = "opacity-35",
}: Props) {
  const gradDir =
    origin === "tl" ? "bg-gradient-to-br"
    : origin === "tr" ? "bg-gradient-to-bl"
    : origin === "bl" ? "bg-gradient-to-tr"
    : /* br */          "bg-gradient-to-tl";

  const maskAt =
    origin === "tl" ? "10%_10%"
    : origin === "tr" ? "90%_10%"
    : origin === "bl" ? "10%_90%"
    : /* br */          "90%_90%";

  const maskClass = `[mask-image:radial-gradient(75%_75%_at_${maskAt},white,transparent)]`;

  return (
    <div className={`relative isolate ${className}`}>
      <div className="absolute inset-0 -z-20 bg-black" />
      <div className={`absolute inset-0 -z-10 ${gradDir} ${tintClass} via-transparent to-transparent ${maskClass}`} />
      <div
        className={
          `absolute inset-0 -z-10 ${gridOpacityClass}
           [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
           [background-size:36px_36px]
           ${maskClass}`
        }
      />
      {children}
    </div>
  );
}
