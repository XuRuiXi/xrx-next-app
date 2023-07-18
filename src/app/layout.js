import './globals.css'

export const metadata = {
  title: '徐瑞熙',
  description: '徐瑞熙的个人网站',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
