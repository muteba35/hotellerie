import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonTool = ({ rooms, isOpen, onClose }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  if (!isOpen) return null;

  const addRoom = (room) => {
    if (selectedRooms?.length < 3 && !selectedRooms?.find(r => r?.id === room?.id)) {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const removeRoom = (roomId) => {
    setSelectedRooms(selectedRooms?.filter(r => r?.id !== roomId));
  };

  const comparisonFeatures = [
    { key: 'price', label: 'Price per night', icon: 'DollarSign' },
    { key: 'size', label: 'Room size', icon: 'Maximize' },
    { key: 'view', label: 'View', icon: 'Eye' },
    { key: 'occupancy', label: 'Max occupancy', icon: 'Users' },
    { key: 'bedType', label: 'Bed type', icon: 'Bed' },
    { key: 'rating', label: 'Guest rating', icon: 'Star' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-background rounded-2xl shadow-luxury overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">
              Compare Rooms
            </h2>
            <p className="text-muted-foreground">
              Select up to 3 rooms to compare features and amenities
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center elegant-transition"
          >
            <Icon name="X" size={20} className="text-foreground" />
          </button>
        </div>
        
        <div className="flex h-[calc(90vh-120px)]">
          {/* Room Selection Sidebar */}
          <div className="w-80 border-r border-border overflow-y-auto">
            <div className="p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Available Rooms
              </h3>
              
              <div className="space-y-4">
                {rooms?.map((room) => {
                  const isSelected = selectedRooms?.find(r => r?.id === room?.id);
                  const canAdd = selectedRooms?.length < 3;
                  
                  return (
                    <div
                      key={room?.id}
                      className={`p-4 rounded-lg border cursor-pointer elegant-transition ${
                        isSelected
                          ? 'border-primary bg-primary/5'
                          : canAdd
                          ? 'border-border hover:border-primary/50' :'border-border opacity-50 cursor-not-allowed'
                      }`}
                      onClick={() => {
                        if (isSelected) {
                          removeRoom(room?.id);
                        } else if (canAdd) {
                          addRoom(room);
                        }
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                          src={room?.images?.[0]}
                          alt={room?.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-sm">
                            {room?.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            ${room?.price}/night
                          </p>
                        </div>
                        
                        <div className="flex-shrink-0">
                          {isSelected ? (
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <Icon name="Check" size={14} className="text-primary-foreground" />
                            </div>
                          ) : canAdd ? (
                            <div className="w-6 h-6 border-2 border-border rounded-full" />
                          ) : (
                            <div className="w-6 h-6 bg-muted rounded-full" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Comparison Table */}
          <div className="flex-1 overflow-y-auto">
            {selectedRooms?.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Icon name="ArrowLeft" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Select rooms to compare
                  </h3>
                  <p className="text-muted-foreground">
                    Choose up to 3 rooms from the sidebar to see a detailed comparison
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-6">
                {/* Room Headers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {selectedRooms?.map((room) => (
                    <div key={room?.id} className="relative">
                      <button
                        onClick={() => removeRoom(room?.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-error text-error-foreground rounded-full flex items-center justify-center z-10 hover:bg-error/90 elegant-transition"
                      >
                        <Icon name="X" size={12} />
                      </button>
                      
                      <div className="luxury-card overflow-hidden">
                        <Image
                          src={room?.images?.[0]}
                          alt={room?.name}
                          className="w-full h-32 object-cover"
                        />
                        
                        <div className="p-4">
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            {room?.name}
                          </h3>
                          <p className="text-2xl font-bold text-primary">
                            ${room?.price}
                          </p>
                          <p className="text-sm text-muted-foreground">per night</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Comparison Features */}
                <div className="space-y-6">
                  {comparisonFeatures?.map((feature) => (
                    <div key={feature?.key} className="border-b border-border pb-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Icon name={feature?.icon} size={16} className="text-primary" />
                        <h4 className="font-medium text-foreground">{feature?.label}</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {selectedRooms?.map((room) => (
                          <div key={room?.id} className="text-center p-4 bg-muted rounded-lg">
                            {feature?.key === 'price' && (
                              <span className="text-lg font-bold text-primary">
                                ${room?.[feature?.key]}
                              </span>
                            )}
                            {feature?.key === 'rating' && (
                              <div className="flex items-center justify-center space-x-1">
                                <span className="font-medium">{room?.[feature?.key]}</span>
                                <Icon name="Star" size={16} className="text-secondary fill-current" />
                              </div>
                            )}
                            {!['price', 'rating']?.includes(feature?.key) && (
                              <span className="text-foreground">
                                {room?.[feature?.key] || 'N/A'}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* Amenities Comparison */}
                  <div className="border-b border-border pb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Star" size={16} className="text-primary" />
                      <h4 className="font-medium text-foreground">Key Amenities</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedRooms?.map((room) => (
                        <div key={room?.id} className="p-4 bg-muted rounded-lg">
                          <div className="space-y-2">
                            {room?.amenities?.slice(0, 5)?.map((amenity, index) => (
                              <div key={index} className="flex items-center space-x-2 text-sm">
                                <Icon name="Check" size={12} className="text-success" />
                                <span className="text-foreground">{amenity?.name}</span>
                              </div>
                            ))}
                            {room?.amenities?.length > 5 && (
                              <p className="text-xs text-muted-foreground">
                                +{room?.amenities?.length - 5} more amenities
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedRooms?.map((room) => (
                    <Button
                      key={room?.id}
                      variant="default"
                      fullWidth
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      Book {room?.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTool;