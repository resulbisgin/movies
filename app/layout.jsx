import {Inter} from "@next/font/google"
import '@/styles/reset.css'
import '@/styles/global.css'
import Header from "@/components/header"
import Footer from "@/components/footer"
const interFotFamily=Inter({subsets:['latin']})
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFotFamily.className}>
  
      <head />
      <body className='container'>
        <Header/>
        <main>{children}</main>
      <Footer/></body>
    </html>
  )
}
