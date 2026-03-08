import stackBook from '../assets/decor/book-stack.svg';
import openBook from '../assets/decor/open-book.svg';
import flyingBook from '../assets/decor/flying-book.svg';
import reader from '../assets/decor/reader.svg';

const decorations = [
  { src: stackBook, alt: 'Stack of books sticker', className: 'decor-item decor-top-left' },
  { src: openBook, alt: 'Open textbook sticker', className: 'decor-item decor-right-mid decor-hide-mobile' },
  { src: flyingBook, alt: 'Flying book icon', className: 'decor-item decor-left-mid decor-hide-tablet' },
  { src: reader, alt: 'Student reading illustration', className: 'decor-item decor-right-upper' },
  { src: openBook, alt: 'Open textbook accent', className: 'decor-item decor-bottom-center decor-hide-mobile' },
  { src: flyingBook, alt: 'Flying book accent', className: 'decor-item decor-bottom-right' },
  { src: stackBook, alt: 'Book stack corner accent', className: 'decor-item decor-bottom-left decor-hide-tablet' },
];

export default function BackgroundDecor() {
  return (
    <div className="bg-decor-layer" aria-hidden="true">
      {decorations.map((decor, index) => (
        <img
          key={`${decor.alt}-${index}`}
          src={decor.src}
          alt=""
          className={decor.className}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}
