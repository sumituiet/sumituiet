const projects = [
    {
        title: 'Smart Query System to Access Image Data Using LLMs',
        duration: 'Recent',
        description: `Designed an application with features like RESTful API endpoints for querying and a chat interface while optimizing performance with 4-bit quantization and Rotary Positional Embedding (RoPE) scaling.`,
        techStack: 'PyTorch, Transformers, RESTful APIs',
        content: `Managed GPU memory efficiently using PyTorch's garbage collection techniques, ensuring scalable and customizable model deployment with support for various transformer models.`,
        link: "https://github.com/sumituiet",
      },
  {
    title: 'Phishing Detection System Using Machine Learning',
    duration: 'January 2019 - December 2019',
    description: `Research-oriented, open-source phishing websites detection using URL feature analysis.`,
    techStack: 'Python, Scikit-learn, Flask, requests, WhoIS',
    content: `Developed a phishing detection system using machine learning techniques focused on URL feature analysis. Implemented real-time detection and enhanced security measures.`,
    link: "https://github.com/sumituiet",
  },
  {
    title: 'Satellite Image Segmentation Using Watershed Transform',
    duration: 'January 2020 - October 2020',
    description: `Segmentation of 3-band Geo-Spatial images from INSAT-3. Developed a hybrid image segmentation model based on geo-spatial bands with accuracy levels up to 99.98% based on Forest department boundary data.`,
    techStack: 'Python, SKimage, SKLearn, Docker, Matplotlib',
    content: `Implemented image segmentation using the watershed transform and KMeans clustering. The model achieved high accuracy and was optimized for processing satellite images.`,
    link: "https://github.com/sumituiet",
  },

];

const Projects = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">My Projects</h1>
        {projects.map((project, index) => (
          <div className="col-md mb-4" key={index}>
            <div className="card h-100 shadow-sm" onClick={() => window.open(project.link, '_blank')}>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{project.duration}</h6>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><strong>Tech Stack:</strong> {project.techStack}</p>
                <p className="card-text">{project.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Projects;
