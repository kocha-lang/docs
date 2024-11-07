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
                    { label: 'Variables', slug: 'syntax/variables' },
                    { label: 'Conditions', slug: 'syntax/conditions' },
                    { label: 'Loops', slug: 'syntax/loops' },
                    { label: 'Array va Object', slug: 'syntax/collections' },
                    { label: 'Functions', slug: 'syntax/functions' },
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
                label: 'Credits',
                items: [
                    { label: 'Thank you', slug: 'credits/thanks' },
                ],
            },
        ],
        components: {
            Hero: './src/components/Hero.astro',
            // Footer: './src/components/Footer.astro',
        }
		}), tailwind()],
});