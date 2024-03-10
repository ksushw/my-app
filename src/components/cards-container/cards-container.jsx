import * as React from "react";
import styled from "./cards-container.module.css";

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
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function CardsContainer({
  items,
  IsLoading,
  formRef,
  findFormSubmit,
}) {
  const [sortingType, setSortingType] = React.useState("unsorted");
  const [sortingValue, setSortingValue] = React.useState("");

  const handleChangeSorting = (event) => {
    setSortingType(event.target.value);
  };

  const handleChangeValue = (event) => {
    setSortingValue(event.target.value);
  };

  const getFormValues = (e) => {
    e.preventDefault();
    const type = e.target.findType.value;
    const value =
      type === "price"
        ? Number(e.target.findValue.value)
        : e.target.findValue.value;
    findFormSubmit(type, value);
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

            <form
              className={styled.form}
              ref={formRef}
              onSubmit={getFormValues}
            >
              <FormControl name="findType">
                <Select
                  labelId="find-select-label"
                  id="find-select"
                  value={sortingType}
                  label="Age"
                  sx={{ width: "250px" }}
                  name="findType"
                  onChange={handleChangeSorting}
                >
                  <MenuItem value={"unsorted"}>Все товары</MenuItem>
                  <MenuItem value={"name"}>Поиск по имени</MenuItem>
                  <MenuItem value={"brand"}>Поиск по бренду</MenuItem>
                  <MenuItem value={"price"}>Поиск по цене</MenuItem>
                </Select>
                <InputLabel id="find-select-label">Поиск</InputLabel>
              </FormControl>

              <TextField
                label="Значение"
                variant="outlined"
                sx={{ width: "250px" }}
                name="findValue"
                onChange={handleChangeValue}
              />

              <Button
                variant="outlined"
                type="submit"
                disabled={sortingValue === "" && sortingType !== "unsorted"}
              >
                Поиск
              </Button>
            </form>
          </Box>

          <Box
            sx={{
              boxShadow: 1,
              margin: "10px 0 0 0 ",
              flexGrow: 1,
              padding: "10px",
              height: "calc(100vh - 250px)",
              overflowY: "scroll",
            }}
          >
            {IsLoading ? (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress sx={{ alignSelf: "center" }} />
              </Box>
            ) : (
              <Grid container spacing={3} columns={5}>
                {items.map((item, index) => {
                  return (
                    <Grid item xs={1} key={index}>
                      <Cart
                        name={item.product}
                        brand={item.brand}
                        price={item.price}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            )}
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
