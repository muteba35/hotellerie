import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const [activeChat, setActiveChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      id: 'phone',
      title: 'Direct Concierge',
      subtitle: 'Immediate assistance',
      icon: 'Phone',
      primary: '+1 (555) 123-LUXE',
      secondary: 'Available 24/7',
      action: 'Call Now',
      color: 'bg-primary',
      textColor: 'text-primary-foreground'
    },
    {
      id: 'email',
      title: 'Email Support',
      subtitle: 'Detailed inquiries',
      icon: 'Mail',
      primary: 'reservations@luxehaven.com',
      secondary: 'Response within 2 hours',
      action: 'Send Email',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      subtitle: 'Instant booking help',
      icon: 'MessageCircle',
      primary: 'Specialized booking agents',
      secondary: 'Online now',
      action: 'Start Chat',
      color: 'bg-success',
      textColor: 'text-success-foreground'
    }
  ];

  const handleChatToggle = () => {
    setActiveChat(!activeChat);
  };

  const handleSendMessage = () => {
    if (chatMessage?.trim()) {
      // Mock chat functionality
      setChatMessage('');
      setTimeout(() => {
        alert('Message sent! Our booking specialist will respond shortly.');
      }, 500);
    }
  };

  const handleEmailSubmit = (e) => {
    e?.preventDefault();
    // Mock email functionality
    setTimeout(() => {
      alert('Email sent successfully! We will respond within 2 hours.');
      setEmailForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleEmailChange = (field, value) => {
    setEmailForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-8">
      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods?.map((method) => (
          <div key={method?.id} className="luxury-card p-6 hover:shadow-luxury elegant-transition">
            <div className={`w-12 h-12 ${method?.color} ${method?.textColor} rounded-lg flex items-center justify-center mb-4`}>
              <Icon name={method?.icon} size={24} />
            </div>
            
            <h3 className="font-heading font-semibold text-lg mb-1">{method?.title}</h3>
            <p className="text-muted-foreground text-sm mb-3">{method?.subtitle}</p>
            
            <div className="space-y-2 mb-4">
              <p className="font-medium text-foreground">{method?.primary}</p>
              <p className="text-sm text-muted-foreground flex items-center">
                <Icon name="Clock" size={14} className="mr-1" />
                {method?.secondary}
              </p>
            </div>
            
            <Button
              variant={method?.id === 'phone' ? 'default' : method?.id === 'email' ? 'outline' : 'default'}
              fullWidth
              iconName={method?.icon}
              iconPosition="left"
              onClick={method?.id === 'chat' ? handleChatToggle : undefined}
              className={method?.id === 'email' ? 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground' : ''}
            >
              {method?.action}
            </Button>
          </div>
        ))}
      </div>
      {/* Live Chat Interface */}
      {activeChat && (
        <div className="luxury-card p-6 border-l-4 border-l-success">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success text-success-foreground rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Live Chat Support</h4>
                <p className="text-sm text-success flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  Sarah - Booking Specialist
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={handleChatToggle}
            />
          </div>
          
          <div className="bg-muted rounded-lg p-4 mb-4 min-h-[120px]">
            <div className="space-y-3">
              <div className="bg-background rounded-lg p-3 max-w-xs">
                <p className="text-sm">Hello! I'm Sarah, your booking specialist. How can I help you plan your perfect stay at Luxe Haven?</p>
                <span className="text-xs text-muted-foreground">Just now</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Input
              placeholder="Type your message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button
              variant="default"
              iconName="Send"
              onClick={handleSendMessage}
              disabled={!chatMessage?.trim()}
            />
          </div>
        </div>
      )}
      {/* Email Form */}
      <div className="luxury-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center">
            <Icon name="Mail" size={20} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg">Send us a Message</h3>
            <p className="text-muted-foreground text-sm">Detailed inquiries and special requests</p>
          </div>
        </div>
        
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Your name"
              value={emailForm?.name}
              onChange={(e) => handleEmailChange('name', e?.target?.value)}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              value={emailForm?.email}
              onChange={(e) => handleEmailChange('email', e?.target?.value)}
              required
            />
          </div>
          
          <Input
            label="Subject"
            type="text"
            placeholder="What can we help you with?"
            value={emailForm?.subject}
            onChange={(e) => handleEmailChange('subject', e?.target?.value)}
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              className="w-full min-h-[120px] px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
              placeholder="Please provide details about your inquiry, special requests, or how we can assist you..."
              value={emailForm?.message}
              onChange={(e) => handleEmailChange('message', e?.target?.value)}
              required
            />
          </div>
          
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="default"
              iconName="Send"
              iconPosition="right"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMethods;