import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	portfolio,
	sportivo,
	weatherWebsite,
	musicfyy,
	celebal,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'React.js Developer',
		company_name: 'Celebal Technologies',
		icon: celebal,
		iconBg: '#383E56',
		date: 'May 2024 - July 2024',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Enhanced User Experience: Implemented intuitive UI/UX designs, improving user engagement and website accessibility.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: "Ayushmaan's Portfolio Website",
		description:
			' Developed a personal portfolio website using React , Three.js and tailwind to showcase my projects, skills, and experience',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'Three JS',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: portfolio,
		source_code_link: 'https://github.com/PaulAyushmaan/my-3d-portfolio/',
		liveUrl_link: 'https://ayushmaanpaul.vercel.app/',
	},
	{
		name: 'Sportivo-4.0',
		description:
			' This is a Annual Sports 2024 Registration Website for Techno Engineering College Banipur. This website was built with HTML,CSS & JavaScript.Student Registration, Implemented Smooth Scrolling, Real-Time Event Timer.',
		tags: [
			{
				name: 'API',
				color: 'blue-text-gradient',
			},
			{
				name: 'JavaScript',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: sportivo,
		source_code_link: 'https://github.com/PaulAyushmaan/Sportivo-4.0',
		liveUrl_link: 'https://sportivo-4.netlify.app/',
	},
	{
		name: 'Musicfyy',
		description:
			'This is a Frontend of a Music Streaming Platform Named Musicfyy. Here You Can Play Selected Songs',
		tags: [
			{
				name: 'Vanila JS',
				color: 'blue-text-gradient',
			},
			{
				name: 'API',
				color: 'green-text-gradient',
			},
		],
		image: musicfyy,
		source_code_link: 'https://github.com/PaulAyushmaan/Musicfyy',
		liveUrl_link: 'https://musicfyy.freewebhostmost.com/',
	},
	{
		name: 'Weather App',
		description:
			'  Weather Forecasting website created with vanila JavaScript and OpenWeather API.',
		tags: [
			{
				name: 'OpenWeather API',
				color: 'blue-text-gradient',
			},
			{
				name: 'JavaScript',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: weatherWebsite,
		source_code_link: 'https://github.com/PaulAyushmaan/weather-app0',
		liveUrl_link: 'https://weather-forecasting-ap.netlify.app//',
	},
];

export { services, technologies, experiences, testimonials, projects };
