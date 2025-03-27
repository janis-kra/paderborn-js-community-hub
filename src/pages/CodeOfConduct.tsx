
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ModeToggle } from '../components/ModeToggle';

const CodeOfConduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-display font-bold mb-6 opacity-0 animate-fade-in">
              Code of Conduct
            </h1>
            <p className="text-lg text-foreground/80 opacity-0 animate-fade-in delay-100">
              The Berlin Code of Conduct
            </p>
            {/* Add theme toggle here since we can't modify Navbar directly */}
            <div className="flex justify-center mt-4">
              <ModeToggle />
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-10 opacity-0 animate-fade-in delay-200">
              <h2 className="text-2xl font-display font-semibold mb-4">Purpose</h2>
              <p>
                A primary goal of all the conferences and user groups that refer to this Code of Conduct is to be inclusive to the largest number of contributors, with the most varied and diverse backgrounds possible. As such, we are committed to providing a friendly, safe and welcoming environment for all, regardless of gender, sexual orientation, ability, ethnicity, socioeconomic status and religion (or lack thereof).
              </p>
              <p className="mt-4">
                This Code of Conduct outlines our expectations for all those who participate in our community, as well as the consequences for unacceptable behavior.
              </p>
              <p className="mt-4">
                We invite all those who participate in our events to help us create safe and positive experiences for everyone.
              </p>
            </section>
            
            <section className="mb-10 opacity-0 animate-fade-in delay-300">
              <h2 className="text-2xl font-display font-semibold mb-4">Open [Source/Culture/Tech] Citizenship</h2>
              <p>
                A supplemental goal of this Code of Conduct is to increase open [source/culture/tech] citizenship by encouraging participants to recognize and strengthen the relationships between our actions and their effects on our community.
              </p>
              <p className="mt-4">
                Communities mirror the societies in which they exist and positive action is essential to counteract the many forms of inequality and abuses of power that exist in society.
              </p>
              <p className="mt-4">
                If you see someone who is making an extra effort to ensure our community is welcoming, friendly, and encourages all participants to contribute to the fullest extent, we want to know.
              </p>
            </section>
            
            <section className="mb-10 opacity-0 animate-fade-in delay-400">
              <h2 className="text-2xl font-display font-semibold mb-4">Expected Behavior</h2>
              <ul>
                <li>Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.</li>
                <li>Exercise consideration and respect in your speech and actions.</li>
                <li>Attempt collaboration before conflict.</li>
                <li>Refrain from demeaning, discriminatory, or harassing behavior and speech.</li>
                <li>Be mindful of your surroundings and of your fellow participants. Alert community leaders if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem inconsequential.</li>
              </ul>
            </section>
            
            <section className="mb-10 opacity-0 animate-fade-in delay-500">
              <h2 className="text-2xl font-display font-semibold mb-4">Unacceptable Behavior</h2>
              <p>Unacceptable behaviors include, but are not limited to:</p>
              <ul>
                <li>Intimidating, harassing, abusive, discriminatory, derogatory or demeaning speech or actions by any participant in our community online, at all related events and in one-on-one communications carried out in the context of community business.</li>
                <li>Harmful or prejudicial verbal or written comments related to gender, sexual orientation, race, religion, disability or other personal characteristics.</li>
                <li>Inappropriate use of nudity and/or sexual images.</li>
                <li>Inappropriate depictions of violence.</li>
                <li>Deliberate intimidation, stalking or following.</li>
                <li>Harassing photography or recording.</li>
                <li>Sustained disruption of talks or other events.</li>
                <li>Unwelcome sexual attention.</li>
                <li>Physical contact and simulated physical contact without consent or after a request to stop.</li>
                <li>Threats of violence.</li>
                <li>Incitement of violence towards any individual, including encouraging a person to commit suicide or to engage in self-harm.</li>
                <li>Deliberate misgendering or use of rejected names.</li>
                <li>Advocating for, or encouraging, any of the above behavior.</li>
              </ul>
            </section>
            
            <section className="mb-10 opacity-0 animate-fade-in delay-600">
              <h2 className="text-2xl font-display font-semibold mb-4">Consequences of Unacceptable Behavior</h2>
              <p>
                Unacceptable behavior from any community member, including sponsors and those with decision-making authority, will not be tolerated.
              </p>
              <p className="mt-4">
                Anyone asked to stop unacceptable behavior is expected to comply immediately.
              </p>
              <p className="mt-4">
                If a community member engages in unacceptable behavior, the community organizers may take any action they deem appropriate, up to and including a temporary ban or permanent expulsion from the community without warning (and without refund in the case of a paid event).
              </p>
            </section>
            
            <section className="opacity-0 animate-fade-in delay-700">
              <h2 className="text-2xl font-display font-semibold mb-4">Reporting Guidelines</h2>
              <p>
                If you are subject to or witness unacceptable behavior, or have any other concerns, please notify a community organizer as soon as possible: <a href="mailto:organizers@paderbornjs.com" className="text-primary hover:underline">organizers@paderbornjs.com</a>
              </p>
              <p className="mt-4">
                Additionally, community organizers are available to help community members engage with local law enforcement or to otherwise help those experiencing unacceptable behavior feel safe. In the context of in-person events, organizers will also provide escorts as desired by the person experiencing distress.
              </p>
              <p className="mt-8 text-sm text-foreground/70">
                This Code of Conduct is based on the <a href="https://berlincodeofconduct.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Berlin Code of Conduct</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodeOfConduct;
