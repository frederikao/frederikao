type ImagePlaceholderProps = {
  label: string;
  ratio?: "portrait" | "landscape" | "square" | "wide";
  className?: string;
};

export function ImagePlaceholder({
  label,
  ratio = "landscape",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <figure
      className={`image-placeholder image-placeholder--${ratio} ${className}`}
      aria-label={`${label}. Placeholder for a future photograph.`}
    >
      <div className="image-placeholder__wash" />
      <figcaption>
        <span>Image placeholder</span>
        {label}
      </figcaption>
    </figure>
  );
}
