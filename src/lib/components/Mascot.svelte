<script lang="ts">
  type Variant = 'surface' | 'dive' | 'guide' | 'think' | 'cta' | 'lost';
  type Size = 'sm' | 'md' | 'lg';

  let { variant, size = 'md', decorative = true, class: className = '' }: {
    variant: Variant;
    size?: Size;
    decorative?: boolean;
    class?: string;
  } = $props();

  const assets: Record<Variant, { src: string; alt: string }> = {
    surface: { src: '/mascots/seal-surface.svg', alt: 'Морской котик на поверхности' },
    dive: { src: '/mascots/seal-dive.svg', alt: 'Ныряющий морской котик' },
    guide: { src: '/mascots/seal-guide.svg', alt: 'Плывущий морской котик' },
    think: { src: '/mascots/seal-think.svg', alt: 'Морской котик ищет материалы' },
    cta: { src: '/mascots/seal-cta.svg', alt: 'Морской котик с источником света' },
    lost: { src: '/mascots/seal-lost.svg', alt: 'Морской котик светит фонарём в глубине' }
  };
</script>

<img
  class={`mascot mascot--${size} ${className}`}
  src={assets[variant].src}
  alt={decorative ? '' : assets[variant].alt}
  aria-hidden={decorative}
  width={variant === 'guide' ? 720 : 640}
  height={variant === 'guide' ? 380 : 560}
  loading={variant === 'surface' ? 'eager' : 'lazy'}
  fetchpriority={variant === 'surface' ? 'high' : 'auto'}
/>

<style>
  .mascot { display:block; width:100%; height:auto; }
  .mascot--sm { max-width:160px; }.mascot--md { max-width:280px; }.mascot--lg { max-width:520px; }
</style>
