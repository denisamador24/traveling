export const metadata = {
  title: 'Traveling!',
  description: 'Discover places in the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/svg+xml" href="/icons/flight.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;700&family=Roboto:wght@700&display=swap"
          rel="stylesheet" />
      </head>

      <body>{children}</body>
    </html>
  )
}
