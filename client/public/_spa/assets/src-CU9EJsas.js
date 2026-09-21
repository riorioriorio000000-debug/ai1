import{n as e}from"./rolldown-runtime-CMxvf4Kt.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{t=`/index.html`,n=`/index.tsx`,r=`/App.tsx`,i=`/index.html`,a=`/vite.config.ts`,o=`/package.json`,s={"@ant-design/icons":`latest`,"@lshay/ui":`latest`,"@radix-ui/react-accordion":`latest`,"@radix-ui/react-alert-dialog":`latest`,"@radix-ui/react-avatar":`latest`,"@radix-ui/react-checkbox":`latest`,"@radix-ui/react-collapsible":`latest`,"@radix-ui/react-dialog":`latest`,"@radix-ui/react-dropdown-menu":`latest`,"@radix-ui/react-icons":`latest`,"@radix-ui/react-label":`latest`,"@radix-ui/react-navigation-menu":`latest`,"@radix-ui/react-popover":`latest`,"@radix-ui/react-progress":`latest`,"@radix-ui/react-scroll-area":`latest`,"@radix-ui/react-select":`latest`,"@radix-ui/react-separator":`latest`,"@radix-ui/react-slider":`latest`,"@radix-ui/react-slot":`latest`,"@radix-ui/react-switch":`latest`,"@radix-ui/react-tabs":`latest`,"@radix-ui/react-toast":`latest`,"@radix-ui/react-tooltip":`latest`,antd:`latest`,"class-variance-authority":`latest`,cmdk:`latest`,clsx:`latest`,"date-fns":`latest`,"embla-carousel-react":`latest`,"input-otp":`latest`,"lodash-es":`latest`,"lucide-react":`^0.544.0`,motion:`latest`,react:`19.2.7`,"react-day-picker":`latest`,"react-dom":`19.2.7`,"react-router":`latest`,recharts:`latest`,sonner:`latest`,"tailwind-merge":`latest`,vaul:`latest`,zustand:`latest`},c={"@types/react":`latest`,"@types/react-dom":`latest`,"@vitejs/plugin-react":`^4.3.4`,"esbuild-wasm":`^0.17.12`,typescript:`latest`,vite:`4.2.0`,"@babel/preset-react":`^7.26.3`,"@babel/preset-typescript":`^7.26.0`},l=[`react`,`react-dom`,`react-dom/client`,`react/jsx-runtime`,`react/jsx-dev-runtime`],u=/\b(?:import|export)\b(?:[^'"]+?\bfrom)?\s*['"]([^'"]+)['"]/g,d=e=>{let t=new Set;for(let n of e.matchAll(u)){let e=n[1];if(!(e.startsWith(`.`)||e.startsWith(`/`))){for(let[t,n]of Object.entries(m))if(e===t||e.startsWith(`${t}/`)){e=n+e.slice(t.length);break}e.startsWith(`@/`)||t.add(e)}}return[...t]},f=`https://cdn.tailwindcss.com`,p=[f],m={"@/components/ui":`@lshay/ui/components/default`},h=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`),g=e=>`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${h(e)}</title>
    <script src="${f}"><\/script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"><\/script>
  </body>
</html>
`,_=`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Root container #root not found');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
`,v=e=>`import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  esbuild: false,
  optimizeDeps: {
    entries: [],
    include: ${JSON.stringify(e,null,6)},
  },
  plugins: [
    react({
      babel: {
        presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
      },
    }),
    { name: 'lobe-artifact:disable-esbuild', enforce: 'post', config: () => ({ esbuild: false }) },
  ],
  resolve: {
    alias: ${JSON.stringify(m,null,6)},
  },
});
`,y=(e,t,n)=>`${JSON.stringify({name:`lobe-artifact-react-app`,private:!0,version:`0.0.0`,type:`module`,scripts:{build:`vite build`,dev:`vite`,preview:`vite preview`},description:e,dependencies:t,devDependencies:n},null,2)}\n`,b=e=>{let{appCode:u,extraFiles:f,overrides:m,title:h}=e,b=h??`Artifacts App`,x={...s,...m?.packageJson?.dependencies},S={...c,...m?.packageJson?.devDependencies},C=m?.appCode??u,w=[...new Set([...l,...d(C)])],T={[r]:C,[n]:m?.entry??_,[i]:m?.indexHtml??g(b),[o]:y(b,x,S),[a]:m?.viteConfig??v(w)};if(f)for(let[e,t]of Object.entries(f)){let n=e.startsWith(`/`)?e:`/${e}`;T[n]=t}return{dependencies:x,devDependencies:S,entry:t,externalResources:p,files:T}}}));export{x as n,b as t};