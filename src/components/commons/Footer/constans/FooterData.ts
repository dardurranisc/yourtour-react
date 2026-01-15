export type SocialLink = {
	id: number;
	image: string;
	title: string;
	link: string;
	alt?: string;
};

export const links: SocialLink[] = [
	{
		id: 1,
		image: "images/footer/social/inst.svg",
		title: "instagram",
		link: "#",
		alt: "inst",
	},
	{
		id: 2,
		image: "images/footer/social/fb.svg",
		title: "facebook",
		link: "#",
		alt: "fb",
	},
	{
		id: 3,
		image: "images/footer/social/vk.svg",
		title: "vkontakte",
		link: "#",
		alt: "vk",
	},
];
