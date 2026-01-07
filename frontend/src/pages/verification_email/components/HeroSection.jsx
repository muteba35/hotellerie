import { useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

const config = {
  success: {
    title: "Compte activé",
    text: "Votre compte a été activé avec succès. Vous allez être redirigé vers la page de connexion.",
    icon: CheckCircle,
    color: "text-green-600",
    autoRedirect: true,
  },
  expired: {
    title: "Lien expiré",
    text: "Ce lien de confirmation a expiré. Veuillez en demander un nouveau.",
    icon: AlertTriangle,
    color: "text-yellow-500",
  },
  already: {
    title: "Compte déjà activé",
    text: "Votre compte est déjà actif. Vous pouvez vous connecter.",
    icon: Info,
    color: "text-blue-500",
  },
  invalid: {
    title: "Lien invalide",
    text: "Ce lien est invalide ou a déjà été utilisé.",
    icon: XCircle,
    color: "text-red-500",
  },
  error: {
    title: "Erreur",
    text: "Une erreur est survenue. Veuillez réessayer plus tard.",
    icon: XCircle,
    color: "text-red-500",
  },
};

export default function VerificationEmail() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const status = params.get("status") || "error";
  const data = config[status] || config.error;
  const Icon = data.icon;

  // Redirection automatique après succès
  useEffect(() => {
    if (data.autoRedirect) {
      const timer = setTimeout(() => {
        navigate("/connexion");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <Icon className={`mx-auto mb-4 ${data.color}`} size={56} />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {data.title}
        </h2>
        <p className="text-gray-600 mb-6">{data.text}</p>

        {!data.autoRedirect && (
          <Link
            to="/connexion"
            className="inline-block bg-secondary text-white px-6 py-2 rounded-lg font-medium hover:bg-secondary/90 transition"
          >
            Aller à la connexion
          </Link>
        )}
      </div>
    </div>
  );
}