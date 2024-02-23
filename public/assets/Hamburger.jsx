function Hamburger({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM9 12C9 11.4477 9.44772 11 10 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H10C9.44771 13 9 12.5523 9 12ZM3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z"
        fill="#111111"
      />
    </svg>
  );
}

export default Hamburger;
