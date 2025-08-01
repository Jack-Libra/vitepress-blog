import{_ as t,c as n,o as s,ae as e}from"./chunks/framework.D-Im-B_H.js";const p="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/N8N%E6%B5%81%E7%A8%8B%E7%B8%BD%E8%A6%BD.png",l="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/1-1.png",o="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/1-2.png",i="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/1-3.png",r="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/2-1.png",c="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/2-2.png",u="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/3-1.png",d="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/3-2.png",q="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/3-3.png",h="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/3-4.png",g="/vitepress-blog/images/%E7%AC%AC%E4%BA%8C%E7%AF%87/3-5.png",C=JSON.parse('{"title":"🧠 從腳本爬蟲到模組化資料流：用 n8n + crawl4ai 打造電商分析平台","description":"","frontmatter":{},"headers":[],"relativePath":"posts/第二篇文章.md","filePath":"posts/第二篇文章.md"}'),b={name:"posts/第二篇文章.md"};function m(_,a,A,y,x,E){return s(),n("div",null,a[0]||(a[0]=[e('<h1 id="🧠-從腳本爬蟲到模組化資料流-用-n8n-crawl4ai-打造電商分析平台" tabindex="-1">🧠 從腳本爬蟲到模組化資料流：用 n8n + crawl4ai 打造電商分析平台 <a class="header-anchor" href="#🧠-從腳本爬蟲到模組化資料流-用-n8n-crawl4ai-打造電商分析平台" aria-label="Permalink to &quot;🧠 從腳本爬蟲到模組化資料流：用 n8n + crawl4ai 打造電商分析平台&quot;">​</a></h1><p>📌 TL;DR：這是偏向於技術實戰導向的文章。我將聚焦於如何以 n8n 搭配 crawl4ai 建構出一套模組化、自動化的電商資料分析平台，並分享我為什麼選擇這套組合。內容將包含n8n中每個節點的配置、流程邏輯、錯誤處理、資料清洗、排程執行與跨平台串接等。</p><h2 id="✅-為什麼選擇-n8n-crawl4ai" tabindex="-1">✅ 為什麼選擇 n8n + crawl4ai？ <a class="header-anchor" href="#✅-為什麼選擇-n8n-crawl4ai" aria-label="Permalink to &quot;✅ 為什麼選擇 n8n + crawl4ai？&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">工具</th><th style="text-align:center;">優勢</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>n8n</strong></td><td style="text-align:center;">視覺化流程設計、自動排程、易除錯、串接 DB / API</td></tr><tr><td style="text-align:center;"><strong>crawl4ai</strong></td><td style="text-align:center;">基於 CSS selector、YAML 設定、穩定輕巧、快速擴展多網站</td></tr></tbody></table><h2 id="個人因素" tabindex="-1">個人因素 <a class="header-anchor" href="#個人因素" aria-label="Permalink to &quot;個人因素&quot;">​</a></h2><ul><li><strong>「自動化」更符合爬蟲本質</strong> <em>(我認為最重要的)</em></li><li>完全開源且免費的工具</li><li>可擴充性與優秀的效能表現</li></ul><h2 id="🛠️-n8n-自動化流程設計解析" tabindex="-1">🛠️ N8N 自動化流程設計解析 <a class="header-anchor" href="#🛠️-n8n-自動化流程設計解析" aria-label="Permalink to &quot;🛠️ N8N 自動化流程設計解析&quot;">​</a></h2><h3 id="流程總覽" tabindex="-1">流程總覽 <a class="header-anchor" href="#流程總覽" aria-label="Permalink to &quot;流程總覽&quot;">​</a></h3><p><img src="'+p+`" alt="螢幕擷取畫面 2025-07-28 174209"></p><h2 id="_1️⃣請求任務-crawl-post" tabindex="-1">1️⃣請求任務 crawl post <a class="header-anchor" href="#_1️⃣請求任務-crawl-post" aria-label="Permalink to &quot;1️⃣請求任務 crawl post&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(1)  不同部署環境下，URL 的設定方式也會不同</span></span>
<span class="line"><span>Docker Compose(專案default) http://crawl4ai:11235/crawl</span></span>
<span class="line"><span>n8n、crawl4ai 跑本機 http://localhost:11235/crawl</span></span>
<span class="line"><span>n8n、crawl4ai 跑本機docker容器 http://host.docker.internal:11235/crawl</span></span>
<span class="line"><span>雲端主機 https://your-domain.com/crawl</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(2) credential</span></span>
<span class="line"><span>Bearer CRAWL4AI_API_TOKEN</span></span>
<span class="line"><span>CRAWL4AI_API_TOKEN 於 docker-compose設定，default:0000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(3) 爬蟲 URL</span></span>
<span class="line"><span>開啟欲爬取網頁devtools以重新設定該網頁css</span></span>
<span class="line"><span>**示範網頁:https://www.amazon.com/-/zh_TW/gp/bestsellers/electronics/ref=pd_zg_ts_electronics** </span></span>
<span class="line"><span>**可透過sitemap獲得大量欲爬取網頁**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(4) URL設定對應 crawl post</span></span>
<span class="line"><span>Docker Compose(專案default) http://crawl4ai:11235/task/taskID</span></span>
<span class="line"><span>n8n、crawl4ai 跑本機 http://localhost:11235/task/taskID</span></span>
<span class="line"><span>n8n、crawl4ai 跑本機docker容器 http://host.docker.internal:11235/task/taskID</span></span>
<span class="line"><span>雲端主機 https://your-domain.com/task/taskID</span></span></code></pre></div><table><tr><td align="center">流程</td><td align="center">節點</td><td align="center">說明</td></tr><tr><th rowspan="3">透過專屬 API獲取資料</th><td align="center"><img src="`+l+'">HTTP Request </td><td align="center">向crawl4ai POST/GET 任務，crawl4ai將返回任務ID</td></tr><tr><td align="center"><img src="'+o+'">HTTP Request </td><td align="center">依據任務ID GET 結果</td></tr><tr><td align="center"><img src="'+i+'">EDIT FIELDS+IF </td><td align="center">判斷任務是否成功</td></tr></table><h2 id="_2️⃣資料清洗" tabindex="-1">2️⃣資料清洗 <a class="header-anchor" href="#_2️⃣資料清洗" aria-label="Permalink to &quot;2️⃣資料清洗&quot;">​</a></h2><table><tr><td align="center">流程</td><td align="center">節點</td><td align="center">說明</td></tr><tr><th rowspan="2">資料清洗、欄位整理</th><td align="center"><img src="'+r+'">CODE </td><td>將爬取資料做清洗 例:[a,b,1,2,A,B]→[a,b]、[1,2]、[A,B]</td></tr><tr><td align="center"><img src="'+c+`"> SPLIT OUT </td><td>分配資料屬性，1 item=1 product 例:[a,b]、[1,2]、[A,B]→[a,1,A]、[b,2,B]</td></tr></table><h2 id="_3️⃣存進資料庫" tabindex="-1">3️⃣存進資料庫 <a class="header-anchor" href="#_3️⃣存進資料庫" aria-label="Permalink to &quot;3️⃣存進資料庫&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(1) HTTP Request節點:請求查看products表是否有重複ID</span></span>
<span class="line"><span>URL:https://&lt;your-project-id&gt;.supabase.co/rest/v1/products?product_code=eq.productID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(2) HTTP Request credentials:</span></span>
<span class="line"><span>apikey : your-anon-key</span></span>
<span class="line"><span>Authorization : Bearer your-anon-key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(3) supabase credentials</span></span>
<span class="line"><span>Host : NEXT_PUBLIC_SUPABASE_URL(https://your_account.supabase.co)</span></span>
<span class="line"><span>Service Role Secret : Bearer service_role API keys</span></span></code></pre></div><table><tr><td align="center">流程</td><td align="center">節點</td><td align="center">說明</td></tr><tr><th rowspan="3">呼叫SUPABASE API</th><td align="center"><img src="`+u+'">Loop Over Items </td><td align="center">一次處裡一筆商品</td></tr><tr><td align="center"><img src="'+d+'"> HTTP Request </td><td align="center">根據productID查訊SUPABASE資料庫</td></tr><tr><td align="center"><img src="'+q+'"> IF </td><td align="center">根據結果判斷有無商品資料</td></tr><tr><th rowspan="2">存入資料庫</th><td align="center"><img src="'+h+'">SUPABASE </td><td align="center">如果資料庫沒商品資料，則先存入product table，再進snapshot table。</td></tr><tr><td align="center"><img src="'+g+`"> SUPABASE </td><td align="center">如果資料庫有資料，直接進入snapshot table，記錄此次爬蟲結果。</td></tr></table><h2 id="_0️⃣-crawl4ai-請求格式-css-strategy" tabindex="-1">0️⃣ crawl4ai 請求格式(css strategy) <a class="header-anchor" href="#_0️⃣-crawl4ai-請求格式-css-strategy" aria-label="Permalink to &quot;0️⃣ crawl4ai 請求格式(css strategy)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;urls&quot;: [&quot;https://www.amazon.com/-/zh_TW/gp/bestsellers/electronics/ref=pd_zg_ts_electronics&quot;], </span></span>
<span class="line"><span>&quot;crawler_params&quot;: {</span></span>
<span class="line"><span>  &quot;headless&quot;: true,</span></span>
<span class="line"><span>  &quot;wait_before_extract&quot;: 3000},</span></span>
<span class="line"><span>  &quot;extraction_config&quot;: {</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;json_css&quot;,</span></span>
<span class="line"><span>    &quot;params&quot;: {</span></span>
<span class="line"><span>      &quot;schema&quot;: {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;character&quot;,</span></span>
<span class="line"><span>        &quot;baseSelector&quot;: &quot;div.p13n-desktop-grid&quot;,</span></span>
<span class="line"><span>        &quot;fields&quot;: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;Name&quot;,</span></span>
<span class="line"><span>                &quot;selector&quot;: &quot;._cDEzb_p13n-sc-css-line-clamp-3_g3dy1&quot;,</span></span>
<span class="line"><span>                &quot;type&quot;: &quot;list&quot;,</span></span>
<span class="line"><span>                &quot;fields&quot;:[{&quot;name&quot;: &quot;Name&quot;,&quot;type&quot;: &quot;text&quot;}]</span></span>
<span class="line"><span>               },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;AsinList&quot;,</span></span>
<span class="line"><span>                &quot;selector&quot;: &quot;._cDEzb_iveVideoWrapper_JJ34T&quot;,</span></span>
<span class="line"><span>                &quot;type&quot;: &quot;list&quot;,</span></span>
<span class="line"><span>                &quot;fields&quot;:[{&quot;name&quot;: &quot;asin&quot;,</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;attribute&quot;,</span></span>
<span class="line"><span>      &quot;attribute&quot;: &quot;data-asin&quot;}]</span></span>
<span class="line"><span>               },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;Rank&quot;,</span></span>
<span class="line"><span>                &quot;selector&quot;: &quot;span.zg-bdg-text&quot;,</span></span>
<span class="line"><span>                &quot;type&quot;: &quot;list&quot;,</span></span>
<span class="line"><span>                &quot;fields&quot;:[{&quot;name&quot;: &quot;Name&quot;,&quot;type&quot;: &quot;text&quot;}]</span></span>
<span class="line"><span>               },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;Rate&quot;,</span></span>
<span class="line"><span>                &quot;selector&quot;: &quot;.a-icon-row&quot;,</span></span>
<span class="line"><span>                &quot;type&quot;: &quot;list&quot;,</span></span>
<span class="line"><span>                &quot;fields&quot;:[{&quot;name&quot;: &quot;Name&quot;,&quot;type&quot;: &quot;text&quot;}]</span></span>
<span class="line"><span>               },</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                &quot;name&quot;: &quot;Price&quot;,</span></span>
<span class="line"><span>                &quot;selector&quot;: &quot;span.p13n-sc-price, span._cDEzb_p13n-sc-price_3mJ9Z&quot;,</span></span>
<span class="line"><span>                &quot;type&quot;: &quot;list&quot;,</span></span>
<span class="line"><span>                &quot;fields&quot;:[{&quot;name&quot;: &quot;Name&quot;,&quot;type&quot;: &quot;text&quot;}]</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;verbose&quot;: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;cache_mode&quot;: &quot;bypass&quot;,</span></span>
<span class="line"><span>  &quot;semphore_count&quot;: 1,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;delay_between_requests&quot;: 3000  </span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="🔍-系統觀測與錯誤處理機制" tabindex="-1">🔍 系統觀測與錯誤處理機制 <a class="header-anchor" href="#🔍-系統觀測與錯誤處理機制" aria-label="Permalink to &quot;🔍 系統觀測與錯誤處理機制&quot;">​</a></h2><ul><li>✅ 系統監控</li><li>📤 成功與失敗紀錄推送 Slack</li><li>🔍 JSON Schema 驗證資料完整性</li><li>📈 商品數、價格異常比例每日統計</li><li>🧪 Debug 模式顯示原始 JSON 結果</li></ul><h2 id="❌-常見錯誤與解法" tabindex="-1">❌ 常見錯誤與解法 <a class="header-anchor" href="#❌-常見錯誤與解法" aria-label="Permalink to &quot;❌ 常見錯誤與解法&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">問題</th><th style="text-align:center;">解法</th></tr></thead><tbody><tr><td style="text-align:center;">Selector 抓不到資料</td><td style="text-align:center;">DevTools 手動測試，避免使用動態產生的 class 名稱</td></tr><tr><td style="text-align:center;">JSON 欄位型別錯誤</td><td style="text-align:center;">Function Node 加入型別強制轉換 (如 \`Number(x)</td></tr><tr><td style="text-align:center;">Supabase 寫入失敗</td><td style="text-align:center;">檢查欄位命名、大小寫一致性與格式設定</td></tr><tr><td style="text-align:center;">n8n 無法解析結構</td><td style="text-align:center;">用 <code>item[0].json</code> 路徑處理多層結構</td></tr></tbody></table><h2 id="📊-自動化帶來的效益" tabindex="-1">📊 自動化帶來的效益 <a class="header-anchor" href="#📊-自動化帶來的效益" aria-label="Permalink to &quot;📊 自動化帶來的效益&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">指標</th><th style="text-align:center;">手動方式</th><th style="text-align:center;">自動流程（n8n + crawl4ai）</th></tr></thead><tbody><tr><td style="text-align:center;">資料更新頻率</td><td style="text-align:center;">偶爾，取決於人力時間</td><td style="text-align:center;">每日自動，時間可配置</td></tr><tr><td style="text-align:center;">擴充網站資料來源</td><td style="text-align:center;">要寫新程式</td><td style="text-align:center;">僅新增 selector YAML + 節點</td></tr><tr><td style="text-align:center;">資料錯誤偵測能力</td><td style="text-align:center;">靠人工檢查</td><td style="text-align:center;">Slack 通知 + 錯誤記錄</td></tr><tr><td style="text-align:center;">多平台部署能力</td><td style="text-align:center;">難整合</td><td style="text-align:center;">模組化架構支援獨立部署</td></tr></tbody></table><h2 id="🚀-可擴充應用規劃" tabindex="-1">🚀 可擴充應用規劃 <a class="header-anchor" href="#🚀-可擴充應用規劃" aria-label="Permalink to &quot;🚀 可擴充應用規劃&quot;">​</a></h2><p>✅ 商品價格歷史紀錄與比價趨勢</p><p>✅ 每日/每週報表自動生成（CSV / PDF）</p><p>✅ 結合 GPT 對商品進行摘要與分群</p><p>✅ 結合 Telegram / LINE Bot 用戶互動查詢</p><p>✅ 提供公開 API 供他人串接熱門商品排行</p><h2 id="🧠-結語-爬蟲不是目的-資料流才是價值" tabindex="-1">🧠 結語｜爬蟲不是目的，資料流才是價值 <a class="header-anchor" href="#🧠-結語-爬蟲不是目的-資料流才是價值" aria-label="Permalink to &quot;🧠 結語｜爬蟲不是目的，資料流才是價值&quot;">​</a></h2><p>從一隻腳本爬蟲轉向一條自動化資料管線，我學到的不只是技術，更是如何設計一套穩定、可觀測、好擴充的資料處理架構。</p><p>如果你也想：</p><ul><li><p>擺脫手動執行爬蟲腳本的日常</p></li><li><p>提升爬蟲穩定性與資料流程整合</p></li><li><p>打造可延伸的分析系統</p></li></ul><p>那麼：n8n + crawl4ai 是很值得嘗試的組合。</p><p>📢 想看更多 n8n 或電商爬蟲實戰？<br> 📎 歡迎追蹤我的 Medium / GitHub 👉 <a href="https://github.com/Jack-Libra" target="_blank" rel="noreferrer">@Jack-Libra</a><br> 💬 如果你對這個專案有任何建議或想法，歡迎留言交流！</p>`,37)]))}const w=t(b,[["render",m]]);export{C as __pageData,w as default};
