function Twitter({ size, stroke }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="0.5" width="23" height="23" rx="11.5" stroke={stroke} />
      <g clipPath="url(#clip0_371_1472)">
        <path
          d="M18.9168 6.75001C18.3582 7.14403 17.7397 7.4454 17.0852 7.64251C16.7338 7.23855 16.2669 6.95224 15.7476 6.8223C15.2283 6.69235 14.6815 6.72504 14.1814 6.91594C13.6812 7.10684 13.2518 7.44674 12.9511 7.88967C12.6504 8.33261 12.493 8.8572 12.5002 9.39251V9.97584C11.475 10.0024 10.4592 9.77506 9.54325 9.31402C8.62726 8.85297 7.83951 8.17254 7.25016 7.33334C7.25016 7.33334 4.91683 12.5833 10.1668 14.9167C8.96547 15.7322 7.53434 16.141 6.0835 16.0833C11.3335 19 17.7502 16.0833 17.7502 9.37501C17.7496 9.21252 17.734 9.05044 17.7035 8.89084C18.2988 8.30371 18.719 7.56242 18.9168 6.75001V6.75001Z"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_371_1472">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(5.5 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Twitter;
