export const PageWrapper: React.FC = ({ children }) => {
  return (
    <div className="m-h-screen bg-gradient-to-r from-pale-pink to-black-shadows">
      {children}
    </div>
  );
};
