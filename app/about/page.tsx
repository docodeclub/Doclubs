import { Intro, Button, Closing } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About Us",
  "Do Clubs brings together a growing family of specialist extracurricular brands, building on the experience of Docode.",
  "/about",
);
export default function About() {
  return (
    <>
      <Intro
        eyebrow="Our story is growing"
        title="There’s a whole world beyond the classroom."
      >
        <p>
          We believe children deserve the space to find what excites them. To
          make, move, think and discover something of their own.
        </p>
      </Intro>
      <section className="shell about-story">
        <div className="about-poster" aria-hidden="true">
          <span>DISCOVER.</span>
          <span>LEARN.</span>
          <span>PLAY.</span>
          <i>✳</i>
          <small>THE DO CLUBS SPIRIT</small>
        </div>
        <div>
          <p className="eyebrow">One recognisable family</p>
          <h2>
            Built on experience.
            <br />
            Open to possibility.
          </h2>
          <p>
            Do Clubs was created to bring together specialist extracurricular
            programmes under one recognisable family of brands. Building on the
            experience of Docode, our ambition is to help schools offer a wider
            range of engaging, professionally organised activities.
          </p>
          <p>
            Docode keeps its own identity and its focus on coding, technology
            and digital skills. DoSport brings a focus on movement and active play,
            while DoChess opens up a world of strategy and problem-solving.
          </p>
          <p>
            As the family grows, our aim is simple: make it easier for schools
            and parents to discover activities led by people who understand
            their subject, with clear expectations and thoughtful organisation.
          </p>
          <Button href="/clubs">Meet the family</Button>
        </div>
      </section>
      <section className="shell split-section">
        <div>
          <p className="eyebrow">What guides us</p>
          <h2>
            Children’s interests.
            <br />
            At the centre.
          </h2>
        </div>
        <div>
          <h3>Specialism with purpose</h3>
          <p>
            Each programme should have its own expertise, character and
            approach, with children’s curiosity as the starting point.
          </p>
          <h3>Partnerships that work</h3>
          <p>
            Strong school relationships begin with listening, realistic planning
            and clear responsibilities.
          </p>
          <h3>Quality before expansion</h3>
          <p>
            Each specialist website explains its programmes and current
            availability, so schools and families can find the details
            that matter to them.
          </p>
        </div>
      </section>
      <Closing />
    </>
  );
}
