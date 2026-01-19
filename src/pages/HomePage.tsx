import AppLayout from '../components/layout/AppLayout';
import Hero from '../components/home/Hero';
import MovieSection from '../components/movie/MovieSection';

export default function HomePage() {
  return (
    <AppLayout>
      <Hero />

      <MovieSection key='trending' title='Trending Now' type='trending' />
      <MovieSection key='new' title='New Release' type='new' />
    </AppLayout>
  );
}
