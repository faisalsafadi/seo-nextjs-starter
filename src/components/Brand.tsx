export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        <img
          src="/images/logo.webp"
          alt=""
          width={22}
          height={22}
          className="brand-webp"
        />
      </span>
      {!compact && (
        <span>
          Faisal SAFADI<span className="brand-light"> | web studio</span>
        </span>
      )}
    </span>
  );
}