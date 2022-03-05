type optionType = {
  title: string;
  url: string;
};
type dataType = {
  title: string;
  url: "";
  option: optionType[];
  active?:Boolean
};
export const menudata: dataType[] = [
  {
    title: "Home",
    url: "",
    active:true,
    option: [
      {
        title: "Home 1",
        url: "",
      },
    ],
  },
  {
    title: "Doctor",
    url: "",
    option: [
      {
        title: "Doctor 1",
        url: "",
      },
    ],
  },
  {
    title: "Patients",
    url: "",
    active:true,
    option: [{
      title: "Patients",
      url: "",
    }],
  },
  {
    title: "Pharmacy",
    url: "",
    active:true,
    option: [
      {
        title: "Pharmacy 1",
        url: "",
      },
    ],
  },
  {
    title: "Blog",
    url: "",
    option: [
      {
        title: "Pharmacy 1",
        url: "",
      },
    ],
  },
  {
    title: "Pages",
    url: "",
    option: [
      {
        title: "Pharmacy 1",
        url: "",
      },
    ],
  },
  {
    title: "Admin",
    url: "",
    option: [
      {
        title: "Pharmacy 1",
        url: "",
      },
    ],
  }

];
