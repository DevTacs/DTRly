import {useState} from "react"

type DayRow = {
    day: number
    timeIn: string
    timeOut: string
    hoursRendered: string
    supervisorInitial: string
}

export default function InternForm({ranges}: {ranges: number[]}) {
    const [rows, setRows] = useState<DayRow[]>(
        ranges.map((day) => ({
            day,
            timeIn: "",
            timeOut: "",
            hoursRendered: "",
            supervisorInitial: "",
        })),
    )

    const handleChange = (
        index: number,
        field: keyof DayRow,
        value: string,
    ) => {
        const updated = [...rows]
        updated[index] = {
            ...updated[index],
            [field]: value,
        }
        setRows(updated)
    }

    return (
        <div className="space-y-6">
            {/* Title */}
            <h2 className="text-xl font-bold">Intern DTR</h2>

            {/* Rows */}
            <div className="space-y-3">
                {rows.map((_, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-5 gap-3 items-center border p-3 rounded-md bg-white shadow-sm">
                        {/* Day */}
                        <div className="font-semibold">Day {index + 1}</div>

                        {/* Time In */}
                        <input
                            type="time"
                            onChange={(e) =>
                                handleChange(index, "timeIn", e.target.value)
                            }
                            placeholder="Time In"
                            className="border p-1 rounded w-full"
                        />

                        {/* Time Out */}
                        <input
                            type="time"
                            onChange={(e) =>
                                handleChange(index, "timeOut", e.target.value)
                            }
                            placeholder="Time Out"
                            className="border p-1 rounded w-full"
                        />

                        {/* Hours Rendered */}
                        <input
                            type="text"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "hoursRendered",
                                    e.target.value,
                                )
                            }
                            placeholder="Hours"
                            className="border p-1 rounded w-full"
                        />

                        {/* Supervisor */}
                        <input
                            type="text"
                            onChange={(e) =>
                                handleChange(
                                    index,
                                    "supervisorInitial",
                                    e.target.value,
                                )
                            }
                            placeholder="Supervisor"
                            className="border p-1 rounded w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
