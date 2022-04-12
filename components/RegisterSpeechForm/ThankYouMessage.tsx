import { Modal } from "@mantine/core";

interface ThankYouMessageProps {
  open: boolean;
  setOpen(open: boolean): void;
  errorMessage?: string | null;
}

export const ThankYouMessage: React.FC<ThankYouMessageProps> = ({
  open,
  setOpen,
  errorMessage,
}) => {
  const renderContent = () => {
    if (errorMessage) {
      return (
        <>
          {" "}
          <p className="font-bold text-black text-2xl">Något gick på tok 😢</p>
          <p className="font-bold text-gray-700">{errorMessage}</p>
        </>
      );
    }
    return (
      <>
        {" "}
        <p className="font-bold text-black text-2xl">Tack för ditt svar 💕</p>
        <p className="font-bold text-gray-700">Ha en fantastiskt dag!</p>
      </>
    );
  };
  return (
    <Modal opened={open} onClose={() => setOpen(false)} centered>
      <div className="flex flex-col text-center justify-center items-center">
        {renderContent()}
      </div>
    </Modal>
  );
};
