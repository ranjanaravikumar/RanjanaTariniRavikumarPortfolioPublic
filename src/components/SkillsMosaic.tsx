import React, { useState } from 'react';
import './SkillsMosaic.css';

const SkillsMosaic = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      category: 'Programming Languages',
      color: 'dark-red',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Rust', 'SQL', 'R']
    },
    {
      category: 'Web Development',
      color: 'dark-red',
      skills: ['React', 'Next.js', 'Vue.js', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'AI/ML & Data Science',
      color: 'dark-red',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'RAG', 'LLM Integration', 'NLP', 'Computer Vision', 'Deep Learning', 'Machine Learning', 'Neural Networks']
    },
    {
      category: 'Backend & APIs',
      color: 'dark-red',
      skills: ['Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'REST APIs']
    },
    {
      category: 'Cloud & DevOps',
      color: 'dark-red',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions']
    },
    {
      category: 'Databases',
      color: 'dark-red',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB']
    },
    {
      category: 'Big Data & Analytics',
      color: 'dark-red',
      skills: ['Spark', 'Hadoop']
    },
    {
      category: 'Visualization & BI',
      color: 'dark-red',
      skills: ['Tableau', 'Power BI']
    },
    {
      category: 'Development Practices',
      color: 'dark-red',
      skills: ['Git', 'Testing', 'Debugging', 'Code Review', 'Agile']
    },
    {
      category: 'Soft Skills',
      color: 'dark-red',
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
