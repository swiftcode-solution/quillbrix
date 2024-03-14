function Linkedin({ size, stroke }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="0.5" width="23" height="23" rx="11.5" stroke={stroke} />
      <path
        d="M9.07143 10.7308H6.5V17.5H9.07143V10.7308Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0711 9.88463C15.9805 9.88463 16.8525 10.2549 17.4955 10.9141C18.1385 11.5732 18.4997 12.4672 18.4997 13.3994V17.5H16.214V13.3994C16.214 13.0887 16.0936 12.7907 15.8793 12.571C15.6649 12.3513 15.3743 12.2278 15.0711 12.2278C14.768 12.2278 14.4774 12.3513 14.263 12.571C14.0487 12.7907 13.9283 13.0887 13.9283 13.3994V17.5H11.6426V13.3994C11.6426 12.4672 12.0038 11.5732 12.6468 10.9141C13.2898 10.2549 14.1618 9.88463 15.0711 9.88463V9.88463Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.78571 9.03846C8.49579 9.03846 9.07143 8.47021 9.07143 7.76923C9.07143 7.06825 8.49579 6.5 7.78571 6.5C7.07563 6.5 6.5 7.06825 6.5 7.76923C6.5 8.47021 7.07563 9.03846 7.78571 9.03846Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Linkedin;
