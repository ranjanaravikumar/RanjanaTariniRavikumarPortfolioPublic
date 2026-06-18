import React from 'react';
import './SkillsMosaic.css';

const SkillsMosaic = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      color: 'dark-red',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Rust', 'SQL', 'R'],
    },
    {
      category: 'Frontend Development',
      color: 'dark-red',
      skills: ['React', 'Next.js', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend & APIs',
      color: 'dark-red',
      skills: ['Node.js', 'Express.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'Microservices', 'REST APIs', 'GraphQL', 'Hibernate'],
    },
    {
      category: 'AI/ML & Data Science',
      color: 'dark-red',
      skills: [
        'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
        'RAG', 'LLM Integration', 'NLP', 'Computer Vision', 'Deep Learning', 'Machine Learning',
        'Neural Networks', 'Generative AI', 'Prompt Engineering'
      ],
    },
    {
      category: 'AI Data Systems',
      color: 'dark-red',
      skills: ['LangChain', 'Vector Databases', 'FAISS', 'Pinecone'],
    },
    {
      category: 'System Design & Architecture',
      color: 'dark-red',
      skills: ['Distributed Systems', 'Scalability', 'High Availability', 'Low Latency Systems', 'Fault Tolerance', 'Event-Driven Architecture'],
    },
    {
      category: 'Cloud & DevOps',
      color: 'dark-red',
      skills: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'IAM', 'CloudWatch', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'CI/CD Pipelines', 'Jenkins', 'GitHub Actions'],
    },
    {
      category: 'Databases & Storage',
      color: 'dark-red',
      skills: ['PostgreSQL', 'Redis', 'MySQL', 'MongoDB', 'DynamoDB', 'SQL Optimization', 'Indexing', 'Query Tuning'],
    },
    {
      category: 'Messaging & Streaming',
      color: 'dark-red',
      skills: ['Apache Kafka', 'RabbitMQ', 'Consumer Groups', 'Dead Letter Queues'],
    },
    {
      category: 'Testing & Observability',
      color: 'dark-red',
      skills: ['JUnit', 'Mockito', 'Cypress', 'Selenium', 'Prometheus', 'Grafana', 'ELK Stack', 'Log Monitoring', 'Testing', 'Debugging'],
    },
    {
      category: 'Security & APIs',
      color: 'dark-red',
      skills: ['OAuth2', 'JWT', 'API Gateway', 'RBAC', 'Secure Coding Practices', 'Swagger/OpenAPI'],
    },
    {
      category: 'Development Practices',
      color: 'dark-red',
      skills: ['Git', 'GitHub', 'Code Review', 'Agile', 'Scrum', 'Confluence', 'Jira'],
    },
    {
      category: 'Big Data & Analytics',
      color: 'dark-red',
      skills: ['Spark', 'Hadoop'],
    },
    {
      category: 'Visualization & BI',
      color: 'dark-red',
      skills: ['Tableau', 'Power BI'],
    },
    {
      category: 'Soft Skills',
      color: 'dark-red',
      skills: ['Problem Solving', 'Communication', 'Leadership', 'Collaboration', 'Adaptability', 'Time Management'],
    },
  ];

  return (
    <div className="skills-mosaic-container">
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`skill-box skill-box--${category.color}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <div className="skill-count">{category.skills.length} skills</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMosaic;