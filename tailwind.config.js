/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: { 
      colors:{
        'Lime-Green': 'hsl(163, 72%, 41%)',
        'Bright-Red': 'hsl(356, 69%, 56%)',
        'Facebook': 'hsl(208, 92%, 53%)',
        'Twitter': 'hsl(203, 89%, 53%)',
        'Instagram-start': 'hsl(37, 97%, 70%)',
        'Instagram-end': 'hsl(329, 70%, 58%)',
        'YouTube': 'hsl(348, 97%, 39%)',
        'bg-main': 'var(--bg)',
        'card-bg': 'var(--card-bg)',
        'top-bg-pattern': 'var(--top-bg-pattern)',
        'text': 'var(--text)',
        'main-text': 'var(--main-text)',
      },
      
    },
  },
  plugins: [],
}

