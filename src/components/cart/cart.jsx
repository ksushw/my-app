import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Cart({
  name = " ",
  brand = " ",
  price = 0,
  image = "https://i0.wp.com/www.qareket-engineering.com/wp-content/uploads/woocommerce-placeholder.png?fit=600%2C600&ssl=1",
}) {
  return (
    <Card>
      <CardContent sx={{ textAlign: "start" }}>
        <CardMedia sx={{ height: 140 }} image={image} title={name} />
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" component="h2">
          {price} руб.
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {brand}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cart;
