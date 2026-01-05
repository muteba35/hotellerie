import { MailCheck } from "lucide-react";

const HeroSection = () => {
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
          Cliquez sur ce lien pour activer votre compte.
        </p>

        <p className="text-xs text-gray-500">
          Pensez à vérifier le dossier <b>Spam</b> si vous ne voyez rien.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;