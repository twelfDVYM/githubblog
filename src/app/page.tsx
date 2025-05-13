// src/app/blog/page.tsx
import React from 'react';
import { getBlogPosts } from '@/lib/getBlogPosts';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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
        <header className="w-full z-1 top-0 bg-white shadow">
          <nav className="container mx-auto px-4 py-2">
            <Link href="https://drakensbergmassage.co.za" className="text-gray-800 hover:text-gray-600 font-medium">
              ← Back to drakensbergmassage.co.za
            </Link>
          </nav>
        </header>
        <main className="min-h-screen h-screen font-sans leading-normal tracking-normal">
        <div className="w-full h-auto sm:h-1/2 m-0 p-0 bg-cover bg-bottom relative max-h-[460px] bg-[#e1c98b]">
          <div className="container mx-auto px-4 text-center break-normal relative z-10">
            <img
              className="block mx-auto mb-1 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
              src="https://vee9168.github.io/DBMHost/DBMLogoWeb.png"
              alt="Drakensberg Massage Logo"
            />
            <h1 className="text-black font-semibold text-3xl sm:text-4xl md:text-6xl my-1">
            Blog
            </h1>
          </div>
        </div>

          <div className="container px-4 md:px-0 max-w-6xl mx-auto mt-8 relative z-20">
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