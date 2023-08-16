import{_ as e,o as a,c as r,a as s}from"./app.2414aa9c.js";const f=JSON.parse('{"title":"Releases","description":"","frontmatter":{},"headers":[{"level":2,"title":"Release Cycle​","slug":"release-cycle​","link":"#release-cycle​","children":[]},{"level":2,"title":"Semantic Versioning Edge Cases","slug":"semantic-versioning-edge-cases","link":"#semantic-versioning-edge-cases","children":[{"level":3,"title":"TypeScript Definitions​","slug":"typescript-definitions​","link":"#typescript-definitions​","children":[]},{"level":3,"title":"esbuild","slug":"esbuild","link":"#esbuild","children":[]},{"level":3,"title":"Node.js non-LTS versions","slug":"node-js-non-lts-versions","link":"#node-js-non-lts-versions","children":[]}]},{"level":2,"title":"Pre Releases​","slug":"pre-releases​","link":"#pre-releases​","children":[]},{"level":2,"title":"Deprecations​","slug":"deprecations​","link":"#deprecations​","children":[]},{"level":2,"title":"Experimental Features​","slug":"experimental-features​","link":"#experimental-features​","children":[]}],"relativePath":"releases.md"}'),t={name:"releases.md"},i=s('<h1 id="releases" tabindex="-1">Releases <a class="header-anchor" href="#releases" aria-hidden="true">#</a></h1><p>Vite releases follow <a href="https://semver.org/" target="_blank" rel="noreferrer">Semantic Versioning</a>. You can see the latest stable version of Vite in the <a href="https://www.npmjs.com/package/vite" target="_blank" rel="noreferrer">Vite npm package page</a>.</p><p>A full changelog of past releases is <a href="https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md" target="_blank" rel="noreferrer">available on GitHub</a>.</p><div class="tip custom-block"><p class="custom-block-title">note</p><p>The next Vite Major release will happen after the Node 16 EOL in September.</p><p>Check out the <a href="https://github.com/vitejs/vite/discussions/12466" target="_blank" rel="noreferrer">Vite 5 discussion</a> for more information.</p></div><h2 id="release-cycle​" tabindex="-1">Release Cycle​ <a class="header-anchor" href="#release-cycle​" aria-hidden="true">#</a></h2><p>Vite does not have a fixed release cycle.</p><ul><li><strong>Patch</strong> releases are released as needed.</li><li><strong>Minor</strong> releases always contain new features and are also released as needed. Minor releases always go through a beta pre-release phase.</li><li><strong>Major</strong> releases generally align with <a href="https://endoflife.date/nodejs" target="_blank" rel="noreferrer">Node.js EOL schedule</a>, and will be announced ahead of time. These releases will go through an early discussion phase, and both alpha and beta pre-release phases.</li></ul><p>The previous Vite Major will keep receiving important fixes and security patches. After that, it would only get updates if there are security concerns. We recommend updating Vite regularly. Check out the <a href="https://vitejs.dev/guide/migration.html" target="_blank" rel="noreferrer">Migration Guides</a> when you update to each Major.</p><p>The Vite team partners with the main projects in the ecosystem to test new Vite versions before they are released through the <a href="https://github.com/vitejs/vite-ecosystem-ci" target="_blank" rel="noreferrer">vite-ecosystem-ci project</a>. Most projects using Vite should be able to quickly offer support or migrate to new versions as soon as they are released.</p><h2 id="semantic-versioning-edge-cases" tabindex="-1">Semantic Versioning Edge Cases <a class="header-anchor" href="#semantic-versioning-edge-cases" aria-hidden="true">#</a></h2><h3 id="typescript-definitions​" tabindex="-1">TypeScript Definitions​ <a class="header-anchor" href="#typescript-definitions​" aria-hidden="true">#</a></h3><p>We may ship incompatible changes to TypeScript definitions between minor versions. This is because:</p><ul><li>Sometimes TypeScript itself ships incompatible changes between minor versions, and we may have to adjust types to support newer versions of TypeScript.</li><li>Occasionally we may need to adopt features that are only available in a newer version of TypeScript, raising the minimum required version of TypeScript.</li><li>If you are using TypeScript, you can use a semver range that locks the current minor and manually upgrade when a new minor version of Vite is released.</li></ul><h3 id="esbuild" tabindex="-1">esbuild <a class="header-anchor" href="#esbuild" aria-hidden="true">#</a></h3><p><a href="https://esbuild.github.io/" target="_blank" rel="noreferrer">esbuild</a> is pre-1.0.0 and sometimes it has a breaking change we may need to include to have access to newer features and performance improvements. We may bump the esbuild&#39;s version in a Vite Minor.</p><h3 id="node-js-non-lts-versions" tabindex="-1">Node.js non-LTS versions <a class="header-anchor" href="#node-js-non-lts-versions" aria-hidden="true">#</a></h3><p>Non-LTS Node.js versions (odd-numbered) are not tested as part of Vite&#39;s CI, but they should still work before their <a href="https://endoflife.date/nodejs" target="_blank" rel="noreferrer">EOL</a>.</p><h2 id="pre-releases​" tabindex="-1">Pre Releases​ <a class="header-anchor" href="#pre-releases​" aria-hidden="true">#</a></h2><p>Minor releases typically go through a non-fixed number of beta releases. Major releases will go through an alpha phase and a beta phase.</p><p>Pre-releases allow early adopters and maintainers from the Ecosystem to do integration and stability testing, and provide feedback. Do not use pre-releases in production. All pre-releases are considered unstable and may ship breaking changes in between. Always pin to exact versions when using pre-releases.</p><h2 id="deprecations​" tabindex="-1">Deprecations​ <a class="header-anchor" href="#deprecations​" aria-hidden="true">#</a></h2><p>We periodically deprecate features that have been superseded by better alternatives in Minor releases. Deprecated features will continue to work with a type or logged warning. They will be removed in the next major release after entering deprecated status. The <a href="https://vitejs.dev/guide/migration.html" target="_blank" rel="noreferrer">Migration Guide</a> for each major will list these removals and document an upgrade path for them.</p><h2 id="experimental-features​" tabindex="-1">Experimental Features​ <a class="header-anchor" href="#experimental-features​" aria-hidden="true">#</a></h2><p>Some features are marked as experimental when released in a stable version of Vite. Experimental features allows us to gather real-world experience to influence their final design. The goal is to let users provide feedback by testing them in production. Experimental features themselves are considered unstable, and should only be used in a controlled manner. These features may change between Minors, so users must pin their Vite version when they rely on them.</p>',24),n=[i];function l(o,d,h,c,p,u){return a(),r("div",null,n)}const g=e(t,[["render",l]]);export{f as __pageData,g as default};
