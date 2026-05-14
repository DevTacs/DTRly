import {useState} from "react"

type DayRow = {
    day: number
    timeIn: string
    timeOut: string
    hoursRendered: string
    supervisorInitial: string
}

export default function InternForm({ranges}: {ranges: number[]}) {
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
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* Time Out */}
                                <td className="border p-2">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* Hours Rendered */}
                                <td className="border p-2">
                                    <input
                                        type="text"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* Supervisor Initial */}
                                <td className="border p-2">
                                    <input
                                        type="text"
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
