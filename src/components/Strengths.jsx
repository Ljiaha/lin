const SKILLS = [
  {
    category: '设计软件',
    items: [
      { name: 'SolidWorks', level: '熟练', desc: '三维建模 · 工程图 · 装配体 · 仿真分析' },
      { name: 'AutoCAD', level: '熟练', desc: '二维工程图 · 尺寸标注 · 公差设计' },
      { name: 'KeyShot', level: '熟练', desc: '产品渲染 · 材质灯光 · 展示动画' },
    ],
  },
  {
    category: '仿真分析',
    items: [
      { name: 'Adams', level: '掌握', desc: '多体动力学仿真 · 运动学分析' },
      { name: 'Ansys', level: '掌握', desc: '有限元分析 · 静力学 · 模态分析' },
    ],
  },
  {
    category: '制造工艺',
    items: [
      { name: 'CNC 加工', level: '掌握', desc: '数控编程 · 工艺规划 · 装夹方案' },
      { name: '3D 打印', level: '掌握', desc: 'FDM/SLA · 支撑优化 · 后处理' },
      { name: '激光切割', level: '掌握', desc: '钣金件 · 亚克力 · 快速原型' },
    ],
  },
]

const EDUCATION = {
  school: '北京理工大学珠海学院',
  major: '机械电子工程 · 本科',
  period: '2023.09 — 至今',
  gpa: '3.55 / 5.0',
  rank: '1 / 39',
  courses: [
    { name: '机械制图', score: 95 },
    { name: '机械设计基础', score: 90 },
    { name: '理论力学', score: 86 },
    { name: '互换性与技术测量', score: 86 },
  ],
}

const PATENTS = [
  { type: '实用新型', name: '一种开沟机构及其植树机器人', id: 'ZL 2024 2 3029688.4' },
  { type: '实用新型', name: '一种树苗存储机构及植树机器人', id: 'ZL 2024 2 3029694.X' },
  { type: '实用新型', name: '一种底盘机构及植树机器人', id: 'ZL 2024 2 3029684.6' },
  { type: '受理中', name: '一种基于高柔性夹爪的球类运动机器人', id: '202521055046.3' },
]

export default function Strengths() {
  return (
    <section
      id="strengths"
      style={{
        padding: '120px 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
      }}
    >
      {/* Subtle top border glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
        }}
      />

      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label">Professional Edge</div>
          <h2 className="section-heading">专业优势</h2>
          <p className="section-subtitle">
            扎实的机械设计功底 + 丰富的工程实战经验，具备从方案到样机的完整开发能力
          </p>
        </div>

        {/* ======== Skills Grid ======== */}
        <div style={{ marginBottom: '100px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '40px',
            }}
          >
            · Technical Skills
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {SKILLS.map((group) => (
              <div key={group.category}>
                <h4
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: 'var(--accent)',
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {group.category}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '6px',
                        }}
                      >
                        <span style={{ fontSize: '15px', fontWeight: 500 }}>{skill.name}</span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            color: 'var(--accent)',
                            padding: '2px 8px',
                            borderRadius: '100px',
                            background: 'var(--accent-dim)',
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======== Education + Patents Row ======== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
          }}
        >
          {/* Education */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '28px',
              }}
            >
              · Education
            </h3>

            <div
              style={{
                padding: '32px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                height: '100%',
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {EDUCATION.period}
                </span>
                <h4 style={{ fontSize: '22px', fontWeight: 600, marginTop: '4px', letterSpacing: '-0.02em' }}>
                  {EDUCATION.school}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {EDUCATION.major}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '32px',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-elevated)',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {EDUCATION.gpa}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>GPA</div>
                </div>
                <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {EDUCATION.rank}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>专业排名</div>
                </div>
              </div>

              <div>
                <h5
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    marginBottom: '12px',
                  }}
                >
                  主修课程
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {EDUCATION.courses.map((course) => (
                    <span
                      key={course.name}
                      style={{
                        fontSize: '13px',
                        padding: '6px 14px',
                        borderRadius: '100px',
                        background: 'var(--bg-elevated)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {course.name}{' '}
                      <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{course.score}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Patents & Certificates */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '28px',
              }}
            >
              · Patents & Certificates
            </h3>

            <div
              style={{
                padding: '32px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                height: '100%',
              }}
            >
              <div style={{ marginBottom: '28px' }}>
                <h5
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                  }}
                >
                  实用新型专利
                </h5>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {PATENTS.map((patent, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        paddingBottom: i < PATENTS.length - 1 ? '14px' : 0,
                        borderBottom: i < PATENTS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: patent.type === '受理中' ? 'rgba(251, 191, 36, 0.15)' : 'var(--accent-dim)',
                          color: patent.type === '受理中' ? '#fbbf24' : 'var(--accent)',
                        }}
                      >
                        {patent.type}
                      </span>
                      <div>
                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {patent.name}
                        </p>
                        <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px', fontFamily: 'monospace' }}>
                          {patent.id}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: 'var(--text-muted)',
                    marginBottom: '12px',
                  }}
                >
                  技能证书
                </h5>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['CAD 技能等级证书（SolidWorks）', 'C1 驾驶证'].map((cert) => (
                    <span
                      key={cert}
                      style={{
                        fontSize: '13px',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        background: 'var(--bg-elevated)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======== Professional Competencies ======== */}
        <div style={{ marginTop: '100px', marginBottom: '100px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '40px',
            }}
          >
            · Professional Competencies
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {[
              {
                title: '工程设计与制造工艺',
                desc: '具备机器人结构全生命周期开发能力（概念设计→详细建模→工程出图→样机验证）；熟练掌握 CNC、激光切割及 3D 打印等加工工艺，具备成熟的 DFM 意识与公差分析能力。',
              },
              {
                title: '工程问题与快速迭代',
                desc: '面对新技术需求可快速拆解、高效上手，具备较强的工程问题定位能力，能独立完成结构迭代与验证；适应快节奏研发环境，动手能力强，重视团队配合，能高效推动问题闭环。',
              },
              {
                title: '综合素质与执行力',
                desc: '曾担任校职业发展中心学生助理，多次协助组织大型招聘会及工作会议，具备优秀的统筹协调与执行能力；能精准传递技术需求、同步项目进展，快速响应项目变化并推动技术方案闭环落地。',
              },
            ].map((comp) => (
              <div
                key={comp.title}
                style={{
                  padding: '28px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    marginBottom: '12px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {comp.title}
                </h4>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ======== Honors Summary ======== */}
        <div style={{ textAlign: 'center' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '40px',
            }}
          >
            · Honors & Achievements
          </h3>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '60px',
            }}
          >
            {[
              { value: '7+', label: '国家级竞赛奖项' },
              { value: '1 项', label: '国家级大创（结项）' },
              { value: '1 项', label: '省级大创（结项）' },
              { value: '20+', label: '校院级奖项' },
              { value: '4 项', label: '实用新型专利' },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
