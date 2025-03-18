
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import HelloMessage from '@/components/HelloMessage';
import Footer from '@/components/Footer';

const Index = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setGreeting(name);
      setName('');
      setShowInput(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-white">
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <HelloMessage greeting={greeting} />
          
          {!showInput ? (
            <div className="flex flex-col items-center mt-8 space-y-4">
              <Button 
                onClick={() => setShowInput(true)}
                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 rounded-full shadow-md"
              >
                Personalize Greeting
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4 w-full">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  What's your name?
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                  autoFocus
                />
              </div>
              <div className="flex space-x-2">
                <Button 
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 rounded-md"
                >
                  Say Hello
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setShowInput(false)}
                  className="px-4 py-2 transition-all duration-300 rounded-md"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
