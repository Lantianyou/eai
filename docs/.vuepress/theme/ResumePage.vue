<template>
  <div class="resume-page">
    <header class="resume-hero">
      <div>
        <p class="resume-kicker">ABOUT / CURRICULUM VITAE</p>
        <h1>兰天游 Tianyou Lan</h1>
        <p class="resume-role">具身智能 · 数据基础设施 · 软件工程</p>
      </div>
      <div class="resume-mark" aria-hidden="true">LY ·</div>
    </header>

    <div class="resume-grid">
      <aside class="resume-side">
        <section>
          <h2>联系</h2>
          <p>
            <a href="mailto:dtlantianyou@gmail.com">dtlantianyou@gmail.com</a><br />
            <a href="https://lantianyou.com">lantianyou.com</a><br />
            <a href="https://github.com/lantianyou">github.com/lantianyou</a><br />
            Shanghai · China
          </p>
        </section>

        <section>
          <h2>关键词</h2>
          <ul class="tag-list">
            <li>Data infrastructure</li>
            <li>Robotics / Embodied AI</li>
            <li>Developer experience</li>
            <li>Systems thinking</li>
            <li>Technical writing</li>
          </ul>
        </section>

        <section>
          <h2>语言</h2>
          <p>中文 · 母语<br />English · 工作读写</p>
        </section>
      </aside>

      <main class="resume-main">
        <section class="resume-intro">
          <h2>个人简介</h2>
          <p>
            我关注如何把硬件、数据、算力和算法团队连接成一套可靠的研发系统。擅长从混乱的问题中建立清晰的模型，再把它落成可使用、可观测、可复现的工具。
          </p>
        </section>

        <section>
          <h2>工作经历</h2>
          <article class="resume-entry">
            <div class="resume-entry-head">
              <h3>OF · Data Infra 工程负责人</h3>
              <span>北京 · 任职期间</span>
            </div>
            <p class="resume-company">汇报对象：联合创始人冯泽菡 → COO 李子健</p>
            <p class="resume-entry-summary">
              负责 OF data infra 在北京的工程落地，将上海、哈尔滨 research
              部门的预研项目转化为可交付的产品和流程。任职期间，公司估值由 10 余亿人民币增长至 30
              余亿。
            </p>
            <ul>
              <li>设计并落地 OF 数据交付流程与工程规范，支持算法工程师快速迭代和稳定交付。</li>
              <li>
                开发数据采集软件并支持采集运营；开发线上 replay、视觉与 EMG 混合数据标注算法，确定
                v0.1 数采 kit 选型并交付小米。
              </li>
              <li>
                设计数据算力平台、传输与存储方案、流水线调度和算力规划；预研具身智能数据库、算力调度平台与具身数据语义切分。
              </li>
            </ul>
          </article>
          <article class="resume-entry">
            <div class="resume-entry-head">
              <h3>工程影响与团队建设</h3>
              <span>工作方法</span>
            </div>
            <ul>
              <li>
                在 coding agent 能力快速跃升期，主动引入并培训 agent
                工作流，推动团队形成更强的工程自驱力和极客文化。
              </li>
              <li>
                区分预研与交付定位，在跨部门卡点上提供及时支持，并给出可验证、确定性的技术结论。
              </li>
              <li>
                以接近单人力完成面向融资和头部客户的短期 demo，同时为 OF
                核心产品建立可由研发团队持续接手的工程基础。
              </li>
            </ul>
          </article>
          <article class="resume-entry">
            <div class="resume-entry-head">
              <h3>代表性技术栈</h3>
              <span>Infra 产品定义</span>
            </div>
            <div class="resume-projects">
              <div>
                <strong>Rerun Hub</strong>
                <p>多模态具身数据的高效存储与在线 replay，支持日常 debug 和离线快速训练。</p>
              </div>
              <div>
                <strong>Ray + Prefect</strong>
                <p>
                  从框架和 workflow 层编排标注流水线算力，规范算法集成，让数据流水线像 CI/CD
                  一样可触达。
                </p>
              </div>
            </div>
          </article>
        </section>

        <section>
          <h2>正在做的事</h2>
          <div class="resume-projects">
            <div>
              <strong>01 / Infra notes</strong>
              <p>记录具身智能数据 infra 的设计问题、指标与取舍。</p>
            </div>
            <div>
              <strong>02 / Open field guide</strong>
              <p>整理让数据、算力和模型协作更顺畅的工程模式。</p>
            </div>
          </div>
        </section>

        <section class="resume-footer-note">
          <p>愿意聊数据系统、机器人学习、工程组织，或一个还没有被说清楚的问题。</p>
        </section>
      </main>
    </div>
  </div>
</template>
