module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        patrick: ['Patrick Hand', 'cursive'], // Patrick Hand フォントを登録
      },
      fontSize: {
        sm: "2rem",
      },
    },
  },
  plugins: [],
}