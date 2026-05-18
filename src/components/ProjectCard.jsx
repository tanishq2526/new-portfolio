export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span className={`project-chip ${project.status === 'In development' ? 'project-chip--pending' : 'project-chip--live'}`}>
          {project.status}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
