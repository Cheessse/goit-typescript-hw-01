import axios from "axios";

type User = {
  name: string;
  phone: number;
};

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

const url = "http://localhost:5173/";

fetchData<User>(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

export default fetchData;
