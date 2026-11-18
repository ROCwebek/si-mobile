import { Text } from "react-native";

type RatingProps = {
  rating: number;
};

export default function Rating({ rating }: RatingProps) {
  return (
    <Text accessibilityLabel={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </Text>
  );
}
