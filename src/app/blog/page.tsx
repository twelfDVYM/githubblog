// src/app/blog/page.tsx
import React from 'react';
import { getBlogPosts } from '@/lib/getBlogPosts';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// Dynamically import client components
const BlogList = dynamic(() => import('@/components/BlogList'), {
  ssr: true
});

const ErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'), {
  ssr: false
});

export const metadata: Metadata = {
  title: 'Drakensberg Massage Blog',
  description: 'Read our latest blog posts from DrakensbergMassage.co.za',
};

export default async function BlogPage() {
  try {
    const posts = await getBlogPosts();

    return (
      <ErrorBoundary fallback={<div className="text-center py-10">An error occurred while loading the blog posts. Please try again later.</div>}>
        <main className="min-h-screen h-screen font-sans leading-normal tracking-normal">
          <div className="w-full h-1/2 m-0 p-0 bg-cover bg-bottom relative" style={{
            maxHeight: "460px",
            backgroundColor: "#e1c98b"
          }}>
            <div className="container text-center break-normal relative z-10">
              <img className="block m-auto mb-1" src="https://drakensbergmassage.co.za/wp-content/uploads/2024/12/DBMLogoWeb-200h.png" alt="Drakensberg Massage Logo" />
              <h1 className="text-black font-semibold text-2xl md:text-6xl my-1">
                Blog
              </h1>
              <p className="text-black text-xl md:text-2xl">
                Revitalise Naturally, Heal Deeply
              </p>
            </div>
          </div>

          <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32 relative z-20">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <BlogList posts={posts} />
            </div>
          </div>
        </main>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('Error in BlogPage:', error);
    return <div className="text-center py-10">An error occurred while loading the blog page. Please try again later.</div>;
  }
}
