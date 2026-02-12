export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number; // 0-5
  reviews: number;
  image: string;
  category: 'Just Released' | 'Best Sellers' | 'Coming Soon';
  genre: string;
  format: 'Hardcover' | 'Paperback' | 'E-book' | 'Audiobook';
  language: string;
  inStock: boolean;
  isNew?: boolean;
  description: string;
}

// Hardcoded list of 24 books to ensure consistent data
export const books: Book[] = [
  // 1
  {
    id: '1',
    title: 'The Realm of Gods',
    author: 'Glen Dahlgren',
    price: 8.79,
    originalPrice: 10.99,
    rating: 4.5,
    reviews: 120,
    image: '/images/books/the-good-hawk.png',
    category: 'Just Released',
    genre: 'Fiction',
    format: 'Hardcover',
    language: 'English',
    inStock: true,
    isNew: true,
    description: "In a world where mortals and gods are divided by a fragile balance, one human crosses into the divine realm carrying an artifact of unimaginable power. With the fate of both worlds at stake, alliances will falter, secrets will surface, and a war among the gods may ignite.Will harmony be restored, or will the realms crumble into chaos?",
  },
  // 2
  {
    id: '2',
    title: 'The Council of Elders',
    author: 'Jasmine Blackwood',
    price: 14.99,
    rating: 4.8,
    reviews: 85,
    image: '/images/books/Frame 2608774-1.png',
    category: 'Just Released',
    genre: 'Children',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: "In a land where ancient wisdom guides the ruling elite, a young apprentice uncovers a hidden prophecy that threatens to shake the foundations of power. As tensions rise and loyalties are tested, the fate of the realm hangs in the balance.Will the council maintain control, or will rebellion spark a revolution?"
  },
  // 3
  {
    id: '3',
    title: 'The Chronicles of Destiny',
    author: 'Orion Nightshade',
    price: 12.99,
    rating: 4.7,
    reviews: 200,
    image: '/images/books/Frame 2608774-2.png',
    category: 'Best Sellers',
    genre: 'Fantasy',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: "Venture into a realm where destiny is written in the stars, and a chosen hero must rise to fulfill a prophecy foretold centuries ago. With dark forces gathering and time running out, the fate of the world rests on the shoulders of the unlikely hero.Will courage triumph over darkness, or will the shadows consume everything?"
  },
  // 4
  {
    id: '4',
    title: 'The Lost Kingdom',
    author: 'Aurora Frost',
    price: 29.99,
    rating: 4.9,
    reviews: 45,
    image: '/images/books/image 5.png',
    category: 'Coming Soon',
    genre: 'RPG / Fantasy',
    format: 'Hardcover',
    language: 'English',
    inStock: false,
    description: "In a forgotten land beyond the horizon, whispers of a lost kingdom shrouded in mystery beckon brave adventurers to uncover its secrets. As ancient ruins reveal long-forgotten tales, a new chapter in history awaits those who dare to seek the truth.Will the past be resurrected, or will the kingdom remain lost to time?"
  },
  // 5 (Repeat 1)
  {
    id: '5',
    title: 'The Realm of Gods',
    author: 'Glen Dahlgren',
    price: 19.99,
    rating: 4.5,
    reviews: 120,
    image: '/images/books/the-good-hawk.png',
    category: 'Just Released',
    genre: 'Fiction',
    format: 'Hardcover',
    language: 'English',
    inStock: true,
    description: "In a world where mortals and gods are divided by a fragile balance, one human crosses into the divine realm carrying an artifact of unimaginable power. With the fate of both worlds at stake, alliances will falter, secrets will surface, and a war among the gods may ignite.Will harmony be restored, or will the realms crumble into chaos?",
  },
  // 6 (Repeat 2)
  {
    id: '6',
    title: 'The Council of Elders',
    author: 'Jasmine Blackwood',
    price: 14.99,
    rating: 4.8,
    reviews: 85,
    image: '/images/books/Frame 2608774-1.png',
    category: 'Just Released',
    genre: 'Children',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: "In a land where ancient wisdom guides the ruling elite, a young apprentice uncovers a hidden prophecy that threatens to shake the foundations of power. As tensions rise and loyalties are tested, the fate of the realm hangs in the balance.Will the council maintain control, or will rebellion spark a revolution?"
  },
  // 7 (Repeat 3)
  {
    id: '7',
    title: 'The Chronicles of Destiny',
    author: 'Orion Nightshade',
    price: 12.99,
    rating: 4.7,
    reviews: 200,
    image: '/images/books/Frame 2608774-2.png',
    category: 'Best Sellers',
    genre: 'Fantasy',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: "Venture into a realm where destiny is written in the stars, and a chosen hero must rise to fulfill a prophecy foretold centuries ago. With dark forces gathering and time running out, the fate of the world rests on the shoulders of the unlikely hero.Will courage triumph over darkness, or will the shadows consume everything?"
  },
  // 8 (Repeat 4)
  {
    id: '8',
    title: 'The Lost Kingdom',
    author: 'Aurora Frost',
    price: 29.99,
    rating: 4.9,
    reviews: 45,
    image: '/images/books/image 5.png',
    category: 'Coming Soon',
    genre: 'RPG / Fantasy',
    format: 'Hardcover',
    language: 'English',
    inStock: false,
    description: "In a forgotten land beyond the horizon, whispers of a lost kingdom shrouded in mystery beckon brave adventurers to uncover its secrets. As ancient ruins reveal long-forgotten tales, a new chapter in history awaits those who dare to seek the truth.Will the past be resurrected, or will the kingdom remain lost to time?"
  },
  // 9
  {
    id: '9',
    title: 'The Good Hawk',
    author: 'Joseph Elliott',
    price: 19.99,
    rating: 4.5,
    reviews: 120,
    image: '/images/books/the-good-hawk.png',
    category: 'Just Released',
    genre: 'Fiction',
    format: 'Hardcover',
    language: 'English',
    inStock: true,
    description: 'A thrilling adventure in a mythical land.'
  },
  // 10
  {
    id: '10',
    title: 'Peter and the Wolf',
    author: 'Sergei Prokofiev',
    price: 14.99,
    rating: 4.8,
    reviews: 85,
    image: '/images/books/Frame 2608774-1.png',
    category: 'Just Released',
    genre: 'Children',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: 'A classic tale of a boy and his animal friends.'
  },
  // 11
  {
    id: '11',
    title: 'The Silver Crow',
    author: 'Sarah Painter',
    price: 12.99,
    rating: 4.7,
    reviews: 200,
    image: '/images/books/Frame 2608774-2.png',
    category: 'Best Sellers',
    genre: 'Fantasy',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: 'Magic, mystery, and a hidden legacy.'
  },
  // 12
  {
    id: '12',
    title: 'Lore of Aetherra',
    author: 'Unknown',
    price: 29.99,
    rating: 4.9,
    reviews: 45,
    image: '/images/books/image 5.png',
    category: 'Coming Soon',
    genre: 'RPG / Fantasy',
    format: 'Hardcover',
    language: 'English',
    inStock: false,
    description: 'Dive deep into the lore of a shattered world.'
  },
  // 13
  {
    id: '13',
    title: 'The Good Hawk',
    author: 'Joseph Elliott',
    price: 19.99,
    rating: 4.5,
    reviews: 120,
    image: '/images/books/the-good-hawk.png',
    category: 'Just Released',
    genre: 'Fiction',
    format: 'Hardcover',
    language: 'English',
    inStock: true,
    description: 'A thrilling adventure in a mythical land.'
  },
  // 14
  {
    id: '14',
    title: 'Peter and the Wolf',
    author: 'Sergei Prokofiev',
    price: 14.99,
    rating: 4.8,
    reviews: 85,
    image: '/images/books/Frame 2608774-1.png',
    category: 'Just Released',
    genre: 'Children',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: 'A classic tale of a boy and his animal friends.'
  },
  // 15
  {
    id: '15',
    title: 'The Silver Crow',
    author: 'Sarah Painter',
    price: 12.99,
    rating: 4.7,
    reviews: 200,
    image: '/images/books/Frame 2608774-2.png',
    category: 'Best Sellers',
    genre: 'Fantasy',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: 'Magic, mystery, and a hidden legacy.'
  },
  // 16
  {
    id: '16',
    title: 'Lore of Aetherra',
    author: 'Unknown',
    price: 29.99,
    rating: 4.9,
    reviews: 45,
    image: '/images/books/image 5.png',
    category: 'Coming Soon',
    genre: 'RPG / Fantasy',
    format: 'Hardcover',
    language: 'English',
    inStock: false,
    description: 'Dive deep into the lore of a shattered world.'
  },
  // 17
  {
    id: '17',
    title: 'The Good Hawk',
    author: 'Joseph Elliott',
    price: 19.99,
    rating: 4.5,
    reviews: 120,
    image: '/images/books/the-good-hawk.png',
    category: 'Just Released',
    genre: 'Fiction',
    format: 'Hardcover',
    language: 'English',
    inStock: true,
    description: 'A thrilling adventure in a mythical land.'
  },
  // 18
  {
    id: '18',
    title: 'Peter and the Wolf',
    author: 'Sergei Prokofiev',
    price: 14.99,
    rating: 4.8,
    reviews: 85,
    image: '/images/books/Frame 2608774-1.png',
    category: 'Just Released',
    genre: 'Children',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: 'A classic tale of a boy and his animal friends.'
  },
  // 19
  {
    id: '19',
    title: 'The Silver Crow',
    author: 'Sarah Painter',
    price: 12.99,
    rating: 4.7,
    reviews: 200,
    image: '/images/books/Frame 2608774-2.png',
    category: 'Best Sellers',
    genre: 'Fantasy',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: 'Magic, mystery, and a hidden legacy.'
  },
  // 20
  {
    id: '20',
    title: 'Lore of Aetherra',
    author: 'Unknown',
    price: 29.99,
    rating: 4.9,
    reviews: 45,
    image: '/images/books/image 5.png',
    category: 'Coming Soon',
    genre: 'RPG / Fantasy',
    format: 'Hardcover',
    language: 'English',
    inStock: false,
    description: 'Dive deep into the lore of a shattered world.'
  },
  // 21
  {
    id: '21',
    title: 'The Good Hawk',
    author: 'Joseph Elliott',
    price: 19.99,
    rating: 4.5,
    reviews: 120,
    image: '/images/books/the-good-hawk.png',
    category: 'Just Released',
    genre: 'Fiction',
    format: 'Hardcover',
    language: 'English',
    inStock: true,
    description: 'A thrilling adventure in a mythical land.'
  },
  // 22
  {
    id: '22',
    title: 'Peter and the Wolf',
    author: 'Sergei Prokofiev',
    price: 14.99,
    rating: 4.8,
    reviews: 85,
    image: '/images/books/Frame 2608774-1.png',
    category: 'Just Released',
    genre: 'Children',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: 'A classic tale of a boy and his animal friends.'
  },
  // 23
  {
    id: '23',
    title: 'The Silver Crow',
    author: 'Sarah Painter',
    price: 12.99,
    rating: 4.7,
    reviews: 200,
    image: '/images/books/Frame 2608774-2.png',
    category: 'Best Sellers',
    genre: 'Fantasy',
    format: 'Paperback',
    language: 'English',
    inStock: true,
    description: 'Magic, mystery, and a hidden legacy.'
  },
  // 24
  {
    id: '24',
    title: 'Lore of Aetherra',
    author: 'Unknown',
    price: 29.99,
    rating: 4.9,
    reviews: 45,
    image: '/images/books/image 5.png',
    category: 'Coming Soon',
    genre: 'RPG / Fantasy',
    format: 'Hardcover',
    language: 'English',
    inStock: false,
    description: 'Dive deep into the lore of a shattered world.'
  },
];
