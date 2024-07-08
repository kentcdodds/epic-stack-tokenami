import { execa } from 'execa'

if (process.env.NODE_ENV === 'production') {
	await import('../server-build/index.js')
} else {
	const tokenamiBaseCommand = 'npx tokenami --output ./app/styles/tokenami.css'
	await execa(tokenamiBaseCommand, {
		stdio: ['ignore', 'inherit', 'inherit'],
		shell: true,
		// https://github.com/sindresorhus/execa/issues/433
		windowsHide: false,
	})
	const serverCommand =
		'tsx watch --clear-screen=false --ignore ".cache/**" --ignore "app/**" --ignore "vite.config.ts.timestamp-*" --ignore "build/**" --ignore "node_modules/**" --inspect ./index.js'
	await Promise.all([
		execa(serverCommand, {
			stdio: ['ignore', 'inherit', 'inherit'],
			shell: true,
			env: {
				FORCE_COLOR: true,
				MOCKS: true,
				...process.env,
			},
			// https://github.com/sindresorhus/execa/issues/433
			windowsHide: false,
		}),
		execa(`${tokenamiBaseCommand} --watch`, {
			stdio: ['ignore', 'inherit', 'inherit'],
			shell: true,
			// https://github.com/sindresorhus/execa/issues/433
			windowsHide: false,
		}),
	])
}
