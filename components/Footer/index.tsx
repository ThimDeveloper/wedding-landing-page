export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="min-w-screen mt-10 py-6 flex flex-col bg-white text-center ">
      <p className="text-gray-300 text-sm">
        &copy; {year} Thim Lohse Development
      </p>
    </div>
  );
};
