import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Dribbble,
  Figma,
  Code2,
  LayoutTemplate,
  PenTool,
  type LucideProps,
} from "lucide-react";
import type { Social } from "@/lib/data";

/* WhatsApp is not part of lucide — inline brand glyph. */
export function WhatsApp(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={props.size ?? 20}
      height={props.size ?? 20}
      className={props.className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.445-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

/* WordPress brand glyph for the services grid. */
export function WordPress(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={props.size ?? 24}
      height={props.size ?? 24}
      className={props.className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-8.56 10c0-1.24.27-2.42.74-3.48l4.09 11.2A8.56 8.56 0 013.44 12zM12 20.56c-.84 0-1.65-.12-2.42-.35l2.57-7.47 2.63 7.21c.02.04.04.08.06.12-.89.31-1.84.49-2.84.49zm1.18-12.6c.51-.03.98-.08.98-.08.46-.06.41-.74-.05-.71 0 0-1.38.11-2.27.11-.84 0-2.24-.11-2.24-.11-.46-.03-.52.68-.05.71 0 0 .44.05.9.08l1.33 3.64-1.87 5.6-3.11-9.24c.51-.03.98-.08.98-.08.46-.06.41-.74-.06-.71 0 0-1.37.11-2.26.11-.16 0-.35 0-.55-.01A8.55 8.55 0 0112 3.44c2.23 0 4.26.85 5.79 2.25-.04 0-.07-.01-.11-.01-.84 0-1.44.74-1.44 1.53 0 .71.41 1.31.84 2.02.33.58.71 1.32.71 2.39 0 .74-.28 1.6-.66 2.79l-.87 2.9-3.16-8.35zm5.65 11.03l2.65-7.66c.5-1.24.66-2.23.66-3.11 0-.32-.02-.62-.06-.9A8.53 8.53 0 0120.56 12a8.55 8.55 0 01-3.73 7.03z" />
    </svg>
  );
}

export function SocialGlyph({
  icon,
  className,
  size = 20,
}: {
  icon: Social["icon"];
  className?: string;
  size?: number;
}) {
  const common = { className, size } as LucideProps;
  switch (icon) {
    case "github":
      return <Github {...common} />;
    case "linkedin":
      return <Linkedin {...common} />;
    case "instagram":
      return <Instagram {...common} />;
    case "facebook":
      return <Facebook {...common} />;
    case "mail":
      return <Mail {...common} />;
    case "dribbble":
      return <Dribbble {...common} />;
    case "whatsapp":
      return <WhatsApp {...common} />;
    default:
      return <Mail {...common} />;
  }
}

export function ServiceIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  switch (icon) {
    case "code":
      return <Code2 className={className} />;
    case "layout":
      return <LayoutTemplate className={className} />;
    case "wordpress":
      return <WordPress className={className} />;
    case "figma":
      return <Figma className={className} />;
    default:
      return <PenTool className={className} />;
  }
}
