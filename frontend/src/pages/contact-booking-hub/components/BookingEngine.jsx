import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const BookingEngine = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
    roomType: '',
    specialRequests: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [availableRooms, setAvailableRooms] = useState([]);

  const roomTypes = [
    { value: 'deluxe', label: 'Deluxe Room', description: 'Starting from $299/night' },
    { value: 'suite', label: 'Executive Suite', description: 'Starting from $499/night' },
    { value: 'penthouse', label: 'Penthouse Suite', description: 'Starting from $899/night' },
    { value: 'villa', label: 'Private Villa', description: 'Starting from $1299/night' }
  ];

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5+', label: '5+ Guests' }
  ];

  const roomOptions = [
    { value: '1', label: '1 Room' },
    { value: '2', label: '2 Rooms' },
    { value: '3', label: '3 Rooms' },
    { value: '4+', label: '4+ Rooms' }
  ];

  const mockAvailableRooms = [
    {
      id: 'deluxe-001',
      type: 'Deluxe Room',
      price: 299,
      originalPrice: 349,
      available: 3,
      amenities: ['Ocean View', 'King Bed', 'Marble Bathroom'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop'
    },
    {
      id: 'suite-001',
      type: 'Executive Suite',
      price: 499,
      originalPrice: 599,
      available: 2,
      amenities: ['Separate Living Area', 'Premium Amenities', 'Butler Service'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
    }
  ];

  useEffect(() => {
    if (bookingData?.checkIn && bookingData?.checkOut) {
      setIsLoading(true);
      setTimeout(() => {
        setAvailableRooms(mockAvailableRooms);
        setIsLoading(false);
      }, 1500);
    }
  }, [bookingData?.checkIn, bookingData?.checkOut]);

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookNow = (roomId) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Booking initiated! Redirecting to secure payment...');
    }, 2000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow?.setDate(tomorrow?.getDate() + 1);
    return tomorrow?.toISOString()?.split('T')?.[0];
  };

  const getDayAfterTomorrowDate = () => {
    const dayAfter = new Date();
    dayAfter?.setDate(dayAfter?.getDate() + 2);
    return dayAfter?.toISOString()?.split('T')?.[0];
  };

  return (
    <div className="bg-card rounded-xl shadow-elegant border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="flex items-center space-x-3">
          <Icon name="Calendar" size={24} />
          <div>
            <h3 className="text-xl font-heading font-semibold">Book Your Stay</h3>
            <p className="text-primary-foreground/80 text-sm">Real-time availability & best rates guaranteed</p>
          </div>
        </div>
      </div>
      {/* Booking Form */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Check-in Date"
            type="date"
            value={bookingData?.checkIn}
            onChange={(e) => handleInputChange('checkIn', e?.target?.value)}
            min={getTomorrowDate()}
            required
          />
          <Input
            label="Check-out Date"
            type="date"
            value={bookingData?.checkOut}
            onChange={(e) => handleInputChange('checkOut', e?.target?.value)}
            min={bookingData?.checkIn || getDayAfterTomorrowDate()}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Number of Guests"
            options={guestOptions}
            value={bookingData?.guests}
            onChange={(value) => handleInputChange('guests', value)}
          />
          <Select
            label="Number of Rooms"
            options={roomOptions}
            value={bookingData?.rooms}
            onChange={(value) => handleInputChange('rooms', value)}
          />
        </div>

        <Select
          label="Preferred Room Type"
          placeholder="Select room type (optional)"
          options={roomTypes}
          value={bookingData?.roomType}
          onChange={(value) => handleInputChange('roomType', value)}
        />

        <Input
          label="Special Requests"
          placeholder="Anniversary celebration, dietary requirements, accessibility needs..."
          value={bookingData?.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e?.target?.value)}
          className="min-h-[80px]"
        />

        {/* Direct Booking Benefits */}
        <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
          <h4 className="font-semibold text-secondary mb-3 flex items-center">
            <Icon name="Star" size={18} className="mr-2" />
            Direct Booking Benefits
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Icon name="ArrowUp" size={14} className="mr-2 text-success" />
              Complimentary room upgrades
            </div>
            <div className="flex items-center text-muted-foreground">
              <Icon name="RefreshCw" size={14} className="mr-2 text-success" />
              Flexible cancellation
            </div>
            <div className="flex items-center text-muted-foreground">
              <Icon name="Gift" size={14} className="mr-2 text-success" />
              Exclusive amenities
            </div>
            <div className="flex items-center text-muted-foreground">
              <Icon name="Award" size={14} className="mr-2 text-success" />
              Loyalty points earned
            </div>
          </div>
        </div>
      </div>
      {/* Available Rooms */}
      {(bookingData?.checkIn && bookingData?.checkOut) && (
        <div className="border-t border-border">
          <div className="p-6">
            <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
              <Icon name="Bed" size={20} className="mr-2" />
              Available Rooms
            </h4>
            
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="ml-3 text-muted-foreground">Checking availability...</span>
              </div>
            ) : (
              <div className="space-y-4">
                {availableRooms?.map((room) => (
                  <div key={room?.id} className="border border-border rounded-lg p-4 hover:shadow-md elegant-transition">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-start space-x-4">
                          <img
                            src={room?.image}
                            alt={room?.type}
                            className="w-20 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h5 className="font-semibold text-foreground">{room?.type}</h5>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {room?.amenities?.map((amenity, index) => (
                                <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                            <p className="text-sm text-success mt-1">{room?.available} rooms available</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:text-right">
                        <div className="flex items-center justify-end space-x-2">
                          {room?.originalPrice > room?.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${room?.originalPrice}
                            </span>
                          )}
                          <span className="text-xl font-bold text-primary">
                            ${room?.price}
                          </span>
                          <span className="text-sm text-muted-foreground">/night</span>
                        </div>
                        <Button
                          variant="default"
                          size="sm"
                          className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          onClick={() => handleBookNow(room?.id)}
                          loading={isLoading}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingEngine;