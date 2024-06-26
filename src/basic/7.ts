type Page1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "closed";
  details: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

type Page2 = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
};

const page2: Page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
