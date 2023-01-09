import { Inter } from '@next/font/google'
import HomeContainer from '@/containers/home'
const inter = Inter({ subsets: ['latin'] })
import Movies from '@/mocks/movies.json'
export default function Home({params}) {
    let selectedCategory;
    if(params.category?.length>0){
        selectedCategory=true;
    }
  return (
      <HomeContainer selectedCategory={{
        id:params.category?.[0] ?? '',
        movies:selectedCategory ? Movies.results.slice(14,20):[],
      }}/>
  )
}
