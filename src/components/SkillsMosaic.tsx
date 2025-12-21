import React, { useState } from 'react';
import './SkillsMosaic.css';

const SkillsMosaic = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      category: 'Programming Languages',
      color: 'burgundy',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Rust', 'SQL', 'R']
    },
    {
      category: 'Web Development',
      color: 'orange',
      skills: ['React', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'AI/ML & Data Science',
      color: 'dark-red',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'RAG', 'LLM Integration', 'NLP', 'Computer Vision', 'Deep Learning', 'Machine Learning', 'Neural Networks']
    },
    {
      category: 'Backend & APIs',
      color: 'burgundy',
      skills: ['Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Cloud & DevOps',
      color: 'orange',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform']
    },
    {
      category: 'Databases',
      color: 'dark-red',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch']
    },
    {
      category: 'Big Data & Analytics',
      color: 'burgundy',
      skills: ['Spark', 'Hadoop']
    },
    {
      category: 'Visualization & BI',
      color: 'orange',
      skills: ['Tableau', 'Power BI', 'Plotly', 'D3.js']
    },
    {
      category: 'Development Practices',
      color: 'dark-red',
      skills: ['Git', 'Testing', 'Debugging', 'Code Review', 'Agile', 'Linux']
    },
    {
      category: 'Soft Skills',
      color: 'burgundy',
      skills: ['Problem Solving', 'Communication', 'Leadership', 'Collaboration', 'Adaptability', 'Time Management']
    }
  ];

  return (
    <div className="skills-mosaic-container">      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`skill-box skill-box--${category.color}`}
            onMouseEnter={() => setActiveCategory(index)}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <div className="skill-count">
              {category.skills.length} skills
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMosaic;
