/** @type {import('next').NextConfig} */
const nextConfig = {};

// SASS Config
const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

module.exports = nextConfig;
