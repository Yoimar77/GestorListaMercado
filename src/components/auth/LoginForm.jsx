// src/components/auth/LoginForm.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle, loginWithFacebook, loginWithGithub } = useAuth();
  const navigate = useNavigate();

  // Redirige directamente a la página de productos
  const redirectAfterLogin = () => {
    navigate("/Products");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      redirectAfterLogin();
    } catch (err) {
      setError("Error al iniciar sesión: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError("");
      setLoading(true);
      await loginWithGoogle();
      redirectAfterLogin(); // Asegúrate de que se ejecute aquí
    } catch (err) {
      setError("Error al iniciar sesión con Google: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      setError("");
      setLoading(true);
      await loginWithFacebook();
      redirectAfterLogin(); // Asegúrate de que se ejecute aquí
    } catch (err) {
      setError("Error al iniciar sesión con Facebook: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    try {
      setError("");
      setLoading(true);
      await loginWithGithub();
      redirectAfterLogin(); // Asegúrate de que se ejecute aquí
    } catch (err) {
      setError("Error al iniciar sesión con GitHub: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
      
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block mb-1">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading} 
          className="btn btn-primary w-full"
        >
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <Link to="/reset-password" className="text-[var(--color-primary)] hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      
      <div className="mt-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">O continuar con</span>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-3">
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 flex items-center justify-center"
          >
            <span>Google</span>
          </button>
          
          <button
            onClick={handleFacebookLogin}
            className="btn bg-[#3b5998] hover:bg-[#2d4373] text-white flex items-center justify-center"
          >
            <span>Facebook</span>
          </button>
          
          <button
            onClick={handleGithubLogin}
            className="btn bg-[#24292e] hover:bg-[#171a1d] text-white flex items-center justify-center"
          >
            <span>GitHub</span>
          </button>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p>
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-[var(--color-primary)] hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;