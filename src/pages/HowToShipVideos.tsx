import React from 'react';
import PageLayout from '@/components/PageLayout';
import HTMLContent from '@/components/HTMLContent';
import { usePageContent } from '@/hooks/usePageContent';

export default function HowToShipVideos() {
  const { html, loading, error } = usePageContent('how-to-ship-videos');

  if (loading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-red-600">Error: {error}</div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <HTMLContent html={html} />
      </div>
    </PageLayout>
  );
}

