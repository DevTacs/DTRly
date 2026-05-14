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

    return (
        <div className="grid grid-cols-2">
            <div className="h-screen overflow-y-auto bg-accent">
                <h2 className="text-xl font-semibold">Select Template</h2>
                <div className="flex flex-row py-5 px-10 gap-6">
                    {templates.map((template) => (
                        <div
                            onClick={() => setSelectedTemplate(template)}
                            className="relative w-56 group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105">
                            <img
                                src={template.image}
                                alt={template.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                                <span className="text-white font-bold text-lg">
                                    {template.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex gap-3">
                    <label htmlFor="dateRange">Date: </label>
                    <input type="date" className="border rounded-lg p-2" />

                    <span className="flex items-center text-gray-500">to</span>

                    <input type="date" className="border rounded-lg p-2" />
                </div>
                <TemplateRender
                    selectedTemplate={selectedTemplate}
                    ranges={ranges}
                />
            </div>
            <div className="print-area">
                <div className="px-20">
                    <PreviewRender
                        selectedTemplate={selectedTemplate}
                        ranges={ranges}
                    />
                </div>

                <button
                    onClick={() => window.print()}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Print / Save as PDF
                </button>
            </div>
        </div>
    )
}
