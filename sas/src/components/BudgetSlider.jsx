import { useState } from "react";
import StyledButton from "./StyledButton";

function BudgetSlider() {
  const priceRange = ["free", "$", "$$", "$$$", "$$$$"];
  const [selected, setSelected] = useState("");

  return (
    <div>
      {priceRange.map((price, index) => {
        return (
          <StyledButton
            key={price}
            selected={selected}
            target={price}
            trigger={() => setSelected(price)}
          />
        );
      })}
    </div>
  );
}

export default BudgetSlider;
