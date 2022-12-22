export interface IDataProjectModal {
  id: number;
  color: string;
  name?: string;
}

// #d29034 #519839 #b04632 #89609e

// {dataProjectModal.map((color) => {
//     <div
//     style={{
//       width: "50px",
//       height: "40px",
//       backgroundColor: color.color,
//     }}
//   ></div>
// })}

export const dataProjectModal: IDataProjectModal[] = [
  {
    id: 1,
    color: "#0079bf",
    name: "blue",
  },
  {
    id: 2,
    color: "#d29034",
    name: "orange",
  },
  {
    id: 3,
    color: "#519839",
    name: "green",
  },
  {
    id: 4,
    color: "#b04632",
    name: "red",
  },
  {
    id: 5,
    color: "#89609e",
    name: "purple",
  },
];
