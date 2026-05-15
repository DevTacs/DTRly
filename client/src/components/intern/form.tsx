import type {InternRow} from "@/types/template-type"

type InternFormProps = {
    ranges: number[]
    internInputs: InternRow[]
    setInternInputs: React.Dispatch<React.SetStateAction<InternRow[]>>
}

function calculateHours(timeIn: string, timeOut: string): string {
    if (!timeIn || !timeOut) return ""

    const [inH, inM] = timeIn.split(":").map(Number)
    const [outH, outM] = timeOut.split(":").map(Number)

    const inMinutes = inH * 60 + inM
    const outMinutes = outH * 60 + outM
    const breakMinutes = 60

    let diff = outMinutes - inMinutes

    if (diff < 0) diff += 24 * 60

    diff -= breakMinutes

    if (diff < 0) diff = 0

    const hours = diff / 60

    return hours.toFixed(2)
}

export default function InternForm({
    internInputs,
    setInternInputs,
}: InternFormProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Intern DTR</h2>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Time In</th>
                            <th className="border p-2">Time Out</th>
                            <th className="border p-2">Hours Rendered</th>
                            <th className="border p-2">Supervisor Initial</th>
                        </tr>
                    </thead>

                    <tbody>
                        {internInputs.map((input, index) => (
                            <tr key={input.date} className="text-center">
                                {/* DATE */}
                                <td className="w-27.5 border p-2 font-semibold">
                                    {input.date}
                                </td>

                                {/* TIME IN */}
                                <td className="border p-2">
                                    <input
                                        type="time"
                                        value={input.timeIn}
                                        onChange={(e) => {
                                            const updated = [...internInputs]

                                            updated[index] = {
                                                ...updated[index],
                                                timeIn: e.target.value,
                                            }

                                            setInternInputs(updated)
                                        }}
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* TIME OUT */}
                                <td className="border p-2">
                                    <input
                                        type="time"
                                        value={input.timeOut}
                                        onChange={(e) => {
                                            const updated = [...internInputs]

                                            updated[index] = {
                                                ...updated[index],
                                                timeOut: e.target.value,
                                            }

                                            setInternInputs(updated)
                                        }}
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* HOURS RENDERED (read-only for now) */}
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        readOnly
                                        value={
                                            (input.hoursRendered =
                                                calculateHours(
                                                    input.timeIn,
                                                    input.timeOut,
                                                ))
                                        }
                                        onChange={() => console.log("first")}
                                        className="w-full border p-1 rounded bg-gray-100"
                                    />
                                </td>

                                {/* SUPERVISOR INITIAL */}
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        value={input.supervisorInitial}
                                        onChange={(e) => {
                                            const updated = [...internInputs]

                                            updated[index] = {
                                                ...updated[index],
                                                supervisorInitial:
                                                    e.target.value,
                                            }

                                            setInternInputs(updated)
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
