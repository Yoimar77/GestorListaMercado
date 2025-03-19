// src/components/auth/ResetPasswordForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Revisa tu correo para seguir las instrucciones");
    } catch (err) {
      setError("Error al restablecer la contraseña: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Restablecer Contraseña</h2>
      
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
      {message && <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">{message}</div>}
      
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
        
        <button 
          type="submit" 
          disabled={loading} 
          className="btn btn-primary w-full"
        >
          {loading ? "Cargando..." : "Enviar instrucciones"}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <Link to="/login" className="text-[var(--color-primary)] hover:underline">
          Volver a iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;