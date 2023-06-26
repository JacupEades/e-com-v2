import { Heart } from "@phosphor-icons/react";
import { useState } from "react";

type Props = {
	className: string;
	classNameTrue: string;
	onWishlist: boolean;
	setOnWishlist: any;
};

export default function WishlistHeartBtn({
	className,
	classNameTrue,
	onWishlist,
	setOnWishlist,
}: Props) {
	const [fakeState, setFakeState] = useState(false);
	const toggleFilled = fakeState === true ? "fill" : "regular";

	const handleWishlist = (e: any) => {
		e.stopPropagation();
		// setOnWishlist(!onWishlist);
		setFakeState(!fakeState);
		console.log("Function not ready");
	};

	return (
		<button
			onClick={(e) => handleWishlist(e)}
			className={fakeState === true ? `${classNameTrue}` : `${className}`}>
			<Heart size={32} weight={toggleFilled} />
		</button>
	);
}
