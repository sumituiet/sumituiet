import Background from "./background";

const experience = [
  {
    title: 'Assistant Software Engineer at Tata Consultancy Services',
    duration: 'May 2021 – January 2023',
    description: 'Developed data pipelines and facilitated improvements on internal applications.',
    techStack: 'SAP, STIBO, Kafka, Django',
    content:
      'Developed a data pipeline for data streaming between SAP and STIBO for material creation, handling more than 10,000 IDOCs generation in each run. Facilitated minor improvements and developments on Kafka and Django-based internal applications. Received customer appreciation from Walgreens for resolving critical issues in November 2022.',
  },
  {
    title: 'IoT Data Engineer at Preflet',
    duration: 'January 2023 – June 2024',
    description:
      'Designed forecasting models and data streaming platforms to improve energy usage efficiency.',
    techStack: 'IoT, Data Engineering',
    content:
      'Designed and implemented a forecasting model for energy usage with a mean absolute deviation of 1.4%. Created a data streaming platform with an overall improvement of 15% in performance over the previous solution. Designed and implemented a custom analytics platform for power management and bill forecasting.',
  },
  {
    title: 'Smart Query System to Access Image Data Using LLMs',
    duration: 'June 2024 – Present',
    description:
      'Designed an application with RESTful API endpoints for querying and a chat interface, optimizing performance with 4-bit quantization and RoPE scaling.',
    techStack: 'PyTorch, Transformers, RESTful APIs',
    content:
      "Managed GPU memory efficiently using PyTorch's garbage collection techniques, ensuring scalable and customizable model deployment with support for various transformer models.",
  },
];

const Experience = () => {
  return (
<Background>
  <div className="container my-5 full-page-component">
    <h1 className="mb-4">My Experience</h1>
    <div className="row">
      {experience.map((experience, index) => (
        <div className="col-md-12 mb-4" key={index}>
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{experience.title}</h5>
              <h6 className="card-subtitle mb-2">{experience.duration}</h6>
              <p className="card-text">{experience.description}</p>
              {experience.techStack && (
                <p className="card-text">
                  <strong>Tech Stack:</strong> {experience.techStack}
                </p>
              )}
              <p className="card-text">{experience.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</Background>
  );
};

export default Experience;
