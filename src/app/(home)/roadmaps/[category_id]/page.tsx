'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchRoadmapById, fetchRoadmaps } from '@/features/roadmaps/roadmapsSlice';
import { FaPlayCircle, FaCheckCircle } from 'react-icons/fa';

export default function RoadmapDetailPage() {
  // const { category_id } = useParams();

 

  const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      dispatch(fetchRoadmaps());
    }, [dispatch]);
  
  
    const { roadmaps, loading } = useSelector((state: RootState) => state.roadmap);
    const singleRoadmap = roadmaps[0]
    console.log(singleRoadmap, 'singleRoadmap');

 
  if ( !singleRoadmap) return <div className="p-4">not found</div>;

  return (
<></>
  );
}