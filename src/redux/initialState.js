const initialState = {
  viewport: {
    height: null,
    width: null,
  },
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      favorite: true,
      photo:
        'https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 4,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      newFurniture: true,
      favorite: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      rating: 3,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 15 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 10 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3558644/pexels-photo-3558644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 10 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3190541/pexels-photo-3190541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=960',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3558644/pexels-photo-3558644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3190541/pexels-photo-3190541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=960',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3190541/pexels-photo-3190541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3558644/pexels-photo-3558644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3190541/pexels-photo-3190541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-chair-1',
      name: 'Cool Chair 1',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-chair-2',
      name: 'Cool Chair 2',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-chair-3',
      name: 'Cool Chair 3',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-chair-4',
      name: 'Cool Chair 4',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-chair-5',
      name: 'Cool Chair 5',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-chair-6',
      name: 'Cool Chair 6',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-sofa-1',
      name: 'Cool Sofa 1',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-sofa-2',
      name: 'Cool Sofa 2',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-sofa-3',
      name: 'Cool Sofa 3',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-sofa-4',
      name: 'Cool Sofa 4',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-sofa-5',
      name: 'Cool Sofa 5',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-sofa-6',
      name: 'Cool Sofa 6',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3190541/pexels-photo-3190541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-table-1',
      name: 'Cool Table 1',
      category: 'table',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-table-2',
      name: 'Cool Table 2',
      category: 'table',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-table-3',
      name: 'Cool Table 3',
      category: 'table',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-table-4',
      name: 'Cool Table 4',
      category: 'table',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-table-5',
      name: 'Cool Table 5',
      category: 'table',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-table-6',
      name: 'Cool Table 6',
      category: 'table',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3190541/pexels-photo-3190541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-dining-1',
      name: 'Cool Dining 1',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-dining-2',
      name: 'Cool Dining 2',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-dining-3',
      name: 'Cool Dining 3',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/916337/pexels-photo-916337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-dining-4',
      name: 'Cool Dining 4',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-dining-5',
      name: 'Cool Dining 5',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      id: 'cool-dining-6',
      name: 'Cool Dining 6',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: { name: 'sale', discount: 25 },
      newFurniture: true,
      photo:
        'https://images.pexels.com/photos/3190541/pexels-photo-3190541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ],
  cart: {
    products: [],
  },

  opinions: [
    {
      name: 'John Smith',
      image:
        'https://images.unsplash.com/photo-1579042877185-396212310117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      profession: 'Furniture client',
      opinion:
        'Praesent massa justo, finibus in nisl nec, luctus blandit sem. Mauris vitae elementum ante, vitae porttitor dui. ',
    },
    {
      name: 'Hans Rosling',
      image:
        'https://images.unsplash.com/photo-1572628252713-5f0904beb2fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      profession: 'Designer',
      opinion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit, sem non dapibus aliquam, lectus mi auctor odio, ut ornare diam nibh eget arcu. Suspendisse facilisis nisl vitae velit finibus, sit amet congue purus euismod. ',
    },
    {
      name: 'Baby Shark',
      image:
        'https://images.unsplash.com/photo-1575899541145-3a349b835bf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80',
      profession: 'Furniture client',
      opinion:
        'Praesent massa justo, finibus in nisl nec, luctus blandit sem. Mauris vitae elementum ante, vitae porttitor dui. ',
    },
  ],
};

export default initialState;
