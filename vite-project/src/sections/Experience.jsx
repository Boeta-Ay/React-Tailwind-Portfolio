import '@/index.css';


export const Experience = () => {
    return (
    <section id="experience" className="py-25 relative">

        <div className="container mx-auto px-6 relative z-10">
            <div className="space-y-8">
                <div className="animate-fade-in text-center">
                    <span className="text-secondary-foreground glow-text text-lg font-medium tracking-wider uppercase">
                        Experience
                    </span>
                </div>

                
                    <div className="space-y-8 border-primary/60 glass rounded-2xl p-6 animate-fade-in animation-delay-300">
                    <p className="font-medium text-muted-foreground">
                        I am an early-career full-stack developer with practical experience gained through building real projects rather than commercial employment. 
                        So far, I have developed two complete systems as well as my personal portfolio website, where I applied modern development practices and 
                        strengthened my skills in both frontend and backend development. These projects helped me understand the full software development process, 
                        including planning, designing, building, testing, and improving applications.</p>
                     <p className="font-medium text-muted-foreground">   
                        I am currently working on an enterprise-style Property Management System to further expand my knowledge and gain deeper experience with 
                        scalable application design and real-world problem solving. Each project I build is an opportunity for me to learn something new and improve
                        my technical abilities.
                    </p>
                    <p className="font-medium text-muted-foreground">
                        While I am still growing professionally, I am highly motivated, eager to learn, and open to feedback. I am actively looking for opportunities 
                        where I can gain industry experience, contribute to meaningful projects, and continue developing into a well-rounded software developer.
                    </p>
                    </div>
            
            </div>

        </div>

    </section>
    );
}