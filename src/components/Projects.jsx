import { useState } from 'react'

const PROJECTS = [
  {
    id: 'robomaster',
    tag: 'RoboMaster · 东部赛区八强',
    name: '英雄机器人',
    period: '2025.09 — 至今',
    role: '机械结构负责人',
    description: [
      '独立负责英雄机器人底盘、云台及发射机构的整机三维建模与装配，运用 SolidWorks 对轴系等关键部件进行静力学分析，将零件安全裕度提升至 1.8 以上。',
      '参考 IROS 2019 静态平衡理论与 RM 社区开源方案，采用连杆几何逼近法实现零长弹簧（ZFL）特性，通过优化平行四边形机构力臂比与弹簧预压量，在规避死点奇异的前提下实现云台全行程零重力感，显著降低待机功耗。',
      '针对测试中出现的卡弹与机构抖动，主导多轮结构优化——改进供弹路径、增强关键连接件刚度，显著提升赛场对抗环境下的发射稳定性。',
    ],
    highlights: [
      '独立负责整机三维建模与装配，静力学分析将安全裕度提升至 1.8+',
      '重力补偿机构设计：零长弹簧（ZFL）+ 平行四边形机构优化 + 死点规避',
      '卡弹与机构抖动问题攻关：供弹路径改进 + 关键连接件刚度增强',
    ],
    images: ['/images/image5.png', '/images/image6.png', '/images/image8.png'],
  },
  {
    id: 'wheel-leg',
    tag: '省级大创',
    name: '并联轮腿机器人的结构设计及分析',
    period: '2025.06 — 2026.05',
    role: '项目统筹 / 机械方案协作者',
    description: [
      '与团队共同敲定轮腿复合机构、传动系统及机身框架总体方案，主导关键参数（连杆尺寸、驱动布局）的优化，通过力学计算与图纸反复校核，确保设计合理性与可制造性，避免潜在干涉。',
      '负责整体进度规划与节点管控，对接指导老师与实验室资源，协调加工、装配及调试全流程，保障样机按期落地；针对装配中暴露的稳定性问题，组织迭代改进并推动实施。',
      '对接专利代理机构，参与技术交底书撰写与审核，配合完成相关专利报告申报。',
    ],
    highlights: [
      '轮腿复合机构总体方案敲定 + 关键参数主导优化',
      '项目进度管控：对接资源 + 加工装配调试全流程协调',
      '专利申报：技术交底书撰写与审核',
    ],
    images: ['/images/image9.png', '/images/image10.png', '/images/7905eb2d4fb5ce655df6f8f6ecbfcaf4.png'],
  },
  {
    id: 'robocon',
    tag: 'ROBOCON · 国二',
    name: '仿生足式机器人',
    period: '2024.09 — 2025.08',
    role: '机械结构设计',
    description: [
      '完成12自由度仿生四足机器人腿部关节及连杆机构的方案制定与设计，参与关键参数（关节布局、连杆尺寸）的深度优化，完成结构出图与样机装配，并对多自由度联动工况进行动态干涉排查。',
      '针对装配测试中暴露的机械谐振问题，通过优化关节轴承布置方案与连杆局部轻量化处理，有效降低结构振动，简化后续电机控制参数的整定难度，保障整机步态运行稳定性。',
      '统筹机械组物料采购链路及BOM表制作，依据零件加工周期制定分级采购计划；针对轴承等高损耗件实施"最小库存单元"管理策略，提前备货并制定应急替代方案，确保赛期物资供应零中断。',
    ],
    highlights: [
      '12自由度四足机器人腿部关节与连杆机构方案设计',
      '关键参数深度优化：关节布局 + 连杆尺寸 + 动态干涉排查',
      '机械谐振攻关：轴承布置优化 + 轻量化 → 简化电机控制参数整定',
      '供应链管理：BOM制作 + 分级采购 + 最小库存单元策略',
    ],
    awards: [
      'ROBOCON 仿生足式机器人挑战赛 竞速赛二等奖',
      'ROBOCON 仿生足式机器人挑战赛 越野赛二等奖',
      'ROBOCON 仿生足式机器人挑战赛 障碍赛三等奖',
      '仿生足式机器人 最佳技术奖',
    ],
    images: ['/images/image2.png', '/images/image3.jpeg', '/images/image4.png'],
  },
]

function ProjectCard({ project, index }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        gap: '80px',
        alignItems: 'center',
        padding: '80px 0',
        borderBottom: index < PROJECTS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
      }}
    >
      {/* Image side */}
      <div>
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            aspectRatio: '16/10',
          }}
        >
          <img
            src={project.images[activeImage]}
            alt={`${project.name} - ${activeImage + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Image indicators */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px',
            }}
          >
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                style={{
                  width: i === activeImage ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: i === activeImage ? 'var(--text-primary)' : 'rgba(255,255,255,0.3)',
                  transition: 'all var(--transition)',
                  cursor: 'pointer',
                }}
                aria-label={`查看图片 ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail row */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              style={{
                width: '56px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border: i === activeImage ? '2px solid var(--accent)' : '2px solid transparent',
                opacity: i === activeImage ? 1 : 0.5,
                transition: 'all var(--transition)',
                cursor: 'pointer',
                padding: 0,
                background: 'var(--bg-card)',
              }}
            >
              <img
                src={img}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content side */}
      <div>
        <div style={{ marginBottom: '20px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--accent)',
              padding: '4px 12px',
              borderRadius: '100px',
              background: 'var(--accent-dim)',
              marginBottom: '16px',
            }}
          >
            {project.tag}
          </span>
          <h3
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '8px',
            }}
          >
            {project.name}
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            {project.period} · {project.role}
          </p>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '28px' }}>
          {project.description.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: i < project.description.length - 1 ? '12px' : 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: project.awards ? '28px' : 0 }}>
          {project.highlights.map((h, i) => (
            <li
              key={i}
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: 'var(--accent)', fontWeight: 600, flexShrink: 0 }}>—</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Awards */}
        {project.awards && (
          <div
            style={{
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                marginBottom: '12px',
                textTransform: 'uppercase',
              }}
            >
              🏆 获奖情况
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {project.awards.map((a, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                  }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '120px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-label">Selected Work</div>
          <h2 className="section-heading">精选项目</h2>
          <p className="section-subtitle">
            从概念设计到样机验证，每个项目都是全流程工程实践的结果
          </p>
        </div>

        {/* Project blocks */}
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
