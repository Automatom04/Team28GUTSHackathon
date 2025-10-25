import { Button } from "@mui/material";
import { useState } from "react";

function BudgetSlider() {
  const priceRange = ["free", "$", "$$", "$$$", "$$$$"];
  const [selected, setSelected] = useState("");

  return (
    <div>
      {priceRange.map((price, index) => {
        return (
          <Button
            variant={selected === price ? "contained" : "outlined"}
            size="large"
            style={{ margin: "20px" }}
            onClick={() => {
              setSelected(price);
            }}
          >
            {price}
          </Button>
        );
      })}
    </div>
  );
}

export default BudgetSlider;
