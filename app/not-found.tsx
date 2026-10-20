import { Intro, Button } from "@/components/ui";
export default function NotFound() {
  return (
    <Intro
      eyebrow="404 · A little off track"
      title="Let’s find your next discovery."
    >
      <p>That page isn’t here. Explore our clubs or head back home.</p>
      <Button href="/clubs">Explore our clubs</Button>
    </Intro>
  );
}
