"use client";
import { HouseLine, Leaf, ShieldCheck, Truck } from "@phosphor-icons/react";

type Props = {};

export function LeafIcon({}: Props) {
	return (
		<>
			<Leaf size={64} weight="duotone" />
		</>
	);
}
export function TruckIcon({}: Props) {
	return (
		<>
			<Truck size={64} weight="duotone" />
		</>
	);
}
export function HouseLineIcon({}: Props) {
	return (
		<>
			<HouseLine size={64} weight="duotone" />
		</>
	);
}
export function ShieldCheckIcon({}: Props) {
	return (
		<>
			<ShieldCheck size={64} weight="duotone" />
		</>
	);
}
