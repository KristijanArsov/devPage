export interface DataType {
  id: number;
  img: string;
  title: string;
  text: string;
  link:string,
  branch:string
}

const data: Array<DataType> = [ {
    id: 1,
    img: `brainsterlabs.png`,
    title: `brainster Labs`,
    text: `This was my first ever project created with vanilla js`,
    link: `https://brainster-labs-kohl.vercel.app/`,
    branch:`https://github.com/KristijanArsov/projects/tree/brainsterLabs`
  },
  {
    id: 2,
    img: `myorders.png`,
    title: `My Orders`,
    text: `Small app that calculates your expenses and orders your selected items. Created with React`,
    link: `https://expenses-five-nu.vercel.app/`,
    branch:`https://github.com/KristijanArsov/projects/tree/myOrders`
  },
  {
    id: 3,
    img: `todo.png`,
    title: `Todo App`,
    text: `Created a todo App using React`,
    link: `https://todo-two-sandy.vercel.app/`,
    branch:`https://github.com/KristijanArsov/projects/tree/todoApp`
  },
  {
    id: 4,
    img: `streetArtists.png`,
    title: `Street Artists`,
    text: `My second project creating an auction page where people can bid on art made with vanilla js`,
    link: `https://street-artists-five.vercel.app/`,
    branch:`https://github.com/KristijanArsov/projects/tree/streetArtists`
  },
  {
    id: 5,
    img: `musicapp.png`,
    title: `Music App`,
    text: `Music App where I build it with React. Note: use mobile screen resolution for best experience`,
    link: `https://musicapp-lac.vercel.app/`,
    branch:`https://github.com/KristijanArsov/projects/tree/musicapp`
  },
  {
    id: 6,
    img: `generalstore.png`,
    title: `General Store`,
    text: `I've created an app for a general store using React`,
    link: `https://storeapp-wheat.vercel.app/`,
    branch:`https://github.com/KristijanArsov/projects/tree/generalstoreapp`
  },
  {
    id: 7,
    img: `menuapp.png`,
    title: `Cafe Bar Menu App`,
    text: `I've created a menu app for a cafe bar or restaurant using React`,
    link: `https://cafeshop-ten.vercel.app/`,
    branch:`https://github.com/KristijanArsov/projects/tree/cafemenuapp`
  },
  {
    id: 8,
    img: `playground.png`,
    title: `Digital Playground`,
    text: `I've created a small digital playground page using React`,
    link: `https://playground-nine-nu.vercel.app/`,
    branch:`https://github.com/KristijanArsov/projects/tree/playgroundApp`
  },
];


export default data