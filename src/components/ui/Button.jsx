import styles from './Button.module.css';

/**
 * Button
 *
 * Variants:
 *   primary  — filled accent blue (main CTA)
 *   ghost    — transparent with accent border
 *   icon     — icon-only circular button
 *
 * Sizes:
 *   sm | md (default) | lg
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  onClick,
  disabled = false,
  className = '',
  ariaLabel,
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Render as anchor when href is provided
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
