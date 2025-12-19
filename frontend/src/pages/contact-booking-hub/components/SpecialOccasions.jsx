import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const SpecialOccasions = () => {
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [occasionForm, setOccasionForm] = useState({
    guestName: '',
    partnerName: '',
    occasionDate: '',
    guestCount: '2',
    specialRequests: '',
    selectedPackages: [],
    selectedAmenities: []
  });

  const occasions = [
    { value: 'anniversary', label: 'Anniversary Celebration', description: 'Romantic packages available' },
    { value: 'honeymoon', label: 'Honeymoon', description: 'Luxury romance packages' },
    { value: 'birthday', label: 'Birthday Celebration', description: 'Personalized birthday experiences' },
    { value: 'proposal', label: 'Marriage Proposal', description: 'Unforgettable proposal setups' },
    { value: 'babymoon', label: 'Babymoon', description: 'Relaxing pre-baby getaway' },
    { value: 'other', label: 'Other Special Occasion', description: 'Custom celebration planning' }
  ];

  const packages = {
    anniversary: [
      { id: 'romantic-dinner', name: 'Private Romantic Dinner', price: 299, description: 'Candlelit dinner on private terrace' },
      { id: 'couples-spa', name: 'Couples Spa Package', price: 450, description: '90-minute couples massage & champagne' },
      { id: 'sunset-cruise', name: 'Private Sunset Cruise', price: 650, description: 'Exclusive yacht experience with dinner' }
    ],
    honeymoon: [
      { id: 'honeymoon-suite', name: 'Honeymoon Suite Upgrade', price: 200, description: 'Complimentary upgrade to luxury suite' },
      { id: 'champagne-breakfast', name: 'Champagne Breakfast in Bed', price: 150, description: 'Daily gourmet breakfast service' },
      { id: 'photo-session', name: 'Professional Photo Session', price: 400, description: 'Couple photography around the property' }
    ],
    birthday: [
      { id: 'birthday-cake', name: 'Custom Birthday Cake', price: 125, description: 'Personalized celebration cake' },
      { id: 'party-setup', name: 'Room Decoration Package', price: 200, description: 'Balloons, flowers, and celebration setup' },
      { id: 'group-dining', name: 'Private Group Dining', price: 75, description: 'Per person for private dining experience' }
    ]
  };

  const amenities = [
    { id: 'flowers', name: 'Fresh Flower Arrangements', price: 85 },
    { id: 'champagne', name: 'Premium Champagne', price: 120 },
    { id: 'chocolates', name: 'Artisan Chocolate Selection', price: 65 },
    { id: 'rose-petals', name: 'Rose Petal Turndown', price: 45 },
    { id: 'music', name: 'Live Acoustic Music', price: 300 },
    { id: 'photography', name: 'Event Photography', price: 250 }
  ];

  const handleOccasionChange = (value) => {
    setSelectedOccasion(value);
    setOccasionForm(prev => ({
      ...prev,
      selectedPackages: [],
      selectedAmenities: []
    }));
  };

  const handleFormChange = (field, value) => {
    setOccasionForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePackageToggle = (packageId) => {
    setOccasionForm(prev => ({
      ...prev,
      selectedPackages: prev?.selectedPackages?.includes(packageId)
        ? prev?.selectedPackages?.filter(id => id !== packageId)
        : [...prev?.selectedPackages, packageId]
    }));
  };

  const handleAmenityToggle = (amenityId) => {
    setOccasionForm(prev => ({
      ...prev,
      selectedAmenities: prev?.selectedAmenities?.includes(amenityId)
        ? prev?.selectedAmenities?.filter(id => id !== amenityId)
        : [...prev?.selectedAmenities, amenityId]
    }));
  };

  const calculateTotal = () => {
    const packageTotal = (packages?.[selectedOccasion] || [])?.filter(pkg => occasionForm?.selectedPackages?.includes(pkg?.id))?.reduce((sum, pkg) => sum + pkg?.price, 0);
    
    const amenityTotal = amenities?.filter(amenity => occasionForm?.selectedAmenities?.includes(amenity?.id))?.reduce((sum, amenity) => sum + amenity?.price, 0);
    
    return packageTotal + amenityTotal;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setTimeout(() => {
      alert(`Special occasion booking request submitted! Our event coordinator will contact you within 24 hours to finalize your ${occasions?.find(o => o?.value === selectedOccasion)?.label?.toLowerCase()} celebration.`);
    }, 1000);
  };

  return (
    <div className="luxury-card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center">
          <Icon name="Heart" size={24} />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-xl">Special Occasions</h3>
          <p className="text-muted-foreground">Create unforgettable memories with our curated celebration packages</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Occasion Selection */}
        <Select
          label="Type of Celebration"
          placeholder="Select your special occasion"
          options={occasions}
          value={selectedOccasion}
          onChange={handleOccasionChange}
          required
        />

        {selectedOccasion && (
          <>
            {/* Guest Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Primary Guest Name"
                type="text"
                placeholder="Your name"
                value={occasionForm?.guestName}
                onChange={(e) => handleFormChange('guestName', e?.target?.value)}
                required
              />
              {(selectedOccasion === 'anniversary' || selectedOccasion === 'honeymoon' || selectedOccasion === 'proposal') && (
                <Input
                  label="Partner's Name"
                  type="text"
                  placeholder="Partner's name"
                  value={occasionForm?.partnerName}
                  onChange={(e) => handleFormChange('partnerName', e?.target?.value)}
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Celebration Date"
                type="date"
                value={occasionForm?.occasionDate}
                onChange={(e) => handleFormChange('occasionDate', e?.target?.value)}
                min={new Date()?.toISOString()?.split('T')?.[0]}
                required
              />
              <Select
                label="Number of Guests"
                options={[
                  { value: '2', label: '2 Guests' },
                  { value: '4', label: '4 Guests' },
                  { value: '6', label: '6 Guests' },
                  { value: '8', label: '8 Guests' },
                  { value: '10+', label: '10+ Guests' }
                ]}
                value={occasionForm?.guestCount}
                onChange={(value) => handleFormChange('guestCount', value)}
              />
            </div>

            {/* Package Selection */}
            {packages?.[selectedOccasion] && (
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Celebration Packages
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {packages?.[selectedOccasion]?.map((pkg) => (
                    <div
                      key={pkg?.id}
                      className={`border rounded-lg p-4 cursor-pointer elegant-transition ${
                        occasionForm?.selectedPackages?.includes(pkg?.id)
                          ? 'border-secondary bg-secondary/5' :'border-border hover:border-secondary/50'
                      }`}
                      onClick={() => handlePackageToggle(pkg?.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium text-foreground">{pkg?.name}</h5>
                        <Checkbox
                          checked={occasionForm?.selectedPackages?.includes(pkg?.id)}
                          onChange={() => handlePackageToggle(pkg?.id)}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{pkg?.description}</p>
                      <p className="font-semibold text-secondary">${pkg?.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amenity Selection */}
            <div>
              <h4 className="font-semibold text-lg mb-4 flex items-center">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Additional Amenities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {amenities?.map((amenity) => (
                  <div
                    key={amenity?.id}
                    className={`border rounded-lg p-3 cursor-pointer elegant-transition ${
                      occasionForm?.selectedAmenities?.includes(amenity?.id)
                        ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                    }`}
                    onClick={() => handleAmenityToggle(amenity?.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h6 className="font-medium text-sm">{amenity?.name}</h6>
                        <p className="text-accent font-semibold text-sm">${amenity?.price}</p>
                      </div>
                      <Checkbox
                        checked={occasionForm?.selectedAmenities?.includes(amenity?.id)}
                        onChange={() => handleAmenityToggle(amenity?.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Special Requests</label>
              <textarea
                className="w-full min-h-[100px] px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
                placeholder="Any specific requests, dietary restrictions, or special arrangements..."
                value={occasionForm?.specialRequests}
                onChange={(e) => handleFormChange('specialRequests', e?.target?.value)}
              />
            </div>

            {/* Total & Submit */}
            {(occasionForm?.selectedPackages?.length > 0 || occasionForm?.selectedAmenities?.length > 0) && (
              <div className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total Additional Services:</span>
                  <span className="text-xl font-bold text-primary">${calculateTotal()}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  *Excludes room rate. Final pricing will be confirmed by our event coordinator.
                </p>
              </div>
            )}

            <div className="flex justify-end">
              <Button
                type="submit"
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="right"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Request Celebration Planning
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default SpecialOccasions;