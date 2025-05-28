import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompsnionsList";
import Cta from "@/components/Cta";
import {recentSessions} from "@/constants";
const Page = () => {
  return (
      <main>
          <h1>Popular Companions</h1>
          <section className="home-section">
              <CompanionCard
              id="123"
              name="Nuera the Brainly Explorer"
              topic="Nueral Network of the Brain"
              subject="science"
              duration={45}
              color="#E5D0FF"
              />
              <CompanionCard
                  id="456"
                  name="Counstry the Number Wizard"
                  topic="Derivatives & Integrals"
                  subject="Mathematics"
                  duration={35}
                  color="#edefef"
              />
              <CompanionCard
                  id="789"
                  name="Verba the Vocabulary Builder"
                  topic="English Literature"
                  subject="Literature"
                  duration={40}
                  color="#FFDA6E"
              />
          </section>
          <section className="home-section">
              <CompanionList
              title="Recently Added Sessions"
              companions={recentSessions}
              classNames="w-2/3 max-lg:w-full"
              />
              <Cta/>
          </section>
      </main>
  )
}

export default Page