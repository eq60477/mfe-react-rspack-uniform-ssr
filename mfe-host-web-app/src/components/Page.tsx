import { Theme } from "@radix-ui/themes";
import { UniformSlot } from "@uniformdev/canvas-react";

const Page = () => {
  return (
    <Theme>
      <UniformSlot name="content" />
    </Theme>
  );
};

export default Page;
