import Image from "next/image";

export function PortraitImage({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`portrait-image ${className}`}>
      <Image
        src="/images/frederika-and-gaston-portrait.png"
        alt="Frederika Onofrejová holding Gaston beside a lake"
        fill
        priority={priority}
        sizes="(max-width: 640px) 86vw, (max-width: 900px) 38vw, 500px"
      />
    </figure>
  );
}
