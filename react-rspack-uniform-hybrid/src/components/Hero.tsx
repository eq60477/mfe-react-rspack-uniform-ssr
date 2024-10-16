
import { ComponentProps, UniformText } from "@uniformdev/canvas-react";

type HeroProps = ComponentProps<{
  title: string;
  description?: string;
  desccolor?: string;
}>;

const Hero: React.FC<HeroProps> = ({ title, description, desccolor='blue' }) => (
  <div>
    <h1 className="title">{title}</h1>
    <div className="description" style={{ color: desccolor ?? 'red'  }}>{description}</div>
  </div>
);

const HeroWithInlineEditing: React.FC<HeroProps> = () => (
  <div>
    <UniformText
      className="title"
      parameterId="title"
      as="h1"
      data-test-id="hero-title"
      placeholder="Hero title goes here"
    />
    <UniformText parameterId="description" className="description" data-test-id="hero-description" />
  </div>
);

export default Hero;
