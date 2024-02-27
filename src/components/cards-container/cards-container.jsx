import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Cart from "../cart/cart";
import Pagination from "@mui/material/Pagination";

export default function CardsContainer() {
  const [sortingType, setSortingType] = React.useState("");

  const handleChangeSorting = (event) => {
    setSortingType(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "30px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px",
              boxShadow: 1,
              borderColor: "grey.500",
              borderRadius: "5px",
            }}
          >
            <Typography variant="body1" gutterBottom>
              1 892 724 результата
            </Typography>
            <Box sx={{ minWidth: "250px" }}>
              <FormControl fullWidth>
                <InputLabel id="sorting-select-label">Сортировать</InputLabel>
                <Select
                  labelId="sorting-select-label"
                  id="sorting-select"
                  value={sortingType}
                  label="Age"
                  onChange={handleChangeSorting}
                >
                  <MenuItem value={"unsorted"}>Без сортировки</MenuItem>
                  <MenuItem value={"name-by-alphabet"}>
                    Сортировать по имени
                  </MenuItem>
                  <MenuItem value={"brand-by-alphabet"}>
                    Сортировать по бренду
                  </MenuItem>
                  <MenuItem value={"price-decrease"}>
                    Сортировать по цене
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Pagination
            count={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          />
          <Box
            sx={{
              boxShadow: 1,
              margin: "10px 0 0 0 ",
              flexGrow: 1,
              padding: "10px",
              minHeight: "calc(100vh - 300px)",
            }}
          >
            <Grid container spacing={3} columns={5}>
              <Grid item xs={1}>
                <Cart name="224" brand="gucci" price={12331} />
              </Grid>
              <Grid item xs={1}>
                <Cart name="fgvhbjk" brand="gucci" price={12331} />
              </Grid>
              <Grid item xs={1}>
                <Cart name="fgvhbjk" brand="gucci" price={12331} />
              </Grid>
              <Grid item xs={1}>
                <Cart name="fgvhbjk" brand="gucci" price={12331} />
              </Grid>
              <Grid item xs={1}>
                <Cart name="224" brand="gucci" price={12331} />
              </Grid>
              <Grid item xs={1}>
                <Cart name="fgvhbjk" brand="gucci" price={12331} />
              </Grid>
            </Grid>
          </Box>
          <Pagination
            count={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          />
        </Box>
      </Container>
    </>
  );
}
