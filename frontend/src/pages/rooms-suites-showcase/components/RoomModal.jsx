import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RoomModal = ({ room, isOpen, onClose, onBookNow }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !room) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'amenities', label: 'Amenities', icon: 'Star' },
    { id: 'gallery', label: 'Gallery', icon: 'Camera' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageCircle' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === room?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? room?.images?.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-background rounded-2xl shadow-luxury overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {room?.name}
            </h2>
            <p className="text-muted-foreground">
              {room?.size} • {room?.view}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-3xl font-heading font-bold text-primary">
                ${room?.price}
              </div>
              <div className="text-sm text-muted-foreground">per night</div>
            </div>
            
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center elegant-transition"
            >
              <Icon name="X" size={20} className="text-foreground" />
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium elegant-transition ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Image */}
              <div className="relative">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={room?.images?.[currentImageIndex]}
                    alt={`${room?.name} - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {room?.images?.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background elegant-transition"
                      >
                        <Icon name="ChevronLeft" size={20} />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background elegant-transition"
                      >
                        <Icon name="ChevronRight" size={20} />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Virtual Tour Button */}
                <Button
                  variant="secondary"
                  className="mt-4 w-full"
                  iconName="Eye"
                  iconPosition="left"
                >
                  360° Virtual Tour
                </Button>
              </div>
              
              {/* Details */}
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4">Room Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Description</h4>
                    <p className="text-muted-foreground">{room?.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {room?.features?.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                          <Icon name="Check" size={16} className="text-success" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Room Specifications</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium">{room?.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">View:</span>
                        <span className="font-medium">{room?.view}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Occupancy:</span>
                        <span className="font-medium">{room?.occupancy}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Bed Type:</span>
                        <span className="font-medium">{room?.bedType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'amenities' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {room?.amenities?.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={amenity?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{amenity?.name}</h4>
                    {amenity?.description && (
                      <p className="text-sm text-muted-foreground">{amenity?.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {room?.images?.map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${room?.name} - Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
                  />
                  {currentImageIndex === index && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <Icon name="Eye" size={24} className="text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {room?.reviews?.map((review, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={review?.avatar}
                      alt={review?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-foreground">{review?.name}</h4>
                          <p className="text-sm text-muted-foreground">{review?.date}</p>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              className={i < review?.rating ? 'text-secondary fill-current' : 'text-muted-foreground'}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">{review?.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={i < Math.floor(room?.rating) ? 'text-secondary fill-current' : 'text-muted-foreground'}
                />
              ))}
            </div>
            <span className="font-medium text-foreground">{room?.rating}</span>
            <span className="text-muted-foreground">({room?.reviewCount} reviews)</span>
          </div>
          
          <div className="flex space-x-3">
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Concierge Chat
            </Button>
            
            <Button
              variant="default"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => onBookNow(room)}
              iconName="Calendar"
              iconPosition="left"
            >
              Book This Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;