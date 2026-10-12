# RP_Website: Intelligent System for Student Wellbeing Monitoring and Support

The official research project website for **Student Wellbeing AI** (Project ID **R26-IT-165**), a
final-year research project at the Sri Lanka Institute of Information Technology (SLIIT), Faculty of
Computing. The website presents the research problem, objectives, methodology, system components,
milestones, documents and team behind an AI system that monitors, assesses and supports student
wellbeing and mental health.

## Live Demo

🔗 **[https://it21138218.github.io/student-wellbeing-ai/](https://it21138218.github.io/student-wellbeing-ai/)**

## Features

- **Single-page layout**: anchored sections with smooth scrolling and a fixed navigation bar
- **Project Overview**: summary of the system, key facts and the four research components
- **Literature Survey**: background, existing approaches and the research gap
- **System Components**: behavioural and mood monitoring, emotion and sentiment recognition, wellbeing
  risk prediction, and the monitoring and support dashboard
- **Research Problem & Solution**: problem statement, proposed solution and an overview video
- **Research Objectives**: the main objective plus five sub-objectives in auto-advancing tabs
- **Methodology**: research process with an animated system pipeline video
- **Technologies Used**: icon grid of the full frontend, backend, database and ML stack
- **Milestones**: timeline of every assessment with dates, marks and progress bars
- **Documents**: download links for proposals, reports, the research paper, logbooks and presentations
- **About Us**: supervisor, co-supervisor and team member profiles
- **Contact Us**: contact details and a message form that opens the visitor's email client
- **Scroll Guide Bot**: a floating assistant that introduces each section as you scroll
- **Fully responsive**: works on mobile, tablet and desktop screens

## Technology Stack

### Website

| Layer      | Technologies                                               |
| ---------- | ---------------------------------------------------------- |
| Markup     | HTML5                                                      |
| Styling    | CSS3, Bootstrap 3, Animate.css, Font Awesome, Google Fonts |
| Scripting  | JavaScript, jQuery, WOW.js, Owl Carousel                   |
| Hosting    | GitHub Pages                                               |

### Research System

| Layer               | Technologies                                         |
| ------------------- | ---------------------------------------------------- |
| Frontend            | React, Vite, JavaScript, Tailwind CSS, Chart.js      |
| Backend             | Python, FastAPI (REST APIs)                          |
| Database & Ops      | MongoDB, Docker, Git & GitHub                        |
| Machine Learning    | scikit-learn, XGBoost, LightGBM, SHAP, NLTK / spaCy  |
| Generative AI / NLP | Google Generative AI (Gemini)                        |
| Tools               | Jupyter, Postman, VS Code                            |

## Project Structure

```
student-wellbeing-ai/
├── index.html          # Main single-page website (all sections)
├── preloader.gif       # Page loading animation
├── css/
│   ├── bootstrap.css   # Bootstrap framework
│   ├── style.css       # Base template styles
│   ├── modify.css      # Timeline and section customisations
│   ├── responsive.css  # Legacy breakpoints
│   ├── polish.css      # Modern theme, layout fixes and mobile responsiveness
│   └── ...             # Animate, Font Awesome, Owl Carousel, prettyPhoto
├── js/
│   ├── script.js       # Main site script (navigation, scrolling, carousels)
│   └── ...             # jQuery and vendor plugins
├── fonts/              # Web fonts and icon fonts
├── images/
│   ├── Logo/           # Logo, favicon and loader emblem
│   ├── Slider/         # Hero banner
│   ├── Literature/     # Literature survey images
│   ├── Service/        # System components background video
│   ├── objectives/     # Research objective images and background video
│   ├── methodology/    # System pipeline video
│   ├── Technology/     # Technology logos and background video
│   ├── Team/           # Team and supervisor photos
│   ├── Testimonials/   # Documents section background
│   └── Bot/            # Scroll guide bot icon
├── video/              # Project overview video
└── downloads/          # Notes for project documents
```

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/IT21138218/student-wellbeing-ai.git
   cd student-wellbeing-ai
   ```

2. **No build step is needed.** This is a static website with no dependencies to install.

## Usage

- **Open directly:** double-click `index.html` to open it in your browser.
- **Run a local server** (recommended so videos and fonts load correctly):

  ```bash
  # Python 3
  python -m http.server 8000
  ```

  Then visit [http://localhost:8000](http://localhost:8000).

- **VS Code:** right-click `index.html` → **Open with Live Server**.
- **Edit content:** all text lives in `index.html`. To swap an image, replace the file in `images/`
  and keep the same filename.

## Team

### Supervisors

| Name                    | Role          | Contact            |
| ----------------------- | ------------- | ------------------ |
| Ms. Lokesha Weerasinghe | Supervisor    | lokesha.w@sliit.lk |
| Ms. Akshi De Silva      | Co-Supervisor | akshi.d@sliit.lk   |

### Members

| Name              | Component                                                   | Email                  |
| ----------------- | ----------------------------------------------------------- | ---------------------- |
| Ekanayake E.M.S.P | Component 1: Wellbeing Indicator and Adaptive Quiz          | it21138218@my.sliit.lk |
| K.H. Nimesha      | Component 2: Risk Classification and Wellbeing Forecasting  | it21049736@my.sliit.lk |
| DMSM Dissanayaka  | Component 3: Coping Recommendation and Social Peer Matching | it20145552@my.sliit.lk |
| Zoysa A.K.T.D     | Component 4: Monitoring, Visualization & AI Learning Support Dashboard | it19064482@my.sliit.lk |

## Contributing

This website belongs to an academic research project, but suggestions and fixes are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-change`
3. Commit your changes: `git commit -m "Describe your change"`
4. Push the branch: `git push origin feature/your-change`
5. Open a Pull Request

For questions, contact the team at **studentwellbeing.team@gmail.com**.

## Thank You

Thank you for visiting the Student Wellbeing AI research website! We are grateful to our supervisor
**Ms. Lokesha Weerasinghe**, our co-supervisor **Ms. Akshi De Silva**, the Faculty of Computing at
SLIIT, and every student and counsellor who took part in our research.

© 2026 Intelligent System for Student Wellbeing Monitoring and Support. All rights reserved.
