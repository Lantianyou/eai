# 具身智能 infra 效率指标：metrics for Embodied AI infra

首先，我们先给具身智能 data infra 有一个定义，就是通过软硬件的联合设计，来打造一系列主要面向负责模型训练的算法工程师的便捷工具。作为一个部门 or 小组，具身智能 data infra 的核心考核标准就是

1. 提升公司总体产品的迭代速度：尽最大可能支持硬件算法以及其他部门的问题定位反馈和实验，以工具为核心，有序高效得协同。
2. 通过长期和提前的设计和合理的经济模型，来提升算力存储的使用效率，给财务预算规划带来确定性，为研发争取到最佳的性能成本
   承担如下职能：

- 支持对正在开发的自研硬件做出需求反馈和问题定位，如现有的数采套件
- 支持对数采运营工作中的可执行的规范
- 构建直观自然，有序的数据获取方案，可以快速得获取到想要的数据
- 拟定算力存储的分配方案，设计和持续维护数据的单位经济模型
- 不影响日常办公，让开发中数据传输所使用的资源
  下简述几个 infra 的重要组件，来实现上边的目标

### capture app/kit

- 更容易接入自研/异构传感器
- 支持一系列跨硬件和系统。手机，ARM 指令集的 Linux 数采盒子，
- 稳定：

### data pipeline：ray, prefect, rustfs, pigsty

具身数据管线指的是将自采或者外部的数据转化为训练可用的批处理格式。其中包括

#### ingest

- https://datasets.gurasees.com/

#### 标注/处理

#### 重跑和

#### 评测

### 数据库：rerun hub, lakefs, lance

有一个中心化的具身智能数据库的好处就在于，就是时刻都有一个 single source of truth 来去查找和筛选数据， 让算法团队从结果而非过程管理数据。

- 主要参考的产品设计：https://rerun.io/hub 和 https://lakefs.io/
- 性能和原理分析：
  - https://rerun.io/blog/data-layer-for-robot-learning

### 算力存储分配模型

https://allenai.org/blog/impactful-scheduling

### developer/agent experience
