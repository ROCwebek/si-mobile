import Rating from "@/components/Rating";
import { render, screen } from "@testing-library/react-native";

test("describes a rating of 4 as 4 out of 5 stars", async () => {
  await render(<Rating rating={4} />);
  expect(screen.getByLabelText("4 out of 5 stars")).toBeDefined();
});
