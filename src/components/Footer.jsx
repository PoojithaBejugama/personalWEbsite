import logo from '../assets/logo-light-nobackground.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = 'https://www.instagram.com/poojitha_private_tutoring/';

  return (
    <footer className="bg-brand-surface border-t border-brand-line text-brand-muted py-12">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img
              src={logo}
              alt="Poojitha Tutoring logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-heading text-base font-bold text-brand-primary">Poojitha Tutoring</span>
          </div>
          <p className="font-body text-xs text-brand-muted mb-2 font-semibold">
            © {currentYear} Poojitha Tutoring. All rights reserved.
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-body text-sm text-brand-primary font-semibold hover:underline mb-2"
          >
            Follow on Instagram @poojitha_private_tutoring
          </a>
          <p className="font-body text-xs text-brand-muted/80 font-semibold">
            Made with care for students everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
