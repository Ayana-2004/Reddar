import "./Faircode.css";
import faircodelogo from "../assets/Faircode.png";

const contributions = [
  {
    number: "01",
    title: "Wayanad Disaster Relief",
    desc: "Deployed an ERP system to coordinate relief operations during the Wayanad disaster — managing resources, volunteers, and logistics in real time.",
    tag: "Crisis Response",
  },
  {
    number: "02",
    title: "Government Digital Initiatives",
    desc: "Partnered with government bodies to build digital tools that improve public service delivery and administrative efficiency across Kerala.",
    tag: "Public Sector",
  },
  {
    number: "03",
    title: "Community Welfare Projects",
    desc: "Technology projects built for communities — from education platforms to healthcare support systems that reach people who need them most.",
    tag: "Community",
  },
  {
    number: "04",
    title: "Open Source Contributions",
    desc: "Sharing tools and libraries with the global developer community so better products can be built for society, faster.",
    tag: "Open Source",
  },
];

export default function Faircode() {
  return (
    <section className="fc" style={{ position: 'relative' }}>
  <span id="about" style={{ position: 'absolute', top: '-80px' }} />
  <span id="faircode" style={{ position: 'absolute', top: '-80px' }} />
      <div className="fc-band">
        <div className="fc-band-inner">
          <div className="fc-band-left">
            <span className="fc-powered">Powered by</span>
            <img src={faircodelogo} alt="Faircode Infotech" className="fc-logo" />
          </div>
          <div className="fc-band-right">
            <p className="fc-band-quote">
              "Technology should solve real problems<br />
              and contribute meaningfully to society."
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="fc-inner">

        {/* Statement */}
        <div className="fc-statement">
          <div className="fc-statement-left">
            <span className="fc-label">Social Responsibility</span>
            <h2 className="fc-title">
              Not just a product.<br />
              <span className="fc-title-accent">A responsibility.</span>
            </h2>
          </div>
          <div className="fc-statement-right">
            <p className="fc-statement-text">
              REDDAR is a social impact initiative by Faircode Infotech Pvt. Ltd.
              We built REDDAR because we believe a single piece of technology,
              in the right hands, at the right moment, can save a life.
            </p>
            <p className="fc-statement-text">
              No life should be lost due to the unavailability of blood.
              That belief drives everything we build.
            </p>
          </div>
        </div>

        {/* Vision + Mission */}
        <div className="fc-vm">
          <div className="fc-vm-card fc-vm-vision">
            <span className="fc-vm-tag">Vision</span>
            <h3 className="fc-vm-title">
              Every eligible donor, findable.<br />Every second, counted.
            </h3>
            <p className="fc-vm-desc">
              To build the most trusted and responsive blood donor network
              where no one in need is ever left without help.
            </p>
          </div>
          <div className="fc-vm-card fc-vm-mission">
            <span className="fc-vm-tag">Mission</span>
            <h3 className="fc-vm-title">
              Make blood donation a<br />real-time lifesaving act.
            </h3>
            <p className="fc-vm-desc">
              To leverage technology and community participation to make
              blood donation faster, easier, and more accessible for everyone.
            </p>
          </div>
        </div>

        {/* Contributions */}
        <div className="fc-contributions">
          <div className="fc-contributions-header">
            <span className="fc-label">Beyond REDDAR</span>
            <h3 className="fc-contributions-title">
              Our commitment to society runs deeper.
            </h3>
          </div>
          <div className="fc-contrib-list">
            {contributions.map((c) => (
              <div className="fc-contrib-item" key={c.number}>
                <div className="fc-contrib-meta">
                  <span className="fc-contrib-num">{c.number}</span>
                  <span className="fc-contrib-tag">{c.tag}</span>
                </div>
                <div className="fc-contrib-body">
                  <h4 className="fc-contrib-title">{c.title}</h4>
                  <p className="fc-contrib-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}