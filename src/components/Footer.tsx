import Link from "next/link";
import Brand from "./Brand";
import { siteName, mainSiteURL } from "@/config";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Brand />
          <p>Good foundations. Your next idea.</p>
        </div>
        <div className="footer-links">
          <Link href="/examples">Examples</Link>


        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteName}
        </span>

        <a href={mainSiteURL} target="_blank" rel="noopener noreferrer">
          Faisal Safadi ↗
        </a>
      </div>
    </footer>
  );
}
