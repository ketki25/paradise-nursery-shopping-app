const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

export const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: "ap1", name: "Snake Plant", price: 18, description: "A hardy, low-maintenance plant known for its upright leaves.", image: photo("photo-1593691509543-c55fb32e5cee") },
      { id: "ap2", name: "Peace Lily", price: 22, description: "Elegant white blooms and glossy green foliage for indoor spaces.", image: photo("photo-1593691509543-c55fb32e5cee") },
      { id: "ap3", name: "Areca Palm", price: 28, description: "A graceful tropical palm that adds a lush feel to a room.", image: photo("photo-1518531933037-91b2f5f229cc") },
      { id: "ap4", name: "Spider Plant", price: 16, description: "An adaptable favorite with arching striped leaves.", image: photo("photo-1501004318641-b39e6451bec6") },
      { id: "ap5", name: "Boston Fern", price: 20, description: "A leafy fern with soft, cascading fronds.", image: photo("photo-1497250681960-ef046c08a56e") },
      { id: "ap6", name: "Rubber Plant", price: 26, description: "Bold, broad leaves make this a striking indoor accent.", image: photo("photo-1509423350716-97f9360b4e09") }
    ]
  },
  {
    name: "Succulents & Cacti",
    plants: [
      { id: "sc1", name: "Aloe Vera", price: 14, description: "A sculptural succulent with fleshy, upright leaves.", image: photo("photo-1509423350716-97f9360b4e09") },
      { id: "sc2", name: "Echeveria", price: 12, description: "A compact rosette succulent in soft green tones.", image: photo("photo-1501004318641-b39e6451bec6") },
      { id: "sc3", name: "Jade Plant", price: 17, description: "A popular branching succulent with rounded leaves.", image: photo("photo-1497250681960-ef046c08a56e") },
      { id: "sc4", name: "Golden Barrel Cactus", price: 19, description: "A rounded cactus with a distinctive ribbed form.", image: photo("photo-1459411552884-841db9b3cc2a") },
      { id: "sc5", name: "Haworthia", price: 13, description: "A small patterned succulent ideal for desks and shelves.", image: photo("photo-1501004318641-b39e6451bec6") },
      { id: "sc6", name: "String of Pearls", price: 21, description: "Trailing stems carry bead-like leaves for hanging displays.", image: photo("photo-1497250681960-ef046c08a56e") }
    ]
  },
  {
    name: "Flowering & Decorative Plants",
    plants: [
      { id: "fd1", name: "Anthurium", price: 25, description: "Glossy leaves and vivid heart-shaped flowers brighten a room.", image: photo("photo-1497250681960-ef046c08a56e") },
      { id: "fd2", name: "African Violet", price: 15, description: "A compact flowering plant with cheerful colorful blooms.", image: photo("photo-1501004318641-b39e6451bec6") },
      { id: "fd3", name: "Orchid", price: 32, description: "An elegant flowering plant that makes a graceful centerpiece.", image: photo("photo-1518531933037-91b2f5f229cc") },
      { id: "fd4", name: "Calathea", price: 24, description: "Decorative patterned leaves bring texture to interiors.", image: photo("photo-1509423350716-97f9360b4e09") },
      { id: "fd5", name: "Monstera", price: 29, description: "Iconic split leaves create a bold tropical statement.", image: photo("photo-1501004318641-b39e6451bec6") },
      { id: "fd6", name: "Pothos", price: 17, description: "An easy-care trailing plant that looks lovely on shelves.", image: photo("photo-1497250681960-ef046c08a56e") }
    ]
  }
];