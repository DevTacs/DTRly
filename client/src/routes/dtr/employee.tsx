import EmployeeForm from "@/components/employee/form"
import PreviewEmployeeDtr from "@/components/employee/preview"
import InternForm from "@/components/intern/form"
import PreviewInternDtr from "@/components/intern/preview"
import type {EmployeeRow, TemplateType} from "@/types/template-type"
import {createFileRoute, useNavigate} from "@tanstack/react-router"
import {useEffect, useMemo, useState} from "react"

export const Route = createFileRoute("/dtr/employee")({
    component: RouteComponent,
})

function RouteComponent() {
    const navigate = useNavigate()

    const [templates] = useState<TemplateType[]>([
        {
            id: "intern",
            name: "Intern DTR",
            image: "../intern-dtr.png",
        },
        {
            id: "employee",
            name: "Employee DTR",
            image: "../employee-dtr.png",
        },
    ])

    const [selectedTemplate] = useState<TemplateType>(templates[1])

    // 👉 SOURCE OF TRUTH
    const [startingMonth, setStartingMonth] = useState<string>(
        new Date().toISOString().slice(0, 7),
    )

    const [employeeInputs, setEmployeeInputs] = useState<EmployeeRow[]>([])

    // -----------------------------
    // DERIVED: total days in month
    // -----------------------------
    const totalDays = useMemo(() => {
        const date = new Date(startingMonth + "-01")
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }, [startingMonth])

    // -----------------------------
    // DERIVED: day numbers (1–31)
    // -----------------------------

    // -----------------------------
    // INIT / RESET INPUTS PER MONTH
    // -----------------------------
    useEffect(() => {
        const baseDate = new Date(startingMonth + "-01")

        const newInputs: EmployeeRow[] = Array.from(
            {length: totalDays},
            (_, index) => {
                const currentDate = new Date(baseDate)
                currentDate.setDate(baseDate.getDate() + index)

                return {
                    date: currentDate.toISOString().split("T")[0],
                    regularTimeIn: "",
                    regularTimeOut: "",
                    overtimeIn: "",
                    overtimeOut: "",
                    signature: "",
                }
            },
        )

        setEmployeeInputs(newInputs)
    }, [startingMonth, totalDays])

    // -----------------------------
    // SPLIT FOR PRINTING
    // -----------------------------
    const mid = Math.ceil(employeeInputs.length / 2)
    const firstHalf = employeeInputs.slice(0, mid)
    const secondHalf = employeeInputs.slice(mid)

    return (
        <div className="min-h-screen bg-muted/40">
            <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                {/* LEFT PANEL */}
                <aside className="rounded-2xl border bg-card p-6 shadow-sm h-fit">
                    {/* HEADER */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">
                            Select Template
                        </h2>

                        <input
                            type="month"
                            value={startingMonth}
                            onChange={(e) => setStartingMonth(e.target.value)}
                            className="rounded-lg border px-3 py-2 text-sm"
                        />
                    </div>

                    {/* TEMPLATE CARDS */}
                    <div className="flex gap-4">
                        {templates.map((template) => (
                            <div
                                key={template.id}
                                onClick={() =>
                                    navigate({to: `/dtr/${template.id}`})
                                }
                                className={`relative overflow-hidden rounded-xl cursor-pointer border transition-all group ${
                                    selectedTemplate.id === template.id
                                        ? "border-primary ring-2 ring-primary/20"
                                        : "border-border hover:border-primary/50"
                                }`}>
                                <img
                                    src={template.image}
                                    className="h-40 w-full object-cover group-hover:scale-105 transition"
                                />

                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                    <span className="text-white font-semibold">
                                        {template.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FORM */}
                    {employeeInputs.length > 0 && (
                        <div className="mt-8">
                            <EmployeeForm
                                employeeInputs={employeeInputs}
                                setEmployeeInputs={setEmployeeInputs}
                            />
                        </div>
                    )}
                </aside>

                {/* RIGHT PREVIEW */}
                <section className="sticky top-6 h-fit space-y-6">
                    <div className="border bg-white rounded-2xl shadow-sm overflow-hidden print:hidden">
                        <div className="flex justify-between items-center border-b px-6 py-4">
                            <h2 className="text-lg font-semibold">
                                Live Preview
                            </h2>

                            <button
                                onClick={() => window.print()}
                                className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                                Print / Save PDF
                            </button>
                        </div>

                        <div className="p-6 max-h-[85vh] overflow-auto">
                            {employeeInputs.length > 0 && (
                                <PreviewEmployeeDtr
                                    employeeInputs={employeeInputs}
                                />
                            )}
                        </div>
                    </div>
                </section>

                {/* PRINT AREA */}
                {employeeInputs.length > 0 && (
                    <div className="print-area hidden print:block px-10">
                        <PreviewEmployeeDtr employeeInputs={firstHalf} />
                        <div className="page-break" />
                        <PreviewEmployeeDtr employeeInputs={secondHalf} />
                    </div>
                )}
            </main>
        </div>
    )
}
