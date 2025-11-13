const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content - Centered */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-64 h-64 flex items-center justify-center">
              <div className="text-foreground text-xl font-light tracking-wider">
                [UPLOAD DNOCAP LOGO]
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-foreground">
            Build, Grow and Shape The Future
          </h1>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-foreground font-light">
          @:{" "}
          <a 
            href="mailto:info@dnocap.com" 
            className="hover:underline transition-all"
          >
            info@dnocap.com
          </a>
          {" "}- France
        </p>
      </footer>
    </div>
  );
};

export default Index;
