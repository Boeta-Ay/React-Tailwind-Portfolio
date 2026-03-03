import { Code2, Lightbulb,Rocket, Users } from "lucide-react";


const highlights = [

    {
        icon: Code2,
        title: "Clean Code:",
        description: 
            "Focusing on clean, well-structured code that is easy to maintain.",
    },

    {
        icon: Rocket,
        title: "Performance:",
        description: 
        "Optimizing for speed and delivery.",
        
    },

    {
        icon: Lightbulb,
        title: "Innovation:",
        description: "Staying ahead with the latest technologies and best practices.",
    },

    {
        icon: Users,
        title: "Collaboration:",
        description: "Working closely with teams to bring ideas to life.",
    },
];


export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/*Left column*/}
            <div className="space-y-8">
                <div className="animate-fade-in text-center">
                    <span className="text-secondary-foreground text-lg font-medium tracking-wider uppercase">
                        About Me:
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-100 text-primary glow-text">
                    Building Scalable Solutions,
                    <span className="font-serif italic font-normal text-white">
                        {" "}one line at a time.
                    </span>
                </h2>

                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I’m a passionate full-stack developer with a Diploma in
                        Information Technology. My journey into software development
                        began during my university career, where curiosity
                        quickly turned into a genuine interest in building systems,
                        solving problems, and understanding how individual components
                        come together to create meaningful applications. Since then,
                        I’ve focused on developing practical, real-world solutions that
                        strengthen both my technical skills and my approach to structured,
                        scalable software development.
                    </p>

                    <p>
                        I specialize in full-stack development using C#, ASP.NET Core,
                        Entity Framework, and React, with a strong focus on building structured
                        backend systems supported by clean, responsive user interfaces. My work
                        involves designing scalable application logic, working with relational databases,
                        and developing solutions that reflect real-world business requirements while
                        maintaining clean and maintainable code practices.
                    </p>
                </div>
            </div>

            {/* Right Column Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div
                        key={idx}
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center mb-4 justify-center hover:bg-primary/25">
                            <item.icon className="w-6 h-6 text-primary" />
                        </div>

                        <h3 className="text-lg font-semibold">
                            {item.title}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    </div>
</section>
    );
}