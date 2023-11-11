import {
  ColorPalette,
  SpinCard,
  SplitCard,
  WalletCard,
  LoginForm,
  SocialBtn,
} from "./components";
import { Gallery, Section } from "./containers";

export default function App() {
  return (
    <>
      <main className="relative w-full h-auto min-h-screen px-8 py-6 sm:px-16 bg-bg-light z-10">
        <Gallery>
          <Section>
            <ColorPalette />
          </Section>
          <Section>
            <SpinCard />
          </Section>
          <Section>
            <SplitCard />
          </Section>
          <Section>
            <WalletCard />
          </Section>
          <Section>
            <LoginForm />
          </Section>
          <Section>
            <SocialBtn />
          </Section>
        </Gallery>
      </main>
    </>
  );
}
