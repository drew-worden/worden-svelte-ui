//Import packages
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

//Vite configuration
const viteConfig = defineConfig({
	plugins: [sveltekit()]
})

//Exports
export default viteConfig
