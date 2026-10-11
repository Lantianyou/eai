---
title: 具身智能 infra 效率指标：metrics for Embodied AI infra
description: 具身智能 data infra 的目标与效率指标，讨论数据采集工具、数据管线、数据库、算力存储分配和开发者体验如何支持研发迭代。
date: "2026-10-11"
updated: "2026-10-11"
permalink: /metrics-for-embodied-ai-infra
head:
  - - link
    - rel: canonical
      href: https://lantianyou.com/metrics-for-embodied-ai-infra
  - - meta
    - name: author
      content: 兰天游
  - - meta
    - property: og:site_name
      content: 兰天游 | Tianyou Lan
  - - meta
    - property: og:locale
      content: zh_CN
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: 具身智能 infra 效率指标：metrics for Embodied AI infra | 兰天游
  - - meta
    - property: og:description
      content: 具身智能 data infra 的目标与效率指标，讨论数据采集工具、数据管线、数据库、算力存储分配和开发者体验如何支持研发迭代。
  - - meta
    - property: og:url
      content: https://lantianyou.com/metrics-for-embodied-ai-infra
  - - meta
    - property: og:image
      content: https://lantianyou.com/social-card.png
  - - meta
    - property: og:image:width
      content: "1200"
  - - meta
    - property: og:image:height
      content: "630"
  - - meta
    - property: og:image:alt
      content: 兰天游 · Tianyou Lan · lantianyou.com
  - - meta
    - property: article:author
      content: https://lantianyou.com/
  - - meta
    - property: article:published_time
      content: "2026-10-11"
  - - meta
    - property: article:modified_time
      content: "2026-10-11"
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: 具身智能 infra 效率指标：metrics for Embodied AI infra | 兰天游
  - - meta
    - name: twitter:description
      content: 具身智能 data infra 的目标与效率指标，讨论数据采集工具、数据管线、数据库、算力存储分配和开发者体验如何支持研发迭代。
  - - meta
    - name: twitter:image
      content: https://lantianyou.com/social-card.png
  - - script
    - type: application/ld+json
      id: page-schema
    - |
      {"@context":"https://schema.org","@graph":[{"@type":"Person","@id":"https://lantianyou.com/#person","name":"兰天游","alternateName":"Tianyou Lan","url":"https://lantianyou.com/","sameAs":["https://github.com/lantianyou","https://x.com/dtlantianyou"]},{"@type":"WebSite","@id":"https://lantianyou.com/#website","url":"https://lantianyou.com/","name":"兰天游 | Tianyou Lan","inLanguage":"zh-CN","publisher":{"@id":"https://lantianyou.com/#person"}},{"@type":"BlogPosting","@id":"https://lantianyou.com/metrics-for-embodied-ai-infra#article","url":"https://lantianyou.com/metrics-for-embodied-ai-infra","headline":"具身智能 infra 效率指标：metrics for Embodied AI infra","description":"具身智能 data infra 的目标与效率指标，讨论数据采集工具、数据管线、数据库、算力存储分配和开发者体验如何支持研发迭代。","image":"https://lantianyou.com/social-card.png","inLanguage":"zh-CN","author":{"@id":"https://lantianyou.com/#person"},"publisher":{"@id":"https://lantianyou.com/#person"},"datePublished":"2026-10-11","dateModified":"2026-10-11","mainEntityOfPage":"https://lantianyou.com/metrics-for-embodied-ai-infra","isPartOf":{"@id":"https://lantianyou.com/#website"}}]}
---

# 具身智能 infra 效率指标：metrics for Embodied AI infra

这篇笔记把具身智能 data infra 看作一套连接硬件、数据、算力和算法团队的工程系统。核心问题不是组件数量，而是它是否让研发迭代更快，让每份数据和每个算力资源都更容易被正确使用。

## 先定义效率

具身智能 data infra 通过软硬件联合设计，为负责模型训练的算法工程师提供稳定、便捷的工具。作为一个部门或小组，它主要承担两项结果：

1. 提升公司总体产品的迭代速度：尽最大可能支持硬件算法以及其他部门的问题定位反馈和实验，以工具为核心，有序高效得协同。
2. 通过提前设计和合理的经济模型，提升算力与存储的使用效率，为财务预算带来确定性，也为研发争取更好的性能成本比。

围绕这两个结果，data infra 需要承担以下职能：

- 支持对正在开发的自研硬件做出需求反馈和问题定位，如现有的数采套件
- 制定数采运营中可执行的规范
- 构建直观自然，有序的数据获取方案，可以快速得获取到想要的数据
- 拟定算力存储的分配方案，设计和持续维护数据的单位经济模型
- 控制开发中数据传输对日常办公的影响

下面简述几个重要组件，以及它们可以支持的效率指标。

## capture app/kit

- 更容易接入自研/异构传感器
- 支持跨硬件和系统运行，例如手机和 ARM 指令集的 Linux 数采盒子
- 稳定采集并校验数据，减少设备或网络问题产生的不可用样本

## data pipeline：ray, prefect, rustfs, pigsty

具身数据管线负责把自采或外部数据转化为可训练的批处理格式。它至少需要覆盖以下环节：

### ingest

- [Gurasees 数据集](https://datasets.gurasees.com/)

### 标注/处理

需要记录处理吞吐、失败率和人工返工比例。处理步骤应当可追溯，输入、输出和版本都能回到同一批数据。

### 重跑和

数据处理失败时，应当可以从失败步骤继续，而不是重新消耗全部算力。重跑次数、平均恢复时间和重复计算量都可以作为效率指标。

### 评测

评测结果需要和数据版本、代码版本及模型版本绑定。这样才能区分模型变化、数据变化和管线变化带来的影响。

## 数据库：rerun hub, lakefs, lance

中心化的具身智能数据库提供一个 single source of truth，用来查找和筛选数据，让算法团队按结果而不是按处理过程管理数据。

- 主要参考的产品设计：[Rerun Hub](https://rerun.io/hub) 和 [lakeFS](https://lakefs.io/)
- 性能和原理分析：
  - [Rerun: The data layer for robot learning](https://rerun.io/blog/data-layer-for-robot-learning)

## 算力存储分配模型

[AI2: Impactful scheduling](https://allenai.org/blog/impactful-scheduling)

## developer/agent experience

工具最终服务于算法工程师和 agent。清晰的任务状态、可查询的日志、稳定的接口和可复现的结果，都会直接影响问题定位和实验迭代速度。
