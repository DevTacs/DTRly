import {useMemo, useState} from "react"

/** 1. Template Keys */
type TemplateKey = "government" | "company" | "ojt"

/** 2. Template Structure */
type TemplateType = {
    name: string
    columns: string[]
}

/** 3. Templates */
const templates: Record<TemplateKey, TemplateType> = {
    government: {
        name: "Government Monthly DTR",
        columns: [
            "Date",
            "AM Arrival",
            "AM Departure",
            "PM Arrival",
            "PM Departure",
            "Undertime",
        ],
    },

    company: {
        name: "Simple Company DTR",
        columns: ["Date", "Time In", "Lunch Out", "Lunch In", "Time Out"],
    },

    ojt: {
        name: "OJT Monthly DTR",
        columns: [
            "Date",
            "Time In",
            "Time Out",
            "Hours Rendered",
            "Supervisor Initial",
        ],
    },
}

/** 4. Row Type */
type RowType = Record<string, string | number>

/** 5. Create Rows */
const createEmptyRows = (columns: string[]): RowType[] => {
    return Array.from({length: 15}, (_, index) => {
        const row: RowType = {}

        columns.forEach((column) => {
            row[column] = ""
        })

        row["Date"] = index + 1

        return row
    })
}

export default function MonthlyDTR() {
    /** 6. Selected Template */
    const [selectedTemplate, setSelectedTemplate] =
        useState<TemplateKey>("company")

    /** 7. Current Template */
    const template = useMemo(() => {
        return templates[selectedTemplate]
    }, [selectedTemplate])

    /** 8. Rows */
    const [rows, setRows] = useState<RowType[]>(() =>
        createEmptyRows(templates.government.columns),
    )

    /** 9. Change Template */
    const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as TemplateKey

        setSelectedTemplate(value)
        setRows(createEmptyRows(templates[value].columns))
    }

    /** 10. Update Cell */
    const handleChange = (rowIndex: number, column: string, value: string) => {
        const updatedRows = [...rows]

        updatedRows[rowIndex] = {
            ...updatedRows[rowIndex],
            [column]: value,
        }

        setRows(updatedRows)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* LEFT SIDE */}
                {/* <div className="bg-white rounded-2xl shadow p-6">
                    <h1 className="text-2xl font-bold mb-6">
                        Monthly DTR Maker
                    </h1>

                    <div className="mb-6">
                        <label className="block mb-2 font-semibold">
                            Select Template
                        </label>

                        <select
                            value={selectedTemplate}
                            onChange={handleTemplateChange}
                            className="w-full border p-3 rounded-lg">
                            <option value="government">
                                Government Monthly DTR
                            </option>
                            <option value="company">Simple Company DTR</option>
                            <option value="ojt">OJT Monthly DTR</option>
                        </select>
                    </div>

                    <div className="overflow-auto max-h-[700px] border rounded-lg">
                        <table className="w-full border-collapse">
                            <thead className="sticky top-0 bg-gray-200">
                                <tr>
                                    {template.columns.map((column) => (
                                        <th
                                            key={column}
                                            className="border p-2 text-sm">
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {template.columns.map((column) => (
                                            <td key={column} className="border">
                                                {column === "Date" ? (
                                                    <div className="p-2 text-center">
                                                        {row[column]}
                                                    </div>
                                                ) : (
                                                    <input
                                                        type="text"
                                                        value={
                                                            row[
                                                                column
                                                            ] as string
                                                        }
                                                        onChange={(e) =>
                                                            handleChange(
                                                                rowIndex,
                                                                column,
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="w-full p-2 outline-none"
                                                    />
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div> */}

                {/* RIGHT SIDE */}
                <div className="bg-white shadow p-6 overflow-auto w-[550px]">
                    <h1 className="text-3xl font-bold text-center mb-8">
                        Daily Time Record
                    </h1>

                    <div className="text-sm pb-4">
                        <div className="flex flex-row justify-between">
                            <h4>Name: John Doe</h4>
                            <h4>Position: Software Engineer</h4>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h4>Department: DevOps</h4>
                            <h4>Period Covered: AUGUST</h4>
                        </div>
                    </div>

                    <table className="w-full border-collapse">
                        <thead>
                            {/* LEVEL 1 */}
                            <tr>
                                <th
                                    rowSpan={3}
                                    className="border border-black p-2 text-sm">
                                    DATE
                                </th>

                                <th
                                    colSpan={4}
                                    className="border border-black p-2 text-sm">
                                    REGULAR TIME
                                </th>

                                <th
                                    colSpan={4}
                                    className="border border-black p-2 text-sm">
                                    OVERTIME
                                </th>

                                <th
                                    rowSpan={3}
                                    className="border border-black p-2 text-sm">
                                    SIGNATURE
                                </th>
                            </tr>

                            {/* LEVEL 2 */}
                            <tr>
                                {/* REGULAR */}
                                <th
                                    colSpan={2}
                                    className="border border-black p-2 text-sm">
                                    AM
                                </th>
                                <th
                                    colSpan={2}
                                    className="border border-black p-2 text-sm">
                                    PM
                                </th>

                                {/* OVERTIME */}
                                <th
                                    colSpan={2}
                                    className="border border-black p-2 text-sm">
                                    AM
                                </th>
                                <th
                                    colSpan={2}
                                    className="border border-black p-2 text-sm">
                                    PM
                                </th>
                            </tr>

                            {/* LEVEL 3 */}
                            <tr>
                                {/* REGULAR AM */}
                                <th className="border border-black p-2 text-sm">
                                    IN
                                </th>
                                <th className="border border-black p-2 text-sm">
                                    OUT
                                </th>

                                {/* REGULAR PM */}
                                <th className="border border-black p-2 text-sm">
                                    IN
                                </th>
                                <th className="border border-black p-2 text-sm">
                                    OUT
                                </th>

                                {/* OVERTIME AM */}
                                <th className="border border-black p-2 text-sm">
                                    IN
                                </th>
                                <th className="border border-black p-2 text-sm">
                                    OUT
                                </th>

                                {/* OVERTIME PM */}
                                <th className="border border-black p-2 text-sm">
                                    IN
                                </th>
                                <th className="border border-black p-2 text-sm">
                                    OUT
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {Array.from({length: 10}).map((_, i) => (
                                <tr key={i}>
                                    {/* DATE */}
                                    <td className="border border-black p-2 text-center text-sm">
                                        {i + 1}
                                    </td>

                                    {/* REGULAR TIME (AM IN/OUT, PM IN/OUT) */}
                                    <td className="border border-black p-2 text-sm"></td>
                                    <td className="border border-black p-2 text-sm"></td>

                                    <td className="border border-black p-2 text-sm"></td>
                                    <td className="border border-black p-2 text-sm"></td>

                                    {/* OVERTIME (AM IN/OUT, PM IN/OUT) */}
                                    <td className="border border-black p-2 text-sm"></td>
                                    <td className="border border-black p-2 text-sm"></td>

                                    <td className="border border-black p-2 text-sm"></td>
                                    <td className="border border-black p-2 text-sm"></td>

                                    {/* SIGNATURE */}
                                    <td className="border border-black p-2 text-sm"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-16 flex justify-between">
                        <div className="text-center">
                            <div className="border-t border-black w-48 mx-auto mb-2"></div>
                            <p>Employee Signature</p>
                        </div>

                        <div className="text-center">
                            <div className="border-t border-black w-48 mx-auto mb-2"></div>
                            <p>Supervisor Signature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
