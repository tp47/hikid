import './globals.css'

export const metadata = {
  title: 'HiKid',
  description: 'Hikid умные часы для детей',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className='scroll-smooth'>
      <body className=" mx-auto font-sans">{children}</body>
    </html>
  )
}
