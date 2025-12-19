import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const GroupBooking = () => {
  const [groupForm, setGroupForm] = useState({
    eventType: '',
    organizationName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    eventDate: '',
    duration: '1',
    guestCount: '',
    roomsNeeded: '',
    eventSpaces: [],
    cateringNeeds: '',
    specialRequirements: ''
  });

  const eventTypes = [
    { value: 'corporate', label: 'Corporate Event', description: 'Business meetings, conferences, retreats' },
    { value: 'wedding', label: 'Wedding Celebration', description: 'Wedding ceremonies and receptions' },
    { value: 'family', label: 'Family Gathering', description: 'Reunions, anniversaries, celebrations' },
    { value: 'social', label: 'Social Event', description: 'Parties, fundraisers, social gatherings' }
  ];

  const durationOptions = [
    { value: '1', label: '1 Day' },
    { value: '2', label: '2 Days' },
    { value: '3', label: '3 Days' },
    { value: '4-7', label: '4-7 Days' },
    { value: '1week+', label: '1 Week or More' }
  ];

  const eventSpaces = [
    { id: 'ballroom', name: 'Grand Ballroom', capacity: '200 guests', price: 2500 },
    { id: 'terrace', name: 'Ocean Terrace', capacity: '150 guests', price: 1800 },
    { id: 'boardroom', name: 'Executive Boardroom', capacity: '20 guests', price: 800 },
    { id: 'garden', name: 'Garden Pavilion', capacity: '100 guests', price: 1200 },
    { id: 'private-dining', name: 'Private Dining Room', capacity: '50 guests', price: 1000 }
  ];

  const cateringOptions = [
    { value: 'none', label: 'No Catering Needed' },
    { value: 'breakfast', label: 'Breakfast Service' },
    { value: 'lunch', label: 'Lunch Service' },
    { value: 'dinner', label: 'Dinner Service' },
    { value: 'cocktail', label: 'Cocktail Reception' },
    { value: 'full-service', label: 'Full Service Catering' }
  ];

  const handleFormChange = (field, value) => {
    setGroupForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSpaceToggle = (spaceId) => {
    setGroupForm(prev => ({
      ...prev,
      eventSpaces: prev?.eventSpaces?.includes(spaceId)
        ? prev?.eventSpaces?.filter(id => id !== spaceId)
        : [...prev?.eventSpaces, spaceId]
    }));
  };

  const calculateSpaceTotal = () => {
    return eventSpaces?.filter(space => groupForm?.eventSpaces?.includes(space?.id))?.reduce((sum, space) => sum + space?.price, 0);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setTimeout(() => {
      alert('Group booking inquiry submitted successfully! Our dedicated event coordinator will contact you within 24 hours to discuss your requirements and provide a detailed proposal.');
    }, 1000);
  };

  return (
    <div className="luxury-card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
          <Icon name="Users" size={24} />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-xl">Group Bookings & Events</h3>
          <p className="text-muted-foreground">Dedicated coordination for corporate events, weddings, and celebrations</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Type */}
        <Select
          label="Event Type"
          placeholder="Select your event type"
          options={eventTypes}
          value={groupForm?.eventType}
          onChange={(value) => handleFormChange('eventType', value)}
          required
        />

        {/* Organization & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Organization/Company Name"
            type="text"
            placeholder="Your organization name"
            value={groupForm?.organizationName}
            onChange={(e) => handleFormChange('organizationName', e?.target?.value)}
          />
          <Input
            label="Contact Person"
            type="text"
            placeholder="Primary contact name"
            value={groupForm?.contactName}
            onChange={(e) => handleFormChange('contactName', e?.target?.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="contact@company.com"
            value={groupForm?.contactEmail}
            onChange={(e) => handleFormChange('contactEmail', e?.target?.value)}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={groupForm?.contactPhone}
            onChange={(e) => handleFormChange('contactPhone', e?.target?.value)}
            required
          />
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Event Date"
            type="date"
            value={groupForm?.eventDate}
            onChange={(e) => handleFormChange('eventDate', e?.target?.value)}
            min={new Date()?.toISOString()?.split('T')?.[0]}
            required
          />
          <Select
            label="Event Duration"
            options={durationOptions}
            value={groupForm?.duration}
            onChange={(value) => handleFormChange('duration', value)}
          />
          <Input
            label="Expected Guest Count"
            type="number"
            placeholder="Number of attendees"
            value={groupForm?.guestCount}
            onChange={(e) => handleFormChange('guestCount', e?.target?.value)}
            min="1"
            required
          />
        </div>

        <Input
          label="Rooms Needed"
          type="number"
          placeholder="Number of guest rooms required"
          value={groupForm?.roomsNeeded}
          onChange={(e) => handleFormChange('roomsNeeded', e?.target?.value)}
          min="0"
        />

        {/* Event Spaces */}
        <div>
          <h4 className="font-semibold text-lg mb-4 flex items-center">
            <Icon name="MapPin" size={20} className="mr-2" />
            Event Spaces Required
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventSpaces?.map((space) => (
              <div
                key={space?.id}
                className={`border rounded-lg p-4 cursor-pointer elegant-transition ${
                  groupForm?.eventSpaces?.includes(space?.id)
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
                onClick={() => handleSpaceToggle(space?.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-foreground">{space?.name}</h5>
                    <p className="text-sm text-muted-foreground">{space?.capacity}</p>
                    <p className="font-semibold text-primary mt-1">${space?.price}/day</p>
                  </div>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    groupForm?.eventSpaces?.includes(space?.id)
                      ? 'bg-primary border-primary' :'border-border'
                  }`}>
                    {groupForm?.eventSpaces?.includes(space?.id) && (
                      <Icon name="Check" size={14} className="text-primary-foreground" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {groupForm?.eventSpaces?.length > 0 && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">Selected Spaces Total:</span>
                <span className="text-lg font-bold text-primary">${calculateSpaceTotal()}/day</span>
              </div>
            </div>
          )}
        </div>

        {/* Catering Needs */}
        <Select
          label="Catering Requirements"
          placeholder="Select catering needs"
          options={cateringOptions}
          value={groupForm?.cateringNeeds}
          onChange={(value) => handleFormChange('cateringNeeds', value)}
        />

        {/* Special Requirements */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Special Requirements</label>
          <textarea
            className="w-full min-h-[120px] px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
            placeholder="Audio/visual equipment, accessibility needs, dietary restrictions, transportation, entertainment, special arrangements..."
            value={groupForm?.specialRequirements}
            onChange={(e) => handleFormChange('specialRequirements', e?.target?.value)}
          />
        </div>

        {/* Group Benefits */}
        <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
          <h4 className="font-semibold text-secondary mb-3 flex items-center">
            <Icon name="Award" size={18} className="mr-2" />
            Group Booking Benefits
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Icon name="Percent" size={14} className="mr-2 text-success" />
              Volume discounts available
            </div>
            <div className="flex items-center text-muted-foreground">
              <Icon name="UserCheck" size={14} className="mr-2 text-success" />
              Dedicated event coordinator
            </div>
            <div className="flex items-center text-muted-foreground">
              <Icon name="Calendar" size={14} className="mr-2 text-success" />
              Flexible booking terms
            </div>
            <div className="flex items-center text-muted-foreground">
              <Icon name="Headphones" size={14} className="mr-2 text-success" />
              24/7 event support
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="default"
            size="lg"
            iconName="Send"
            iconPosition="right"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Submit Group Inquiry
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GroupBooking;