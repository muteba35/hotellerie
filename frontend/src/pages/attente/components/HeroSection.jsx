import { MailCheck, RefreshCcw } from "lucide-react";
import { useState, useEffect } from "react";

const COOLDOWN_SECONDS = 30;

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);

  // ⏱️ TIMER
  useEffect(() => {
    if (cooldown <= 0) return;

    const interval = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [cooldown]);

  // 🔄 Quand le cooldown finit → bouton revient
  useEffect(() => {
    if (cooldown === 0) {
      setSuccess(false);
    }
  }, [cooldown]);

  const handleResend = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    const email = localStorage.getItem("pendingEmail");

    if (!email) {
      setError("Email introuvable. Veuillez vous réinscrire.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://hotellerie.onrender.com/api/auth/resend-verification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setCooldown(COOLDOWN_SECONDS); // 🔥 démarre le timer
      } else {
        setError(data.message);
      }
    } catch {
      setError("Erreur réseau. Réessayez plus tard.");
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
          Un lien de confirmation a été envoyé à votre adresse email.
        </p>

        <p className="text-xs text-gray-500 mb-6">
          Pensez à vérifier le dossier <b>Spam</b>.
        </p>

        {!success && (
          <button
            onClick={handleResend}
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <RefreshCcw size={16} />
            {loading ? "Envoi en cours..." : "Renvoyer le lien"}
          </button>
        )}

        {success && (
          <div className="mt-4 bg-green-50 border border-green-200 text-green-700 text-sm p-3 rounded-lg">
            ✅ Un nouveau lien a été envoyé.<br />
            ⏱️ Vous pourrez renvoyer un lien dans {cooldown}s
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