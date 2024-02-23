function BalanceIcon({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="white" />
      <path
        d="M32.75 65.3333V63.4167H49.0417V42.2183C48.137 42.0548 47.3384 41.6446 46.6458 40.9878C45.9533 40.3311 45.5124 39.5018 45.3233 38.5H38.7204L44.25 52.323C44.1759 53.6008 43.5824 54.6875 42.4694 55.5833C41.3565 56.4802 40.0333 56.9287 38.5 56.9287C36.9667 56.9287 35.6435 56.4802 34.5306 55.5833C33.4176 54.6875 32.8241 53.6008 32.75 52.323L38.2796 38.5H34.6667V36.5833H45.3233C45.5342 35.5138 46.067 34.6079 46.9218 33.8655C47.7767 33.1231 48.8027 32.7513 50 32.75C51.1973 32.75 52.2233 33.1218 53.0782 33.8655C53.933 34.6079 54.4658 35.5138 54.6767 36.5833H65.3333V38.5H61.7204L67.25 52.323C67.1759 53.6008 66.5824 54.6875 65.4694 55.5833C64.3565 56.4802 63.0333 56.9287 61.5 56.9287C59.9667 56.9287 58.6435 56.4802 57.5306 55.5833C56.4176 54.6875 55.8241 53.6008 55.75 52.323L61.2796 38.5H54.6767C54.4876 39.5031 54.0467 40.3323 53.3542 40.9878C52.6616 41.6433 51.863 42.0535 50.9583 42.2183V63.4167H67.25V65.3333H32.75ZM57.6475 52.1371H65.3525L61.5 42.5097L57.6475 52.1371ZM34.6475 52.1371H42.3525L38.5 42.5097L34.6475 52.1371ZM50 40.4167C50.7884 40.4167 51.465 40.1349 52.0297 39.5714C52.5933 39.0066 52.875 38.3301 52.875 37.5417C52.875 36.7533 52.5933 36.0767 52.0297 35.5119C51.465 34.9484 50.7884 34.6667 50 34.6667C49.2116 34.6667 48.535 34.9484 47.9703 35.5119C47.4067 36.0767 47.125 36.7533 47.125 37.5417C47.125 38.3301 47.4067 39.0066 47.9703 39.5714C48.535 40.1349 49.2116 40.4167 50 40.4167Z"
        fill="black"
      />
    </svg>
  );
}

export default BalanceIcon;