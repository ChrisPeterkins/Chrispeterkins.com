# ChrisPeterkins.com - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean, professional design showcasing projects, skills, and professional experience.

## 🚀 Live Demo

Visit the live site at [chrispeterkins.com](https://chrispeterkins.com)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Project Showcase**: Detailed project cards with technologies, descriptions, and links
- **Modern Tech Stack**: Built with cutting-edge web technologies
- **Performance Optimized**: Fast loading times with Next.js optimization
- **Type Safe**: Full TypeScript implementation for robust code
- **Clean UI**: Professional design with smooth animations and transitions

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: [Vercel](https://vercel.com/) - Hosting and deployment platform
- **Package Manager**: npm

## 📁 Project Structure

```
chrispeterkins.com/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience section
│   ├── Header.tsx      # Navigation header
│   ├── Projects.tsx    # Projects showcase
│   └── index.ts        # Component exports
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   └── index.tsx      # Home page
├── public/            # Static assets
│   └── images/        # Project screenshots
├── styles/            # Global styles
│   └── globals.css    # Tailwind imports
└── package.json       # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ChrisPeterkins/Chrispeterkins.com.git
cd chrispeterkins.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## 📝 Adding New Projects

To add a new project to the portfolio:

1. Open `components/Projects.tsx`
2. Add a new object to the `projects` array:
```typescript
{
  title: "Project Name",
  description: "Project description...",
  image: "/images/projectX.png",
  link: "https://github.com/yourusername/project",
  technologies: ["Tech1", "Tech2", "Tech3"]
}
```
3. Add the project screenshot to `public/images/`

## 🎨 Customization

### Updating Personal Information

- Edit `components/About.tsx` for about section content
- Modify `components/Experience.tsx` for work experience
- Update `components/Header.tsx` for navigation and contact links

### Styling

The project uses Tailwind CSS for styling. To customize:
- Edit `tailwind.config.js` for theme configuration
- Modify component classes directly in TSX files
- Global styles in `styles/globals.css`

## 📦 Featured Projects

- **CLM DevOps Tool** - Desktop app for DocuSign CLM lifecycle management
- **Self-Hosted Budgeting App** - Local-first budgeting application
- **CLM Documentation Tool** - Online workflow documentation generator
- **Short Form Video Generator** - Automated video creation from Reddit posts
- **Personal Portfolio Website** - This website

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/suggestion`)
3. Commit your changes (`git commit -m 'Add suggestion'`)
4. Push to the branch (`git push origin feature/suggestion`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Chris Peterkins - [GitHub](https://github.com/ChrisPeterkins)

Project Link: [https://github.com/ChrisPeterkins/Chrispeterkins.com](https://github.com/ChrisPeterkins/Chrispeterkins.com)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com) for hosting
- All the open source projects that made this possible

---

Built with ❤️ by Chris Peterkins