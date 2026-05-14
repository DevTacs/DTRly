import type {InternRow} from "@/types/template-type"

type InternFormProps = {
    ranges: number[]
    internInputs: InternRow[]
    setInternInputs: React.Dispatch<React.SetStateAction<InternRow[]>>
}

export default function InternForm({
    ranges,
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
                        {ranges.map((_, index) => (
                            <tr key={index} className="text-center">
                                {/* Day */}
                                <td className="border p-2 font-semibold">
                                    {index + 1}
                                </td>

                                {/* Time In */}
                                <td className="border p-2">
                                    <input
                                        type="time"
                                        value={internInputs[index].timeIn}
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

                                {/* Time Out */}
                                <td className="border p-2">
                                    <input
                                        type="time"
                                        value={internInputs[index].timeOut}
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

                                {/* Hours Rendered */}
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        value={
                                            internInputs[index].hoursRendered
                                        }
                                        onChange={(e) => {
                                            const updated = [...internInputs]
                                            updated[index] = {
                                                ...updated[index],
                                                hoursRendered: e.target.value,
                                            }
                                            setInternInputs(updated)
                                        }}
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* Supervisor Initial */}
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        value={
                                            internInputs[index]
                                                .supervisorInitial
                                        }
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
