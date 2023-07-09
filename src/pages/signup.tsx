import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import '../app/globals.css'; // Import the CSS file

type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose} title="Close Modal">
          &times;
        </span>
        {/* Rest of the modal content */}
      </div>
    </div>
  );
};

const IndexPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var modalRoot = document.getElementById('modal-root');
              if (!modalRoot) {
                modalRoot = document.createElement('div');
                modalRoot.id = 'modal-root';
                document.body.appendChild(modalRoot);
              }
            `,
          }}
        />
      </Head>
      <button onClick={openModal}>Sign Up</button>

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default IndexPage;