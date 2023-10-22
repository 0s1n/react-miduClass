module.exports = {
	root: true,
	env: { browser: true, es6: true, communjs: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		route: "readonly",
		__DEV__: "readonly",
	},
	settings: { react: { version: "detect" } },
	plugins: ["react", "react-hooks", "unused-imports"],
	rules: {
		"react/no-children-prop": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-no-target-blank": "off",
		"react/prop-types": "off",
		"unused-imports/no-unused-imports": "warn",
		"unused-imports/no-unused-vars": "warn",
		"no-empty": "warn",
		"react/display-name": "warn",
		"no-async-promise-executor": "warn",
	},
};
