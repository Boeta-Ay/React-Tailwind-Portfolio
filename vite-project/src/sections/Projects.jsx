


const projects = [
    {
        title: "Hospital Management System",
        description: "Developed a full-featured Hospital Management System using the Model–View–Controller (MVC) architectural pattern to streamline hospital operations and improve data management efficiency. The system centralizes core healthcare administrative processes, enabling structured management of patients, doctors, appointments, and medical records through a scalable and maintainable application design.The application separates business logic, user interface, and data access layers using MVC principles, ensuring clean code organization, maintainability, and extensibility."
    },

    {
        title: "Learning Management System",
        description: 
        "Developed a full-stack Learning Management System (LMS) designed to manage academic structures, users, and course delivery within an educational environment. The system enables administrators, lecturers, and students to interact through a structured platform that supports course management, module organization, and academic task tracking.The application follows a modern client–server architecture, with a React frontend and an ASP.NET Core Web API backend, implementing clean architectural principles and scalable database design."


    },

];


export const Projects = () => {
    return (
    <section id= "projects" className="py-25 relative ">
        <div className="container mx-auto px-6 relative z-10">

            <div className="space-y-8">
                <div className="animate-fade-in text-center">
                    <span className="text-secondary-foreground glow-text text-lg font-medium tracking-wider uppercase ">
                        Projects
                    </span>
                </div>
            



        <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((item, idx) => (
                <div 
                    key={idx}
                    className="glass p-6 rounded-2xl animate-fade-in border-primary/60"
                    style={{ animationDelay: `${(idx +1) *100}ms` }}
                >
                    <h3 className="text-lg font-semibold text-primary text-center">
                        {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        {item.description}
                    </p>
                

                </div>
            
            ))};
            <div>
                
            </div>
        </div>
        </div>
    </div>

    </section>
    );
}
