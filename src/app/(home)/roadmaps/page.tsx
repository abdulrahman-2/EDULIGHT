'use client';

import Search from '@/components/common/Search';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import roadmapImg from '@/assets/home-images/exam-1.png'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoadmaps } from '@/features/roadmaps/roadmapsSlice';
import { AppDispatch, RootState } from '@/store/store'; 

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { roadmaps, loading } = useSelector((state: RootState) => state.roadmap);

//   const categories = ['All', 'Marketing', 'Design', 'Development'];
//   const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

//   const [activeCategory, setActiveCategory] = useState<string>('All');
//   const [activeLevel, setActiveLevel] = useState<string>('All');

  useEffect(() => {
    dispatch(fetchRoadmaps());
  }, [dispatch]);



  return (
    <div className='container md:max-w-7xl mx-auto py-4 md:py-16 flex flex-col gap-4'>
      <h2 className='text-5xl font-semibold'>Explore Your Learning Path</h2>
      <p className='text-gray-400 text-[16px]'>
        Choose a roadmap to guide your journey from beginner to job-ready.
      </p>

      <div className='w-full md:w-1/3 mt-4'>
        <Search placeholder='Search For Roadmap' />
      </div>

      {/* <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          Categories:
          <div className='flex items-center gap-2'>
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg font-[500] duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-white hover:bg-primary/80'
                    : 'bg-white hover:bg-primary/20 text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-2'>
          Level:
          <div className='flex items-center gap-2'>
            {levels.map((lvl, index) => (
              <button
                key={index}
                onClick={() => setActiveLevel(lvl)}
                className={`px-3 py-1 rounded-lg font-[500] duration-300 ${
                  activeLevel === lvl
                    ? 'bg-primary text-white hover:bg-primary/80'
                    : 'bg-white hover:bg-primary/20 text-primary'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 md:mt-8'>
        {loading ? (
          <p>Loading...</p>
        ) : roadmaps.length > 0 ? (
          roadmaps.map((roadmap: any) => (
            <Card key={roadmap.name} className='overflow-hidden'>
              <Link href={`/roadmaps/${roadmap.category_id}`}>
                <div className='flex flex-col'>
                  <div className='relative h-[170px] w-full'>
                    <Image
                      src={roadmap.posterURL || roadmapImg}
                      alt={roadmap.name}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='dark:bg-primary/10'>
                    <div className='p-3'>
                      <div className='flex items-center justify-center'>
                        <span className='text-[16px] uppercase font-[500] bg-primary/10 text-primary py-1 px-2 rounded-md'>
                          {roadmap.name}
                        </span>
                      </div>
                      <p className='text-[10px] mt-2 truncate'>{roadmap.description}</p>
                    </div>
                    {/* <div className='border-t border-gray-200'>
                      <div className='flex items-center justify-between px-4 py-3'>
                        <span className='text-[10px] uppercase font-[500] bg-primary/10 text-primary py-1 px-2 rounded-md'>
                          {roadmap.level}
                        </span>
                        <span className='text-sm text-gray-500 dark:text-white flex items-center gap-1'>
                          <CiClock2 className='text-lg' /> {roadmap.courses.duration}
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Link>
            </Card>
          ))
        ) : (
          <p>No roadmaps found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
