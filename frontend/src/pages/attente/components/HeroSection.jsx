import { MailCheck, RefreshCcw } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleResend = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(
        "https://hotellerie.onrender.com/api/auth/resend-verification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: localStorage.getItem("pendingEmail"),
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.message);
      }
    } catch {
      setError("Erreur réseau");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white border rounded-xl shadow-md max-w-md w-full p-8 text-center">
        
        <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
          <MailCheck className="text-white w-6 h-6" />
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Vérifiez votre email
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          Un lien de confirmation vous a été envoyé.
        </p>

        {!success && (
          <button
            onClick={handleResend}
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <RefreshCcw size={16} />
            {loading ? "Envoi..." : "Renvoyer le lien"}
          </button>
        )}

        {success && (
          <div className="mt-4 bg-green-50 border border-green-200 text-green-700 text-sm p-3 rounded-lg">
            ✅ Un nouveau lien a été envoyé dans votre boîte mail.
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">
            ❌ {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;