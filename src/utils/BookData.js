// BookData.js
import book1 from '../assets/Book 1.jpg';
import book2 from '../assets/Book 2.jpg';
import book3 from '../assets/Book 3.jpg';
import book4 from '../assets/Book 4.jpg';
import book5 from '../assets/Book 5.jpg';
import book6 from '../assets/Book 6.jpg';
import book7 from '../assets/Book 7.jpg';
import book8 from '../assets/Book 8.jpg';
import book9 from '../assets/Book 9.jpg';
import book10 from '../assets/Book 10.jpg';
import book11 from '../assets/Book 11.jpg';
import book12 from '../assets/Book 12.jpg';

const BookData = [
  {
    id: 1,
    name: "India that is Bharat: Coloniality, Civilisation, Constitution",
    author: "J Sai Deepak",
    image: book1,
    description: "An in-depth legal and philosophical exploration of India's civilizational identity, colonial influence, and the constitutional framework.",
    fullDetails: "This book delves into India's postcolonial identity, arguing that many colonial-era mindsets still influence Indian governance. J Sai Deepak draws from history, philosophy, and law to explain how India's civilization is often misrepresented through colonial lenses.",
    price: 499,
    rating: 4.8,
    inStock: true,
    category: "History & Politics",
    language: "English",
    pages: 500,
    format: "Paperback"
  },
  {
    id: 2,
    name: "The Martian",
    author: "Andy Weir",
    image: book2,
    description: "A stranded astronaut on Mars uses his ingenuity and engineering skills to survive against all odds.",
    fullDetails: "Mark Watney, presumed dead, is left alone on Mars. With limited resources, he relies on science and humor to survive until a rescue mission can be attempted. A thrilling, scientifically grounded survival tale.",
    price: 399,
    rating: 4.7,
    inStock: true,
    category: "Science Fiction",
    language: "English",
    pages: 384,
    format: "Paperback"
  },
  {
    id: 3,
    name: "The Name of the Wind",
    author: "Patrick Rothfuss",
    image: book3,
    description: "An epic fantasy journey chronicling the life of Kvothe, a magician, musician, and adventurer of legendary renown.",
    fullDetails: "The novel follows Kvothe, a gifted young man who grows into the most notorious wizard his world has ever seen. It's a richly detailed story of magic, mystery, and love.",
    price: 449,
    rating: 4.9,
    inStock: true,
    category: "Fantasy",
    language: "English",
    pages: 662,
    format: "Paperback"
  },
  {
    id: 4,
    name: "The War of The Worlds",
    author: "H. G. Wells",
    image: book4,
    description: "A science fiction classic that depicts the horrifying invasion of Earth by Martians and humanity's desperate fight for survival.",
    fullDetails: "H.G. Wells' timeless novel portrays a sudden Martian invasion that brings humanity to its knees. It's a story of fear, destruction, and survival against incomprehensible technology.",
    price: 299,
    rating: 4.5,
    inStock: true,
    category: "Science Fiction",
    language: "English",
    pages: 224,
    format: "Paperback"
  },
  {
    id: 5,
    name: "The Silmarillion",
    author: "J.R.R. Tolkien",
    image: book5,
    description: "A collection of mythopoeic tales setting the stage for The Lord of the Rings, detailing the creation and early history of Middle-earth.",
    fullDetails: "The Silmarillion is Tolkien’s grand tale of the First Age, recounting the creation of the world and epic battles between good and evil. It provides the lore behind LOTR.",
    price: 550,
    rating: 4.6,
    inStock: true,
    category: "Mythology",
    language: "English",
    pages: 480,
    format: "Hardcover"
  },
  {
    id: 6,
    name: "The Time Machine",
    author: "H. G. Wells",
    image: book6,
    description: "A time traveler ventures far into the future to discover humanity’s evolution and the strange societies that exist there.",
    fullDetails: "This novella explores human destiny and the cost of progress through a traveler who moves thousands of years into the future. Thought-provoking and haunting.",
    price: 249,
    rating: 4.4,
    inStock: false,
    category: "Science Fiction",
    language: "English",
    pages: 128,
    format: "Paperback"
  },
  {
    id: 7,
    name: "The Theory Of Everything",
    author: "Stephen Hawking",
    image: book7,
    description: "A simplified yet profound explanation of the universe, black holes, and cosmology by the legendary physicist.",
    fullDetails: "In this book, Hawking discusses the origin of the universe, black holes, time travel, and quantum mechanics in an accessible manner for readers without a science background.",
    price: 299,
    rating: 4.9,
    inStock: true,
    category: "Science & Cosmos",
    language: "English",
    pages: 176,
    format: "Paperback"
  },
  {
    id: 8,
    name: "Relativity: The Special And The General Theory",
    author: "Albert Einstein",
    image: book8,
    description: "Einstein’s own explanation of his groundbreaking theories of relativity, written for a general audience.",
    fullDetails: "A must-read for science enthusiasts, this book introduces Einstein’s theories in a surprisingly readable form, helping readers grasp complex physical concepts.",
    price: 349,
    rating: 4.7,
    inStock: true,
    category: "Physics",
    language: "English",
    pages: 176,
    format: "Paperback"
  },
  {
    id: 9,
    name: "Dopamine Detox",
    author: "Thibaut Meurisse",
    image: book9,
    description: "A practical guide to eliminate distractions and rewire your brain to focus on meaningful, hard tasks.",
    fullDetails: "The book outlines step-by-step methods to regain focus, avoid distractions, and cultivate self-discipline by resetting your brain’s reward system.",
    price: 199,
    rating: 4.3,
    inStock: true,
    category: "Self-Help",
    language: "English",
    pages: 120,
    format: "Paperback"
  },
  {
    id: 10,
    name: "The Psychology of Money – Deluxe Edition",
    author: "Morgan Housel",
    image: book10,
    description: "Explores how emotions and behaviors influence personal finance, often more than knowledge or logic.",
    fullDetails: "Through engaging stories, Housel explains how the way we think about money affects our financial decisions more than formulas. A timeless guide on wealth building.",
    price: 399,
    rating: 4.8,
    inStock: true,
    category: "Finance",
    language: "English",
    pages: 252,
    format: "Hardcover"
  },
  {
    id: 11,
    name: "Atomic Habits",
    author: "James Clear",
    image: book11,
    description: "A guide to building good habits and breaking bad ones with actionable strategies and proven methods.",
    fullDetails: "James Clear presents a proven system for continuous improvement, focusing on tiny behavior changes that lead to remarkable results over time.",
    price: 299,
    rating: 4.9,
    inStock: true,
    category: "Productivity",
    language: "English",
    pages: 320,
    format: "Paperback"
  },
  {
    id: 12,
    name: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    image: book12,
    description: "A fantasy adventure about time travel, love, and self-discovery as a young girl sets out to rescue her father from another dimension.",
    fullDetails: "This classic novel blends science fiction with spiritual elements and emotional growth. It’s a journey through space and self with lessons about courage and love.",
    price: 279,
    rating: 4.6,
    inStock: true,
    category: "Young Adult",
    language: "English",
    pages: 256,
    format: "Paperback"
  }
];

export default BookData;