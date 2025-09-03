import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a decision
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === null) {
      setShowBanner(true);
    } else if (cookieConsent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-YLE992XCCH';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YLE992XCCH');
    `;
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="mx-auto max-w-6xl">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm flex-1">
              We use cookies to improve your experience and to track analytics. By clicking Accept, you agree to our use of cookies.
            </p>
            <div className="flex gap-3 shrink-0">
              <Button
                variant="ghost"
                onClick={handleDecline}
                className="text-gray-300 hover:text-white hover:bg-gray-800 rounded-full px-6"
              >
                Decline
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;