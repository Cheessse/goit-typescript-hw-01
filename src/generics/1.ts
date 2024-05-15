import axios, { AxiosResponse } from "axios";

type User = {
  name: string;
  phone: number;
};

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${(error as Error).message}`);
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
