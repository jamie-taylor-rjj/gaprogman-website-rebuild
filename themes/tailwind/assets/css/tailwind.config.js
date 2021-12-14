module.exports = {
    theme: {
      extend: {}
    },
    variants: {},
    plugins: [],
    purge: {
        enabled: process.env.HUGO_ENVIRONMENT === "production",
        content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
      },
  }
  