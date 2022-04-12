interface NavItemsContainerProps {
  hidden?: boolean;
  extraStyles?: string[];
}

export const NavItemsContainer: React.FC<NavItemsContainerProps> = ({
  hidden = false,
  children,
  extraStyles,
}) => {
  if (hidden) {
    return null;
  }
  return (
    <div
      className={`${
        extraStyles?.toString() || "flex flex-col"
      } lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto md:space-x-2 text-2xl `}
    >
      {children}
    </div>
  );
};
