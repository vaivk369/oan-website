import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/common/PageHero';

<<<<<<< HEAD
// Placeholder image and crop reused from the Events hero until the Figma blog hero is available
export default async function BlogsHero() {
  const t = await getTranslations('Blogs.hero');
=======
// Figma Blog hero: the illustration is exported at 2x of the 1440 x 349 hero, so it fills the hero without cropping
export default async function BlogsHero() {
  const t = await getTranslations('Blogs.hero');

>>>>>>> fe1aa2db68dd5f202e34c240cac08252e7ed739d
  return (
    <PageHero
      eyebrow={t('eyebrow')}
      titleLine1={t('titleLine1')}
<<<<<<< HEAD
      titleLine2={t('titleLine2')}
      description={t('description')}
      image="/images/events-hero-photo.png"
      imageAlt={t('imageAlt')}
      height={349}
      overlay="linear-gradient(90deg, rgba(255, 255, 255, 0.9) 37.391%, rgba(255, 255, 255, 0) 100%)"
      crop={{ width: 2048, height: 768, top: 206, stripHeight: 497 }}
      mobile={{ height: 312, tintHeight: 283, textTop: 42, photo: { right: -50, top: 0, width: 832 }, overlay: 'linear-gradient(180deg, rgba(240, 249, 254, 1) 34.6%, rgba(240, 249, 254, 0) 99.8%)' }}
=======
      titleLine2Lead={t('titleLine2Lead')}
      titleLine2={t('titleLine2')}
      description={t('description')}
      image="/images/blog-hero.png"
      imageAlt={t('imageAlt')}
      height={349}
      // Figma: the title box is 563px wide, so "Stories, insights and updates" stays on one line
      titleWidth={563}
>>>>>>> fe1aa2db68dd5f202e34c240cac08252e7ed739d
    />
  );
}
