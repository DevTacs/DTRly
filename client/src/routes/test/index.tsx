import {createFileRoute} from "@tanstack/react-router"

export const Route = createFileRoute("/test/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <h2 className="text-xl font-semibold">Select Template</h2>

            <div className="flex flex-row py-5 px-10 gap-6">
                {/* INTERN DTR */}
                <div
                    onClick={() => console.log("Intern DTR selected")}
                    className="relative w-56 group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105">
                    <img
                        src="./intern-dtr.png"
                        alt="Intern DTR"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                        <span className="text-white font-bold text-lg">
                            INTERN DTR
                        </span>
                    </div>
                </div>

                {/* EMPLOYEE DTR */}
                <div
                    onClick={() => console.log("Employee DTR selected")}
                    className="relative w-56 group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105">
                    <img
                        src="./employee-dtr.png"
                        alt="Employee DTR"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                        <span className="text-white font-bold text-lg">
                            EMPLOYEE DTR
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
