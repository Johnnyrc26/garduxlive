export const Footer = () => {
  return (
    <footer className="border-t border-default-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <div className="flex items-center gap-1">
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GARDUX
            </span>
          </div>
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} GARDUX LIVE
          </p>
        </div>
      </div>
    </footer>
  );
};
