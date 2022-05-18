import { useState, useEffect } from "react";
import { Modal } from "@mantine/core";

const CONSTRUCTION_MODAL_SEEN_KEY = "CONSTRUCTION_MODAL_SEEN_KEY";

export const ModalProvider: React.FC = ({ children }) => {
  const [opened, setOpened] = useState(true);
  //   useEffect(() => {
  //     console.log(localStorage);
  //     const modalSeen = !!localStorage.getItem(CONSTRUCTION_MODAL_SEEN_KEY);
  //     setOpened(!modalSeen);
  //   }, []);

  //   useEffect(() => {
  //     if (!opened) {
  //       localStorage.setItem(CONSTRUCTION_MODAL_SEEN_KEY, "true");
  //     }
  //   }, [opened]);

  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Webbplatsen är under uppbyggnad 🔨"
        closeOnEscape={false}
        closeOnClickOutside={false}
      >
        <div className="flex flex-col justify-center items-center">
          En del information finns redan på plats, men titta gärna in snart igen
          då mer information kommer att tillkomma 22 maj.
        </div>
      </Modal>
      {children}
    </>
  );
};
