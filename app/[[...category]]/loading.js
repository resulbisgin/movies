import React from 'react'
import CategoriesLoading from '@/components/categories/loading'
import FeatureMovieLoading from '@/components/featured-movie/laoding'
import SectionMovieLoading from '@/components/movies-section/loading'
const Loading = () => {
  return (
    <div>
        <FeatureMovieLoading />
      <CategoriesLoading />
      <SectionMovieLoading />
    </div>
  )
}

export default Loading