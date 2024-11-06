// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'fs'

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Kocha Lang',
        customCss:[
            './src/assets/styles/custom.css'
        ],
        expressiveCode: {
            // themes: ['nord'],
    shiki: {

      langs: [
        JSON.parse(fs.readFileSync('./src/assets/syntax/kocha.json', 'utf-8'))
      ],
    },
        },
        social: {
            github: 'https://github.com/mmnvb/kocha',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
        components: {
            Hero: './src/components/Hero.astro',
            Footer: './src/components/Footer.astro',
        }
		}), tailwind()],
});