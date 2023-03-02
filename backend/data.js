import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'yash',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'user',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: '',
      slug: '',
      category: '',
      image: '',
      price: 0,
      countInStock: 0,
      brand: '',
      rating: 0,
      numReviews: 0,
      description: '',
    },
    
  ],
};
export default data;
