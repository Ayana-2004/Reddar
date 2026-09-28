// Build-time entry used by scripts/prerender.js to render each route to static HTML.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

export { routes, getRouteMeta, buildRobotsTxt, buildSitemapXml, buildLlmsTxt } from './seo/site'
export { renderHeadTags } from './seo/head'

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}
