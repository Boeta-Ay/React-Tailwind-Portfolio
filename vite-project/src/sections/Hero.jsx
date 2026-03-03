import Spline from '@splinetool/react-spline';
import { Button } from "@/components/Button"
import { ArrowRight, Github, Linkedin, Twitter} from "lucide-react";
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';


const skillsback = [
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "REST API Design",
    "Visual Studio",
    "Visual Studio Code",
    "Git/GitHub",
    "React",
    "Tailwind CSS",
    "JavaScript",
]

// const skillsfront = [
//     "React",
//     "JavaScript",
//     "HTML5",
//     "Tailwind CSS",
// ]


export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        { /*bg */}
        <div className="fixed  inset-0 -z-10">
            {/*<img src="/Hero-bg1.jpg" atl="hero image" className="w-full h-full object-cover opacity-40"/>*/}
            <div className="absolute inset-0 bg-gradient-b from-background/20 via-background/80 to-background"/>
           
            {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js"></script> */}
            <Spline scene="https://prod.spline.design/AOE0CafAjdVj4cNv/scene.splinecode"
                className="w-full h-full"
            />
          
        </div>

        {/*green dots*/}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none"> 
            {[...Array(30)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}

                <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.60/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/X00BbXUuR0Ugae9V/scene.splinecode"></spline-viewer>

                />
            ))}
        </div> */}

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className=" w-2 h-2 bg-primary rounded-full animate-pulse"/> 
                                Software Engineer • Full Stack Developer
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-5">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span>
                            <br/>
                            experiences with
                            <br/>
                            <span className="font-serif italic font-normal text-white"> precision.</span>
                        </h1>
                        
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                            Hi, I'm Ayden - a full-stack developer building
                            scalable web applications with modern frontends, robust backends, 
                            and solutions designed for real users.
                        </p>

                    </div> 

                    {/* CTA */}
                    <div className=" flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                       
                        <Button size="lg"> 
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton /> 
                        
                    </div>
                    
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">

                        {/* Social Links */}
                        <span className="text-sm text-muted-foreground">Follow Me: </span>
                        {[
                            {icon: Github, href: "#"},
                            {icon: Linkedin, href: "#"},
                            {icon: Twitter, href: "#"},
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transistion-all duration-300">
                                {<social.icon className="w-5 h-5"/>}</a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* profile image */}
                    <div className="relative max-w-md mx-auto">

                        <div
                            className="absolute inset-0
                            rounded-3xl bg-gradient-to-b
                            from-primary/30 via-transparent
                            to-primary/10 blur-2xl animate-pulse"
                        />

                        <div className="relative glass rounded-3xl p2">
                            <img src="/Headshot.png" 
                            alt="Ayden Gallant" 
                            className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />

                            {/* floating badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Avaible for work</span>
                                </div>
                            </div>
                            {/* stats badge */}
                            {/* <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500"/>
                                <div className="text-2xl font-bold text-primary">Full<div/>
                                <div className="text-xs text-muted-foreground">-stack developer</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600"> 
                <p className="text-lg text-secondary-foreground glow-text mb-6 text-center">Technologies I work with</p>
                <div className=" relative overflow-hidden">
                    <div className="flex animate-marquee w-max whitespace-nowrap">
                        {[...skillsback, ...skillsback].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

