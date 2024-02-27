import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function CardsContainer() {
  const [sortingType, setSortingType] = React.useState("");

  const handleChangeSorting = (event) => {
    setSortingType(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            // bgcolor: "#cfe8fc",
            height: "100vh",
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
              border: 1,
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
          <Box
            sx={{
              border: 1,
              borderColor: "grey.500",
              borderRadius: "5px",
              margin: "10px 0 0 0 ",
              flexGrow: 1,
              padding: "10px",
            }}
          >
            <Grid container spacing={3} columns={5}>
              <Grid item xs={1}>
                <Item>xs=8</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>xs=8</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>xs=8</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>xs=8</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
