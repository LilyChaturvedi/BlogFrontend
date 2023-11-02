import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = (props) => {
  console.log(props.value.title, "props");
  return (
    <div style={{ height: "40vh", width: "30vw" }}>
      <Link to={`about/${props.value._id}`}>
        {" "}
        <button>{props.value.title}</button>
      </Link>
    </div>
  );
};

// const Cards = (props) => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           sx={{ objectFit: "fill" }}
//           image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {props.value.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {props.value.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };
export default Cards;
