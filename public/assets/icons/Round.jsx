function Round({ size, className, fill = "#084678", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="0.5" y="0.5" width="91" height="91" rx="45.5" fill={fill} />
      <rect x="0.5" y="0.5" width="91" height="91" rx="45.5" stroke={fill} />
    </svg>
  );
}

export default Round;
