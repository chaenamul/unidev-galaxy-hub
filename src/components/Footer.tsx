import { Link } from "react-router-dom";
import unidevLogo from "@/assets/UNIDEV_Logo_Horizontal.png";
import kakaoIcon from "@/assets/kakaotalk_icon.png";
import instagramIcon from "@/assets/instagram_icon.png";

const Footer = () => {
  return (
    <footer className="px-8 md:px-12 lg:px-16 py-10 md:py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-24">
          <div className="min-w-[140px]">
            <h3 className="text-sm font-medium mb-5 text-foreground">
              행사 바로가기
            </h3>

            <nav className="flex flex-col gap-4 text-sm text-muted-foreground">
              <a
                href="https://unicon.unidev.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                UNICON
              </a>

              <a
                href="https://unicode.unidev.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                UNICODE
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right md:ml-auto">
            <img
              src={unidevLogo}
              alt="UNIDEV logo"
              className="w-32 object-contain mb-3"
            />

            <p className="text-sm text-muted-foreground mb-5">
              이메일 : officialunidev@gmail.com
            </p>

            <div className="flex items-center gap-3">
                
              <Link
                to="https://www.instagram.com/unidev.official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="인스타그램" className="w-6 h-6 transition-all duration-300" />
              </Link>
              <Link
                to="http://pf.kakao.com/_LxgSvn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={kakaoIcon} alt="카카오톡" className="w-6 h-6 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6">
          <p className="text-sm text-muted-foreground text-right">
            © {new Date().getFullYear()} UNIDEV. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;