import dnocapLogo from "@/assets/dnocap-logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content - Centered */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src={dnocapLogo} 
              alt="DNOCAP" 
              className="w-64 h-auto"
            />
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
          {" "}
        </p>
      </footer>
    </div>
  );
};

export default Index;
