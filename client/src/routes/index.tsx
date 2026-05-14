import PreviewRender from "@/templates/preview-render"
import TemplateRender from "@/templates/template-render"
import type {TemplateType} from "@/types/template-type"
import {createFileRoute} from "@tanstack/react-router"
import {useState} from "react"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    const [templates] = useState<TemplateType[]>([
        {
            id: "intern",
            name: "Intern DTR",
            image: "./intern-dtr.png",
        },
        {
            id: "employee",
            name: "Employee DTR",
            image: "./employee-dtr.png",
        },
    ])
    const [ranges] = useState<number[]>(Array.from({length: 31}))
    const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(
        templates[0],
    )

    const firstHalf = ranges.slice(0, 15)
    const secondHalf = ranges.slice(15)

    return (
        <div className="min-h-screen bg-muted/40">
            {/* HEADER */}
            {/* <header className="sticky top-0 z-50 h-16 border-b bg-background/90 backdrop-blur">
                <div className="flex h-full items-center justify-between px-6">
                    <h1 className="text-2xl font-bold tracking-tight">
                        DTR
                        <span className="text-primary">ly</span>
                    </h1>

                    <button
                        onClick={() => window.print()}
                        className="rounded-lg bg-primary px-4 py-2 text-primary-foreground shadow hover:opacity-90 transition">
                        Print / Save as PDF
                    </button>
                </div>
            </header> */}

            {/* MAIN */}
            <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                {/* LEFT PANEL */}
                <aside className="rounded-2xl border bg-card p-6 shadow-sm h-fit">
                    <h2 className="text-lg font-semibold mb-5">
                        Select Template
                    </h2>

                    {/* TEMPLATE CARDS */}
                    <div className=" flex flex-row items-center gap-4">
                        {templates.map((template) => (
                            <div
                                key={template.id}
                                onClick={() => setSelectedTemplate(template)}
                                className={`
                                relative overflow-hidden rounded-xl cursor-pointer
                                border transition-all duration-300 group
                                ${
                                    selectedTemplate.id === template.id
                                        ? "border-primary ring-2 ring-primary/20"
                                        : "border-border hover:border-primary/50"
                                }
                            `}>
                                <img
                                    src={template.image}
                                    alt={template.name}
                                    className="h-40 w-full object-cover group-hover:scale-105 transition duration-300"
                                />

                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                    <span className="text-white text-center text-lg font-semibold">
                                        {template.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DATE RANGE */}
                    <div className="mt-8">
                        <h3 className="font-medium mb-3">Date Range</h3>

                        <div className="flex items-center gap-3">
                            <input
                                type="date"
                                className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                            />

                            <span className="text-muted-foreground">to</span>

                            <input
                                type="date"
                                className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>

                    {/* INPUT FORM */}
                    <div className="mt-8">
                        <TemplateRender
                            selectedTemplate={selectedTemplate}
                            ranges={ranges}
                        />
                    </div>
                </aside>

                {/* RIGHT PREVIEW */}
                <section className="space-y-6 sticky top-6 self-start h-fit">
                    {/* SCREEN PREVIEW */}
                    <div className="print:hidden rounded-2xl border bg-white shadow-sm overflow-hidden">
                        <div className="border-b px-6 py-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold">
                                Live Preview
                            </h2>

                            <button
                                onClick={() => window.print()}
                                className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground shadow hover:opacity-90 transition">
                                Print / Save PDF
                            </button>
                        </div>

                        <div className="overflow-auto max-h-[85vh] p-6">
                            <PreviewRender
                                selectedTemplate={selectedTemplate}
                                ranges={ranges}
                            />
                        </div>
                    </div>
                </section>
                {/* PRINT AREA */}
                <div className="hidden print:block print-area">
                    <PreviewRender
                        selectedTemplate={selectedTemplate}
                        ranges={firstHalf}
                    />

                    <div className="page-break"></div>

                    <PreviewRender
                        selectedTemplate={selectedTemplate}
                        ranges={secondHalf}
                    />
                </div>
            </main>
        </div>
    )
}
