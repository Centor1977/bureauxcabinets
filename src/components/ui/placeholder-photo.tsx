type PlaceholderPhotoProps = {
  alt: string;
  className?: string;
};

/**
 * Emplacement en attente des visuels réels (portes, façades lilloises,
 * interphones, logements meublés) listés dans les assets à fournir.
 */
export function PlaceholderPhoto({ alt, className = "" }: PlaceholderPhotoProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-aal-warmgray to-aal-navy/10 ${className}`}
    >
      <span className="px-4 text-center text-xs text-aal-navy/40">{alt}</span>
    </div>
  );
}
