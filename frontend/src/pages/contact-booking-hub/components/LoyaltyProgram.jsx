import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const LoyaltyProgram = () => {
  const [membershipTier, setMembershipTier] = useState('silver');
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const membershipTiers = [
    {
      id: 'silver',
      name: 'Silver Elite',
      color: 'bg-gray-400',
      textColor: 'text-white',
      requirements: 'Stay 5 nights annually',
      benefits: [
        'Priority check-in',
        'Late checkout (2 PM)',
        '10% dining discount',
        'Complimentary WiFi',
        'Welcome amenity'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Elite',
      color: 'bg-secondary',
      textColor: 'text-secondary-foreground',
      requirements: 'Stay 15 nights annually',
      benefits: [
        'All Silver benefits',
        'Room upgrades (subject to availability)',
        'Complimentary breakfast',
        '15% dining & spa discount',
        'Exclusive member events'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum Elite',
      color: 'bg-primary',
      textColor: 'text-primary-foreground',
      requirements: 'Stay 30 nights annually',
      benefits: [
        'All Gold benefits',
        'Guaranteed room upgrades',
        'Executive lounge access',
        '20% dining & spa discount',
        'Personal concierge service'
      ]
    }
  ];

  const mockMemberData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    memberSince: '2022',
    currentTier: 'Gold Elite',
    pointsBalance: 12450,
    nightsThisYear: 18,
    nightsToNextTier: 12,
    upcomingReservations: [
      {
        id: 'RES001',
        dates: 'Dec 15-18, 2024',
        room: 'Ocean View Suite',
        nights: 3,
        pointsEarning: 450
      }
    ],
    recentStays: [
      {
        id: 'STAY001',
        dates: 'Oct 5-8, 2024',
        room: 'Deluxe Room',
        pointsEarned: 350
      },
      {
        id: 'STAY002',
        dates: 'Aug 12-15, 2024',
        room: 'Executive Suite',
        pointsEarned: 520
      }
    ]
  };

  const handleLogin = (e) => {
    e?.preventDefault();
    // Mock login - check for demo credentials
    if (loginForm?.email === 'sarah.johnson@email.com' && loginForm?.password === 'luxehaven2024') {
      setIsLoggedIn(true);
    } else {
      alert('Demo credentials:\nEmail: sarah.johnson@email.com\nPassword: luxehaven2024');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
  };

  const handleFormChange = (field, value) => {
    setLoginForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isLoggedIn) {
    return (
      <div className="space-y-6">
        {/* Member Dashboard Header */}
        <div className="luxury-card p-6 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-heading font-bold">Welcome back, {mockMemberData?.name}</h3>
              <p className="opacity-90">Member since {mockMemberData?.memberSince}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              iconName="LogOut"
              onClick={handleLogout}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Sign Out
            </Button>
          </div>
        </div>
        {/* Current Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="luxury-card p-6 text-center">
            <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={32} />
            </div>
            <h4 className="font-heading font-semibold text-lg">{mockMemberData?.currentTier}</h4>
            <p className="text-muted-foreground text-sm">Current Status</p>
          </div>

          <div className="luxury-card p-6 text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={32} />
            </div>
            <h4 className="font-heading font-semibold text-lg">{mockMemberData?.pointsBalance?.toLocaleString()}</h4>
            <p className="text-muted-foreground text-sm">Points Balance</p>
          </div>

          <div className="luxury-card p-6 text-center">
            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={32} />
            </div>
            <h4 className="font-heading font-semibold text-lg">{mockMemberData?.nightsThisYear}</h4>
            <p className="text-muted-foreground text-sm">Nights This Year</p>
          </div>
        </div>
        {/* Progress to Next Tier */}
        <div className="luxury-card p-6">
          <h4 className="font-semibold text-lg mb-4 flex items-center">
            <Icon name="TrendingUp" size={20} className="mr-2" />
            Progress to Platinum Elite
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Nights completed: {mockMemberData?.nightsThisYear}/30</span>
              <span>{mockMemberData?.nightsToNextTier} nights remaining</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="bg-primary h-3 rounded-full elegant-transition"
                style={{ width: `${(mockMemberData?.nightsThisYear / 30) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground">
              Stay {mockMemberData?.nightsToNextTier} more nights to unlock Platinum Elite benefits!
            </p>
          </div>
        </div>
        {/* Upcoming Reservations */}
        <div className="luxury-card p-6">
          <h4 className="font-semibold text-lg mb-4 flex items-center">
            <Icon name="Calendar" size={20} className="mr-2" />
            Upcoming Reservations
          </h4>
          {mockMemberData?.upcomingReservations?.map((reservation) => (
            <div key={reservation?.id} className="border border-border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-medium">{reservation?.room}</h5>
                  <p className="text-muted-foreground text-sm">{reservation?.dates}</p>
                  <p className="text-sm">{reservation?.nights} nights</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-success">+{reservation?.pointsEarning} points</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Manage Booking
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Recent Stays */}
        <div className="luxury-card p-6">
          <h4 className="font-semibold text-lg mb-4 flex items-center">
            <Icon name="History" size={20} className="mr-2" />
            Recent Stays
          </h4>
          <div className="space-y-3">
            {mockMemberData?.recentStays?.map((stay) => (
              <div key={stay?.id} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                <div>
                  <p className="font-medium">{stay?.room}</p>
                  <p className="text-sm text-muted-foreground">{stay?.dates}</p>
                </div>
                <p className="text-sm text-success">+{stay?.pointsEarned} points</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Login Form */}
      <div className="luxury-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center">
            <Icon name="User" size={24} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-xl">Member Login</h3>
            <p className="text-muted-foreground">Access your loyalty account and exclusive benefits</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 max-w-md">
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={loginForm?.email}
            onChange={(e) => handleFormChange('email', e?.target?.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={loginForm?.password}
            onChange={(e) => handleFormChange('password', e?.target?.value)}
            required
          />
          
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              variant="default"
              iconName="LogIn"
              iconPosition="right"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Sign In
            </Button>
            <Button variant="link" size="sm">
              Forgot Password?
            </Button>
          </div>
        </form>

        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Demo Login:</strong><br />
            Email: sarah.johnson@email.com<br />
            Password: luxehaven2024
          </p>
        </div>
      </div>
      {/* Membership Tiers */}
      <div>
        <h3 className="font-heading font-semibold text-2xl mb-6 text-center">Loyalty Program Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipTiers?.map((tier) => (
            <div key={tier?.id} className="luxury-card overflow-hidden hover:shadow-luxury elegant-transition">
              <div className={`${tier?.color} ${tier?.textColor} p-4 text-center`}>
                <h4 className="font-heading font-bold text-lg">{tier?.name}</h4>
                <p className="text-sm opacity-90">{tier?.requirements}</p>
              </div>
              
              <div className="p-6">
                <h5 className="font-semibold mb-3">Member Benefits:</h5>
                <ul className="space-y-2">
                  {tier?.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <Icon name="Check" size={16} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Join Program */}
      <div className="luxury-card p-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading font-semibold text-xl mb-4">Join Luxe Haven Elite</h3>
          <p className="text-muted-foreground mb-6">
            Start earning points and enjoying exclusive benefits from your very first stay. 
            Membership is complimentary and rewards begin immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              iconName="UserPlus"
              iconPosition="left"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Join Now - Free
            </Button>
            <Button
              variant="outline"
              iconName="Info"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;