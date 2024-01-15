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
//   {
//     id: 5,
//     img: `brainsterlabs.png`,
//     title: `brainster Labs`,
//     text: `This was my first ever project created with html, css and js`,
//     link: `https://brainster-labs-kohl.vercel.app/`,
//     branch:``
//   }
];


export default data