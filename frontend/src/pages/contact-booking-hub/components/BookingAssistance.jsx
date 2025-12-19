import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const BookingAssistance = () => {
  const [selectedService, setSelectedService] = useState('');
  const [assistanceForm, setAssistanceForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    urgency: 'normal',
    description: ''
  });

  const assistanceServices = [
    {
      id: 'complex-booking',
      title: 'Complex Reservations',
      description: 'Multi-room bookings, extended stays, group coordination',
      icon: 'Calendar',
      color: 'bg-primary',
      textColor: 'text-primary-foreground'
    },
    {
      id: 'special-requests',
      title: 'Special Requests',
      description: 'Accessibility needs, dietary requirements, custom arrangements',
      icon: 'Heart',
      color: 'bg-accent',
      textColor: 'text-accent-foreground'
    },
    {
      id: 'custom-packages',
      title: 'Custom Packages',
      description: 'Tailored experiences, celebration planning, unique itineraries',
      icon: 'Gift',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    },
    {
      id: 'modification',
      title: 'Booking Modifications',
      description: 'Date changes, room upgrades, cancellation assistance',
      icon: 'Edit',
      color: 'bg-success',
      textColor: 'text-success-foreground'
    }
  ];

  const contactPreferences = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'text', label: 'Text Message' },
    { value: 'whatsapp', label: 'WhatsApp' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low Priority - Within 48 hours' },
    { value: 'normal', label: 'Normal - Within 24 hours' },
    { value: 'high', label: 'High Priority - Within 4 hours' },
    { value: 'urgent', label: 'Urgent - Within 1 hour' }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleFormChange = (field, value) => {
    setAssistanceForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const selectedServiceData = assistanceServices?.find(s => s?.id === selectedService);
    setTimeout(() => {
      alert(`Assistance request submitted for "${selectedServiceData?.title}"! Our booking specialist will contact you via ${assistanceForm?.preferredContact} based on your ${assistanceForm?.urgency} priority level.`);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {/* Service Selection */}
      <div>
        <h3 className="font-heading font-semibold text-xl mb-6 text-center">How Can We Assist You?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assistanceServices?.map((service) => (
            <div
              key={service?.id}
              className={`luxury-card p-6 cursor-pointer elegant-transition ${
                selectedService === service?.id
                  ? 'ring-2 ring-primary shadow-luxury'
                  : 'hover:shadow-md'
              }`}
              onClick={() => handleServiceSelect(service?.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${service?.color} ${service?.textColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon name={service?.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">{service?.title}</h4>
                  <p className="text-muted-foreground text-sm">{service?.description}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedService === service?.id
                    ? 'bg-primary border-primary' :'border-border'
                }`}>
                  {selectedService === service?.id && (
                    <Icon name="Check" size={16} className="text-primary-foreground" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Assistance Form */}
      {selectedService && (
        <div className="luxury-card p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              <Icon name="Headphones" size={20} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg">Request Assistance</h3>
              <p className="text-muted-foreground text-sm">
                {assistanceServices?.find(s => s?.id === selectedService)?.title}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="Your name"
                value={assistanceForm?.name}
                onChange={(e) => handleFormChange('name', e?.target?.value)}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={assistanceForm?.email}
                onChange={(e) => handleFormChange('email', e?.target?.value)}
                required
              />
            </div>

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={assistanceForm?.phone}
              onChange={(e) => handleFormChange('phone', e?.target?.value)}
              required
            />

            {/* Contact Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Preferred Contact Method"
                options={contactPreferences}
                value={assistanceForm?.preferredContact}
                onChange={(value) => handleFormChange('preferredContact', value)}
              />
              <Select
                label="Urgency Level"
                options={urgencyLevels}
                value={assistanceForm?.urgency}
                onChange={(value) => handleFormChange('urgency', value)}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Detailed Description
              </label>
              <textarea
                className="w-full min-h-[120px] px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
                placeholder="Please provide detailed information about your request, including dates, preferences, special requirements, or any specific assistance needed..."
                value={assistanceForm?.description}
                onChange={(e) => handleFormChange('description', e?.target?.value)}
                required
              />
            </div>

            {/* Response Time Information */}
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center">
                <Icon name="Clock" size={18} className="mr-2" />
                Expected Response Time
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="text-center">
                  <div className="font-medium text-success">Low Priority</div>
                  <div className="text-muted-foreground">48 hours</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-primary">Normal</div>
                  <div className="text-muted-foreground">24 hours</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-warning">High Priority</div>
                  <div className="text-muted-foreground">4 hours</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-error">Urgent</div>
                  <div className="text-muted-foreground">1 hour</div>
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
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      )}
      {/* Additional Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="luxury-card p-6 text-center">
          <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Phone" size={32} />
          </div>
          <h4 className="font-semibold mb-2">Emergency Support</h4>
          <p className="text-muted-foreground text-sm mb-4">24/7 immediate assistance for urgent matters</p>
          <Button variant="outline" size="sm" fullWidth>
            Call Emergency Line
          </Button>
        </div>

        <div className="luxury-card p-6 text-center">
          <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="MessageSquare" size={32} />
          </div>
          <h4 className="font-semibold mb-2">Live Chat</h4>
          <p className="text-muted-foreground text-sm mb-4">Instant support with our booking specialists</p>
          <Button variant="outline" size="sm" fullWidth>
            Start Live Chat
          </Button>
        </div>

        <div className="luxury-card p-6 text-center">
          <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="BookOpen" size={32} />
          </div>
          <h4 className="font-semibold mb-2">Help Center</h4>
          <p className="text-muted-foreground text-sm mb-4">Browse FAQs and self-service options</p>
          <Button variant="outline" size="sm" fullWidth>
            Visit Help Center
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingAssistance;