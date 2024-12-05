const CurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return <>{currentYear < 2025 ? 2025 : currentYear}</>;
};

export default CurrentYear;
