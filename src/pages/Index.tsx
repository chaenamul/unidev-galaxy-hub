import { Gamepad2, Trophy, Code2 } from "lucide-react";
import unidevLogo from "@/assets/UNIDEV_Logo_Horizontal.png";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6">
        <img
          src={unidevLogo}
          alt="UNIDEV - Game Developers Group"
          className="w-full max-w-2xl mb-8 invert"
        />
        <p className="text-muted-foreground text-lg md:text-xl tracking-widest uppercase font-mono">
          Game Developers Group
        </p>
        <div className="mt-16 animate-bounce">
          <div className="w-px h-12 bg-muted-foreground/40 mx-auto" />
        </div>
      </section>

      {/* Events */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <h2 className="text-center text-muted-foreground tracking-[0.3em] uppercase text-sm mb-16 font-mono">
          Our Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group border border-border rounded-lg p-8 bg-card hover:bg-accent transition-colors duration-300 cursor-default"
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
