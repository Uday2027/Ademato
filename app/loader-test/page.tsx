import { WatchLoader } from '@/components/ui/watch-loader';

export default function LoaderTestPage() {
  return (
    <div className='min-h-screen bg-black flex flex-col items-center justify-center p-10 gap-10'>
        <h1 className='text-white text-2xl font-serif'>Watch Loader Demo</h1>
        <WatchLoader size={200} />
    </div>
  )
}
