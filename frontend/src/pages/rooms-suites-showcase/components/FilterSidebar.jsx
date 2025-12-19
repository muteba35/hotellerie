import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterSidebar = ({ filters, onFiltersChange, isOpen, onClose }) => {
  const priceRanges = [
    { id: 'budget', label: 'Under $300', min: 0, max: 300 },
    { id: 'mid', label: '$300 - $600', min: 300, max: 600 },
    { id: 'luxury', label: '$600 - $1000', min: 600, max: 1000 },
    { id: 'premium', label: 'Over $1000', min: 1000, max: 9999 }
  ];

  const roomTypes = [
    'Deluxe Room',
    'Junior Suite',
    'Executive Suite',
    'Heritage Suite',
    'Penthouse'
  ];

  const amenityCategories = [
    {
      title: 'Room Features',
      items: [
        { id: 'balcony', label: 'Private Balcony', icon: 'Home' },
        { id: 'fireplace', label: 'Fireplace', icon: 'Flame' },
        { id: 'kitchenette', label: 'Kitchenette', icon: 'ChefHat' },
        { id: 'workspace', label: 'Work Space', icon: 'Briefcase' }
      ]
    },
    {
      title: 'Technology',
      items: [
        { id: 'wifi', label: 'High-Speed WiFi', icon: 'Wifi' },
        { id: 'tv', label: 'Smart TV', icon: 'Tv' },
        { id: 'sound', label: 'Premium Sound', icon: 'Volume2' },
        { id: 'charging', label: 'Wireless Charging', icon: 'Battery' }
      ]
    },
    {
      title: 'Bathroom',
      items: [
        { id: 'bathtub', label: 'Soaking Tub', icon: 'Bath' },
        { id: 'shower', label: 'Rain Shower', icon: 'Droplets' },
        { id: 'toiletries', label: 'Luxury Toiletries', icon: 'Sparkles' },
        { id: 'robes', label: 'Plush Robes', icon: 'Shirt' }
      ]
    }
  ];

  const handlePriceRangeChange = (range) => {
    onFiltersChange({
      ...filters,
      priceRange: filters?.priceRange === range?.id ? null : range?.id
    });
  };

  const handleRoomTypeChange = (type) => {
    const updatedTypes = filters?.roomTypes?.includes(type)
      ? filters?.roomTypes?.filter(t => t !== type)
      : [...filters?.roomTypes, type];
    
    onFiltersChange({
      ...filters,
      roomTypes: updatedTypes
    });
  };

  const handleAmenityChange = (amenityId) => {
    const updatedAmenities = filters?.amenities?.includes(amenityId)
      ? filters?.amenities?.filter(a => a !== amenityId)
      : [...filters?.amenities, amenityId];
    
    onFiltersChange({
      ...filters,
      amenities: updatedAmenities
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      priceRange: null,
      roomTypes: [],
      amenities: [],
      guests: 1,
      checkIn: '',
      checkOut: ''
    });
  };

  const activeFiltersCount = 
    (filters?.priceRange ? 1 : 0) +
    filters?.roomTypes?.length +
    filters?.amenities?.length;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`fixed lg:relative top-0 right-0 h-full w-80 bg-background border-l lg:border-l-0 lg:border-r border-border z-50 lg:z-0 transform lg:transform-none elegant-transition ${
        isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      }`}>
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={20} className="text-primary" />
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Filters
              </h3>
              {activeFiltersCount > 0 && (
                <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-muted-foreground hover:text-foreground elegant-transition"
                >
                  Clear All
                </button>
              )}
              
              <button
                onClick={onClose}
                className="lg:hidden w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center elegant-transition"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Date Selection */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Stay Dates</h4>
              <div className="space-y-3">
                <Input
                  type="date"
                  label="Check-in"
                  value={filters?.checkIn}
                  onChange={(e) => onFiltersChange({...filters, checkIn: e?.target?.value})}
                />
                <Input
                  type="date"
                  label="Check-out"
                  value={filters?.checkOut}
                  onChange={(e) => onFiltersChange({...filters, checkOut: e?.target?.value})}
                />
              </div>
            </div>
            
            {/* Guests */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Guests</h4>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onFiltersChange({...filters, guests: Math.max(1, filters?.guests - 1)})}
                  className="w-8 h-8 rounded-full border border-border hover:bg-muted flex items-center justify-center elegant-transition"
                >
                  <Icon name="Minus" size={14} />
                </button>
                
                <span className="w-12 text-center font-medium">{filters?.guests}</span>
                
                <button
                  onClick={() => onFiltersChange({...filters, guests: Math.min(8, filters?.guests + 1)})}
                  className="w-8 h-8 rounded-full border border-border hover:bg-muted flex items-center justify-center elegant-transition"
                >
                  <Icon name="Plus" size={14} />
                </button>
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Price Range</h4>
              <div className="space-y-2">
                {priceRanges?.map((range) => (
                  <button
                    key={range?.id}
                    onClick={() => handlePriceRangeChange(range)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border elegant-transition ${
                      filters?.priceRange === range?.id
                        ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50 text-foreground'
                    }`}
                  >
                    <span>{range?.label}</span>
                    {filters?.priceRange === range?.id && (
                      <Icon name="Check" size={16} />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Room Types */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Room Types</h4>
              <div className="space-y-2">
                {roomTypes?.map((type) => (
                  <label
                    key={type}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted cursor-pointer elegant-transition"
                  >
                    <input
                      type="checkbox"
                      checked={filters?.roomTypes?.includes(type)}
                      onChange={() => handleRoomTypeChange(type)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-foreground">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Amenities */}
            {amenityCategories?.map((category) => (
              <div key={category?.title}>
                <h4 className="font-medium text-foreground mb-4">{category?.title}</h4>
                <div className="space-y-2">
                  {category?.items?.map((amenity) => (
                    <label
                      key={amenity?.id}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted cursor-pointer elegant-transition"
                    >
                      <input
                        type="checkbox"
                        checked={filters?.amenities?.includes(amenity?.id)}
                        onChange={() => handleAmenityChange(amenity?.id)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                      />
                      <Icon name={amenity?.icon} size={16} className="text-muted-foreground" />
                      <span className="text-foreground">{amenity?.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Apply Button (Mobile) */}
          <div className="lg:hidden p-6 border-t border-border">
            <Button
              variant="default"
              fullWidth
              onClick={onClose}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;