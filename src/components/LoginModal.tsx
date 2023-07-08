import { useState, ChangeEvent, FormEvent } from 'react';
import '../app/globals.css';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform login logic here
    // You can use the email and password variables

    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <button
        className="button"
        onClick={handleOpenModal}
      >
        Login
      </button>

      {isOpen && (
        <div className="modal-content">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white rounded-lg p-8 relative z-10">
            <img src='\public\favicon.png' className='company-icon'></img>
            <div className="absolute top-3 right-3">
              <button
                className="bg-transparent text-gray-500 hover:text-gray-700 font-bold text-3xl leading-none outline-none focus:outline-none"
                onClick={handleCloseModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <h1 className="greeting">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="label" >
                    <label>
                    Email
                    </label>
                </div>
                <input
                  className="inputSign" // Replace with the appropriate class name from your globals.css file
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-6">
                <div className="label" >
                    <label>
                    Password
                    </label>
                </div>
                <input
                  className="inputSign" // Replace with the appropriate class name from your globals.css file
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="label">
                <button
                  className="button" // Replace with the appropriate class name from your globals.css file
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="text-center">
                New to CentralandPH?
                <a href='signup'> Join Now</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;