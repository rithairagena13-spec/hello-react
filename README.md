# Hello React — Developer Profile Page

## 1. Project Overview

Hello React is a responsive developer profile page built with React, Vite, and Tailwind CSS v4.

The project demonstrates how to create reusable React components, pass information through props, and display dynamic content using JavaScript's `.map()` method.

## 2. Technologies Used

- React — building reusable user interface components.
- Vite — project setup and development server.
- Tailwind CSS v4 — styling and responsive layouts.
- JavaScript (JSX) — application logic and component structure.
- React Developer Tools — inspecting the component tree and props.
- Git and GitHub — version control and project hosting.

## 3. Project Setup

We started by creating a new Vite project named `hello-react`.

```bash
npm create vite@latest hello-react
```

We selected React and JavaScript, then installed the project dependencies.

```bash
cd hello-react
npm install
```

Next, we installed Tailwind CSS v4 and its Vite plugin.

```bash
npm install tailwindcss @tailwindcss/vite
```

We configured the Tailwind plugin in `vite.config.js` and added the Tailwind import to `src/index.css`.

```css
@import "tailwindcss";
```

Finally, we started the development server.

```bash
npm run dev
```

## 4. Project Structure

We organized the application into reusable components inside `src/components/`.

```text
hello-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProfileHeader.jsx
│   │   ├── SkillList.jsx
│   │   └── ProjectCard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 5. Building the Components

We created four reusable components:

1. **Navbar:** Displays the brand name and navigation links.
2. **ProfileHeader:** Displays the developer's name, role, location, biography, and a link to the projects section.
3. **SkillList:** Displays the developer's technical skills.
4. **ProjectCard:** Displays individual projects, their descriptions, and technologies used.

Each component was created in its own JSX file and imported into `App.jsx`.

## 6. Passing Data Through Props

We used props to pass information from the parent component (`App`) to reusable child components.

For example, `ProfileHeader` receives:

- `name`
- `role`
- `city`
- `bio`

The `SkillList` component receives an array of skills.

The `ProjectCard` component receives project information such as its title, description, technologies, and number.

This makes the components reusable and keeps the application organized.

## 7. Displaying Dynamic Content with map()

We used JavaScript's `.map()` method to display multiple skills and project cards from arrays.

We also added unique keys to the rendered elements to help React identify each item.

For example:

```jsx
{projects.map((project) => (
  <ProjectCard
    key={project.number}
    number={project.number}
    title={project.title}
    description={project.description}
    technologies={project.technologies}
  />
))}
```

## 8. Styling and Responsiveness

We used Tailwind CSS utility classes to style the page.

The design includes:

- A clean and modern layout.
- Violet accent colors.
- Responsive spacing and typography.
- Project cards arranged in a responsive grid.
- Hover transitions on interactive elements.

## 9. Testing with React Developer Tools

We opened the application in the browser and used React Developer Tools to inspect the component tree.

We selected the `ProjectCard` component and inspected its props.

We confirmed that the component received project information, including the technologies array.

This helped us understand how React components are rendered and how data is passed between components.

## 10. Running and Building the Project

To start the development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 11. Conclusion

Through this project, we practiced creating a React application with Vite, configuring Tailwind CSS v4, building reusable functional components, passing props, rendering arrays with `.map()`, and inspecting components using React Developer Tools.

The project strengthened our understanding of React fundamentals and component-based development.