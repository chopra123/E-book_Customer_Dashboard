import { Injectable } from '@angular/core';
import { Books } from '../models/data.model'; // adjust the path if needed

@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  constructor() { }

  signupDetails: any;

  booksList: any = [
    {
      id: 0,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      description: 'A journey of self-discovery about a shepherd boy who dreams of finding treasure.',
      price: '$50',
      year: 1988,
      image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg',
      category:'Fiction'
    },
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'An insightful guide to building good habits and breaking bad ones.',
      price: '$100',
      year: 2018,
      image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg',
      category: 'Fiction'

    },
    {
      id: 2,
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      description: 'Learn the mindset and financial principles that lead to wealth.',
      price: '$60',
      year: 1997,
      image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg',
      category: 'Finance'

    },
    {
      id: 3,
      title: 'Deep Work',
      author: 'Cal Newport',
      description: 'Master the ability to focus and produce at an elite level.',
      price: '$75',
      year: 2016,
      image: 'https://m.media-amazon.com/images/I/71HMyqG6MRL._AC_UF1000,1000_QL80_.jpg',
      category: 'Finance'

    },
    {
      id: 4,
      title: 'Ikigai',
      author: 'Héctor García & Francesc Miralles',
      description: 'Discover the Japanese secret to a long and happy life.',
      price: '$45',
      year: 2016,
      image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg',
      category: 'Motivation'

    },
    {
      id: 5,
      title: 'Can’t Hurt Me',
      author: 'David Goggins',
      description: 'A raw and powerful story of mental toughness and breaking limits.',
      price: '$80',
      year: 2018,
      image: 'https://m.media-amazon.com/images/I/81gTRv2HXrL._SL1500_.jpg',
      category: 'Motivation'

    },
    {
      id: 6,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'A brief history of humankind that explores how Homo sapiens came to rule the world.',
      price: '$90',
      year: 2011,
      image: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg',
      category: 'History'

    },
    {
      id: 7,
      title: 'Think Like a Monk',
      author: 'Jay Shetty',
      description: 'Timeless wisdom to train your mind for peace and purpose every day.',
      price: '$55',
      year: 2020,
      image: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
      category: 'Sprititual'

    },

    {
      id: 8,
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      description: 'A guide to spiritual enlightenment by embracing the present moment.',
      price: '$70',
      year: 1997,
      image: 'https://m.media-amazon.com/images/I/61Ij8nLooNL._SL1500_.jpg',
      category: 'Sprititual'

     
    },
    {
      id: 9,
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      description: 'A mystery intertwined with a coming-of-age story and a celebration of nature.',
      price: '$22.99',
      year: 2018,
      image: 'https://m.media-amazon.com/images/I/81e+mSqZvnL._SL1500_.jpg',
      category: 'Fiction'

    },
    {
      id: 10,
      title: 'Educated',
      author: 'Tara Westover',
      description: 'A memoir about a woman who grows up in a survivalist family and eventually earns a PhD from Cambridge.',
      price: '$18.49',
      year: 2018,
      image: 'https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg',
      category: 'Finance'

    },
    {
      id: 11,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      description: 'A woman explores alternate lives she could have lived in a magical library between life and death.',
      price: '$16.75',
      year: 2020,
      image: 'https://m.media-amazon.com/images/I/81J6APjwxlL._SL1500_.jpg',
      category: 'Finance'

    }
  ];


  getListOfBooks(): Books[] {
    return this.booksList;
  }


}


