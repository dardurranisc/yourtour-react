export type Story = {
	id: number;
	title: string;
	text: string;
	image: string;
	alt:string;
	links: {
		id: number;
		title: string;
		href: string;
	}[];
};

export const stories: Story[] = [
	{
		id: 1,
		title: "Автостопом в Стамбул",
		text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
		image: "images/story/story_photo-1.jpg",
		alt:"ФотоКарточка",
		links: [
			{
				id: 1,
				title: "instagram",
				href: "instagram.com",
			},
			{
				id: 2,
				title: "facebook",
				href: "facebook.com",
			},
			{
				id: 3,
				title: "YouTube",
				href: "youtube.com",
			},
		],
	},
	{
		id: 2,
		title: "Автостопом в Стамбул",
		text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
		image: "images/story/story_photo-2.jpg",
		alt:"ФотоКарточка",
		links: [
			{
				id: 1,
				title: "instagram",
				href: "instagram.com",
			},
			{
				id: 2,
				title: "ВКонтакте",
				href: "vk.com",
			},
		],
	},
	{
		id: 3,
		title: "Автостопом в Стамбул",
		text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
		image: "images/story/story_photo-3.jpg",
		alt:"ФотоКарточка",
		links: [
			{
				id: 1,
				title: "instagram",
				href: "instagram.com",
			},
			{
				id: 2,
				title: "facebook",
				href: "facebook.com",
			},
			{
				id: 3,
				title: "ВКонтакте",
				href: "vk.com",
			},
		],
	},
];
