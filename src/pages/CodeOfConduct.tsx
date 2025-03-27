
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
              Our commitment to creating a welcoming environment for everyone
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-10 opacity-0 animate-fade-in delay-200">
              <h2 className="text-2xl font-display font-semibold mb-4">Purpose</h2>
              <p>
                PaderbornJS is dedicated to providing a harassment-free community for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion or lack thereof. We do not tolerate harassment of community members in any form. Participants violating these rules may be sanctioned or expelled from the community at the discretion of the community organizers.
              </p>
            </section>
            
            <section className="mb-10 opacity-0 animate-fade-in delay-300">
              <h2 className="text-2xl font-display font-semibold mb-4">Expected Behavior</h2>
              <ul>
                <li>Be respectful and inclusive of all community members.</li>
                <li>Listen actively and respect differing viewpoints and experiences.</li>
                <li>Give and gracefully accept constructive feedback.</li>
                <li>Show empathy towards other community members.</li>
                <li>Be mindful of your surroundings and your fellow participants.</li>
              </ul>
            </section>
            
            <section className="mb-10 opacity-0 animate-fade-in delay-400">
              <h2 className="text-2xl font-display font-semibold mb-4">Unacceptable Behavior</h2>
              <p>Unacceptable behaviors include, but are not limited to:</p>
              <ul>
                <li>Harassment, intimidation, or discrimination in any form.</li>
                <li>Verbal, physical, or written abuse.</li>
                <li>Unwelcome sexual attention or advances.</li>
                <li>Deliberate intimidation, stalking, or following.</li>
                <li>Sustained disruption of talks or other events.</li>
                <li>Inappropriate physical contact without consent.</li>
                <li>Unwelcome photography or recording.</li>
                <li>Advocating for or encouraging any of the above behavior.</li>
              </ul>
            </section>
            
            <section className="mb-10 opacity-0 animate-fade-in delay-500">
              <h2 className="text-2xl font-display font-semibold mb-4">Reporting and Enforcement</h2>
              <p>
                If you are being harassed, notice someone else being harassed, or have any other concerns, please contact the organizers immediately. Organizers will investigate and take appropriate action, which may include warning the offender, expulsion from the community, or contacting local law enforcement.
              </p>
              <p className="mt-4">
                To report a violation, please email: <a href="mailto:organizers@paderbornjs.com" className="text-primary hover:underline">organizers@paderbornjs.com</a>
              </p>
            </section>
            
            <section className="opacity-0 animate-fade-in delay-600">
              <h2 className="text-2xl font-display font-semibold mb-4">Scope</h2>
              <p>
                This Code of Conduct applies to all PaderbornJS community spaces, both online and offline, including our GitHub repositories, social media channels, meetups, workshops, conferences, and any other events hosted by PaderbornJS.
              </p>
              <p className="mt-4">
                This Code of Conduct was last updated on June 15, 2024.
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
