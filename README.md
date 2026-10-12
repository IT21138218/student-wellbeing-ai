# Intelligent System for Student Wellbeing Monitoring and Support &ndash; Research Website

Static research-project website (short name: **Student Wellbeing AI**) for an
intelligent AI system that monitors, assesses and supports student wellbeing and
mental health. Four components:

1. Behavioural & Mood Monitoring
2. Emotion & Sentiment Recognition (NLP)
3. Wellbeing Risk Prediction
4. Personalised Support & Recommendation

Stack: React (Vite) frontend, Python (FastAPI) backend, MongoDB, scikit-learn /
XGBoost / LightGBM for prediction, Google Generative AI (Gemini) for the NLP /
conversational component, models served via REST, dashboards for students and
counsellors.

## Structure

- `index.html` &ndash; all page content (single page, anchored sections)
- `css/` &ndash; `style.css` + `modify.css` (base template, recoloured teal),
  `polish.css` (modern 2026 restyle: typography, cards, spacing, hovers), vendor CSS.
  Palette: teal `#0f766e` / green `#10b981` / deep `#082826`. Font: Inter (Google Fonts).
- `js/` &ndash; jQuery + plugins and `script.js`
- `images/` &ndash; section images (see "Images to replace" below)
- `downloads/` &ndash; project PDFs/PPTs (see `downloads/README.md`)

## Still to do (search `index.html` for `TODO` and `[` )

- **Project ID:** replace `[24-25J-XXX]` in the Overview section
- **Literature Survey:** written as clean prose (no citation numbers). Add a reference
  list later only if your handbook requires one.
- **Team:** names and emails are real, one per component (About Us `member-1`..`member-4`,
  in this order &ndash; tell me if the real ownership differs and I'll re-pair them):
  1. Ekanayake E.M.S.P &ndash; Component 1, Behavioural & Mood Monitoring
  2. K.H. Nimesha &ndash; Component 2, Emotion & Sentiment Recognition
  3. DMSM Dissanayaka &ndash; Component 3, Wellbeing Risk Prediction
  4. Zoysa A.K.T.D &ndash; Component 4, Personalised Support & Recommendation

  Still needed: registration numbers, LinkedIn URLs, and real photos for
  `images/Team/member-1.jpg`..`member-4.jpg` (supervisor/co-supervisor photos are already in
  place at `images/Team/supervisor.jpeg` and `co-supervisor.jpeg`)
- **Supervisor / co-supervisor:** done &ndash; Ms. Lokesha Weerasinghe / Ms. Akshi De Silva
  (About Us + Contact)
- **Downloads:** drop files in `downloads/` per `downloads/README.md`, update "Submitted on TODO" dates
- **Milestones:** 13 items matching the SLIIT 2026 Regular Batch RP Timeline, with dates,
  weights (sum to 100%) and "Marks Allocated: TBD/10"
  field per milestone &ndash; confirm all of this against your project handbook and fill in
  real rubric scores as they come back
- **Contact:** still placeholder &ndash; team email (`studentwellbeing.team@gmail.com`) and
  phone (`+94 7X-XXXXXXX`)
- **Overview video:** done &ndash; plays from `video/project-overview.mp4` (28 MB; consider
  compressing to ~720p for faster loading) in "Research Problem & Solution"
- **GitHub Pages:** rename the repo (e.g. `student-wellbeing-ai`) so the project URL matches

Images use descriptive filenames &ndash; see `images/README.md`. Replace a file keeping its
name and no HTML edit is needed.
