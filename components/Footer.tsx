export function Footer() {
  return (
    <footer className="max-w-md mt-16 pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Coded in{' '}
        <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">
          Visual Studio Code
        </a>
        . Built with{' '}
        <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">
          Next.js
        </a>
        {' '}and{' '}
        <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  )
} 