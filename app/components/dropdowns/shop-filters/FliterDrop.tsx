import PriceDrop from "./PriceDrop";
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
			return <TypeDrop />;
		case "rating":
			return <TypeDrop />;
		case "shipping":
			return <TypeDrop />;
		default:
			return <p>Error in TypeDrop: {dropType}</p>;
	}
}
