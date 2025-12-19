import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const BookingWidget = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1'
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [availability, setAvailability] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const guestOptions = [
    { value: '1', label: '1 Invité' },
    { value: '2', label: '2 Invités' },
    { value: '3', label: '3 Invités' },
    { value: '4', label: '4 Invités' },
    { value: '5', label: '5+ Invités' }
  ];

  const roomOptions = [
    { value: '1', label: '1 Chambre' },
    { value: '2', label: '2 Chambres' },
    { value: '3', label: '3 Chambres' },
    { value: '4', label: '4+ Chambres' }
  ];

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckAvailability = async () => {
    if (!bookingData?.checkIn || !bookingData?.checkOut) {
      return;
    }

    setIsLoading(true);
    
    // Simulation d’appel API
    setTimeout(() => {
      setAvailability({
        available: true,
        rooms: [
          {
            type: 'Suite Héritage',
            price: 450,
            available: 2
          },
          {
            type: 'Suite Jardin',
            price: 380,
            available: 3
          },
          {
            type: 'Suite Exécutive',
            price: 320,
            available: 1
          }
        ],
        totalNights: calculateNights()
      });
      setIsExpanded(true);
      setIsLoading(false);
    }, 1500);
  };

  const calculateNights = () => {
    if (!bookingData?.checkIn || !bookingData?.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const diffTime = Math.abs(checkOut - checkIn);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date?.toLocaleDateString('fr-FR', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-md">
      <div className="luxury-card p-6 backdrop-luxury">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Réservez votre séjour
            </h3>
            <p className="text-sm text-muted-foreground">
              Vérifiez la disponibilité & les tarifs
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-muted rounded-full elegant-transition"
          >
            <Icon 
              name={isExpanded ? "ChevronDown" : "ChevronUp"} 
              size={20} 
              className="text-muted-foreground" 
            />
          </button>
        </div>

        {/* Formulaire de réservation */}
        <div className="space-y-4">
          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="date"
              label="Arrivée"
              value={bookingData?.checkIn}
              onChange={(e) => handleInputChange('checkIn', e?.target?.value)}
              min={new Date()?.toISOString()?.split('T')?.[0]}
              className="text-sm"
            />
            <Input
              type="date"
              label="Départ"
              value={bookingData?.checkOut}
              onChange={(e) => handleInputChange('checkOut', e?.target?.value)}
              min={bookingData?.checkIn || new Date()?.toISOString()?.split('T')?.[0]}
              className="text-sm"
            />
          </div>

          {/* Invités et chambres */}
          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Invités"
              options={guestOptions}
              value={bookingData?.guests}
              onChange={(value) => handleInputChange('guests', value)}
            />
            <Select
              label="Chambres"
              options={roomOptions}
              value={bookingData?.rooms}
              onChange={(value) => handleInputChange('rooms', value)}
            />
          </div>

          {/* Bouton Vérifier disponibilité */}
          <Button
            variant="default"
            fullWidth
            loading={isLoading}
            onClick={handleCheckAvailability}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            iconName="Search"
            iconPosition="left"
            disabled={!bookingData?.checkIn || !bookingData?.checkOut}
          >
            {isLoading ? 'Vérification...' : 'Vérifier la disponibilité'}
          </Button>
        </div>

        {/* Résultats disponibilité */}
        {isExpanded && availability && (
          <div className="mt-6 pt-6 border-t border-border animate-in slide-in-from-top duration-300">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-foreground">Chambres disponibles</h4>
                <div className="text-sm text-muted-foreground">
                  {availability?.totalNights} {availability?.totalNights === 1 ? 'nuit' : 'nuits'}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {formatDate(bookingData?.checkIn)} - {formatDate(bookingData?.checkOut)}
              </div>
            </div>

            <div className="space-y-3">
              {availability?.rooms?.map((room, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 elegant-transition cursor-pointer"
                >
                  <div>
                    <h5 className="font-medium text-foreground text-sm">{room?.type}</h5>
                    <p className="text-xs text-muted-foreground">
                      {room?.available} disponible(s)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{room?.price} €</p>
                    <p className="text-xs text-muted-foreground">par nuit</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="default"
              fullWidth
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              iconName="Calendar"
              iconPosition="left"
            >
              Réserver maintenant
            </Button>
          </div>
        )}

        {/* Actions rapides */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <button className="text-secondary hover:text-secondary/80 elegant-transition flex items-center space-x-1">
              <Icon name="Phone" size={14} />
              <span>Appelez-nous</span>
            </button>
            <button className="text-secondary hover:text-secondary/80 elegant-transition flex items-center space-x-1">
              <Icon name="MessageCircle" size={14} />
              <span>Chat en direct</span>
            </button>
            <button className="text-secondary hover:text-secondary/80 elegant-transition flex items-center space-x-1">
              <Icon name="Mail" size={14} />
              <span>Email</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide-in-from-top {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: slide-in-from-top 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BookingWidget;
