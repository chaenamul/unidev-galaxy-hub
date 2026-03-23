import { Gamepad2, Trophy, Code2, ExternalLink } from "lucide-react";
import unidevLogo from "@/assets/UNIDEV_Logo_Horizontal.png";
import eventPlaceholder from "@/assets/event-placeholder.jpg";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "UNICON",
    subtitle: "Indie Game Show",
    description:
      "Showcase your indie creations to the world. Play, present, and connect with fellow developers at our flagship exhibition event.",
    icon: Gamepad2,
  },
  {
    title: "UNIJAM",
    subtitle: "Gamejam for Members",
    description:
      "48 hours. One theme. Infinite possibilities. Team up or go solo — build a game from scratch and push your creative limits.",
    icon: Trophy,
  },
  {
    title: "UNICODE",
    subtitle: "Game Developers Conference",
    description:
      "Talks, panels, and workshops from industry veterans and rising stars. Level up your craft at our annual developers conference.",
    icon: Code2,
  },
];

const eventSections = [
  {
    title: "UNICON",
    subtitle: "Indie Game Show",
    description:
      "UNICON is our flagship indie game exhibition where student developers showcase their creations to a live audience. Whether you're presenting a polished title or an early prototype, UNICON is the stage to share your vision and get real feedback from fellow creators and players.",
    link: "https://unicode.unidev.kr/",
    icon: Gamepad2,
    imagePosition: "left" as const,
  },
  {
    title: "UNIJAM",
    subtitle: "Gamejam for Members",
    description:
      "UNIJAM is a 48-hour game jam exclusively for UNIDEV members. Given a surprise theme, participants form teams or go solo to design, develop, and deliver a playable game from scratch. It's intense, creative, and one of the most rewarding experiences in our community.",
    link: "https://unicode.unidev.kr/",
    icon: Trophy,
    imagePosition: "right" as const,
  },
  {
    title: "UNICODE",
    subtitle: "Game Developers Conference",
    description:
      "UNICODE is our annual game developers conference featuring talks, panels, and hands-on workshops. Industry professionals and passionate students come together to share knowledge, explore new technologies, and discuss the future of game development.",
    link: "https://unicode.unidev.kr/",
    icon: Code2,
    imagePosition: "left" as const,
  },
];

const Index = () => {
  const scrollToSection = (title: string) => {
    const el = document.getElementById(`section-${title}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-[50vh] px-6">
        <img
          src={unidevLogo}
          alt="UNIDEV - Game Developers Group"
          className="w-full max-w-2xl mb-8 invert animate-soft-land"
        />
        <p className="text-muted-foreground text-lg md:text-xl tracking-widest uppercase font-mono animate-soft-land" style={{ animationDelay: '0.1s' }}>
          Game Developers Group
        </p>
      </section>

      {/* Events Overview */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <h2 className="text-center text-muted-foreground tracking-[0.3em] uppercase text-sm mb-16 font-mono">
          Our Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              onClick={() => scrollToSection(event.title)}
              className="group border border-border rounded-lg p-8 bg-card hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <event.icon className="w-8 h-8 mb-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              <h3 className="text-2xl font-bold tracking-tight mb-1 font-mono">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                {event.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/70 transition-colors duration-300">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Detail Sections */}
      {eventSections.map((event, index) => (
        <section
          key={event.title}
          id={`section-${event.title}`}
          className={`px-6 py-24 min-h-[67vh] flex items-center ${index % 2 === 0 ? "bg-card" : "bg-background"}`}
        >
          <div
            className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              event.imagePosition === "right" ? "md:[direction:rtl]" : ""
            }`}
          >
            {/* Image Area */}
            <div className={`${event.imagePosition === "right" ? "md:[direction:ltr]" : ""}`}>
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={eventPlaceholder}
                  alt={`${event.title} event`}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className={`${event.imagePosition === "right" ? "md:[direction:ltr]" : ""}`}>
              {/* Event Logo */}
              <div className="flex items-center gap-3 mb-4">
                <event.icon className="w-10 h-10 text-foreground" />
                <div>
                  <h3 className="text-3xl font-bold tracking-tight font-mono">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">
                    {event.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {event.description}
              </p>

              {/* Button */}
              <Button
                variant="outline"
                asChild
                className="group/btn font-mono uppercase tracking-wider"
              >
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-muted-foreground text-xs tracking-widest uppercase font-mono">
          © {new Date().getFullYear()} UNIDEV
        </p>
      </footer>
    </div>
  );
};

export default Index;
