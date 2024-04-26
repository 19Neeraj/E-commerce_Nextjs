export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  // {
  //   id: "listing",
  //   label: "All Products",
  //   path: "/product/listing/all-products",
  // },
  // changed the men catagry to trading item
  {
    id: "listingMen",
    label: "Trading item",
    path: "/product/listing/men",
  },
  // {
  //   id: "listingWomen",
  //   label: "Women",
  //   path: "/product/listing/women",
  // },
  // {
  //   id: "listingKids",
  //   label: "kids",
  //   path: "/product/listing/kids",
  // },
  {
    id: "blog",
    label: "blog",
    path: "/Blog",
  },
  
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Products",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Add New Product",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      // {
      //   id: "customer",
      //   label: "customer",
      // },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Trading Item",
      },
      // {
      //   id: "women",
      //   label: "Women",
      // },
      // {
      //   id: "kids",
      //   label: "Kids",
      // },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Delivery Info",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

// export const AvailableSizes = [
//   {
//     id: "s",
//     label: "S",
//   },
//   {
//     id: "m",
//     label: "M",
//   },
//   {
//     id: "l",
//     label: "L",
//   },
// ];

export const firebaseConfig = {
  apiKey: "AIzaSyDiHoaVCGl-RwCwVkrSh_wz5_qHCsTxLrk",
  authDomain: "nextjs-final.firebaseapp.com",
  projectId: "nextjs-final",
  storageBucket: "nextjs-final.appspot.com",
  messagingSenderId: "33383343144",
  appId: "1:33383343144:web:cdf1b1cc44a5b60b83011d",
  measurementId: "G-KVYJHQE2C8"
};


export const firebaseStroageURL =
  "gs://nextjs-final.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];
