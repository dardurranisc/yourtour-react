type menuItemsProps = {
	id: number;
	href: string;
	label: string;
};

export const menuItems: menuItemsProps[] = [
	{ id: 1, href: "#owntour", label: "Туры" },
	{ id: 2, href: "#create-tour", label: "Создать тур" },
	{ id: 3, href: "#reviews", label: "Отзывы" },
	{ id: 4, href: "#story_trip", label: "Истории" },
];
