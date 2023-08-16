import{_ as t,o as e,c as d,a as o}from"./app.2414aa9c.js";const u=JSON.parse('{"title":"命令行界面","description":"","frontmatter":{},"headers":[{"level":2,"title":"开发服务器","slug":"dev-server","link":"#dev-server","children":[{"level":3,"title":"vite","slug":"vite","link":"#vite","children":[]}]},{"level":2,"title":"构建","slug":"build","link":"#build","children":[{"level":3,"title":"vite build","slug":"vite-build","link":"#vite-build","children":[]}]},{"level":2,"title":"其他","slug":"others","link":"#others","children":[{"level":3,"title":"vite optimize","slug":"vite-optimize","link":"#vite-optimize","children":[]},{"level":3,"title":"vite preview","slug":"vite-preview","link":"#vite-preview","children":[]}]}],"relativePath":"guide/cli.md"}'),c={name:"guide/cli.md"},r=o(`<h1 id="command-line-interface" tabindex="-1">命令行界面 <a class="header-anchor" href="#command-line-interface" aria-hidden="true">#</a></h1><h2 id="dev-server" tabindex="-1">开发服务器 <a class="header-anchor" href="#dev-server" aria-hidden="true">#</a></h2><h3 id="vite" tabindex="-1"><code>vite</code> <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h3><p>在当前目录下启动 Vite 开发服务器。</p><h4 id="usage" tabindex="-1">使用 <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="options" tabindex="-1">选项 <a class="header-anchor" href="#options" aria-hidden="true">#</a></h4><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td><code>--host [host]</code></td><td>指定主机名称 (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>指定端口 (<code>number</code>)</td></tr><tr><td><code>--https</code></td><td>使用 TLS + HTTP/2 (<code>boolean</code>)</td></tr><tr><td><code>--open [path]</code></td><td>启动时打开浏览器 (<code>boolean | string</code>)</td></tr><tr><td><code>--cors</code></td><td>启用 CORS (<code>boolean</code>)</td></tr><tr><td><code>--strictPort</code></td><td>如果指定的端口已在使用中，则退出 (<code>boolean</code>)</td></tr><tr><td><code>--force</code></td><td>强制优化器忽略缓存并重新构建 (<code>boolean</code>)</td></tr><tr><td><code>-c, --config &lt;file&gt;</code></td><td>使用指定的配置文件 (<code>string</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>公共基础路径（默认为：<code>/</code>）(<code>string</code>)</td></tr><tr><td><code>-l, --logLevel &lt;level&gt;</code></td><td>Info | warn | error | silent (<code>string</code>)</td></tr><tr><td><code>--clearScreen</code></td><td>允许或禁用打印日志时清除屏幕 (<code>boolean</code>)</td></tr><tr><td><code>--profile</code></td><td>启动内置的 Node.js 调试器（查看 <a href="/guide/troubleshooting.html#performance-bottlenecks">性能瓶颈</a>）</td></tr><tr><td><code>-d, --debug [feat]</code></td><td>显示调试日志 (<code>string | boolean</code>)</td></tr><tr><td><code>-f, --filter &lt;filter&gt;</code></td><td>过滤调试日志 (<code>string</code>)</td></tr><tr><td><code>-m, --mode &lt;mode&gt;</code></td><td>设置环境模式 (<code>string</code>)</td></tr><tr><td><code>-h, --help</code></td><td>显示可用的 CLI 选项</td></tr><tr><td><code>-v, --version</code></td><td>显示版本号</td></tr></tbody></table><h2 id="build" tabindex="-1">构建 <a class="header-anchor" href="#build" aria-hidden="true">#</a></h2><h3 id="vite-build" tabindex="-1"><code>vite build</code> <a class="header-anchor" href="#vite-build" aria-hidden="true">#</a></h3><p>构建生产版本。</p><h4 id="usage-1" tabindex="-1">使用 <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="options-1" tabindex="-1">选项 <a class="header-anchor" href="#options-1" aria-hidden="true">#</a></h4><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td><code>--target &lt;target&gt;</code></td><td>编译目标（默认为：<code>&quot;modules&quot;</code>）(<code>string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td>输出目录（默认为：<code>dist</code>）(<code>string</code>)</td></tr><tr><td><code>--assetsDir &lt;dir&gt;</code></td><td>在输出目录下放置资源的目录（默认为：<code>&quot;assets&quot;</code>）(<code>string</code>)</td></tr><tr><td><code>--assetsInlineLimit &lt;number&gt;</code></td><td>静态资源内联为 base64 编码的阈值，以字节为单位（默认为：<code>4096</code>）(<code>number</code>)</td></tr><tr><td><code>--ssr [entry]</code></td><td>为服务端渲染配置指定入口文件 (<code>string</code>)</td></tr><tr><td><code>--sourcemap [output]</code></td><td>构建后输出 source map 文件（默认为：<code>false</code>）(<code>boolean | &quot;inline&quot; | &quot;hidden&quot;</code>)</td></tr><tr><td><code>--minify [minifier]</code></td><td>允许或禁用最小化混淆，或指定使用哪种混淆器（默认为：<code>&quot;esbuild&quot;</code>）(<code>boolean | &quot;terser&quot; | &quot;esbuild&quot;</code>)</td></tr><tr><td><code>--manifest [name]</code></td><td>构建后生成 manifest.json 文件 (<code>boolean | string</code>)</td></tr><tr><td><code>--ssrManifest [name]</code></td><td>构建后生成 SSR manifest.json 文件 (<code>boolean | string</code>)</td></tr><tr><td><code>--force</code></td><td>强制优化器忽略缓存并重新构建（实验性）(<code>boolean</code>)</td></tr><tr><td><code>--emptyOutDir</code></td><td>若输出目录在根目录外，强制清空输出目录 (<code>boolean</code>)</td></tr><tr><td><code>-w, --watch</code></td><td>在磁盘中模块发生变化时，重新构建 (<code>boolean</code>)</td></tr><tr><td><code>-c, --config &lt;file&gt;</code></td><td>使用指定的配置文件 (<code>string</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>公共基础路径（默认为：<code>/</code>）(<code>string</code>)</td></tr><tr><td><code>-l, --logLevel &lt;level&gt;</code></td><td>Info | warn | error | silent (<code>string</code>)</td></tr><tr><td><code>--clearScreen</code></td><td>允许或禁用打印日志时清除屏幕 (<code>boolean</code>)</td></tr><tr><td><code>--profile</code></td><td>启动内置的 Node.js 调试器（查看 <a href="/guide/troubleshooting.html#performance-bottlenecks">性能瓶颈</a>）</td></tr><tr><td><code>-d, --debug [feat]</code></td><td>显示调试日志 (<code>string | boolean</code>)</td></tr><tr><td><code>-f, --filter &lt;filter&gt;</code></td><td>过滤调试日志 (<code>string</code>)</td></tr><tr><td><code>-m, --mode &lt;mode&gt;</code></td><td>设置环境模式 (<code>string</code>)</td></tr><tr><td><code>-h, --help</code></td><td>显示可用的 CLI 选项</td></tr></tbody></table><h2 id="others" tabindex="-1">其他 <a class="header-anchor" href="#others" aria-hidden="true">#</a></h2><h3 id="vite-optimize" tabindex="-1"><code>vite optimize</code> <a class="header-anchor" href="#vite-optimize" aria-hidden="true">#</a></h3><p>预构建依赖。</p><h4 id="usage-2" tabindex="-1">使用 <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">optimize</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="options-2" tabindex="-1">选项 <a class="header-anchor" href="#options-2" aria-hidden="true">#</a></h4><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td><code>--force</code></td><td>强制优化器忽略缓存并重新构建 (<code>boolean</code>)</td></tr><tr><td><code>-c, --config &lt;file&gt;</code></td><td>使用指定的配置文件 (<code>string</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>公共基础路径（默认为：<code>/</code>）(<code>string</code>)</td></tr><tr><td><code>-l, --logLevel &lt;level&gt;</code></td><td>Info | warn | error | silent (<code>string</code>)</td></tr><tr><td><code>--clearScreen</code></td><td>允许或禁用打印日志时清除屏幕 (<code>boolean</code>)</td></tr><tr><td><code>-d, --debug [feat]</code></td><td>显示调试日志 (<code>string | boolean</code>)</td></tr><tr><td><code>-f, --filter &lt;filter&gt;</code></td><td>过滤调试日志 (<code>string</code>)</td></tr><tr><td><code>-m, --mode &lt;mode&gt;</code></td><td>设置环境模式 (<code>string</code>)</td></tr><tr><td><code>-h, --help</code></td><td>显示可用的 CLI 选项</td></tr></tbody></table><h3 id="vite-preview" tabindex="-1"><code>vite preview</code> <a class="header-anchor" href="#vite-preview" aria-hidden="true">#</a></h3><p>本地预览构建产物。不要将其用作生产服务器，因为它不是为此而设计的。</p><h4 id="usage-3" tabindex="-1">使用 <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h4 id="options-3" tabindex="-1">选项 <a class="header-anchor" href="#options-3" aria-hidden="true">#</a></h4><table><thead><tr><th>选项</th><th></th></tr></thead><tbody><tr><td><code>--host [host]</code></td><td>指定主机名称 (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>指定端口 (<code>number</code>)</td></tr><tr><td><code>--strictPort</code></td><td>如果指定的端口已在使用中，则退出 (<code>boolean</code>)</td></tr><tr><td><code>--https</code></td><td>使用 TLS + HTTP/2 (<code>boolean</code>)</td></tr><tr><td><code>--open [path]</code></td><td>启动时打开浏览器 (<code>boolean | string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td>输出目录（默认为：<code>dist</code>)(<code>string</code>)</td></tr><tr><td><code>-c, --config &lt;file&gt;</code></td><td>使用指定的配置文件 (<code>string</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>公共基础路径（默认为：<code>/</code>）(<code>string</code>)</td></tr><tr><td><code>-l, --logLevel &lt;level&gt;</code></td><td>Info | warn | error | silent (<code>string</code>)</td></tr><tr><td><code>--clearScreen</code></td><td>允许或禁用打印日志时清除屏幕 (<code>boolean</code>)</td></tr><tr><td><code>-d, --debug [feat]</code></td><td>显示调试日志 (<code>string | boolean</code>)</td></tr><tr><td><code>-f, --filter &lt;filter&gt;</code></td><td>过滤调试日志 (<code>string</code>)</td></tr><tr><td><code>-m, --mode &lt;mode&gt;</code></td><td>设置环境模式 (<code>string</code>)</td></tr><tr><td><code>-h, --help</code></td><td>显示可用的 CLI 选项</td></tr></tbody></table>`,28),a=[r];function s(n,l,i,h,p,g){return e(),d("div",null,a)}const v=t(c,[["render",s]]);export{u as __pageData,v as default};
