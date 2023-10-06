/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				baseGreen: "hsl(115, 43%, 52%)",
			},
		},
	},
	plugins: [],
};
