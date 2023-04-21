import { Inter } from 'next/font/google'
import Json from '@/components/Json'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className=" my-5 text-3xl font-bold text-violet-800 container mx-auto text-center">
      Desarrollo de sitios Web con Transacciones en linea
      <h2 className=' my-5 text-violet-400'>Semestre 2023-2</h2>
      <Json></Json>
      </h1>
    </div>
    
  )
}
