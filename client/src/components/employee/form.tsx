import type {EmployeeRow} from "@/types/template-type"

type EmployeeFormProps = {
    employeeInputs: EmployeeRow[]
    setEmployeeInputs: React.Dispatch<React.SetStateAction<EmployeeRow[]>>
}

export default function EmployeeForm({
    employeeInputs,
    setEmployeeInputs,
}: EmployeeFormProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Employee DTR</h2>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                    <thead>
                        {/* LEVEL 1 */}
                        <tr>
                            <th
                                rowSpan={2}
                                className="border border-black p-2 text-sm">
                                DATE
                            </th>

                            <th
                                colSpan={2}
                                className="border border-black p-2 text-sm">
                                REGULAR TIME
                            </th>

                            <th
                                colSpan={2}
                                className="border border-black p-2 text-sm">
                                OVERTIME
                            </th>

                            <th
                                rowSpan={2}
                                className="border border-black p-2 text-sm">
                                SIGNATURE
                            </th>
                        </tr>

                        {/* LEVEL 3 */}
                        <tr>
                            <th className="border border-black p-2 text-sm">
                                IN
                            </th>
                            <th className="border border-black p-2 text-sm">
                                OUT
                            </th>

                            <th className="border border-black p-2 text-sm">
                                IN
                            </th>
                            <th className="border border-black p-2 text-sm">
                                OUT
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {employeeInputs.map((input, index) => (
                            <tr key={input.date}>
                                {/* DATE */}
                                <td className="w-[110px] border border-black p-2 text-center text-sm">
                                    {input.date}
                                </td>

                                {/* REGULAR TIME (AM IN/OUT, PM IN/OUT) */}

                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        value={input.regularTimeIn}
                                        onChange={(e) => {
                                            const updated = [...employeeInputs]
                                            updated[index] = {
                                                ...input,
                                                regularTimeIn: e.target.value,
                                            }
                                            setEmployeeInputs(updated)
                                        }}
                                        className="w-full border p-1 rounded"
                                    />
                                </td>
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        value={input.regularTimeOut}
                                        onChange={(e) => {
                                            const updated = [...employeeInputs]
                                            updated[index] = {
                                                ...input,
                                                regularTimeOut: e.target.value,
                                            }
                                            setEmployeeInputs(updated)
                                        }}
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        value={input.overtimeIn}
                                        onChange={(e) => {
                                            const updated = [...employeeInputs]
                                            updated[index] = {
                                                ...input,
                                                overtimeIn: e.target.value,
                                            }
                                            setEmployeeInputs(updated)
                                        }}
                                        className="w-full border p-1 rounded"
                                    />
                                </td>
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        value={input.overtimeOut}
                                        onChange={(e) => {
                                            const updated = [...employeeInputs]
                                            updated[index] = {
                                                ...input,
                                                overtimeOut: e.target.value,
                                            }
                                            setEmployeeInputs(updated)
                                        }}
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* SIGNATURE */}
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="text"
                                        value={input.signature}
                                        onChange={(e) => {
                                            const updated = [...employeeInputs]
                                            updated[index] = {
                                                ...input,
                                                signature: e.target.value,
                                            }
                                            setEmployeeInputs(updated)
                                        }}
                                        className="w-full border p-1 rounded"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
