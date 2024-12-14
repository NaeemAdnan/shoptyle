import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CollectionsPreview from './components/collections/CollectionsPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <CollectionsPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;