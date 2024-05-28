import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    
    server: { port: process.env.PORT || 4000}
    
});
