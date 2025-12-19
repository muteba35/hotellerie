import React from 'react';
import Icon from '../../../components/AppIcon';

const MoodSelector = ({ selectedMood, onMoodChange }) => {
  const moods = [
    {
      id: 'romantic',
      title: 'Romantic Escape',
      description: 'Intimate spaces designed for couples',
      icon: 'Heart',
      gradient: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      textColor: 'text-rose-700'
    },
    {
      id: 'business',
      title: 'Business Excellence',
      description: 'Professional comfort meets luxury',
      icon: 'Briefcase',
      gradient: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      id: 'cultural',
      title: 'Cultural Immersion',
      description: 'Heritage meets contemporary design',
      icon: 'Palette',
      gradient: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700'
    },
    {
      id: 'celebration',
      title: 'Celebration Suite',
      description: 'Memorable moments in luxury',
      icon: 'Sparkles',
      gradient: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Find Your Perfect Stay
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover accommodations tailored to your travel mood and purpose
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {moods?.map((mood) => (
          <button
            key={mood?.id}
            onClick={() => onMoodChange(mood?.id)}
            className={`relative p-6 rounded-xl border-2 elegant-transition group ${
              selectedMood === mood?.id
                ? 'border-primary shadow-luxury scale-105'
                : 'border-border hover:border-primary/50 hover:shadow-elegant'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${mood?.gradient} opacity-0 group-hover:opacity-5 rounded-xl elegant-transition`} />
            
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-lg ${mood?.bgColor} flex items-center justify-center mb-4 mx-auto`}>
                <Icon name={mood?.icon} size={24} className={mood?.textColor} />
              </div>
              
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {mood?.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {mood?.description}
              </p>
            </div>
            
            {selectedMood === mood?.id && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Check" size={14} className="text-primary-foreground" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;