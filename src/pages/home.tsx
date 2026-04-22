import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Mail, MapPin, Phone, Printer, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-printing.png";
import medBoxesImg from "@/assets/images/medicine-boxes.png";
import calendarsImg from "@/assets/images/calendars.png";
import craftImg from "@/assets/images/craftsmanship.png";

import sample01 from "@/assets/samples/IMG_7530_1776813614955.jpg";
import sample02 from "@/assets/samples/IMG_7532_1776813614962.jpg";
import sample03 from "@/assets/samples/IMG_7533_1776813614962.jpg";
import sample04 from "@/assets/samples/IMG_7535_1776813614962.jpg";
import sample05 from "@/assets/samples/IMG_7542_1776813614963.jpg";
import sample06 from "@/assets/samples/IMG_7543_1776813614963.jpg";
import sample07 from "@/assets/samples/IMG_7545_1776813614963.jpg";
import sample08 from "@/assets/samples/IMG_7546_1776813614964.jpg";
import sample09 from "@/assets/samples/IMG_7547_1776813614964.jpg";
import sample10 from "@/assets/samples/IMG_7548_1776813614965.jpg";
import sample11 from "@/assets/samples/IMG_7550_1776813614965.jpg";
import sample12 from "@/assets/samples/IMG_7552_1776813614965.jpg";

const workSamples = [
  sample01, sample02, sample03, sample04, sample05, sample06,
  sample07, sample08, sample09, sample10, sample11, sample12,
];

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
              <Printer className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">Partap Printing Press</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Specializations</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#process" className="hover:text-primary transition-colors">Craftsmanship</a>
            <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-foreground text-background">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div style={{ y }} className="w-full h-full">
              <img 
                src={heroImg} 
                alt="Traditional letterpress printing machine" 
                className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-3xl"
            >
              <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-secondary"></div>
                <span className="text-secondary font-semibold tracking-widest uppercase text-sm">Amritsar, Punjab</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-serif text-background leading-[1.1] mb-8">
                Generations of <span className="text-secondary italic">masterful</span> printing craftsmanship.
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-background/80 mb-12 max-w-2xl font-sans font-light leading-relaxed">
                From precision pharmaceutical packaging to premium corporate stationery, we bring your vision to life with uncompromising quality and rich, lasting impressions.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="rounded-none text-base h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md" asChild>
                  <a href="#contact">
                    Request an Estimate <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-none text-base h-14 px-8 border-background/20 text-background hover:bg-background/10" asChild>
                  <a href="#services">
                    Explore Our Work
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. About / Trust Section */}
        <section id="about" className="py-24 bg-card border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
              >
                <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Our Legacy</h2>
                <h3 className="text-4xl font-serif mb-6 text-foreground">Trusted by industries that demand perfection.</h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                  Partap Printing Press is a cornerstone of Amritsar's printing industry. For decades, we have served a diverse clientele—from pharmaceutical companies requiring strict compliance in their packaging, to families wanting the perfect invitation for their most important life events.
                </p>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  As a GST-verified manufacturer and supplier, our foundation is built on reliability, state-of-the-art technology, and an artisan's eye for detail.
                </p>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-background p-8 border border-border shadow-sm flex flex-col justify-center items-center text-center aspect-square">
                  <span className="text-4xl font-serif text-primary mb-2">10k+</span>
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects Completed</span>
                </div>
                <div className="bg-background p-8 border border-border shadow-sm flex flex-col justify-center items-center text-center aspect-square translate-y-8">
                  <span className="text-4xl font-serif text-primary mb-2">100%</span>
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Quality Assured</span>
                </div>
                <div className="bg-background p-8 border border-border shadow-sm flex flex-col justify-center items-center text-center aspect-square">
                  <span className="text-4xl font-serif text-primary mb-2">Decades</span>
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Of Experience</span>
                </div>
                <div className="bg-primary p-8 border border-primary shadow-sm flex flex-col justify-center items-center text-center aspect-square translate-y-8">
                  <CheckCircle2 className="w-12 h-12 text-primary-foreground mb-4" />
                  <span className="text-sm text-primary-foreground font-medium uppercase tracking-wider">GST Verified</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section id="services" className="py-24 md:py-32 bg-background relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Our Specializations</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Precision across every medium.</h3>
              </div>
              <Button variant="outline" className="rounded-none border-border shrink-0" asChild>
                <a href="#portfolio">View Full Portfolio</a>
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Pharmaceutical Packaging",
                  desc: "Precision medicine boxes, strip packaging, and medical device cartons manufactured to strict industry standards with accurate batch coding.",
                  img: medBoxesImg,
                  features: ["Medicine Boxes", "Strip Packaging", "Medical Device Cartons"]
                },
                {
                  title: "Corporate Identity",
                  desc: "Professional business stationery, premium calendars, and promotional materials that elevate your brand's physical presence.",
                  img: calendarsImg,
                  features: ["Calendars", "Brochures", "Business Cards"]
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.2 } }
                  }}
                  className="group block border border-border/50 bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-8 bg-muted relative border border-border">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 font-light line-clamp-3">{service.desc}</p>
                  <div className="space-y-3 pt-6 border-t border-border/50">
                    {service.features.map((feat, j) => (
                      <div key={j} className="flex items-center text-sm font-medium text-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Craftsmanship / Process Section */}
        <section id="process" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
              >
                <div className="h-px w-12 bg-secondary mb-6"></div>
                <h2 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">The Art of the Press</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-8 text-background">We don't just print.<br/>We craft.</h3>
                <p className="text-background/70 text-lg mb-10 font-light leading-relaxed">
                  Printing is a meticulous craft that requires an intimate understanding of materials, color science, and machinery. At Partap Printing Press, we approach every job with reverence for quality.
                </p>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-none border border-secondary flex items-center justify-center text-secondary font-serif text-xl">1</div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">Uncompromising Precision</h4>
                      <p className="text-background/60 font-light text-base leading-relaxed">Strict quality control ensures exact color matching and crisp typography across every single print run.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-none border border-secondary flex items-center justify-center text-secondary font-serif text-xl">2</div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">Premium Materials</h4>
                      <p className="text-background/60 font-light text-base leading-relaxed">From thick textured cardstocks to specialized pharmaceutical boards, we source only the finest substrates.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-none border border-secondary flex items-center justify-center text-secondary font-serif text-xl">3</div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">Advanced Machinery</h4>
                      <p className="text-background/60 font-light text-base leading-relaxed">Our facility houses modern offset and digital presses capable of handling high-volume commercial demands.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                }}
                className="relative"
              >
                <div className="aspect-[4/5] relative">
                  <img 
                    src={craftImg} 
                    alt="Printing craftsmanship" 
                    className="w-full h-full object-cover shadow-2xl grayscale-[20%]"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-primary p-10 text-primary-foreground max-w-[320px] shadow-xl border border-primary-foreground/10">
                    <Quote className="w-8 h-8 text-primary-foreground/30 mb-4" />
                    <p className="font-serif text-2xl mb-4 leading-snug">"Quality is not an act, it is a habit."</p>
                    <p className="text-sm text-primary-foreground/80 font-medium tracking-wide uppercase">— Our Commitment</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Extended Portfolio / Gallery */}
        <section id="portfolio" className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Our Work Samples</h2>
              <h3 className="text-4xl font-serif mb-6 text-foreground">Real work from our press floor.</h3>
              <p className="text-muted-foreground font-light">A selection of recent jobs printed, finished, and shipped from our Amritsar workshop.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {workSamples.map((img, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: (i % 4) * 0.08 } }
                  }}
                  className="group relative aspect-square overflow-hidden bg-muted"
                  data-testid={`img-sample-${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`Partap Printing Press work sample ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 group-hover:ring-primary/40 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Testimonial/Client Type Strip */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP}
            >
              <h3 className="text-2xl md:text-3xl font-serif mb-12 font-light">Delivering excellence across industries</h3>
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-80">
                <div className="text-lg font-medium tracking-widest uppercase">Pharmaceuticals</div>
                <div className="text-lg font-medium tracking-widest uppercase">Event Planners</div>
                <div className="text-lg font-medium tracking-widest uppercase">Corporate</div>
                <div className="text-lg font-medium tracking-widest uppercase">Retail</div>
                <div className="text-lg font-medium tracking-widest uppercase">Agencies</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
                className="flex flex-col justify-center"
              >
                <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Contact Us</h2>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Let's Create Something Beautiful</h3>
                <p className="text-muted-foreground text-lg mb-12 font-light">Whether you need commercial packaging for your pharmaceutical products or elegant stationery for a personal event, we are ready to bring your project to life.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-primary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-serif text-xl text-foreground mb-2">Visit Our Press</p>
                      <p className="text-muted-foreground font-light leading-relaxed">Partap Printing Press<br/>Amritsar, Punjab<br/>India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                      <Phone className="w-6 h-6 text-primary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-serif text-xl text-foreground mb-2">Call Us</p>
                      <p className="text-muted-foreground font-light">+91 (Amritsar Phone)</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                      <Mail className="w-6 h-6 text-primary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-serif text-xl text-foreground mb-2">Email</p>
                      <p className="text-muted-foreground font-light">info@partapprinting.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP}
                className="bg-card p-10 border border-border shadow-lg relative"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                <h3 className="text-3xl font-serif mb-8 text-foreground">Request a Quote</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">First Name</label>
                      <input type="text" className="w-full h-12 bg-background border border-border px-4 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Last Name</label>
                      <input type="text" className="w-full h-12 bg-background border border-border px-4 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <input type="email" className="w-full h-12 bg-background border border-border px-4 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <input type="tel" className="w-full h-12 bg-background border border-border px-4 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Interested In</label>
                    <select className="w-full h-12 bg-background border border-border px-4 focus:outline-none focus:border-primary transition-colors">
                      <option>Pharmaceutical Packaging</option>
                      <option>Corporate Stationery</option>
                      <option>Calendars & Brochures</option>
                      <option>Other Commercial Printing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Project Details</label>
                    <textarea rows={4} className="w-full bg-background border border-border p-4 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Quantity, paper type, timeline..."></textarea>
                  </div>
                  <Button className="w-full h-14 rounded-none bg-primary text-primary-foreground text-lg hover:bg-primary/90 mt-4 shadow-md">
                    Send Inquiry
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="py-24 bg-secondary text-secondary-foreground text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to start your print project?</h2>
            <p className="text-xl mb-10 opacity-90 font-light">Join the hundreds of businesses that trust Partap Printing Press with their most critical printing needs.</p>
            <Button size="lg" className="rounded-none h-16 px-12 bg-foreground text-background hover:bg-foreground/90 text-lg shadow-xl" asChild>
              <a href="#contact">Contact Us Today</a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background/80 py-16 border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-background/10 pb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Printer className="w-8 h-8 text-secondary" />
                <span className="font-serif text-2xl font-bold text-background">Partap Printing Press</span>
              </div>
              <p className="text-background/60 font-light leading-relaxed max-w-sm">
                A legacy of premium printing services in Amritsar, India. From commercial pharmaceutical packaging to corporate stationery and calendars.
              </p>
            </div>
            
            <div>
              <h4 className="text-background font-serif text-xl mb-6">Quick Links</h4>
              <ul className="space-y-3 font-light text-background/70">
                <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-secondary transition-colors">Our Services</a></li>
                <li><a href="#portfolio" className="hover:text-secondary transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-background font-serif text-xl mb-6">Services</h4>
              <ul className="space-y-3 font-light text-background/70">
                <li>Medicine Boxes</li>
                <li>Business Stationery</li>
                <li>Calendars & Catalogs</li>
                <li>Brochures & Pamphlets</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-light text-background/50">
              &copy; {new Date().getFullYear()} Partap Printing Press. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm font-light text-background/50">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span>GST Verified Business</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
