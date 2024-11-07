// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'fs'

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Kocha Lang',
        favicon: '/icon.png',
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
            github: 'https://github.com/kocha-lang/kocha',
        },
        sidebar: [
            {
                label: 'Boshlash',
                items: [
                    { label: 'Salom dunyo', slug: 'start/install' },
                    { label: "Qulay ishlash", slug: 'start/extension' },
                ],
            },
            {
                label: 'Syntax',
                items: [
                    { label: "O'zgaruvchilar", slug: 'syntax/variables' },
                    { label: 'Shartlar', slug: 'syntax/conditions' },
                    { label: 'Aylanmalar', slug: 'syntax/loops' },
                    { label: 'Array va Object', slug: 'syntax/collections' },
                    { label: 'Funksiyalar', slug: 'syntax/functions' },
                ],
            },
            {
                label: 'Standard Lib',
                items: [
                    { label: 'I/O', slug: 'std/io' },
                    { label: 'Math', slug: 'std/math' },
                ],
            },
            {
                label: 'Misollar',
                autogenerate: { directory: "examples" }
            },
            {
                label: 'Oxiri',
                items: [
                    { label: 'Credits', slug: 'misc/credits' },
                ],
            },
        ],
        components: {
            Hero: './src/components/Hero.astro',
            // Footer: './src/components/Footer.astro',
        }
		}), tailwind()],
});