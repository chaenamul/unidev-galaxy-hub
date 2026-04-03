import { Gamepad2, Trophy, Code2, ExternalLink } from "lucide-react";
import unidevLogo from "@/assets/UNIDEV_Logo_Horizontal.png";
import { Button } from "@/components/ui/button";
import uniconImage from "@/assets/unicon.jpg"
import unijamImage from "@/assets/unijame.jpg";
import unicodeImage from "@/assets/unicode.jpg"
import Footer from "@/components/Footer";

const events = [
  {
    title: "UNICON",
    subtitle: "Indie Game Show",
    description:
      "여러분의 인디 게임을 세상에 선보여 보세요. 플레이, 발표, 그리고 개발자들과 교류할 수 있는 대표 전시 행사입니다.",
    icon: Gamepad2,
  },
  {
    title: "UNIJAM",
    subtitle: "Gamejam for Members",
    description:
      "48시간, 하나의 주제, 무한한 가능성. 팀 또는 개인으로 참여해, 처음부터 게임을 만들어 창의력의 한계를 확장해 보세요.",
    icon: Trophy,
  },
  {
    title: "UNICODE",
    subtitle: "Game Developers Conference",
    description:
      "베테랑부터 라이징 스타까지, 다양한 개발자들을 만나보세요. 강연, 패널, 워크숍을 통해 게임 개발 역량을 한 단계 끌어올려 보세요.",
    icon: Code2,
  },
];

const eventSections = [
  {
    title: "UNICON",
    subtitle: "Indie Game Show",
    description:
      "UNICON은 학생 개발자들이 자신의 게임을 실제 관객 앞에서 선보이는 대표적인 인디 게임 전시 행사입니다. 완성도 높은 작품이든 초기 프로토타입이든, 여러분의 비전을 공유하고 개발자와 플레이어들로부터 생생한 피드백을 받을 수 있는 무대입니다.",
    link: "https://unicode.unidev.kr/",
    icon: Gamepad2,
    image: uniconImage,
    imagePosition: "left" as const,
  },
  {
    title: "UNIJAM",
    subtitle: "Gamejam for Members",
    description:
      "UNIJAM은 오직 UNIDEV 회원만을 위한 48시간 게임잼입니다. 예고 없이 주어지는 주제에 따라 참가자들은 팀을 이루거나 개인으로 참여해, 처음부터 플레이 가능한 게임을 직접 만들어 완성하게 됩니다. 강도 높은 몰입과 창의성을 경험할 수 있는, UNIDEV의 대표적인 핵심 프로그램입니다.",
    link: "https://on.com2us.com/esg/unijam-with-com2us-gamejam-sketch/",
    icon: Trophy,
    image: unijamImage,
    imagePosition: "right" as const,
  },
  {
    title: "UNICODE",
    subtitle: "Game Developers Conference",
    description:
      "UNICODE는 강연, 패널 토론, 실습 워크숍으로 구성된 연례 게임 개발자 컨퍼런스입니다. 배태랑부터 라이징 스타까지 다양한 개발자들이 함께 모여 지식을 나누고, 새로운 기술을 탐구하며, 게임 개발의 미래를 논의합니다.",
    link: "https://unicode.unidev.kr/",
    icon: Code2,
    image: unicodeImage,
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
        <h2 className="text-center text-muted-foreground tracking-[0.3em] uppercase text-sm mb-16 font-mono animate-soft-land" style={{ animationDelay: '0.2s' }}>
          Our Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div
              key={event.title}
              onClick={() => scrollToSection(event.title)}
              className="group border border-border rounded-lg p-8 bg-card hover:bg-accent transition-colors duration-300 cursor-pointer animate-soft-land"
              style={{ animationDelay: `${0.25 + idx * 0.1}s` }}
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
            <div className={`animate-soft-land ${event.imagePosition === "right" ? "md:[direction:ltr]" : ""}`} style={{ animationDelay: '0.1s' }}>
              <div className="overflow-hidden rounded-lg border border-border">
                <img
                  src={event.image}
                  alt={`${event.title} event`}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className={`animate-soft-land ${event.imagePosition === "right" ? "md:[direction:ltr]" : ""}`} style={{ animationDelay: '0.2s' }}>
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

      <Footer />
    </div>
  );
};

export default Index;
