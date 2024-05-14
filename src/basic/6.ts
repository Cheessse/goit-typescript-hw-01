interface UserMango {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: UserMango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

interface UserPoly {
  name: string;
  age: number;
  email: string;
}

const poly: UserPoly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
