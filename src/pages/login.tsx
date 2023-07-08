import Head from "next/head"
import LoginModal from '@/components/LoginModal'; // Replace with the correct relative path to the LoginModal component

export default function Login() {
    const handleLogin = () => {
        // Logic to handle login button click
        console.log("Login button clicked");
        // You can perform any login-related actions or show the login modal here
    };

    return ( 
    <>
        <Head>
            <title>Login</title>
        </Head>
        <section>
        </section>
    </> 
    );
}
