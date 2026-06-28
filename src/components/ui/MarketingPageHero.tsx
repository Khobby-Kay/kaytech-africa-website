import { CircleCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

type MarketingPageHeroProps = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  imageCaption: string;
  location: string;
};

/** Full-bleed hero — same image treatment as the homepage, with page-specific copy. */
export function MarketingPageHero({
  title,
  description,
  image,
  imageCaption,
  location,
}: MarketingPageHeroProps) {
  return (
    <PageHero
      title={title}
      description={description}
      image={image}
      imageCaption={imageCaption}
      imageCaptionMeta={location}
      cta={{ label: "See our work", href: "/portfolio" }}
      secondaryCta={{ label: "Our services", href: "/services" }}
      footnote={
        <span className="inline-flex items-center gap-2">
          <CircleCheck className="h-4 w-4 text-semantic-up" />
          1914+ projects delivered · {location}
        </span>
      }
    />
  );
}
