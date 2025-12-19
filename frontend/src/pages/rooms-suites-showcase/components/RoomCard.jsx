import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RoomCard = ({ room, onViewDetails, onBookNow }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === room?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? room?.images?.length - 1 : prev - 1
    );
  };

  return (
    <div className="luxury-card overflow-hidden group cursor-pointer luxury-hover"
         onClick={() => onViewDetails(room)}>
      {/* Image Gallery */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={room?.images?.[currentImageIndex]}
          alt={`${room?.name} - View ${currentImageIndex + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 elegant-transition"
        />
        
        {/* Image Navigation */}
        {room?.images?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 elegant-transition hover:bg-background"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 elegant-transition hover:bg-background"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </>
        )}
        
        {/* Image Indicators */}
        {room?.images?.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {room?.images?.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e?.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full elegant-transition ${
                  index === currentImageIndex ? 'bg-secondary' : 'bg-background/60'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Room Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            {room?.type}
          </span>
        </div>
        
        {/* Special Offers Badge */}
        {room?.specialOffer && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
              {room?.specialOffer}
            </span>
          </div>
        )}
      </div>
      {/* Room Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
              {room?.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              {room?.size} • {room?.view}
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-heading font-bold text-primary">
              ${room?.price}
            </div>
            <div className="text-sm text-muted-foreground">per night</div>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {room?.description}
        </p>
        
        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room?.amenities?.slice(0, 4)?.map((amenity, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-1 px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
            >
              <Icon name={amenity?.icon} size={12} />
              <span>{amenity?.name}</span>
            </span>
          ))}
          {room?.amenities?.length > 4 && (
            <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
              +{room?.amenities?.length - 4} more
            </span>
          )}
        </div>
        
        {/* Guest Reviews */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < Math.floor(room?.rating) ? 'text-secondary fill-current' : 'text-muted-foreground'}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground">{room?.rating}</span>
          <span className="text-sm text-muted-foreground">({room?.reviewCount} reviews)</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e?.stopPropagation();
              onViewDetails(room);
            }}
          >
            View Details
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
            onClick={(e) => {
              e?.stopPropagation();
              onBookNow(room);
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;