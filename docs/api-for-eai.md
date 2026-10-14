---
title: API for eai
description: PhysicalIntelligence 发布 API，机器人/部署公司可以直接上传数据，获得 Fine Tune 到适配他们场景的推理 API。
date: "2026-10-14"
updated: "2026-10-14"
permalink: /api-for-eai
---

# API for eai

今天 [PhysicalIntelligence 发布了 API](https://www.pi.website/blog/api-beta)，对于机器人/部署公司，他们可以直接上传数据，获得 Fine Tune 到适配他们场景的推理 API。这是具身行业向正确抽象和分工走的第一步，Physical Intelligence 作为专注模型层的公司，服务了全球 15 家机器人创业公司。目前尚不清楚计费的模式，我觉得更接近于 [Thinking Machine 的模式](https://tinker-docs.thinkingmachines.ai/tinker/models/models_and_pricing/)，会根据训练的数据量和推理的 Token 数计费。

![Pi API：上传数据，在我们管理的算力和基础设施上启动微调，并通过托管网关访问微调后的模型来运行推理。](/images/pi-api.png)

在首发的 Blog 里，介绍了 15 家客户，1 家是挖掘机，另外 14 家都是夹爪。推理全部在云端。大部分是仓储/制造业，户外的农业和建筑行业都有涉及。
