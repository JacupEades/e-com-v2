import ColorDrop from "./ColorDrop";
import PriceDrop from "./PriceDrop";
import RatingDrop from "./RatingDrop";
import ShippingDrop from "./ShippingDrop";
import TypeDrop from "./TypeDrop";

type Props = {
	dropType: string;
};

export default function FilterDrop({ dropType }: Props) {
	switch (dropType) {
		case "type":
			return <TypeDrop />;
		case "price":
			return <PriceDrop />;
		case "color":
			return <ColorDrop />;
		case "rating":
			return <RatingDrop />;
		case "shipping":
			return <ShippingDrop />;
		default:
			return <p>Error in TypeDrop: {dropType}</p>;
	}
}
