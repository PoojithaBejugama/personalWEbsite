import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import { content } from '../config/content';

export default function InstagramFeed() {
  const posts = content.instagram?.posts || [];
  const username = content.instagram?.username || '';

  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://www.instagram.com/embed.js';
      document.body.appendChild(script);
    }

    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, [posts]);

  return (
    <section id="instagram">
      <SectionShell>
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-primary mb-4 tracking-tight leading-tight">
            {content.instagram?.title || 'From Instagram'}
          </h2>
          <p className="font-body text-lg sm:text-xl text-brand-muted font-semibold">
            {content.instagram?.subtitle || 'Latest posts from Instagram'}
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-brand-secondary rounded-xl ring-1 ring-brand-line p-6 text-center">
            <p className="font-body text-brand-muted mb-4 font-semibold">
              Add your Instagram post URLs in <span className="font-bold">content.instagram.posts</span> to show your feed here.
            </p>
            {username ? (
              <a
                href={`https://www.instagram.com/${username}/`}
                target="_blank"
                rel="noreferrer"
                className="inline-block font-body bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all"
              >
                View @
                {username}
              </a>
            ) : null}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {posts.map((url, index) => (
              <motion.div
                key={`${url}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-surface rounded-xl ring-1 ring-brand-line p-4"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '12px',
                    boxShadow: 'none',
                    margin: 0,
                    maxWidth: '100%',
                    minWidth: '100%',
                    width: '100%'
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}
      </SectionShell>
    </section>
  );
}
