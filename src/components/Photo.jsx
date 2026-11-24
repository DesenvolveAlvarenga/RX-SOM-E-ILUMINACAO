/**
 * Foto do site. Com `image`, mostra a foto real.
 * Sem `image`, mostra a arte de palco (feixes de luz) com uma etiqueta
 * indicando qual foto deve entrar ali.
 *
 * variant: 'stage' | 'cool' | 'amber' | 'led'
 */
export default function Photo({
  image,
  alt = '',
  label,
  labelPosition = { left: 18, bottom: 18 },
  variant = 'stage',
  crowd = true,
  className = '',
  style,
  children,
}) {
  const showCrowd = crowd && !image && (variant === 'stage' || variant === 'cool');
  const classes = ['ph', !image && `ph--${variant}`, showCrowd && 'ph--crowd', className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={style}>
      {image ? <img className="ph-img" src={image} alt={alt} loading="lazy" /> : null}
      {children}
      {!image && label ? (
        <span className="ph-tag" style={labelPosition}>
          {label}
        </span>
      ) : null}
    </div>
  );
}
