import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SeasonalMenu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [selectedDish, setSelectedDish] = useState(null);

  const menuCategories = [
    { id: 'appetizers', name: 'Appetizers', icon: 'Utensils' },
    { id: 'mains', name: 'Main Courses', icon: 'ChefHat' },
    { id: 'desserts', name: 'Desserts', icon: 'Cookie' },
    { id: 'beverages', name: 'Beverages', icon: 'Wine' }
  ];

  const menuItems = {
    appetizers: [
      {
        id: 1,
        name: "Seared Scallops",
        description: "Pan-seared diver scallops with cauliflower purée, pancetta crisps, and micro herbs",
        price: "$28",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: ["Fresh Diver Scallops", "Organic Cauliflower", "Artisan Pancetta", "Garden Micro Herbs"],
        winePairing: "Chablis Premier Cru",
        preparationTime: "12 minutes",
        dietary: ["Gluten-Free"],
        origin: "Local Harbor - 2 miles"
      },
      {
        id: 2,
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with aged parmesan, black truffle, and wild mushrooms",
        price: "$24",
        image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: ["Arborio Rice", "Black Truffle", "Aged Parmesan", "Wild Mushrooms"],
        winePairing: "Barolo DOCG",
        preparationTime: "15 minutes",
        dietary: ["Vegetarian"],
        origin: "Local Farm - 5 miles"
      }
    ],
    mains: [
      {
        id: 3,
        name: "Herb-Crusted Lamb",
        description: "Rack of lamb with rosemary crust, roasted vegetables, and red wine jus",
        price: "$48",
        image: "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: ["Premium Lamb Rack", "Fresh Rosemary", "Seasonal Vegetables", "Red Wine Reduction"],
        winePairing: "Côtes du Rhône",
        preparationTime: "25 minutes",
        dietary: ["Gluten-Free"],
        origin: "Heritage Farm - 15 miles"
      },
      {
        id: 4,
        name: "Pan-Seared Halibut",
        description: "Fresh halibut with lemon butter sauce, asparagus, and fingerling potatoes",
        price: "$42",
        image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: ["Fresh Halibut", "Organic Lemon", "Spring Asparagus", "Fingerling Potatoes"],
        winePairing: "Sancerre",
        preparationTime: "18 minutes",
        dietary: ["Gluten-Free", "Pescatarian"],
        origin: "Coastal Fishery - 8 miles"
      }
    ],
    desserts: [
      {
        id: 5,
        name: "Chocolate Soufflé",
        description: "Warm dark chocolate soufflé with vanilla bean ice cream and berry compote",
        price: "$18",
        image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: ["Belgian Dark Chocolate", "Vanilla Bean", "Fresh Berries", "Farm Eggs"],
        winePairing: "Port Wine",
        preparationTime: "20 minutes",
        dietary: ["Vegetarian"],
        origin: "Local Dairy - 3 miles"
      }
    ],
    beverages: [
      {
        id: 6,
        name: "Signature Cocktail",
        description: "House-crafted cocktail with premium spirits and fresh ingredients",
        price: "$16",
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800",
        ingredients: ["Premium Gin", "Fresh Herbs", "Artisan Bitters", "House Syrup"],
        winePairing: "Perfect as is",
        preparationTime: "5 minutes",
        dietary: ["Vegan"],
        origin: "Local Distillery - 12 miles"
      }
    ]
  };

  const currentItems = menuItems?.[activeCategory] || [];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Utensils" size={32} className="text-secondary" />
            <h2 className="text-4xl font-heading font-bold text-foreground">Seasonal Menu</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated seasonal offerings, featuring the finest local ingredients 
            and expertly paired wines from our sommelier's collection.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Icon name="Calendar" size={16} className="text-secondary" />
            <span className="text-sm text-secondary font-medium">Winter 2025 Collection</span>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories?.map((category) => (
            <Button
              key={category?.id}
              variant={activeCategory === category?.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category?.id)}
              iconName={category?.icon}
              iconPosition="left"
              className="min-w-[140px]"
            >
              {category?.name}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentItems?.map((item) => (
            <div
              key={item?.id}
              className="luxury-card p-6 cursor-pointer luxury-hover"
              onClick={() => setSelectedDish(item)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {item?.price}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-heading font-semibold text-foreground">{item?.name}</h3>
                  <div className="flex space-x-1">
                    {item?.dietary?.map((diet, index) => (
                      <span
                        key={index}
                        className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item?.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-secondary" />
                    <span className="text-muted-foreground">{item?.preparationTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Wine" size={14} className="text-secondary" />
                    <span className="text-muted-foreground">{item?.winePairing}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="Eye"
                  iconPosition="left"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Dish Detail Modal */}
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card rounded-2xl shadow-luxury max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <Image
                  src={selectedDish?.image}
                  alt={selectedDish?.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedDish(null)}
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                  iconName="X"
                />
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                      {selectedDish?.name}
                    </h3>
                    <p className="text-2xl text-secondary font-semibold">{selectedDish?.price}</p>
                  </div>
                  <div className="flex space-x-2">
                    {selectedDish?.dietary?.map((diet, index) => (
                      <span
                        key={index}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedDish?.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center">
                      <Icon name="Leaf" size={18} className="text-secondary mr-2" />
                      Ingredients
                    </h4>
                    <ul className="space-y-2">
                      {selectedDish?.ingredients?.map((ingredient, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <Icon name="Check" size={14} className="text-success mr-2" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2 flex items-center">
                        <Icon name="Wine" size={18} className="text-secondary mr-2" />
                        Wine Pairing
                      </h4>
                      <p className="text-sm text-muted-foreground">{selectedDish?.winePairing}</p>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2 flex items-center">
                        <Icon name="MapPin" size={18} className="text-secondary mr-2" />
                        Source
                      </h4>
                      <p className="text-sm text-muted-foreground">{selectedDish?.origin}</p>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2 flex items-center">
                        <Icon name="Clock" size={18} className="text-secondary mr-2" />
                        Preparation
                      </h4>
                      <p className="text-sm text-muted-foreground">{selectedDish?.preparationTime}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="default" fullWidth iconName="Calendar" iconPosition="left">
                    Reserve Table
                  </Button>
                  <Button variant="outline" fullWidth iconName="Phone" iconPosition="left">
                    Call Restaurant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SeasonalMenu;