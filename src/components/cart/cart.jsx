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
    <Card sx={{ height: "330px" }}>
      <CardContent sx={{ textAlign: "start", display: "grid", height: "100%" }}>
        <CardMedia sx={{ height: 140 }} image={image} title={name} />
        <Typography
          gutterBottom
          variant="main1"
          component="div"
          sx={{ maxHeight: "200px", overflow: "hidden" }}
        >
          {name}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          {brand}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{ alignSelf: "end" }}
        >
          {price} руб.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cart;
