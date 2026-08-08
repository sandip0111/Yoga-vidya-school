import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
  schema?: any | any[];
}

const DEFAULT_IMAGE = 'https://my-s3-images-bucket.s3.amazonaws.com/images/imp-2_e7j80f.jpg';
const DEFAULT_SITE_NAME = 'Yoga Vidya School';
const BASE_URL = 'https://www.yogavidyaschool.com';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private renderer: Renderer2;
  private currentJsonLdScripts: HTMLScriptElement[] = [];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateSeo(config: SeoConfig): void {
    if (!config) return;

    const fullTitle = config.title.includes(DEFAULT_SITE_NAME)
      ? config.title
      : `${config.title} | ${DEFAULT_SITE_NAME}`;

    const rawUrl = config.url || (this.document.location ? this.document.location.pathname : '');
    const pageUrl = rawUrl.startsWith('http')
      ? rawUrl
      : `${BASE_URL}${rawUrl.startsWith('/') ? rawUrl : '/' + rawUrl}`;

    const imageUrl = config.image || DEFAULT_IMAGE;
    const ogType = config.type || 'website';
    const robots = config.robots || 'index, follow';

    // 1. Page Title
    this.titleService.setTitle(fullTitle);

    // 2. Standard Meta Tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ name: 'keywords', content: config.keywords || '' });
    this.metaService.updateTag({ name: 'robots', content: robots });

    // 3. OpenGraph Meta Tags
    this.metaService.updateTag({ property: 'og:site_name', content: DEFAULT_SITE_NAME });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({ property: 'og:url', content: pageUrl });
    this.metaService.updateTag({ property: 'og:type', content: ogType });

    // 4. Twitter Card Meta Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
    this.metaService.updateTag({ name: 'twitter:url', content: pageUrl });

    // 5. Canonical Link
    this.setCanonicalUrl(pageUrl);

    // 6. JSON-LD Schemas
    if (config.schema) {
      this.setJsonLd(config.schema);
    }
  }

  setNoIndex(title?: string): void {
    if (title) {
      const fullTitle = title.includes(DEFAULT_SITE_NAME) ? title : `${title} | ${DEFAULT_SITE_NAME}`;
      this.titleService.setTitle(fullTitle);
    }
    this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }

  setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(this.document.head, link);
    }
    this.renderer.setAttribute(link, 'href', url);
  }

  setJsonLd(schemas: any | any[]): void {
    this.clearJsonLd();

    const schemaList = Array.isArray(schemas) ? schemas : [schemas];
    schemaList.forEach((schema) => {
      if (!schema) return;
      const script = this.renderer.createElement('script');
      this.renderer.setAttribute(script, 'type', 'application/ld+json');
      script.text = typeof schema === 'string' ? schema : JSON.stringify(schema);
      this.renderer.appendChild(this.document.head, script);
      this.currentJsonLdScripts.push(script);
    });
  }

  clearJsonLd(): void {
    this.currentJsonLdScripts.forEach((script) => {
      if (script && script.parentNode) {
        this.renderer.removeChild(script.parentNode, script);
      }
    });
    this.currentJsonLdScripts = [];
  }
}
